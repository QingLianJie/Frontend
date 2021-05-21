import {
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Spinner,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'
import Head from 'next/head'
import React from 'react'
import useSWR from 'swr'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Main from '../../components/Main'
import { MessageBox } from '../../components/Message'
import {
  ITimetableCellProps,
  ITimetableCourseData,
  ITimetableDayData,
  ITimetableWeekData,
} from '../../next-env'

const fetcher = (url: string) => fetch(url).then(res => res.json())

const TimetableCell = ({
  children,
  bold,
  rowStart,
  colStart,
  bg,
}: ITimetableCellProps) => {
  return (
    <GridItem
      borderRightWidth="1px"
      borderBottomWidth="1px"
      p="4"
      textAlign="center"
      fontWeight={bold ? 'bold' : 'normal'}
      colSpan={1}
      rowSpan={1}
      colStart={colStart || 'auto'}
      rowStart={rowStart || 'auto'}
      d="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      bg={bg}
    >
      {children}
    </GridItem>
  )
}

const TimetableHeader = () => {
  const weekdays = [
    '节次',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
    '星期日',
  ]

  return (
    <>
      {weekdays.map((weekday, index) => (
        <TimetableCell key={index} bold>
          {weekday}
        </TimetableCell>
      ))}
    </>
  )
}

const TimetableAside = () => {
  const sections = ['第一大节', '第二大节', '第三大节', '第四大节', '第五大节']
  return (
    <>
      {sections.map((section, index) => (
        <TimetableCell key={index} colStart={1} rowStart={index + 2} bold>
          {section}
        </TimetableCell>
      ))}
    </>
  )
}

const TimetableActions = () => {
  return (
    <Stack
      mt="8"
      align="center"
      justify="center"
      spacing={{ base: '4', sm: '6' }}
      direction={{ base: 'column', sm: 'row' }}
    >
      <Button w={{ base: 'full', sm: 'auto' }}>重新获取数据</Button>
      <Button w={{ base: 'full', sm: 'auto' }}>导出全部课表</Button>
      <Button w={{ base: 'full', sm: 'auto' }}>保存本周截图</Button>
    </Stack>
  )
}

const TimetableContainer = () => {
  const { data, error } = useSWR('/api/timetable', fetcher)
  const table = []

  if (error) {
    return (
      <MessageBox
        type="error"
        title="数据获取失败"
        description="可能是程序的 Bug 或者网络问题，可以稍后再试一试"
      />
    )
  }

  if (!data) {
    return (
      <Center flexDir="column" p="12">
        <Spinner
          m="4"
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        <Text m="4">数据加载中</Text>
      </Center>
    )
  } else {
    data.weeks.forEach((week: ITimetableWeekData) => {
      const weekArr = [[], [], [], [], []]

      week.days.forEach((day: ITimetableDayData) => {
        day.courses.forEach((course: ITimetableCourseData, index: number) => {
          weekArr[index][day.day - 1] = course
        })
      })
      table.push(weekArr)
    })
  }

  return (
    <Tabs variant="soft-rounded" w="full">
      <TabList w="full" p="2" overflowX="auto">
        <Flex mx="auto">
          {data.weeks.map((week: ITimetableWeekData, index: number) => (
            <Tab key={index}>{week.week}</Tab>
          ))}
        </Flex>
      </TabList>
      <TabPanels>
        {data.weeks.map((_: never, index: number) => (
          <TabPanel px="2" pt="6" pb="0" key={index}>
            <Grid
              templateRows="repeat(6, auto)"
              templateColumns="repeat(8, 1fr)"
              borderLeftWidth="1px"
              borderTopWidth="1px"
              rounded="md"
              overflowX="auto"
            >
              <TimetableHeader />
              <TimetableAside />
              {table[index].map((row: Array<ITimetableCourseData>) => {
                return row.map((col, index) => (
                  <React.Fragment key={index}>
                    {col.title ? (
                      <TimetableCell bg="blue.50">
                        <Text>{col.title}</Text>
                        <Text>{col.teacher}</Text>
                        <Text>{col.location}</Text>
                      </TimetableCell>
                    ) : (
                      <TimetableCell>{''}</TimetableCell>
                    )}
                  </React.Fragment>
                ))
              })}
            </Grid>
            <TimetableActions />
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  )
}

const TimetablePage = () => {
  return (
    <>
      <Head>
        <title>课表 | 清廉街</title>
      </Head>
      <Main>
        <Header title="课表" nav />
        <Container
          maxW="container.xl"
          d="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          flex="1"
        >
          <TimetableContainer />
        </Container>
        <Footer />
      </Main>
    </>
  )
}

export default TimetablePage

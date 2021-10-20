import { Grid, GridItem, Heading, Icon, Text, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import { RiTaskFill } from 'react-icons/ri'
import TaskList from '../components/app/task/List'
import TeachingEvaluation from '../components/app/task/modal/TeachingEvaluation'
import MainContainer from '../components/common/container/Main'

const TasksPage = () => {
  return (
    <>
      <Head>
        <title>任务 | 清廉街</title>
      </Head>
      <MainContainer title="任务" gray>
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={{ base: 0, md: 8 }}
          h="full"
          flex="1"
        >
          <GridItem colSpan={{ base: 3, md: 1 }} minW="0" h="full" py="4">
            <Heading
              fontWeight="600"
              fontSize="2xl"
              d="flex"
              alignItems="center"
              px="4"
              py="2"
            >
              <Icon
                as={RiTaskFill}
                me="4"
                w="7"
                h="7"
                color="yellow.500"
                _dark={{ color: 'yellow.400' }}
              />
              任务
            </Heading>
            <Text py="6" lineHeight="1.75" px="4">
              在这里可以查看自己执行过的任务，比如刷新课表、评教报备等，需要{' '}
              <strong>登录账号并且绑定 HEU 账号</strong> 后才能使用。
            </Text>
            <VStack spacing="3" py="2">
              <TeachingEvaluation />
            </VStack>
          </GridItem>
          <GridItem colSpan={{ base: 3, md: 2 }} minW="0" h="full">
            <TaskList />
          </GridItem>
        </Grid>
      </MainContainer>
    </>
  )
}

export default TasksPage

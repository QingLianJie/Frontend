import {
  Center,
  Grid,
  GridItem,
  HStack,
  Icon,
  Spacer,
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import {
  RiCheckboxCircleFill,
  RiCloseCircleFill,
  RiServerFill,
} from 'react-icons/ri'
import CardContainer from '../components/common/container/Card'
import MainContainer from '../components/common/container/Main'
import PageHeading from '../components/common/typography/PageHeading'
import useServiceStatus from '../hooks/useServiceStatus'

const ServiceStatusPage = () => {
  const { status, isLoading, isError } = useServiceStatus()

  return (
    <>
      <Head>
        <title>服务状态 | 清廉街</title>
      </Head>
      <MainContainer title="服务状态" gray>
        <PageHeading
          title={
            isLoading || isError || !status
              ? '加载不出来数据？来这里看看吧。'
              : `服务状态：${
                  Object.values(status.result).every(s => s)
                    ? '一切正常'
                    : '一些服务出现异常'
                } `
          }
          icon={RiServerFill}
          color={
            !status
              ? 'green'
              : Object.values(status.result).every(s => s)
              ? 'green'
              : 'red'
          }
        />

        {isError ? (
          <Center w="full" h="full" minH="50vh" pb="4">
            <Text color="gray.500" fontSize="lg">
              数据加载失败，应该是服务器挂了
            </Text>
          </Center>
        ) : isLoading || !status?.result ? (
          <Center w="full" h="full" minH="50vh" pb="4">
            <Spinner thickness="4px" color="pink.400" size="xl" />
          </Center>
        ) : (
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)',
            }}
            gap="4"
            py={{ base: 4, md: 8 }}
          >
            {Object.entries(status.result).map(([title, stat], index) => (
              <StatusItem
                key={index}
                title={title as keyof IServiceStatus['result']}
                status={stat}
              />
            ))}
          </Grid>
        )}
      </MainContainer>
    </>
  )
}

export default ServiceStatusPage

const serviceMap = {
  one: '统一认证',
  'cas-443': '统一认证（443）',
  pingjiao: '评教系统',
  edusys: '教务系统',
}

interface StatusItemProps {
  title: keyof IServiceStatus['result']
  status: boolean
}

const StatusItem = ({ title, status }: StatusItemProps) => {
  return (
    <GridItem>
      <CardContainer>
        <HStack align="start">
          <VStack align="start" spacing="0">
            <Text>{serviceMap[title]}</Text>
            <Text fontSize="sm" color="gray.500">
              {title}
            </Text>
          </VStack>
          <Spacer />
          <HStack spacing="2">
            <Icon
              as={status ? RiCheckboxCircleFill : RiCloseCircleFill}
              color={status ? 'green.500' : 'red.500'}
              w="5"
              h="5"
            />
            <Text fontWeight="600" color={status ? 'green.500' : 'red.500'}>
              {status ? '正常' : '故障'}
            </Text>
          </HStack>
        </HStack>
      </CardContainer>
    </GridItem>
  )
}

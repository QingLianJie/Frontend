import {
  Badge,
  Button,
  Center,
  Divider,
  HStack,
  Icon,
  Spinner,
  Text,
  ThemeTypings,
  Tooltip,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import ButtonLink from '../../../components/common/action/link/ButtonLink'
import useTask from '../../../hooks/useTask'
import useUser from '../../../hooks/useUser'
import { dateFormatter } from '../../../utils/formatter'
import CardContainer from '../../common/container/Card'

const statusTextMap: { [key in TaskStatus]: string } = {
  Fail: '失败',
  Success: '成功',
  Pending: '执行中',
  Never: '未执行',
}

const statusColorMap: { [key in TaskStatus]: ThemeTypings['colorSchemes'] } = {
  Fail: 'red',
  Success: 'green',
  Pending: 'blue',
  Never: 'gray',
}

const TaskList = () => {
  const { user, isError: isUserError, isLoading: isUserLoading } = useUser()
  const { tasks, isLoading, isError } = useTask()
  const [more, setMore] = useState(false)

  return (
    <>
      {isUserLoading || isLoading || !tasks ? (
        <Center w="full" flexDir="column" flex="1" h="full" minH="50vh">
          <Spinner thickness="4px" color="pink.400" size="xl" />
        </Center>
      ) : isUserError || !user ? (
        <VStack
          spacing="3"
          h="full"
          minH="50vh"
          justifyContent="center"
          rounded="md"
          borderWidth="1px"
          borderStyle="dashed"
        >
          <Text fontSize="2xl">想要使用任务？</Text>
          <Text textAlign="center">登录并且绑定 HEU 账号后才能使用任务</Text>
          <HStack spacing="3" py="4">
            <ButtonLink href="/login?from=/tasks" color="green">
              去登录
            </ButtonLink>
            <ButtonLink href="/signup?from=/tasks" color="blue">
              去注册
            </ButtonLink>
          </HStack>
        </VStack>
      ) : !user.heu_username ? (
        <VStack
          spacing="3"
          h="full"
          minH="50vh"
          justifyContent="center"
          rounded="md"
          borderWidth="1px"
          borderStyle="dashed"
        >
          <Text fontSize="2xl">想要使用任务？</Text>
          <Text textAlign="center">去个人主页绑定 HEU 账号后才能使用任务</Text>
          <HStack spacing="3" py="4">
            <ButtonLink href={`/@${user.username}`} color="blue">
              去个人主页绑定账号
            </ButtonLink>
          </HStack>
        </VStack>
      ) : (
        <CardContainer>
          <VStack
            divider={<Divider />}
            spacing="4"
            w="full"
            align="start"
            py="1.5"
          >
            {tasks.length === 0 ? (
              <Text>暂时没有任务，试试刷新课表或者获取成绩吧</Text>
            ) : (
              tasks.slice(0, more ? tasks.length : 8).map((task, index) => (
                <Wrap key={index} w="full" spacing="3">
                  <WrapItem d="flex" alignItems="center">
                    <Tooltip
                      hasArrow
                      fontSize="md"
                      px="3"
                      py="1.5"
                      rounded="md"
                      arrowSize={15}
                      gutter={15}
                      isDisabled={task.additional_info === ''}
                      placement="top"
                      label={
                        task.additional_info === ''
                          ? '暂无提示'
                          : task.additional_info
                      }
                    >
                      <Badge
                        colorScheme={statusColorMap[task.status]}
                        px="1.5"
                        py="0.5"
                        cursor="default"
                      >
                        {statusTextMap[task.status]}
                      </Badge>
                    </Tooltip>
                    <Text ms="3" fontSize="sm" fontWeight="600">
                      {dateFormatter({ date: task.created })}
                    </Text>
                  </WrapItem>
                  <WrapItem d="flex" alignItems="center">
                    <Text me="3">{task.title}</Text>
                    <Text color="gray.500" fontSize="sm">
                      {task.description}
                    </Text>
                  </WrapItem>
                </Wrap>
              ))
            )}

            <Button
              isFullWidth
              onClick={() => setMore(!more)}
              variant="link"
              size="sm"
            >
              {more ? '收起' : '查看全部'}
              {more ? (
                <Icon as={RiArrowDropUpLine} w="5" h="5" />
              ) : (
                <Icon as={RiArrowDropDownLine} w="5" h="5" />
              )}
            </Button>
          </VStack>
        </CardContainer>
      )}
    </>
  )
}

export default TaskList

import {
  Alert,
  AlertIcon,
  Badge,
  Center,
  Fade,
  Heading,
  HStack,
  Spinner,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import { RiBarChartBoxLine } from 'react-icons/ri'
import useScore from '../../../hooks/useScore'
import useUser from '../../../hooks/useUser'
import { dateFormatter } from '../../../utils/formatter'
import GroupContainer from '../../common/container/Group'

const ScoreQuery = () => {
  const { user } = useUser()
  const { scores, isLoading, isError } = useScore()
  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

  return (
    <GroupContainer title="我的成绩" icon={RiBarChartBoxLine}>
      {isError ? (
        <Alert status="error" rounded="md">
          <AlertIcon />
          获取数据失败，请稍后再试
        </Alert>
      ) : isLoading ? (
        <Center w="full" h="50vh">
          <Spinner thickness="4px" color="pink.400" size="xl" />
        </Center>
      ) : (
        <Fade in>
          <HStack spacing="4" px="4">
            <Heading as="h2" fontSize="2xl" fontWeight="600">
              {user && `${user.username} 的`}成绩单
            </Heading>
            <Badge d="flex" alignItems="center" fontSize="sm" px="2" py="1">
              {scores.heu_username}
            </Badge>
          </HStack>
        </Fade>
      )}
    </GroupContainer>
  )
}

export default ScoreQuery

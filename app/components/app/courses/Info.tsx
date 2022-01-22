import type { SystemProps } from '@chakra-ui/react'
import {
  Heading,
  HStack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { useLoaderData } from 'remix'
import { Card } from '~/components/common/Card'
import { CourseLoader } from '~/routes/courses/$id'
import { calcRate } from '~/utils/math'

export const Info = () => {
  const { info } = useLoaderData<CourseLoader>()

  return (
    <>
      <Card>
        <VStack w="full" p="6" align="flex-start" spacing="2">
          <Text fontSize="smd" color="gray.500" _dark={{ color: 'gray.400' }}>
            {info.id}
          </Text>

          <Heading as="h1" fontSize="xl" py="1" lineHeight="tall">
            {info.name}
          </Heading>

          <HStack w="full" spacing="4">
            <Text isTruncated>{info.type}</Text>
            <Text isTruncated>{info.test}</Text>
          </HStack>

          <Text isTruncated>{info.category}</Text>
        </VStack>
      </Card>
      <Card title="课程数据">
        <Wrap w="full" px="6" pb="6" pt="3" spacing="2">
          <Status name="学分" value={info.credit} />
          <Status name="学时" value={info.period} />
          <Status name="统计人数" value={`${info.statistics.total} 人`} />
          <Status
            name="优秀率"
            value={calcRate(info.statistics.excellent / info.statistics.total)}
            help={`${info.statistics.excellent} 人`}
            color="green.500"
            _dark={{ color: 'green.400' }}
          />
          <Status
            name="挂科率"
            value={calcRate(info.statistics.fail / info.statistics.total)}
            help={`${info.statistics.fail} 人`}
            color="red.500"
            _dark={{ color: 'red.400' }}
          />
        </Wrap>
      </Card>
    </>
  )
}

interface StatusProps extends SystemProps {
  name: string
  value: string | number
  help?: string
}

const Status = ({ name, value, help, ...props }: StatusProps) => (
  <WrapItem pr="4">
    <Stat>
      <StatLabel fontSize="smd">{name}</StatLabel>
      <StatNumber whiteSpace="nowrap" fontSize="xl" py="0.5" {...props}>
        {value}
      </StatNumber>
      {help && (
        <StatHelpText fontSize="smd" m="0">
          {help}
        </StatHelpText>
      )}
    </Stat>
  </WrapItem>
)

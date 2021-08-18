import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Checkbox,
  HStack,
  Icon,
  Spacer,
  Text,
  VisuallyHidden,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import { ChangeEvent, ReactNode } from 'react'
import { RiBarChartBoxLine, RiFlagLine, RiLineChartLine } from 'react-icons/ri'

interface ScoreListItemProps {
  title: string
  count: number
  credit: number
  average: number
  handleAllCheck: (e: ChangeEvent) => void
  children: ReactNode | ReactNode[]
}

const ScoreListItem = ({
  title,
  count = 0,
  credit = 0,
  average = 0,
  handleAllCheck,
  children,
}: ScoreListItemProps) => {
  return (
    <AccordionItem
      bg="white"
      borderLeftWidth="1px"
      borderRightWidth="1px"
      _first={{ roundedTop: 'md' }}
      _last={{ roundedBottom: 'md', borderBottomWidth: '1px' }}
      _dark={{
        bg: 'gray.800',
      }}
    >
      <AccordionButton
        pos="relative"
        _expanded={{ fontWeight: '600' }}
        zIndex="10"
      >
        <Wrap spacing="0" w="full" py="1">
          <WrapItem pe="2">
            <Text
              as="span"
              textAlign="left"
              fontSize="lg"
              px="2"
              py="1"
              d="flex"
              alignItems="center"
            >
              <Checkbox me="6" onChange={handleAllCheck}>
                <VisuallyHidden>选中</VisuallyHidden>
              </Checkbox>
              {title}
            </Text>
          </WrapItem>

          <WrapItem alignItems="center" p="2">
            <HStack spacing="4">
              <Text color="gray.500" fontSize="sm" d="flex" alignItems="center">
                <Icon as={RiBarChartBoxLine} w="4" h="4" me="1.5" />
                {count} 个成绩
              </Text>

              <Text color="gray.500" fontSize="sm" d="flex" alignItems="center">
                <Icon as={RiFlagLine} w="4" h="4" me="1.5" />
                {credit} 学分
              </Text>
            </HStack>
          </WrapItem>

          <WrapItem alignItems="center" p="2">
            <HStack spacing="4">
              <Text color="gray.500" fontSize="sm" d="flex" alignItems="center">
                <Icon as={RiLineChartLine} w="4" h="4" me="1.5" />
                加权平均分 {average.toFixed(2)}
              </Text>
            </HStack>
          </WrapItem>
          <Spacer />
          <WrapItem alignItems="center" p="2">
            <AccordionIcon />
          </WrapItem>
        </Wrap>
      </AccordionButton>
      <AccordionPanel p="0">{children}</AccordionPanel>
    </AccordionItem>
  )
}

export default ScoreListItem

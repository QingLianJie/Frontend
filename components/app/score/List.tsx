import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Divider,
  HStack,
  Icon,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { RiFlagLine, RiTimeLine } from 'react-icons/ri'
import useScore from '../../../hooks/useScore'
import ListLink from '../../common/action/link/ListLink'
import GroupContainer from '../../common/container/Group'

const ScoreList = () => {
  const { scores, isLoading, isError } = useScore()

  return (
    <GroupContainer>
      {isLoading ? null : isError ? null : (
        <Accordion allowMultiple allowToggle>
          {Object.entries(scores.scores)
            .reverse()
            .map(([term, data], index) => (
              <ListItem key={index} title={term} count={data.length}>
                <VStack w="full" spacing="0" divider={<Divider />}>
                  {data.map((score, index) => (
                    <ListLink key={index} href={`/courses/${score.course_id}`}>
                      <Wrap
                        w="full"
                        spacing="2"
                        align={{ base: 'flex-start', lg: 'center' }}
                        direction={{ base: 'column', lg: 'row' }}
                      >
                        <WrapItem pe="2">
                          <Text color="gray.500" fontSize="sm">
                            {score.course_id}
                          </Text>
                        </WrapItem>

                        <WrapItem pe="2">
                          <Text>{score.name}</Text>
                        </WrapItem>

                        <WrapItem pe="2" ms="auto">
                          <HStack spacing="4">
                            <Text color="gray.500" fontSize="sm">
                              {score.attributes}
                            </Text>

                            <Text color="gray.500" fontSize="sm">
                              {score.assessment_method}
                            </Text>

                            <Text
                              color="gray.500"
                              fontSize="sm"
                              d="flex"
                              alignItems="center"
                            >
                              <Icon as={RiFlagLine} w="4" h="4" me="1.5" />
                              {score.credit} 学分
                            </Text>

                            <Text
                              color="gray.500"
                              fontSize="sm"
                              d="flex"
                              alignItems="center"
                            >
                              <Icon as={RiTimeLine} w="4" h="4" me="1.5" />
                              {score.total_time} 学时
                            </Text>
                          </HStack>
                        </WrapItem>

                        <WrapItem flex="1" justifyContent="flex-end">
                          <HStack>
                            <Text
                              fontWeight="bold"
                              color={
                                score.grade === '---'
                                  ? 'yellow.500'
                                  : score.grade === '不及格' ||
                                    Number(score.grade) < 60
                                  ? 'red.500'
                                  : score.grade === '优秀' ||
                                    Number(score.grade) >= 90
                                  ? 'green.500'
                                  : 'inherit'
                              }
                            >
                              {score.grade === '---'
                                ? score.grade_mark
                                : score.grade}
                            </Text>
                          </HStack>
                        </WrapItem>
                      </Wrap>
                    </ListLink>
                  ))}
                </VStack>
              </ListItem>
            ))}
        </Accordion>
      )}
    </GroupContainer>
  )
}

export default ScoreList

interface ListItemProps {
  title: string
  count: number

  children: ReactNode | ReactNode[]
}

const ListItem = ({ title, count, children }: ListItemProps) => {
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
      <AccordionButton _expanded={{ fontWeight: '600' }}>
        <Text textAlign="left" fontSize="lg" p="2" d="flex" alignItems="center">
          {title}
        </Text>
        <Badge ms="auto" me="3" px="1.5" py="0.5" color="gray.500">
          {count} 个课程
        </Badge>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel p="0">{children}</AccordionPanel>
    </AccordionItem>
  )
}

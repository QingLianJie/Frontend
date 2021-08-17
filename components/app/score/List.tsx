import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Checkbox,
  Divider,
  HStack,
  Icon,
  Text,
  VisuallyHidden,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import _ from 'lodash'
import { ChangeEvent, ReactNode, useEffect, useState } from 'react'
import { RiFlagLine, RiTimeLine } from 'react-icons/ri'
import useScore from '../../../hooks/useScore'
import ListLink from '../../common/action/link/ListLink'
import GroupContainer from '../../common/container/Group'

const ScoreList = () => {
  const { scores, isLoading, isError } = useScore()
  const [checkList, setCheckList] = useState<number[]>([])

  useEffect(() => {
    console.log(checkList)
  }, [checkList])

  const handleCheck = (e: ChangeEvent, index: number) => {
    const target = e.target as HTMLInputElement
    if (target) {
      const arr = checkList
      if (target.checked) {
        setCheckList([...arr, index])
      } else {
        _.remove(arr, (i: number) => i === index)
        setCheckList([...arr])
      }
    }
  }

  const handleAllCheck = (e: ChangeEvent, index: number[]) => {
    const target = e.target as HTMLInputElement
    if (target) {
      const arr = checkList
      if (target.checked) {
        setCheckList(_.union(arr, index))
      } else {
        _.remove(arr, (i: number) => index.includes(i))
        setCheckList([...arr])
      }
    }
  }

  return (
    <GroupContainer>
      {isLoading ? null : isError ? null : (
        <Accordion allowMultiple allowToggle>
          {Object.entries(scores.scores)
            .reverse()
            .map(([term, data], index) => (
              <ListItem
                key={index}
                title={term}
                count={data.length}
                handleAllCheck={e =>
                  handleAllCheck(
                    e,
                    data.map(d => d.index)
                  )
                }
              >
                <VStack w="full" spacing="0" divider={<Divider />}>
                  {data.map((score, index) => (
                    <HStack key={index} w="full" spacing="1">
                      <Checkbox
                        ms="6"
                        isChecked={checkList.includes(score.index)}
                        onChange={e => handleCheck(e, score.index)}
                      >
                        <VisuallyHidden>选中</VisuallyHidden>
                      </Checkbox>
                      <ListLink href={`/courses/${score.course_id}`}>
                        <Wrap
                          w="full"
                          spacing="2"
                          align={{ base: 'flex-start', lg: 'center' }}
                          direction={{ base: 'column', lg: 'row' }}
                          ms="-1"
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
                            <Text
                              fontWeight="bold"
                              whiteSpace="nowrap"
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
                          </WrapItem>
                        </Wrap>
                      </ListLink>
                    </HStack>
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
  handleAllCheck: (e: ChangeEvent) => void
  children: ReactNode | ReactNode[]
}

const ListItem = ({
  title,
  count,
  handleAllCheck,
  children,
}: ListItemProps) => {
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
        <Text
          as="span"
          textAlign="left"
          fontSize="lg"
          p="2"
          d="flex"
          alignItems="center"
        >
          <Checkbox me="6" onChange={handleAllCheck}>
            <VisuallyHidden>选中</VisuallyHidden>
          </Checkbox>
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

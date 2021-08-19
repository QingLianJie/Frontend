import {
  Accordion,
  Checkbox,
  Divider,
  Flex,
  HStack,
  Icon,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import _ from 'lodash'
import { ChangeEvent, useContext } from 'react'
import { RiFlagLine, RiTimeLine } from 'react-icons/ri'
import useScore from '../../../../hooks/useScore'
import { ScoresContext } from '../../../../pages/scores'
import ListLink from '../../../common/action/link/ListLink'
import GroupContainer from '../../../common/container/Group'
import ScoreListItem from './Item'

const gradeMap = {
  不及格: 30,
  及格: 65,
  中等: 75,
  良好: 85,
  优秀: 95,
}

const ScoreList = () => {
  const { scores, isLoading, isError } = useScore()
  const context = useContext(ScoresContext)

  const handleCheck = (e: ChangeEvent, index: number) => {
    const target = e.target as HTMLInputElement
    if (target) {
      const arr = context.checkList
      if (target.checked) {
        context.setCheckList([...arr, index])
      } else {
        _.remove(arr, (i: number) => i === index)
        context.setCheckList([...arr])
      }
    }
  }

  const handleAllCheck = (e: ChangeEvent, index: number[]) => {
    const target = e.target as HTMLInputElement
    if (target) {
      const arr = context.checkList
      if (target.checked) {
        context.setCheckList(_.union(arr, index))
      } else {
        _.remove(arr, (i: number) => index.includes(i))
        context.setCheckList([...arr])
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
              <ScoreListItem
                key={index}
                title={term}
                count={data.length}
                credit={data.reduce(
                  (pre, cur) => Number(cur?.credit || 0) + pre,
                  0
                )}
                average={
                  data.reduce((pre, cur) => {
                    const grade = cur.grade
                    if (!isNaN(Number(grade))) {
                      return Number(grade) * Number(cur.credit) + pre
                    } else {
                      return (
                        (gradeMap[grade as GradeMap] || 0) *
                          Number(cur.credit) +
                        pre
                      )
                    }
                  }, 0) /
                  data.reduce((pre, cur) => Number(cur?.credit || 0) + pre, 0)
                }
                calc={context.calcMode}
                check={data.every(d => context.checkList.includes(d.index))}
                some={data.some(d => context.checkList.includes(d.index))}
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
                      {context.calcMode ? (
                        <Checkbox
                          w="full"
                          py="4"
                          px="5"
                          bg="white"
                          spacing="7"
                          _dark={{
                            bg: 'gray.800',
                          }}
                          _hover={{
                            bg: 'gray.100',
                            _dark: {
                              bg: 'gray.900',
                            },
                          }}
                          d="flex"
                          isChecked={context.checkList.includes(score.index)}
                          onChange={e => handleCheck(e, score.index)}
                          sx={{
                            '.chakra-checkbox__label': {
                              width: '100%',
                            },
                          }}
                        >
                          <Flex w="full" transition="all 0.2s">
                            <ScoreCourseMeta score={score} calcMode={true} />
                          </Flex>
                        </Checkbox>
                      ) : (
                        <ListLink href={`/courses/${score.course_id}`}>
                          <ScoreCourseMeta score={score} calcMode={false} />
                        </ListLink>
                      )}
                    </HStack>
                  ))}
                </VStack>
              </ScoreListItem>
            ))}
        </Accordion>
      )}
    </GroupContainer>
  )
}

export default ScoreList

interface ScoreCourseMetaProps {
  score: IScore
  calcMode: boolean
}

const ScoreCourseMeta = ({ score, calcMode }: ScoreCourseMetaProps) => {
  return (
    <Wrap
      w="full"
      spacing="2"
      align={{ base: 'flex-start', lg: 'center' }}
      direction={{ base: 'column', lg: 'row' }}
      ms={calcMode ? -2 : 0}
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
        </HStack>
      </WrapItem>

      <WrapItem pe="2">
        <HStack spacing="4">
          <Text color="gray.500" fontSize="sm" d="flex" alignItems="center">
            <Icon as={RiFlagLine} w="4" h="4" me="1.5" />
            {score.credit} 学分
          </Text>

          <Text color="gray.500" fontSize="sm" d="flex" alignItems="center">
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
              : score.grade === '不及格' || Number(score.grade) < 60
              ? 'red.500'
              : score.grade === '优秀' || Number(score.grade) >= 90
              ? 'green.500'
              : 'inherit'
          }
        >
          {score.grade === '---' ? score.grade_mark : score.grade}
        </Text>
      </WrapItem>
    </Wrap>
  )
}

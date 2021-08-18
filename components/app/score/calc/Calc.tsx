import { Box, Text, Wrap } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { RiCalculatorLine } from 'react-icons/ri'
import useScore from '../../../../hooks/useScore'
import { ScoresContext } from '../../../../pages/scores'
import CardContainer from '../../../common/container/Card'
import GroupContainer from '../../../common/container/Group'
import ScoreStat from './Stat'

const gradeMap = {
  不及格: 30,
  及格: 65,
  中等: 75,
  良好: 85,
  优秀: 95,
}

const ScoreCalc = () => {
  const context = useContext(ScoresContext)
  const { scores } = useScore()
  const [credit, setCredit] = useState(0)
  const [average, setAverage] = useState(0)

  useEffect(() => {
    const totalCredit = context.checkList.reduce(
      (pre, cur) =>
        Number(scores.lists.find(item => item.index === cur)?.credit || 0) +
        pre,
      0
    )

    const totalScore = context.checkList.reduce((pre, cur) => {
      const score = scores.lists.find(item => item.index === cur)

      if (score) {
        const grade = score.grade
        if (!isNaN(Number(grade))) {
          return Number(grade) * Number(score.credit) + pre
        } else {
          return (gradeMap[grade as GradeMap] || 0) * Number(score.credit) + pre
        }
      }
      return pre
    }, 0)

    setCredit(totalCredit)
    setAverage(totalScore / totalCredit || 0)
  }, [context.checkList, scores.lists])

  return (
    <GroupContainer title="成绩计算" icon={RiCalculatorLine}>
      <CardContainer>
        {scores && (
          <Wrap spacing="4" py="1">
            <ScoreStat
              label="选择的成绩"
              number={`${context.checkList.length} 个`}
            />
            <ScoreStat label="学分总数" number={`${credit} 分`} />
            <ScoreStat label="加权平均分" number={`${average.toFixed(2)} 分`} />
          </Wrap>
        )}

        <Text pt="2" fontSize="sm" color="gray.500">
          # 在成绩列表选择成绩来计算分数
        </Text>
      </CardContainer>
      <Box as="ul" p="2" ps="6" lineHeight="1.75">
        <Text as="li" pt="2" fontSize="sm" color="gray.500" ps="1">
          加权平均分计算规则： 分数 × 学分数 ÷ 学分总数
        </Text>
        <Text as="li" pt="2" fontSize="sm" color="gray.500" ps="1">
          对于按等级评分的课程，优秀 = 95，良好 = 85，中等 = 75，及格 =
          65，不及格 = 30，其他情况（如缺考）均为 0。
        </Text>
        <Text as="li" pt="2" fontSize="sm" color="gray.500" ps="1">
          补考、缺考等的成绩仍会出现在成绩列表中，在计算时需要手动剔除无效成绩。
        </Text>
      </Box>
    </GroupContainer>
  )
}

export default ScoreCalc

import {
  Badge,
  Heading,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import useCourse from '../../../hooks/useCourse'
import GroupContainer from '../../common/container/Group'

interface CourseDashboardProps {
  id: string
}

type Rate = {
  good: { rate: string; count: null | number }
  bad: { rate: string; count: null | number }
}

const CourseDashboard = ({ id }: CourseDashboardProps) => {
  const { courseInfo, isLoading, isError } = useCourse(id)
  const defaultRate = useMemo<Rate>(
    () => ({
      good: { rate: '无数据', count: null },
      bad: { rate: '无数据', count: null },
    }),
    []
  )
  const [rate, setRate] = useState<Rate>(defaultRate)

  useEffect(() => {
    const calcRate = () => {
      if (!courseInfo) return defaultRate

      const type = courseInfo.assessment_method
      const data = courseInfo.statistics.all
      const total = data.total

      let good = 0
      let bad = 0

      if (type === '考试') {
        for (const [score, count] of Object.entries(data.exam)) {
          console.log(score, count)

          if (Number(score) < 60) {
            bad += count
          } else if (Number(score) >= 90) {
            good += count
          }
        }
      } else if (type === '考查') {
        good = data.test['优秀'] || 0
        bad = data.test['不及格'] || 0
      }

      return {
        good: { rate: ((good / total) * 100).toFixed(2) + '%', count: good },
        bad: { rate: ((bad / total) * 100).toFixed(2) + '%', count: bad },
      }
    }

    setRate(calcRate())
  }, [courseInfo, defaultRate])

  return (
    <>
      <Head>
        <title>
          {courseInfo ? `${decodeURIComponent(courseInfo.name)}` : `课程`} -{' '}
          清廉街
        </title>
      </Head>
      <GroupContainer>
        {isError ? null : isLoading ? null : (
          <VStack align="start" spacing="4">
            <Wrap spacing="3" alignItems="center" pb="4">
              <Heading as="h2" fontSize="2xl" fontWeight="600">
                {courseInfo.name}
              </Heading>
              <Badge d="flex" alignItems="center" fontSize="sm" px="2" py="1">
                {courseInfo.course_id}
              </Badge>
            </Wrap>

            <Wrap spacing="4">
              <CourseStat
                label="课程信息"
                number={courseInfo.attributes || '无数据'}
              />
              <CourseStat label="学分" number={courseInfo.credit || '无数据'} />
              <CourseStat
                label="学时"
                number={courseInfo.total_time || '无数据'}
              />
              <CourseStat
                label="考核方式"
                number={courseInfo.assessment_method || '无数据'}
              />
              <CourseStat
                label="课程类型"
                number={courseInfo.kind || '无数据'}
              />
            </Wrap>

            <Wrap spacing="4">
              <CourseStat
                label="挂科率"
                number={rate.bad.rate}
                help={`${rate.bad.count} 人`}
              />
              <CourseStat
                label="优秀率"
                number={rate.good.rate}
                help={`${rate.good.count} 人`}
              />
              <CourseStat
                label="统计人数"
                number={`${courseInfo.statistics.all.total} 人`}
              />
            </Wrap>
          </VStack>
        )}
      </GroupContainer>
    </>
  )
}

export default CourseDashboard

interface CourseStatProps {
  label: string
  number: string
  help?: string
}

const CourseStat = ({ label, number, help }: CourseStatProps) => {
  return (
    <WrapItem>
      <Stat me="4">
        <StatLabel whiteSpace="nowrap">{label}</StatLabel>
        <StatNumber fontSize="xl" whiteSpace="nowrap" fontWeight="600">
          {number}
        </StatNumber>
        {help && <StatHelpText>{help}</StatHelpText>}
      </Stat>
    </WrapItem>
  )
}

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
import { useEffect, useState } from 'react'
import useCourse from '../../../hooks/useCourse'
import { calcRate } from '../../../utils/calc/course-statistics'
import BreadcrumbLink from '../../common/action/link/BreadcrumbLink'
import GroupContainer from '../../common/container/Group'

interface CourseDashboardProps {
  id: string
}

const CourseDashboard = ({ id }: CourseDashboardProps) => {
  const { courseInfo, isLoading, isError } = useCourse(id)
  const [rate, setRate] = useState<CourseInfoRate | null>(null)
  useEffect(() => {
    setRate(calcRate(courseInfo))
  }, [courseInfo])

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
            <BreadcrumbLink href={`/courses`}>课程列表</BreadcrumbLink>
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
            {rate && (
              <Wrap spacing="4">
                <CourseStat
                  label="挂科率"
                  number={rate.fail.rate || '无数据'}
                  help={rate.fail.count ? `${rate.fail.count} 人` : undefined}
                />
                <CourseStat
                  label="优秀率"
                  number={rate.excellent.rate || '无数据'}
                  help={
                    rate.excellent.count
                      ? `${rate.excellent.count} 人`
                      : undefined
                  }
                />
                <CourseStat
                  label="统计人数"
                  number={`${courseInfo.statistics.all.total} 人`}
                />
              </Wrap>
            )}
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

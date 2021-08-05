import {
  Alert,
  AlertIcon,
  Badge,
  Center,
  Fade,
  Heading,
  Spinner,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { RiBookOpenLine } from 'react-icons/ri'
import useCourse from '../../../hooks/useCourse'
import { calcRate } from '../../../utils/calc/course-statistics'
import GroupContainer from '../../common/container/Group'
import CourseStat from '../widget/course/dashboard/Stat'

interface CourseInfoProps {
  id: string
}

const CourseInfo = ({ id }: CourseInfoProps) => {
  const { courseInfo, isLoading, isError } = useCourse(id)
  const [rate, setRate] = useState<CourseInfoRate | null>(null)

  useEffect(() => {
    if (courseInfo) {
      setRate(calcRate(courseInfo))
    }
  }, [courseInfo])

  return (
    <>
      <Head>
        <title>
          {courseInfo ? `${decodeURIComponent(courseInfo.name)}` : `课程`} -{' '}
          清廉街
        </title>
      </Head>
      <GroupContainer title="课程详情" icon={RiBookOpenLine}>
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
            <VStack align="start" spacing="4" px="4">
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
                <CourseStat
                  label="学分"
                  number={courseInfo.credit || '无数据'}
                />
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
                    label="总挂科率"
                    number={rate.fail.rate || '无数据'}
                    help={rate.fail.count ? `${rate.fail.count} 人` : undefined}
                  />
                  <CourseStat
                    label="总优秀率"
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
                  {courseInfo.my_scores?.map((score, index) => (
                    <CourseStat
                      label="我的成绩"
                      number={score || '无数据'}
                      key={index}
                    />
                  ))}
                </Wrap>
              )}
            </VStack>
          </Fade>
        )}
      </GroupContainer>
    </>
  )
}

export default CourseInfo

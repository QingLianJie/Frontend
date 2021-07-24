import {
  Box,
  Heading,
  HStack,
  Icon,
  Select,
  Spacer,
  useTheme,
} from '@chakra-ui/react'
import { Axis, Chart, Interval, Tooltip } from 'bizcharts'
import { useEffect, useState } from 'react'
import { RiBarChartBoxLine } from 'react-icons/ri'
import useCourse from '../../../hooks/useCourse'
import { calcChartData } from '../../../utils/calc/course-chart'
import CardContainer from '../../common/container/Card'
import GroupContainer from '../../common/container/Group'

interface CourseChartProps {
  id: string
}

const CourseChart = ({ id }: CourseChartProps) => {
  const theme = useTheme()
  const { courseInfo, isLoading, isError } = useCourse(id)
  const [chartData, setChartData] = useState<CourseStatChartData[]>([])

  useEffect(() => {
    if (courseInfo) {
      setChartData(calcChartData(courseInfo, 'all'))
    }
  }, [courseInfo])

  return (
    <>
      <GroupContainer>
        {isError ? null : isLoading ? null : (
          <CardContainer>
            <HStack spacing="4">
              <Icon as={RiBarChartBoxLine} w="5" h="5" />
              <Heading as="p" fontSize="lg" fontWeight="600">
                成绩分布图
              </Heading>
              <Spacer />

              <Select placeholder="所有时间" maxW="44">
                {courseInfo &&
                  Object.keys(courseInfo.statistics).map((key, index) =>
                    key === 'all' ? null : (
                      <option key={index} value={key}>
                        {key}
                      </option>
                    )
                  )}
              </Select>
            </HStack>
            <Spacer h="4" />
            <Box p="4" w="full">
              {chartData && (
                <Chart
                  height={400}
                  autoFit
                  data={chartData}
                  interactions={['active-region']}
                  scale={{
                    score: { alias: '成绩', tickCount: 10 },
                    count: { alias: '人数', tickCount: 6 },
                  }}
                >
                  <Axis
                    name="count"
                    title
                    label={{
                      offset: 16,
                      style: { fontSize: 14, fontFamily: 'Inter' },
                    }}
                    grid={{
                      line: {
                        type: 'line',
                        style: { stroke: '#d9d9d9', lineWidth: 0.5 },
                      },
                    }}
                  />
                  <Axis
                    name="score"
                    title
                    label={{
                      offset: 16,
                      style: { fontSize: 14, fontFamily: theme.fonts.body },
                    }}
                    tickLine={null}
                  />
                  <Interval position="score*count" />
                  <Tooltip
                    shared
                    domStyles={{
                      'g2-tooltip': {
                        fontFamily: theme.fonts.body,
                        fontSize: '14',
                        lineHeight: '1',
                        boxShadow: 'none',
                        padding: '0.25rem 1rem',
                      },
                      'g2-tooltip-marker': { display: 'none' },
                      'g2-tooltip-title': { fontWeight: '600' },
                      'g2-tooltip-value': { marginLeft: '0.5rem' },
                    }}
                  />
                </Chart>
              )}
            </Box>
          </CardContainer>
        )}
      </GroupContainer>
    </>
  )
}

export default CourseChart

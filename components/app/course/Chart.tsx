import {
  Box,
  Fade,
  Heading,
  Icon,
  Select,
  Spacer,
  Text,
  useColorMode,
  useTheme,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { Axis, Chart, Interval, Tooltip } from 'bizcharts'
import { ChangeEvent, useEffect, useState } from 'react'
import { RiBarChartBoxLine } from 'react-icons/ri'
import useCourse from '../../../hooks/useCourse'
import { calcChartData } from '../../../utils/calc/course-chart'
import { calcCourseMember } from '../../../utils/calc/course-member'
import CardContainer from '../../common/container/Card'

interface CourseChartProps {
  id: string
  type: 'exam' | 'test'
  double?: boolean
}

const CourseChart = ({ id, type, double }: CourseChartProps) => {
  const theme = useTheme()
  const { colorMode } = useColorMode()
  const { courseInfo, isLoading, isError } = useCourse(id)
  const [chartData, setChartData] = useState<CourseStatChartData[]>([])
  const [select, setSelect] = useState('')

  useEffect(() => {
    if (courseInfo) {
      setChartData(calcChartData(courseInfo, type, 'all'))
    }
  }, [courseInfo])

  const handleSelectChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setSelect(target.value)
    setChartData(calcChartData(courseInfo, type, target.value || 'all'))
  }

  return (
    <>
      {isError ? null : isLoading ? null : (
        <Fade in>
          <CardContainer>
            <Wrap spacing="4" justify="space-between">
              <WrapItem alignItems="center" py="1">
                <Icon as={RiBarChartBoxLine} w="5" h="5" ms="1" me="3" />
                <Heading as="p" fontSize="lg" fontWeight="600">
                  成绩分布图
                  {double && <>（{type === 'exam' ? '分数' : '等级'}）</>}
                </Heading>
              </WrapItem>

              <WrapItem>
                <Select
                  placeholder="所有时间"
                  maxW="44"
                  onChange={handleSelectChange}
                >
                  {courseInfo &&
                    Object.keys(courseInfo.statistics)
                      .reverse()
                      .map((key, index) =>
                        key === 'all' ? null : (
                          <option key={index} value={key}>
                            {key === '腐败街' ? '腐败街数据' : key}
                          </option>
                        )
                      )}
                </Select>
              </WrapItem>
            </Wrap>
            <Spacer h="6" />
            <Box px={{ base: 0, md: 4 }} py={{ base: 2, md: 4 }} w="full">
              {chartData && (
                <>
                  <Chart
                    height={400}
                    autoFit
                    data={chartData}
                    interactions={['active-region']}
                    scale={{
                      score: { alias: '成绩', tickCount: 10 },
                      count: { alias: '人数', tickCount: 6 },
                      rate: { alias: '占比', tickCount: 6 },
                    }}
                  >
                    <Axis
                      name="count"
                      label={{
                        offset: 16,
                        style: {
                          fontSize: 14,
                          fontFamily: 'Inter',
                          fill: '#718096',
                        },
                      }}
                      grid={{
                        line: {
                          type: 'line',
                          style: { stroke: '#71809622' },
                        },
                      }}
                    />
                    <Axis
                      name="rate"
                      label={{
                        offset: 16,
                        style: {
                          fontSize: 14,
                          fontFamily: 'Inter',
                          fill: '#718096',
                        },
                      }}
                      grid={{
                        line: {
                          type: 'line',
                          style: { stroke: '#71809622' },
                        },
                      }}
                    />
                    <Axis
                      name="score"
                      label={{
                        offset: 16,
                        style: {
                          fontSize: 14,
                          fontFamily: theme.fonts.body,
                          fill: '#718096',
                        },
                      }}
                      tickLine={null}
                      line={{
                        style: { stroke: '#71809666' },
                      }}
                    />
                    <Interval
                      position="score*count"
                      color={colorMode === 'dark' ? '#FC8181' : '#ed5252'}
                    />
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
                  <Text
                    w="full"
                    pt="7"
                    pb="1"
                    textAlign="center"
                    color="gray.500"
                  >{`${
                    select === '腐败街' ? '腐败街数据' : select || '所有时间'
                  } 的成绩分布图，统计人数 ${
                   calcCourseMember(courseInfo,type, select || 'all')
                  } 人`}</Text>
                </>
              )}
            </Box>
          </CardContainer>
        </Fade>
      )}
    </>
  )
}

export default CourseChart

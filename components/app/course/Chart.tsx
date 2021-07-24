import { RiBarChartBoxLine } from 'react-icons/ri'
import useCourse from '../../../hooks/useCourse'
import CardContainer from '../../common/container/Card'
import GroupContainer from '../../common/container/Group'

interface CourseChartProps {
  id: string
}

const CourseChart = ({ id }: CourseChartProps) => {
  const { courseInfo, isLoading, isError } = useCourse(id)

  return (
    <>
      <GroupContainer title="成绩分布图" icon={RiBarChartBoxLine}>
        {isError ? null : isLoading ? null : <CardContainer>123</CardContainer>}
      </GroupContainer>
    </>
  )
}

export default CourseChart

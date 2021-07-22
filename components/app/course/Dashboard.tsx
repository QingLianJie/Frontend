import Head from 'next/head'
import { RiBookletLine } from 'react-icons/ri'
import useCourse from '../../../hooks/useCourse'
import GroupContainer from '../../common/container/Group'

interface CourseDashboardProps {
  id: string
}

const CourseDashboard = ({ id }: CourseDashboardProps) => {
  const { courseInfo, isLoading, isError } = useCourse(id)
  return (
    <>
      <Head>
        <title>
          {courseInfo ? `${decodeURIComponent(courseInfo.name)}` : `课程`} -{' '}
          清廉街
        </title>
      </Head>
      <GroupContainer
        title={isLoading || isError ? '课程' : courseInfo.name}
        icon={RiBookletLine}
      >
        1
      </GroupContainer>
    </>
  )
}

export default CourseDashboard

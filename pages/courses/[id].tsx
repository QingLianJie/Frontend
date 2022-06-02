import { Container } from '@mui/material'
import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Footer, Header } from '../../components/base/Layout'
import { Meta } from '../../components/Container'
import { Course as CourseType } from '../../types'

interface CourseProps {
  course?: CourseType
}

const Course: NextPage<CourseProps> = ({ course }: CourseProps) => {
  const name = course?.name || '课程'

  const router = useRouter()
  useEffect(() => {
    if (!course) router.replace('/404')
  }, [course])

  return (
    <Container
      maxWidth="lg"
      sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <Meta title={`${name} - 清廉街`} />
      <Header title={name} />
      <Footer />
    </Container>
  )
}

export default Course

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query
  try {
    const course = (await import(`../api/courses/${id}.json`)).default
    return { props: { course } }
  } catch (error) {
    console.log(error)
    return { props: {} }
  }
}

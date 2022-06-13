import { Container } from '@mui/material'
import { type GetServerSideProps, type NextPage } from 'next'
import { Footer, Header } from '../components/base/Layout'
import { Meta } from '../components/Container'
import { Portal } from '../components/university/Portal'
import { type Note } from '../types'

interface ScheduleProps {
  note: Note
}

const Schedule: NextPage<ScheduleProps> = ({ note }: ScheduleProps) => (
  <Container
    maxWidth="lg"
    sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
  >
    <Meta title="课表 - 清廉街" />
    <Header title="课表" />
    <Portal note={note} />
    <Footer />
  </Container>
)

export default Schedule

export const getServerSideProps: GetServerSideProps = async () => {
  const note = (await import('./api/note.json')).default as Note

  return { props: { note } }
}

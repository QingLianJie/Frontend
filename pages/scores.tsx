import { Container } from '@mui/material'
import { type GetServerSideProps, type NextPage } from 'next'
import { Footer, Header } from '../components/base/Layout'
import { Meta } from '../components/Container'
import { Portal } from '../components/university/Portal'
import { type Note } from '../types'

interface ScoresProps {
  note: Note
}

const Scores: NextPage<ScoresProps> = ({ note }: ScoresProps) => (
  <Container
    maxWidth="lg"
    sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
  >
    <Meta title="成绩 - 清廉街" />
    <Header title="成绩" />
    <Portal note={note} />
    <Footer />
  </Container>
)

export default Scores

export const getServerSideProps: GetServerSideProps = async () => {
  const note = (await import('./api/note.json')).default as Note

  return { props: { note } }
}

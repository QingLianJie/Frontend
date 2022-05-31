import { Container } from '@mui/material'
import type { NextPage } from 'next'
import { Footer, Header } from '../components/common/Layout'
import { Meta } from '../components/Container'

const Scores: NextPage = () => (
  <Container
    maxWidth="lg"
    sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
  >
    <Meta title="成绩 - 清廉街" />
    <Header title="成绩" />
    <Footer />
  </Container>
)

export default Scores

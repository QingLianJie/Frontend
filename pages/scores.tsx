import { Container } from '@mui/material'
import type { NextPage } from 'next'
import { Footer, Header } from '../components/base/Layout'
import { Meta } from '../components/Container'
import { Portal } from '../components/university/Portal'

const Scores: NextPage = () => (
  <Container
    maxWidth="lg"
    sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
  >
    <Meta title="成绩 - 清廉街" />
    <Header title="成绩" />
    <Portal />
    <Footer />
  </Container>
)

export default Scores

import { Container } from '@mui/material'
import type { NextPage } from 'next'
import { Footer, Header } from '../components/base/Layout'
import { Meta } from '../components/Container'

const NotFound: NextPage = () => (
  <Container
    maxWidth="lg"
    sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
  >
    <Meta title="找不到页面 - 清廉街" />
    <Header title="找不到页面" />
    <Footer />
  </Container>
)

export default NotFound

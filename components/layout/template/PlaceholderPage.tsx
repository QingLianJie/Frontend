import { Container, useMediaQuery } from '@chakra-ui/react'
import Head from 'next/head'
import { ReactNode } from 'react'
import Header from '../header/Header'
import ColorfulBalls from '../../common/background/ColorfulBalls'

interface PlaceholderPageProps {
  title: string
  children: ReactNode | ReactNode[]
}

const PlaceholderPage = ({ title, children }: PlaceholderPageProps) => {
  const [isMobile] = useMediaQuery('(max-width: 600px)')

  return (
    <>
      <Head>
        <title>{title} - 清廉街</title>
      </Head>
      <Header title={title} />
      <Container
        width="full"
        maxW="container.xl"
        py={{ base: 4, md: 8, lg: 12 }}
        px={{ base: 8, md: 12 }}
      >
        {!isMobile && <ColorfulBalls />}
        {children}
      </Container>
    </>
  )
}

export default PlaceholderPage

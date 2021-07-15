import { Container } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Footer from '../../layout/Footer'
import Header from '../../layout/header/Header'
import ScreenContainer from './Screen'

interface MainContainer {
  gray?: boolean
  title?: string
  children: ReactNode | ReactNode[]
}

const MainContainer = ({ gray, title, children }: MainContainer) => {
  return (
    <ScreenContainer gray={gray}>
      <Header title={title} />
      <Container
        width="full"
        maxW="container.xl"
        py="4"
        px={{ base: 6, sm: 8, md: 12 }}
      >
        {children}
      </Container>
      <Footer />
    </ScreenContainer>
  )
}

export default MainContainer

import { Container } from '@chakra-ui/react'
import { ReactNode } from 'react'
import Header from '../../layout/header/Header'
import ScreenBox from './ScreenBox'

interface MainBox {
  children: ReactNode | ReactNode[]
}

const MainBox = ({ children }: MainBox) => {
  return (
    <ScreenBox>
      <Header />
      <Container
        width="full"
        maxW="container.xl"
        py="4"
        px={{ base: 8, md: 12 }}
      >
        {children}
      </Container>
    </ScreenBox>
  )
}

export default MainBox

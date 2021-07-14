import { Container, Heading } from '@chakra-ui/react'
import { FormEvent, ReactNode } from 'react'

interface FormHeadingProps {
  children: ReactNode | ReactNode[]
}

const FormHeading = ({ children }: FormHeadingProps) => {
  return (
    <Heading
      as="h2"
      fontSize="2xl"
      fontWeight="normal"
      mt="4"
      mb="12"
      textAlign="center"
    >
      {children}
    </Heading>
  )
}

interface CardFormProps {
  action: (e: FormEvent) => void
  heading?: ReactNode | ReactNode[]
  children: ReactNode | ReactNode[]
}

const CardForm = ({ action, heading, children }: CardFormProps) => {
  return (
    <Container
      as="form"
      maxW="sm"
      px="8"
      py="12"
      display="flex"
      flexDir="column"
      justifyContent="center"
      borderWidth={{ base: 'none', sm: '1px' }}
      borderRadius="md"
      onSubmit={action}
    >
      {heading && <FormHeading>{heading}</FormHeading>}
      {children}
    </Container>
  )
}

export default CardForm

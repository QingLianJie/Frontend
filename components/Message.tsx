import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from '@chakra-ui/react'

const MessageBox = ({ type, title, description }) => {
  return (
    <Alert
      status={type}
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      w="fit-content"
      px="8"
      py="6"
      rounded="md"
    >
      <AlertIcon boxSize="40px" m="2" />
      <AlertTitle my="2" fontSize="lg">
        {title}
      </AlertTitle>
      <AlertDescription maxWidth="sm">{description}</AlertDescription>
    </Alert>
  )
}

export { MessageBox }

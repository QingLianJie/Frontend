import { Button, InputGroup } from '@chakra-ui/react'

interface AuthSubmitProps {
  color: string
  text: string
}

const AuthSubmit = ({ color, text }: AuthSubmitProps) => {
  return (
    <InputGroup my="2">
      <Button type="submit" isFullWidth colorScheme={color}>
        {text}
      </Button>
    </InputGroup>
  )
}

export default AuthSubmit

import { Button, InputGroup } from '@chakra-ui/react'

interface SubmitButtonProps {
  color: string
  text: string
}

const SubmitButton = ({ color, text }: SubmitButtonProps) => {
  return (
    <InputGroup my="2">
      <Button type="submit" isFullWidth colorScheme={color}>
        {text}
      </Button>
    </InputGroup>
  )
}

export default SubmitButton

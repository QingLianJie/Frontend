import {
  InputGroup,
  InputLeftAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react'
import type { NumberInputProps as ChakraNumberInputProps } from '@chakra-ui/react'

interface NumberInputProps extends ChakraNumberInputProps {
  addon?: string
  placeholder: string
}

export const NumberInput = ({
  addon,
  size,
  rounded,
  placeholder,
  ...props
}: NumberInputProps) => {
  return (
    <InputGroup w="full" size={size} rounded={rounded}>
      {addon && (
        <InputLeftAddon rounded={rounded} transform="all 0.2s">
          {addon}
        </InputLeftAddon>
      )}
      <ChakraNumberInput w="full" {...props}>
        <NumberInputField
          bg="white"
          _dark={{ bg: 'gray.800' }}
          placeholder={placeholder}
          roundedLeft="0"
          roundedRight={rounded}
          transform="all 0.2s"
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </ChakraNumberInput>
    </InputGroup>
  )
}

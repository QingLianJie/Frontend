import {
  InputGroup,
  InputLeftAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
  type NumberInputProps as ChakraNumberInputProps,
} from '@chakra-ui/react'

interface NumberInputProps extends ChakraNumberInputProps {
  addon?: string
  placeholder: string
}

export const NumberInput = ({
  addon,
  size,
  h,
  fontSize,
  rounded,
  placeholder,
  ...props
}: NumberInputProps) => {
  return (
    <InputGroup w="full" size={size} h={h} rounded={rounded}>
      {addon && (
        <InputLeftAddon
          rounded={rounded}
          fontSize={fontSize}
          h={h}
          transform="all 0.2s"
        >
          {addon}
        </InputLeftAddon>
      )}
      <ChakraNumberInput w="full" {...props}>
        <NumberInputField
          bg="white"
          _dark={{ bg: 'gray.800' }}
          placeholder={placeholder}
          h={h}
          roundedLeft="0"
          roundedRight={rounded}
          fontSize={fontSize}
          transform="all 0.2s"
        />
        <NumberInputStepper h={h}>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </ChakraNumberInput>
    </InputGroup>
  )
}

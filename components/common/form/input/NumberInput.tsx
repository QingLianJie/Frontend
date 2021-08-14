import {
  InputGroup,
  InputLeftAddon,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput as ChakraNumberInput,
  NumberInputField,
  NumberInputStepper,
} from '@chakra-ui/react'

interface NumberInputProps {
  addon?: string
  placeholder: string
  max?: number
  min?: number
  step?: number
  value?: string
  disabled?: boolean
  action: (valueAsString: string, valueAsNumber: number) => void
}

const NumberInput = ({
  addon,
  placeholder,
  max,
  min,
  step,
  value,
  disabled,
  action,
}: NumberInputProps) => {
  return (
    <InputGroup w="full">
      {addon && <InputLeftAddon>{addon}</InputLeftAddon>}
      <ChakraNumberInput
        min={min}
        max={max}
        step={step}
        onChange={action}
        value={value}
        w="full"
      >
        <NumberInputField
          placeholder={placeholder}
          disabled={disabled}
          bg="white"
          _dark={{ bg: 'gray.800' }}
          roundedLeft="0"
        />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </ChakraNumberInput>
    </InputGroup>
  )
}

export default NumberInput

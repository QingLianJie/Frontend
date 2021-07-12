import {
  Icon,
  IconButton,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'
import { ChangeEvent, FunctionComponent, useState } from 'react'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'

interface FormInputProps {
  type: string
  placeholder: string
  icon: FunctionComponent
  action: (e: ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({ type, placeholder, icon, action }: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <InputGroup my="2">
      <InputLeftElement pointerEvents="none">
        <Icon
          as={icon}
          color="gray.300"
          _dark={{
            color: 'gray.600',
          }}
        />
      </InputLeftElement>

      <ChakraInput
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        placeholder={placeholder}
        isRequired
        onChange={action}
      />

      {type === 'password' && (
        <InputRightElement>
          <IconButton
            aria-label="显示 / 隐藏密码"
            icon={showPassword ? <RiEyeOffFill /> : <RiEyeFill />}
            onClick={() => setShowPassword(!showPassword)}
            color="gray.300"
            variant="ghost"
            borderRadius="md"
            _dark={{
              color: 'gray.600',
            }}
          />
        </InputRightElement>
      )}
    </InputGroup>
  )
}

export default FormInput

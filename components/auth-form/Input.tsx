import {
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'
import { ChangeEvent, FunctionComponent, useState } from 'react'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'

interface AuthInputProps {
  type: string
  placeholder: string
  icon: FunctionComponent
  action: (e: ChangeEvent<HTMLInputElement>) => void
}

const AuthInput = ({ type, placeholder, icon, action }: AuthInputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <InputGroup my="2">
      <InputLeftElement pointerEvents="none">
        <Icon as={icon} color="gray.300" />
      </InputLeftElement>
      <Input
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
          />
        </InputRightElement>
      )}
    </InputGroup>
  )
}

export default AuthInput

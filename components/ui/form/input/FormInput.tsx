import {
  FormControl,
  FormHelperText,
  Icon,
  IconButton,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Tooltip,
} from '@chakra-ui/react'
import { ChangeEvent, FunctionComponent, useState } from 'react'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'

interface FormInputProps {
  type: string
  placeholder: string
  icon: FunctionComponent
  help?: string
  action: (e: ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({
  type,
  placeholder,
  icon,
  help,
  action,
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <FormControl my="2">
      <InputGroup>
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
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
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
      {help && <FormHelperText px="2">{help}</FormHelperText>}
    </FormControl>
  )
}

export default FormInput

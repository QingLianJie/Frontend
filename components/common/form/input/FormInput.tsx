import {
  FormControl,
  FormHelperText,
  Icon,
  IconButton,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react'
import { ChangeEvent, FC, useState } from 'react'
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'

interface FormInputProps {
  type: string
  placeholder: string
  icon: FC
  help?: string
  name: string
  disabled?: boolean
  action: (e: ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({
  type,
  placeholder,
  icon,
  help,
  name,
  disabled,
  action,
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <FormControl my="2" isDisabled={disabled}>
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
          id={name}
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          placeholder={placeholder}
          isRequired
          onChange={action}
          name={name}
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
              tabIndex={-1}
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

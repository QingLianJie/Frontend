import {
  FormControl,
  FormHelperText,
  Icon,
  IconButton,
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps as ChakraInputProps,
  InputRightElement,
} from '@chakra-ui/react'
import { useState } from 'react'
import { IconType } from 'react-icons'
import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri'

interface InputProps extends ChakraInputProps {
  icon: IconType
  help?: string
  disabled?: boolean
}

export const Input = ({
  type,
  icon,
  help,
  name,
  disabled,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <FormControl isDisabled={disabled}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon
            as={icon}
            color="gray.400"
            _dark={{
              color: 'gray.500',
            }}
            transition="all 0.2s"
          />
        </InputLeftElement>

        <ChakraInput
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          isRequired
          name={name}
          {...props}
        />

        {type === 'password' && (
          <InputRightElement>
            <IconButton
              aria-label="显示 / 隐藏密码"
              icon={showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
              onClick={() => setShowPassword(!showPassword)}
              variant="ghost"
              size="sm"
              fontSize="md"
              rounded="md"
              tabIndex={-1}
              color="gray.400"
              _dark={{
                color: 'gray.500',
              }}
              title={showPassword ? '隐藏密码' : '显示密码'}
            />
          </InputRightElement>
        )}
      </InputGroup>

      {help && (
        <FormHelperText px="2" transition="all 0.2s">
          {help}
        </FormHelperText>
      )}
    </FormControl>
  )
}

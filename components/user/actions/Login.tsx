import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import { Button, IconButton, InputAdornment } from '@mui/material'
import { useAtom } from 'jotai'
import { useEffect, useRef, useState } from 'react'
import { FieldError } from 'react-hook-form'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'
import { authModalAtom } from '../../../contexts/toggle'

type LoginForm = {
  name: string
  password: string
}

export const Login = () => {
  const [isOpen] = useAtom(authModalAtom)
  const [showPassword, setShowPassword] = useState(false)
  const inputRef = useRef<HTMLInputElement>()

  useEffect(() => {
    if (!inputRef || !isOpen) return
    inputRef.current?.focus()
  }, [isOpen])

  const handleLogin = (e: LoginForm) => {
    console.log(e)
  }

  return (
    <FormContainer
      defaultValues={{ name: '', password: '' }}
      onSuccess={handleLogin}
    >
      <TextFieldElement
        inputRef={inputRef}
        parseError={(e: FieldError) => {
          switch (e.type) {
            case 'required':
              return '请输入用户名或邮箱'
            default:
              return '用户名或邮箱格式错误'
          }
        }}
        required
        name="name"
        label="用户名或邮箱"
        size="small"
        margin="dense"
        fullWidth
        autoFocus
      />

      <TextFieldElement
        parseError={(e: FieldError) => {
          switch (e.type) {
            case 'required':
              return '请输入密码'
            default:
              return '密码格式错误'
          }
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position={'end'} sx={{ mr: -1 }}>
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
                color="secondary"
              >
                {showPassword ? (
                  <VisibilityOutlined fontSize="small" />
                ) : (
                  <VisibilityOffOutlined fontSize="small" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        type={showPassword ? 'text' : 'password'}
        required
        name="password"
        label="密码"
        size="small"
        margin="dense"
        fullWidth
      />

      <Button
        type="submit"
        variant="contained"
        disableElevation
        sx={{ width: '100%', mt: 1 }}
      >
        登录
      </Button>
    </FormContainer>
  )
}

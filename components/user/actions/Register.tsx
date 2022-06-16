import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import { Button, IconButton, InputAdornment } from '@mui/material'
import { useAtom } from 'jotai'
import { useEffect, useRef, useState } from 'react'
import { FieldError } from 'react-hook-form'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'
import { authModalAtom } from '../../../contexts/toggle'

type RegisterForm = {
  email: string
  name: string
  password: string
}

export const Register = () => {
  const [isOpen] = useAtom(authModalAtom)
  const inputRef = useRef<HTMLInputElement>()

  useEffect(() => {
    if (!inputRef || !isOpen) return
    inputRef.current?.focus()
  }, [isOpen])

  const [showPassword, setShowPassword] = useState(false)
  const [showRepeatPassword, setShowRepeatPassword] = useState(false)
  const password = useRef<HTMLInputElement>()

  const handleRegister = (e: RegisterForm) => {
    console.log(e)
  }

  return (
    <FormContainer
      defaultValues={{ email: '', name: '', password: '' }}
      onSuccess={handleRegister}
    >
      <TextFieldElement
        inputRef={inputRef}
        parseError={(e: FieldError) => {
          switch (e.type) {
            case 'required':
              return '请输入用户名'
            default:
              return '需要 3 到 16 个字符'
          }
        }}
        validation={{
          pattern: { value: /^.{3,16}$/, message: '需要 3 到 16 个字符' },
        }}
        required
        name="name"
        label="用户名"
        size="small"
        margin="dense"
        helperText="独一无二的名字，3 到 16 个字符"
        fullWidth
        autoFocus
      />

      <TextFieldElement
        parseError={(e: FieldError) => {
          switch (e.type) {
            case 'required':
              return '请输入邮箱地址'
            default:
              return '邮箱格式错误'
          }
        }}
        required
        name="email"
        label="邮箱"
        size="small"
        type="email"
        margin="dense"
        fullWidth
      />

      <TextFieldElement
        inputRef={password}
        parseError={(e: FieldError) => {
          switch (e.type) {
            case 'required':
              return '请输入密码'
            default:
              return '需要 8 到 24 个字符，且不能为纯数字'
          }
        }}
        validation={{
          pattern: {
            value: /^.*(?=.{8,24})(?=.*[A-Za-z!@#$%^&*?]).*$/,
            message: '需要 8 到 24 个字符，且不能为纯数字',
          },
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
        helperText="8 到 24 个字符，且不能为纯数字"
        fullWidth
      />

      <TextFieldElement
        parseError={(e: FieldError) => {
          switch (e.type) {
            case 'required':
              return '请再次输入密码'
            case 'validate':
              return '两次输入的密码不一致'
            default:
              return '密码格式错误，需要 8 到 24 个字符，且不能为纯数字'
          }
        }}
        validation={{
          validate: (value: string) =>
            value === password.current?.value || '两次输入的密码不一致',
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position={'end'} sx={{ mr: -1 }}>
              <IconButton
                onClick={() => setShowRepeatPassword(!showRepeatPassword)}
                tabIndex={-1}
                color="secondary"
              >
                {showRepeatPassword ? (
                  <VisibilityOutlined fontSize="small" />
                ) : (
                  <VisibilityOffOutlined fontSize="small" />
                )}
              </IconButton>
            </InputAdornment>
          ),
        }}
        type={showRepeatPassword ? 'text' : 'password'}
        required
        name="repeat-password"
        label="再次输入密码"
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
        注册
      </Button>
    </FormContainer>
  )
}

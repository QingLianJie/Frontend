import { Button } from '@mui/material'
import { useAtom } from 'jotai'
import { useRef, useEffect } from 'react'
import { FieldError } from 'react-hook-form'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'
import { authModalAtom } from '../../../contexts/toggle'

type ResetPasswordForm = {
  email: string
}

export const ResetPassword = () => {
  const [isOpen] = useAtom(authModalAtom)
  const inputRef = useRef<HTMLInputElement>()

  useEffect(() => {
    if (!inputRef.current || !isOpen) return
    inputRef.current?.focus()
  }, [isOpen])

  const handleSendEmail = (e: ResetPasswordForm) => {
    console.log(e)
  }

  return (
    <FormContainer defaultValues={{ email: '' }} onSuccess={handleSendEmail}>
      <TextFieldElement
        inputRef={inputRef}
        parseError={(e: FieldError) => {
          switch (e.type) {
            case 'required':
              return '请输入注册时使用的邮箱'
            default:
              return '邮箱格式错误'
          }
        }}
        required
        name="login-name"
        label="注册时使用的邮箱"
        size="small"
        type="email"
        margin="dense"
        helperText="我们将发送一封包含重置密码链接的邮件"
        fullWidth
        autoFocus
      />

      <Button
        type="submit"
        variant="contained"
        disableElevation
        sx={{ width: '100%', mt: 1 }}
      >
        发送重置密码邮件
      </Button>
    </FormContainer>
  )
}

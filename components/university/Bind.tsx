import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material'
import {
  Button,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from '@mui/material'
import { useAtom } from 'jotai'
import { useEffect, useRef, useState } from 'react'
import { FieldError, useForm } from 'react-hook-form'
import { FormContainer, TextFieldElement } from 'react-hook-form-mui'
import { schedulesAtom } from '../../contexts/schedules'
import { scoresAtom } from '../../contexts/scores'
import { bindModalAtom } from '../../contexts/boolean'
import { bindAtom } from '../../contexts/university'

type BindForm = {
  id: string
  password: string
}

export const Bind = () => {
  const [isOpen, setOpen] = useAtom(bindModalAtom)
  const [bindHEU, setBind] = useAtom(bindAtom)
  const [, setSchedules] = useAtom(schedulesAtom)
  const [, setScores] = useAtom(scoresAtom)
  const [showPassword, setShowPassword] = useState(false)
  const inputRef = useRef<HTMLInputElement>()
  const { reset } = useForm()

  useEffect(() => {
    if (!inputRef.current || !isOpen) return
    inputRef.current?.focus()
  }, [isOpen])

  const handleBind = (e: BindForm) => {
    setBind(e)
    setOpen(false)
    reset({ id: '', password: '' })
  }

  const handleUnbind = () => {
    setBind(false)
    setSchedules(false)
    setScores(false)
    reset({ id: '', password: '' })
    setOpen(false)
  }

  return (
    <Dialog
      fullWidth
      maxWidth={false}
      open={isOpen}
      onClose={() => setOpen(false)}
      keepMounted
      sx={{
        '& .MuiPaper-root': { maxWidth: '18rem' },
        '& .MuiDialogContent-root': { p: 0 },
      }}
    >
      <DialogContent>
        <Typography
          component="h1"
          variant="h6"
          sx={{ textAlign: 'center', pt: 6, pb: 0.5 }}
        >
          {bindHEU ? '修改' : '添加'} HEU 账号
        </Typography>
        <Typography
          component="p"
          variant="body2"
          color="text.secondary"
          sx={{ textAlign: 'center', pb: 5 }}
        >
          账号信息将储存在浏览器中
        </Typography>
        <Divider />
        <Stack sx={{ px: 3, pt: 2, pb: 3 }}>
          <FormContainer
            defaultValues={bindHEU || { id: '', password: '' }}
            onSuccess={handleBind}
          >
            <TextFieldElement
              inputRef={inputRef}
              parseError={(e: FieldError) => {
                switch (e.type) {
                  case 'required':
                    return '请输入学号'
                  default:
                    return '学号格式错误'
                }
              }}
              required
              name="id"
              label="学号"
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
              {bindHEU ? '修改' : '添加'}账号
            </Button>
            {bindHEU && (
              <Button
                variant="outlined"
                disableElevation
                sx={{ width: '100%', mt: 1.5 }}
                onClick={handleUnbind}
              >
                移除当前账号
              </Button>
            )}
          </FormContainer>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

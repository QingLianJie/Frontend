import {
  CloseOutlined,
  VisibilityOffOutlined,
  VisibilityOutlined,
} from '@mui/icons-material'
import {
  Button,
  Dialog,
  DialogContent,
  Divider,
  Grid,
  IconButton,
  DialogTitle,
  Stack,
  Typography,
} from '@mui/material'
import { useAtom } from 'jotai'
import { useEffect, useRef, useState } from 'react'
import { FieldError, useForm } from 'react-hook-form'
import {
  CheckboxElement,
  FormContainer,
  TextFieldElement,
} from 'react-hook-form-mui'
import { schedulesAtom } from '../../contexts/schedules'
import { scoresAtom } from '../../contexts/scores'
import { fetcherModalAtom } from '../../contexts/boolean'
import { Modal } from '../base/Modal'

type FetcherForm = {
  captcha: string
  upload: boolean
}

export const Fetcher = () => {
  const [isOpen, setOpen] = useAtom(fetcherModalAtom)
  const [captcha, setCaptcha] = useState('')
  const [, setSchedules] = useAtom(schedulesAtom)
  const [, setScores] = useAtom(scoresAtom)
  const inputRef = useRef<HTMLInputElement>()
  const { reset } = useForm()

  const handleFetch = (e: FetcherForm) => {
    setCaptcha(e.captcha)
    // 模拟登录和解析数据
  }

  return (
    <Modal
      maxWidth="18rem"
      isOpen={isOpen}
      onClose={() => setOpen(false)}
      focusRef={inputRef}
      title="获取学校数据"
    >
      <FormContainer defaultValues={{ captcha: '' }} onSuccess={handleFetch}>
        <Stack sx={{ px: 3, py: 2 }}>
          <Button
            type="button"
            variant="outlined"
            color="secondary"
            sx={{ width: '100%', height: 72, my: 1 }}
          >
            重新获取
          </Button>

          <TextFieldElement
            inputRef={inputRef}
            parseError={(e: FieldError) => {
              switch (e.type) {
                case 'required':
                  return '请输入验证码'
                default:
                  return '验证码格式错误'
              }
            }}
            required
            name="captcha"
            label="验证码"
            size="small"
            margin="dense"
            fullWidth
            autoFocus
            helperText="提示：系统将使用浏览器来模拟用户操作，登录到学校网站，获取和解析相关课程和成绩数据"
          />

          <Button
            type="submit"
            variant="contained"
            disableElevation
            sx={{ width: '100%', my: 1 }}
          >
            获取数据
          </Button>
        </Stack>
        <Divider />
        <Stack
          sx={{ px: 3, py: 2.5, '& .MuiFormControlLabel-root': { mr: 0 } }}
        >
          <CheckboxElement
            name="upload"
            label="同时上传数据到「清廉街」数据库"
            size="small"
            helperText="上传获取的数据，帮助「清廉街」更新学校课程和成绩数据库，感谢分享支持"
            sx={{
              my: -2,
              '& + .MuiTypography-root': { fontSize: 'body2.fontSize' },
              '& .MuiSvgIcon-root': { fontSize: 18 },
            }}
          />
        </Stack>
      </FormContainer>
    </Modal>
  )
}

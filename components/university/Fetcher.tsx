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
import {
  bindAtom,
  bridgeAtom,
  fetcherAtom,
  timestampAtom,
} from '../../contexts/university'
import { LoadingButton } from '@mui/lab'
import { useSnackbar } from 'notistack'

type FetcherForm = {
  captcha: string
  upload: boolean
}

type Captcha = {
  img: string
  token: string
} | null

export const Fetcher = () => {
  const [isOpen, setOpen] = useAtom(fetcherModalAtom)
  const [captcha, setCaptcha] = useState<Captcha>(null)
  const [isLoading, setLoading] = useState(false)
  const [loadingStatus, setLoadingStatus] = useState('空闲')
  const [, setSchedules] = useAtom(schedulesAtom)
  const [, setScores] = useAtom(scoresAtom)
  const [, setTimestamp] = useAtom(timestampAtom)
  const [bindHEU] = useAtom(bindAtom)
  const [fetcher] = useAtom(fetcherAtom)
  const [bridge] = useAtom(bridgeAtom)
  const inputRef = useRef<HTMLInputElement>()
  const { enqueueSnackbar } = useSnackbar()
  const { reset } = useForm()

  const isDisabled = !captcha || !bindHEU || !fetcher || !bridge

  const getCaptcha = async () => {
    if (!bridge) return
    const res = await bridge.captcha()
    setCaptcha({
      token: res.token,
      img: `data:image/jpeg;charset=utf-8;base64,${res.img
        .replace(/\\n/g, '')
        .replace(/\n/g, '')}`,
    })
  }

  useEffect(() => {
    if (!isOpen || captcha) return
    getCaptcha()
  }, [isOpen])

  const handleFetch = async (e: FetcherForm) => {
    if (isDisabled) return

    try {
      setLoading(true)
      setLoadingStatus('正在登录')
      await bridge.login(
        { username: bindHEU.id, password: bindHEU.password },
        { captcha: e.captcha, token: captcha?.token }
      )
      setLoadingStatus('获取成绩')
      const score = await bridge.score()
      setScores(score)

      setLoadingStatus('获取课表')
      const schedule = await bridge.timetable()
      setSchedules(schedule)

      setLoadingStatus('即将完成')
      setLoading(false)
      setTimestamp(new Date().toISOString())
      enqueueSnackbar('成功获取课表和成绩数据', { variant: 'success' })
      setOpen(false)
      reset({ captcha: '', upload: false })
    } catch (e) {
      setLoading(false)
      enqueueSnackbar(`获取数据出错：${(e as Error).message}`, {
        variant: 'error',
      })
    }
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
        <Stack sx={{ px: 3, py: 2, '& .MuiFormControlLabel-root': { mr: 0 } }}>
          <Button
            aria-label="获取验证码"
            type="button"
            variant="outlined"
            color="secondary"
            sx={{
              width: '100%',
              height: 80,
              mt: 1,
              mb: 0.5,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundImage: captcha ? `url("${captcha.img}")` : 'unset',
            }}
            onClick={() => getCaptcha()}
          >
            {captcha ? '' : '正在获取验证码'}
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
            helperText="用于模拟登录到学校网站，并获取数据"
            sx={{ mb: 1 }}
          />
          <CheckboxElement
            name="upload"
            label="同时上传数据到「清廉街」数据库"
            size="small"
            helperText="帮助「清廉街」更新课程、成绩等数据"
            sx={{
              my: -2,
              '& + .MuiTypography-root': { fontSize: 'body2.fontSize' },
              '& .MuiSvgIcon-root': { fontSize: 18 },
            }}
          />
          <LoadingButton
            type="submit"
            variant="contained"
            disableElevation
            disabled={isDisabled}
            loading={isLoading}
            sx={{ width: '100%', my: 1 }}
          >
            {isLoading ? loadingStatus : '获取数据'}
          </LoadingButton>
        </Stack>
      </FormContainer>
    </Modal>
  )
}

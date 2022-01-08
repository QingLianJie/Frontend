import { useToast } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { RiLockPasswordFill, RiUserFill } from 'react-icons/ri'
import BlockLink from '../../../components/common/action/link/BlockLink'
import CenterContainer from '../../../components/common/container/Center'
import HorizontalContainer from '../../../components/common/container/Horizontal'
import CardForm from '../../../components/common/form/CardForm'
import Input from '../../../components/common/form/input/FormInput'
import SubmitButton from '../../../components/common/form/SubmitButton'
import { BASE_API_URL } from '../../../data/api-config'
import { toastConfig } from '../../../utils/config/toast'
import { passwordRegex } from '../../../utils/regex'

const links: Links = [
  { href: '/login', text: '登录' },
  { href: '/signup', text: '注册' },
  { href: '/', text: '主页' },
]

const ResetConfirmPage = () => {
  const toast = useToast()
  const router = useRouter()
  const { id, token } = router.query
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')

  const baseURL = BASE_API_URL

  const checkPassword = () => {
    if (!passwordRegex.test(password)) {
      toast({
        title: '密码不合适',
        description: '密码需要包含至少 8 个字符，并且不能是纯数字',
        ...toastConfig.warn,
      })
      return false
    } else if (password !== passwordAgain) {
      toast({
        title: '两次密码不一致',
        ...toastConfig.warn,
      })
      return false
    }
    return true
  }

  const handleResetConfirm = (e: FormEvent) => {
    e.preventDefault()

    if (checkPassword()) {
      fetch(`${baseURL}/rest-auth/password/reset/confirm/`, {
        method: 'POST',
        body: JSON.stringify({
          new_password1: password,
          new_password2: passwordAgain,
          uid: id,
          token: token,
        }),
        mode: 'cors',
        credentials: 'include',
      })
        .then(async res => {
          if (res.ok) {
            toast({
              title: '重置密码成功',
              ...toastConfig.ok,
            })

            router.push('/login')
          } else {
            const data = await res.json()
            Object.values(data).forEach(d => {
              toast({
                title: '重置密码失败',
                description: d as string,
                ...toastConfig.error,
              })
            })
          }
        })
        .catch((err: Error) => {
          console.log('Reset Confirm Error -', err)

          toast({
            title: '重置密码失败',
            description: err.toString(),
            ...toastConfig.error,
          })
        })
    }
  }

  return (
    <CenterContainer screen>
      <Head>
        <title>重置密码确认 - 清廉街</title>
      </Head>
      <CardForm heading={<span>重置密码确认</span>} action={handleResetConfirm}>
        <Input
          type="password"
          placeholder="密码"
          icon={RiLockPasswordFill}
          name="password"
          help="8 到 24 个字符，且不能为纯数字"
          action={e => setPassword(e.target.value)}
        />

        <Input
          type="password"
          placeholder="再次输入密码"
          icon={RiLockPasswordFill}
          name="password-again"
          action={e => setPasswordAgain(e.target.value)}
        />

        <SubmitButton color="yellow" text="确认重置" />

        <HorizontalContainer center divider>
          {links.map(link => (
            <BlockLink href={link.href} key={link.href}>
              {link.text}
            </BlockLink>
          ))}
        </HorizontalContainer>
      </CardForm>
    </CenterContainer>
  )
}

export default ResetConfirmPage

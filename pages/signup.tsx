import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { RiLockPasswordFill, RiMailFill, RiUserFill } from 'react-icons/ri'
import { mutate } from 'swr'
import CenterBox from '../components/ui/box/CenterBox'
import HorizontalBox from '../components/ui/box/HorizontalBox'
import SubmitButton from '../components/ui/button/SubmitButton'
import CardForm from '../components/ui/form/CardForm'
import Input from '../components/ui/form/input/FormInput'
import TextLink from '../components/ui/link/TextLink'
import { useSignupToast } from '../hooks/useToast'
import { nameRegex, passwordRegex } from '../utils/regex'

const links: Links = [
  { href: '/login', text: '登录' },
  { href: '/reset-password', text: '重置密码' },
  { href: '/', text: '主页' },
]

const SignupPage = () => {
  const toast = useSignupToast()
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

  const checkName = () => {
    if (!nameRegex.test(name)) {
      toast.name()
      return false
    }
    return true
  }

  const checkPassword = () => {
    if (!passwordRegex.test(password)) {
      toast.password()
      return false
    } else if (password !== passwordAgain) {
      toast.diff()
      return false
    }
    return true
  }

  const handleSignup = (e: FormEvent) => {
    e.preventDefault()

    if (checkName() && checkPassword()) {
      const formdata = new FormData()
      formdata.append('username', name)
      formdata.append('email', email)
      formdata.append('password1', password)
      formdata.append('password2', passwordAgain)

      fetch(`${baseURL}/rest-auth/registration/`, {
        method: 'POST',
        body: formdata,
        mode: 'cors',
        credentials: 'include',
      })
        .then(async res => {
          if (res.ok) {
            toast.ok()
            mutate(`${baseURL}/rest-auth/user/`)
            router.push('/')
          } else {
            const data = await res.json()
            Object.values(data).forEach(d => {
              const t = d as string
              toast.error(t)
            })
          }
        })
        .catch((err: Error) => {
          console.log('Signup Error -', err)
          toast.error(err.toString())
        })
    }
  }

  return (
    <CenterBox screen>
      <Head>
        <title>注册 - 清廉街</title>
      </Head>
      <CardForm
        heading={
          <span>
            注册 <strong>清廉街</strong> 账号
          </span>
        }
        action={handleSignup}
      >
        <Input
          type="text"
          placeholder="用户名"
          icon={RiUserFill}
          help="只能用英文字母、数字、横线、下划线和小数点"
          action={e => setName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="邮箱"
          icon={RiMailFill}
          action={e => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="密码"
          icon={RiLockPasswordFill}
          help="至少 8 个字符，且不能为纯数字"
          action={e => setPassword(e.target.value)}
        />

        <Input
          type="password"
          placeholder="再次输入密码"
          icon={RiLockPasswordFill}
          action={e => setPasswordAgain(e.target.value)}
        />

        <SubmitButton color="blue" text="注册" />

        <HorizontalBox center divider>
          {links.map(link => (
            <TextLink href={link.href} key={link.href}>
              {link.text}
            </TextLink>
          ))}
        </HorizontalBox>
      </CardForm>
    </CenterBox>
  )
}

export default SignupPage

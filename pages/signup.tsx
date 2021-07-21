import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { RiLockPasswordFill, RiMailFill, RiUserFill } from 'react-icons/ri'
import { mutate } from 'swr'
import CenterContainer from '../components/common/container/Center'
import HorizontalContainer from '../components/common/container/Horizontal'
import SubmitButton from '../components/common/form/SubmitButton'
import CardForm from '../components/common/form/CardForm'
import Input from '../components/common/form/input/FormInput'
import BlockLink from '../components/common/action/link/BlockLink'
import useSignupToast from '../hooks/useToast/useSignupToast'
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
            mutate(`${baseURL}/api/user`)

            if (router.query.from) {
              router.push(router.query.from as string)
            } else {
              router.push('/')
            }
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
    <CenterContainer screen>
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
          name="username"
          help="独一无二的名字，3 到 16 个字符"
          action={e => setName(e.target.value)}
        />

        <Input
          type="email"
          placeholder="邮箱"
          icon={RiMailFill}
          name="email"
          action={e => setEmail(e.target.value)}
        />

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

        <SubmitButton color="blue" text="注册" />

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

export default SignupPage

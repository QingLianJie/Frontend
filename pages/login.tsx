import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { RiLockPasswordFill, RiMailFill, RiUserFill } from 'react-icons/ri'
import { mutate } from 'swr'
import CenterBox from '../components/common/box/CenterBox'
import HorizontalBox from '../components/common/box/HorizontalBox'
import SubmitButton from '../components/common/button/SubmitButton'
import CardForm from '../components/common/form/CardForm'
import Input from '../components/common/form/input/FormInput'
import TextLink from '../components/common/link/TextLink'
import useLoginToast from '../hooks/useToast/useLoginToast'
import { emailRegex } from '../utils/regex'

type NameType = 'username' | 'email'

const links: Links = [
  { href: '/signup', text: '注册' },
  { href: '/reset-password', text: '重置密码' },
  { href: '/', text: '主页' },
]

const LoginPage = () => {
  const toast = useLoginToast()
  const router = useRouter()
  const [nameType, setNameType] = useState<NameType>('username')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const baseURL = process.env.NEXT_PUBLIC_BASE_API_URL

  const isEmail = (name: string) =>
    setNameType(emailRegex.test(name) ? 'email' : 'username')
  useEffect(() => isEmail(name), [name])

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()

    const formdata = new FormData()
    formdata.append(nameType, name)
    formdata.append('password', password)

    fetch(`${baseURL}/rest-auth/login/`, {
      method: 'POST',
      body: formdata,
      mode: 'cors',
      credentials: 'include',
    })
      .then(async res => {
        if (res.ok) {
          toast.ok()
          mutate(`${baseURL}/rest-auth/user/`)

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
        console.log('Login Error -', err)
        toast.error(err.toString())
      })
  }

  return (
    <CenterBox screen>
      <Head>
        <title>登录 - 清廉街</title>
      </Head>
      <CardForm
        heading={
          <span>
            登录到 <strong>清廉街</strong>
          </span>
        }
        action={handleLogin}
      >
        <Input
          type="text"
          placeholder="用户名或邮箱"
          icon={nameType === 'email' ? RiMailFill : RiUserFill}
          action={e => setName(e.target.value)}
        />

        <Input
          type="password"
          placeholder="密码"
          icon={RiLockPasswordFill}
          action={e => setPassword(e.target.value)}
        />

        <SubmitButton color="green" text="登录" />

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

export default LoginPage

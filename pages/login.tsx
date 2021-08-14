import { useToast } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { RiLockPasswordFill, RiMailFill, RiUserFill } from 'react-icons/ri'
import { mutate } from 'swr'
import BlockLink from '../components/common/action/link/BlockLink'
import CenterContainer from '../components/common/container/Center'
import HorizontalContainer from '../components/common/container/Horizontal'
import CardForm from '../components/common/form/CardForm'
import Input from '../components/common/form/input/FormInput'
import SubmitButton from '../components/common/form/SubmitButton'
import { BASE_API_URL } from '../data/api-config'
import { toastConfig } from '../utils/config/toast'
import { emailRegex } from '../utils/regex'

type NameType = 'username' | 'email'

const links: Links = [
  { href: '/signup', text: '注册' },
  { href: '/reset-password', text: '重置密码' },
  { href: '/', text: '主页' },
]

const LoginPage = () => {
  const toast = useToast()

  const router = useRouter()
  const [nameType, setNameType] = useState<NameType>('username')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const baseURL = BASE_API_URL

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
          toast({
            title: '登录成功',
            ...toastConfig.ok,
          })
          mutate(`${baseURL}/api/user`)

          if (router.query.from) {
            router.push(router.query.from as string)
          } else {
            router.push('/')
          }
        } else {
          const data = await res.json()
          Object.values(data).forEach(d => {
            toast({
              title: '登录失败',
              description: d as string,
              ...toastConfig.error,
            })
          })
        }
      })
      .catch((err: Error) => {
        console.log('Login Error -', err)
        toast({
          title: '登录失败',
          description: err.toString(),
          ...toastConfig.error,
        })
      })
  }

  return (
    <CenterContainer screen>
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
          name="username"
          placeholder="用户名或邮箱"
          icon={nameType === 'email' ? RiMailFill : RiUserFill}
          action={e => setName(e.target.value)}
        />

        <Input
          type="password"
          name="password"
          placeholder="密码"
          icon={RiLockPasswordFill}
          action={e => setPassword(e.target.value)}
        />

        <SubmitButton color="green" text="登录" />

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

export default LoginPage

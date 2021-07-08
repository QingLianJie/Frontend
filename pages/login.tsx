import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useEffect, useState } from 'react'
import { RiLockPasswordFill, RiMailFill, RiUserFill } from 'react-icons/ri'
import AuthForm from '../components/auth-form/Form'
import AuthHeading from '../components/auth-form/Heading'
import AuthInput from '../components/auth-form/Input'
import AuthLinks from '../components/auth-form/Links'
import AuthSubmit from '../components/auth-form/Submit'
import { useLoginToast } from '../hooks/useToast'

type NameType = 'username' | 'email'
const emailRegex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const LoginPage = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [nameType, setNameType] = useState<NameType>('username')
  const [password, setPassword] = useState('')
  const toast = useLoginToast()

  const isEmail = (name: string) => {
    if (emailRegex.test(name)) {
      setNameType('email')
    } else {
      setNameType('username')
    }
  }
  useEffect(() => isEmail(name), [name])

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()

    const formdata = new FormData()
    formdata.append(nameType, name)
    formdata.append('password', password)

    fetch(`/rest-auth/login/`, {
      method: 'POST',
      body: formdata,
    })
      .then(async res => {
        if (res.status === 200) {
          toast.ok()
          router.push('/')
        } else {
          toast.error(`${res.status} ${res.statusText}`)
        }
      })
      .catch(err => {
        console.log('Login Error -', err)
        toast.error(err)
      })
  }

  return (
    <>
      <Head>
        <title>登录 - 清廉街</title>
      </Head>
      <AuthForm action={handleLogin}>
        <AuthHeading>
          登录到 <strong>清廉街</strong>
        </AuthHeading>

        <AuthInput
          type="text"
          placeholder="用户名或邮箱"
          icon={nameType === 'email' ? RiMailFill : RiUserFill}
          action={e => setName(e.target.value)}
        />

        <AuthInput
          type="password"
          placeholder="密码"
          icon={RiLockPasswordFill}
          action={e => setPassword(e.target.value)}
        />

        <AuthSubmit color="green" text="登录" />

        <AuthLinks
          links={[
            { href: '/signup', text: '注册' },
            { href: '/reset-password', text: '重置密码' },
            { href: '/', text: '主页' },
          ]}
        />
      </AuthForm>
    </>
  )
}

export default LoginPage

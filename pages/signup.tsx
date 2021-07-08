import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FormEvent } from 'react'
import { RiLockPasswordFill, RiMailFill, RiUserFill } from 'react-icons/ri'
import AuthForm from '../components/auth-form/Form'
import AuthHeading from '../components/auth-form/Heading'
import AuthInput from '../components/auth-form/Input'
import AuthLinks from '../components/auth-form/Links'
import AuthSubmit from '../components/auth-form/Submit'
import { useSignupToast } from '../hooks/useToast'
import { nameRegex, passwordRegex } from '../libs/regex'

const SignupPage = () => {
  const toast = useSignupToast()
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')

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
      formdata.append('usename', name)
      formdata.append('email', email)
      formdata.append('password1', password)
      formdata.append('password2', passwordAgain)

      fetch(`/rest-auth/signup/`, {
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
          console.log('Signup Error -', err)
          toast.error(err)
        })
    }
  }

  return (
    <>
      <Head>
        <title>注册 - 清廉街</title>
      </Head>
      <AuthForm action={handleSignup}>
        <AuthHeading>
          注册 <strong>清廉街</strong> 账号
        </AuthHeading>

        <AuthInput
          type="text"
          placeholder="用户名"
          icon={RiUserFill}
          action={e => setName(e.target.value)}
        />

        <AuthInput
          type="email"
          placeholder="邮箱"
          icon={RiMailFill}
          action={e => setEmail(e.target.value)}
        />

        <AuthInput
          type="password"
          placeholder="密码"
          icon={RiLockPasswordFill}
          action={e => setPassword(e.target.value)}
        />

        <AuthInput
          type="password"
          placeholder="再次输入密码"
          icon={RiLockPasswordFill}
          action={e => setPasswordAgain(e.target.value)}
        />

        <AuthSubmit color="blue" text="注册" />

        <AuthLinks
          links={[
            { href: '/login', text: '登录' },
            { href: '/reset-password', text: '重置密码' },
            { href: '/', text: '主页' },
          ]}
        />
      </AuthForm>
    </>
  )
}

export default SignupPage

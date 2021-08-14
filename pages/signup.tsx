import { useToast } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
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
import { nameRegex, passwordRegex } from '../utils/regex'

const links: Links = [
  { href: '/login', text: '登录' },
  { href: '/reset-password', text: '重置密码' },
  { href: '/', text: '主页' },
]

const SignupPage = () => {
  const toast = useToast()
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordAgain, setPasswordAgain] = useState('')

  const baseURL = BASE_API_URL
  const checkName = () => {
    if (!nameRegex.test(name)) {
      toast({
        title: '用户名不合适',
        description: '用户名只能包含 3 到 16 个字符',
        ...toastConfig.warn,
      })
      return false
    }
    return true
  }

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
            toast({
              title: '注册成功',
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
                title: '注册失败',
                description: d as string,
                ...toastConfig.error,
              })
            })
          }
        })
        .catch((err: Error) => {
          console.log('Signup Error -', err)

          toast({
            title: '注册失败',
            description: err.toString(),
            ...toastConfig.error,
          })
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

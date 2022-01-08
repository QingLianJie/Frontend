import { useToast } from '@chakra-ui/react'
import Head from 'next/head'
import React, { FormEvent, useState } from 'react'
import { RiMailFill } from 'react-icons/ri'
import BlockLink from '../components/common/action/link/BlockLink'
import CenterContainer from '../components/common/container/Center'
import HorizontalContainer from '../components/common/container/Horizontal'
import CardForm from '../components/common/form/CardForm'
import Input from '../components/common/form/input/FormInput'
import SubmitButton from '../components/common/form/SubmitButton'
import { BASE_API_URL } from '../data/api-config'
import { toastConfig } from '../utils/config/toast'

const links: Links = [
  { href: '/login', text: '登录' },
  { href: '/signup', text: '注册' },
  { href: '/', text: '主页' },
]

const ResetPasswordPage = () => {
  const toast = useToast()
  const [email, setEmail] = useState('')
  const baseURL = BASE_API_URL

  const handleReset = (e: FormEvent) => {
    e.preventDefault()

    fetch(`${baseURL}/rest-auth/password/reset/`, {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: {
        'content-type': 'application/json',
      },
      mode: 'cors',
      credentials: 'include',
    })
      .then(async res => {
        if (res.ok) {
          toast({
            title: '发送重置邮件成功，请打开邮件内的链接重置密码',
            ...toastConfig.ok,
          })
        } else {
          const data = await res.json()
          Object.values(data).forEach(d => {
            toast({
              title: '发送重置邮件失败',
              description: d as string,
              ...toastConfig.error,
            })
          })
        }
      })
      .catch((err: Error) => {
        console.log('Reset Send Error -', err)
        toast({
          title: '发送重置邮件失败',
          description: err.toString(),
          ...toastConfig.error,
        })
      })
  }

  return (
    <CenterContainer screen>
      <Head>
        <title>重置密码 - 清廉街</title>
      </Head>
      <CardForm heading={'重置密码'} action={handleReset}>
        <Input
          type="email"
          name="email"
          placeholder="邮箱"
          icon={RiMailFill}
          action={e => setEmail(e.target.value)}
        />

        <SubmitButton color="yellow" text="发送重置邮件" />

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

export default ResetPasswordPage

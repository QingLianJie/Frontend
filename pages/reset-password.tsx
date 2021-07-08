import Head from 'next/head'
import { RiLockPasswordFill, RiMailFill, RiUserFill } from 'react-icons/ri'
import AuthForm from '../components/auth-form/Form'
import AuthHeading from '../components/auth-form/Heading'
import AuthInput from '../components/auth-form/Input'
import AuthLinks from '../components/auth-form/Links'
import AuthSubmit from '../components/auth-form/Submit'

const ResetPasswordPage = () => {
  return (
    <>
      <Head>
        <title>重置密码 - 清廉街</title>
      </Head>
      <AuthForm action={e => e.preventDefault()}>
        <AuthHeading>重置密码</AuthHeading>

        <AuthSubmit color="teal" text="还没有这个功能" />

        <AuthLinks
          links={[
            { href: '/login', text: '登录' },
            { href: '/signup', text: '注册' },
            { href: '/', text: '主页' },
          ]}
        />
      </AuthForm>
    </>
  )
}

export default ResetPasswordPage

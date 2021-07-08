import Head from 'next/head'
import { RiLockPasswordFill, RiMailFill, RiUserFill } from 'react-icons/ri'
import AuthForm from '../components/auth-form/Form'
import AuthHeading from '../components/auth-form/Heading'
import AuthInput from '../components/auth-form/Input'
import AuthLinks from '../components/auth-form/Links'
import AuthSubmit from '../components/auth-form/Submit'

const SignupPage = () => {
  return (
    <>
      <Head>
        <title>注册 - 清廉街</title>
      </Head>
      <AuthForm action={e => e.preventDefault()}>
        <AuthHeading>
          注册 <strong>清廉街</strong> 账号
        </AuthHeading>

        <AuthInput
          type="text"
          placeholder="用户名"
          icon={RiUserFill}
          action={() => {}}
        />

        <AuthInput
          type="email"
          placeholder="邮箱"
          icon={RiMailFill}
          action={() => {}}
        />

        <AuthInput
          type="password"
          placeholder="密码"
          icon={RiLockPasswordFill}
          action={() => {}}
        />

        <AuthInput
          type="password"
          placeholder="再次输入密码"
          icon={RiLockPasswordFill}
          action={() => {}}
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

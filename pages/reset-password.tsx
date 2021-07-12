import Head from 'next/head'
import CenterBox from '../components/ui/box/CenterBox'
import HorizontalBox from '../components/ui/box/HorizontalBox'
import SubmitButton from '../components/ui/button/SubmitButton'
import CardForm from '../components/ui/form/CardForm'
import TextLink from '../components/ui/link/TextLink'

const links: Links = [
  { href: '/login', text: '登录' },
  { href: '/signup', text: '注册' },
  { href: '/', text: '主页' },
]

const ResetPasswordPage = () => {
  return (
    <CenterBox screen>
      <Head>
        <title>重置密码 - 清廉街</title>
      </Head>
      <CardForm heading={'重置密码'} action={e => e.preventDefault()}>
        <SubmitButton color="teal" text="还没有这个功能" />

        <HorizontalBox center divider>
          {links.map(link => (
            <TextLink {...link} key={link.href} />
          ))}
        </HorizontalBox>
      </CardForm>
    </CenterBox>
  )
}

export default ResetPasswordPage

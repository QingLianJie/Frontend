import Head from 'next/head'
import CenterBox from '../components/common/box/CenterBox'
import HorizontalBox from '../components/common/box/HorizontalBox'
import SubmitButton from '../components/common/form/SubmitButton'
import CardForm from '../components/common/form/CardForm'
import TextLink from '../components/common/link/TextLink'

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
            <TextLink href={link.href} key={link.href}>
              {link.text}
            </TextLink>
          ))}
        </HorizontalBox>
      </CardForm>
    </CenterBox>
  )
}

export default ResetPasswordPage

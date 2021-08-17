import Head from 'next/head'
import CenterContainer from '../components/common/container/Center'
import HorizontalContainer from '../components/common/container/Horizontal'
import SubmitButton from '../components/common/form/SubmitButton'
import CardForm from '../components/common/form/CardForm'
import BlockLink from '../components/common/action/link/BlockLink'
import ButtonLink from '../components/common/action/link/ButtonLink'

const links: Links = [
  { href: '/login', text: '登录' },
  { href: '/signup', text: '注册' },
  { href: '/', text: '主页' },
]

const ResetPasswordPage = () => {
  return (
    <CenterContainer screen>
      <Head>
        <title>重置密码 - 清廉街</title>
      </Head>
      <CardForm heading={'重置密码'} action={e => e.preventDefault()}>
        <ButtonLink
          color="yellow"
          full
          external
          href="https://qinglianjie.cn/accounts/password/reset/"
        >
          去旧网站重置密码
        </ButtonLink>

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

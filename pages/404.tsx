import { useRouter } from 'next/router'
import ErrorPage from '../components/template/ErrorPage'

const NotFoundPage = () => {
  const router = useRouter()

  return (
    <ErrorPage
      title="找不到页面"
      href={router.query.from ? (router.query.from as string) : '/404'}
      messages={['404 刚才的页面消失了，', '一会儿再试试吧']}
    />
  )
}

export default NotFoundPage

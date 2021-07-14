import { useRouter } from 'next/router'
import ErrorPage from '../components/template/ErrorPage'

const NotFoundPage = () => {
  const router = useRouter()
  const { from } = router.query

  return (
    <ErrorPage
      title="找不到页面"
      href={from as string}
      message="404 刚才的页面消失了，"
    />
  )
}

export default NotFoundPage

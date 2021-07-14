import ErrorPage from '../components/template/ErrorPage'

const ServerErrorPage = () => {
  return (
    <ErrorPage title="服务器故障" href="/500" message="500 服务器出现故障，" />
  )
}

export default ServerErrorPage

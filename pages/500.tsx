import ErrorPage from '../components/layout/template/ErrorPage'

const ServerErrorPage = () => {
  return (
    <ErrorPage
      title="服务器故障"
      href="/500"
      messages={['500 服务器出现故障，', '一会儿再试试吧']}
    />
  )
}

export default ServerErrorPage

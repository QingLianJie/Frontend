import PlaceholderHeading from '../../components/common/heading/Placeholder'
import PlaceholderPage from './PlaceholderPage'

interface ErrorPageProps {
  title: string
  messages: string[]
  href: string
}

const ErrorPage = ({ title, messages, href }: ErrorPageProps) => {
  return (
    <PlaceholderPage title={title}>
      <PlaceholderHeading
        title={title}
        messages={messages}
        href={href}
        home
        feedback
      />
    </PlaceholderPage>
  )
}

export default ErrorPage

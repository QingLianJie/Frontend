import PlaceholderHeading from '../../common/typography/Placeholder'
import PlaceholderPage from './PlaceholderPage'

interface DevelopmentPageProps {
  title: string
  href: string
}

const DevelopmentPage = ({ title, href }: DevelopmentPageProps) => {
  return (
    <PlaceholderPage title={title}>
      <PlaceholderHeading
        title={title}
        messages={['这个功能还在开发中，', '敬请期待。']}
        href={href}
        back
        feedback
      />
    </PlaceholderPage>
  )
}

export default DevelopmentPage

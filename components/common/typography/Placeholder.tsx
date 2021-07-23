import { Button, Heading, HStack, VStack } from '@chakra-ui/react'
import BreadcrumbLink from '../action/link/BreadcrumbLink'
import ButtonLink from '../action/link/ButtonLink'

interface PlaceholderHeadingProps {
  href: string
  title: string
  messages: string[]
  back?: boolean
  home?: boolean
  feedback?: boolean
}

const PlaceholderHeading = ({
  href,
  title,
  messages,
  back,
  home,
  feedback,
}: PlaceholderHeadingProps) => {
  return (
    <>
      <VStack my="4" spacing="4" align="start">
        <BreadcrumbLink href={href}>{title}</BreadcrumbLink>
        {messages.map((message, index) => (
          <Heading as="p" size="lg" fontWeight="600" key={index}>
            {message}
          </Heading>
        ))}
      </VStack>
      <HStack spacing="3" my="6">
        {home && <ButtonLink href="/">返回主页</ButtonLink>}
        {back && (
          <Button onClick={() => window.history.back()}>返回上一页</Button>
        )}
        {feedback && (
          <ButtonLink href="/feedback" color="green">
            提供反馈
          </ButtonLink>
        )}
      </HStack>
    </>
  )
}

export default PlaceholderHeading

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Heading,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import ButtonLink from '../../components/common/link/ButtonLink'
import PlaceholderPage from './PlaceholderPage'

interface ErrorPageProps {
  title: string
  message: string
  href: string
}

const ErrorPage = ({ title, message, href }: ErrorPageProps) => {
  return (
    <PlaceholderPage title={title}>
      <VStack my="4" spacing="4" align="start">
        <Breadcrumb>
          <BreadcrumbItem>
            <NextLink href="/" passHref>
              <BreadcrumbLink>清廉街</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <NextLink href={href} passHref>
              <BreadcrumbLink>{title}</BreadcrumbLink>
            </NextLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Heading as="p" size="lg" fontWeight="600">
          {message}
        </Heading>
        <Heading as="p" size="lg" fontWeight="600">
          一会再试试吧。
        </Heading>
      </VStack>
      <HStack spacing="3" my="6">
        <ButtonLink href="/">返回主页</ButtonLink>
        <ButtonLink href="/feedback" color="green">
          提供反馈
        </ButtonLink>
      </HStack>
    </PlaceholderPage>
  )
}

export default ErrorPage

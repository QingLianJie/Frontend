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

interface DevelopmentPageProps {
  title: string
  href: string
}

const DevelopmentPage = ({ title, href }: DevelopmentPageProps) => {
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
          这个功能还在开发中，
        </Heading>
        <Heading as="p" size="lg" fontWeight="600">
          敬请期待。
        </Heading>
      </VStack>
      <HStack spacing="3" my="6">
        <Button onClick={() => window.history.back()}>返回上一页</Button>
        <ButtonLink href="/feedback" color="green">
          提供建议
        </ButtonLink>
      </HStack>
    </PlaceholderPage>
  )
}

export default DevelopmentPage

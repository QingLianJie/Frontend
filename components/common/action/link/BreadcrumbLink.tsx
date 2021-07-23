import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink as ChakraBreadcrumbLink,
} from '@chakra-ui/react'
import { default as NextLink } from 'next/link'
import { ReactNode } from 'react'

interface BreadcrumbLinkProps {
  href: string
  children: ReactNode | ReactNode[]
}

const BreadcrumbLink = ({ href, children }: BreadcrumbLinkProps) => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <NextLink href="/" passHref>
          <ChakraBreadcrumbLink>清廉街</ChakraBreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <NextLink href={href} passHref>
          <ChakraBreadcrumbLink>{children}</ChakraBreadcrumbLink>
        </NextLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default BreadcrumbLink

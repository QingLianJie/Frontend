import { Icon, Link, SystemProps, Text, VStack } from '@chakra-ui/react'
import { RiBuildingLine, RiGlobalLine } from 'react-icons/ri'
import { Card } from '~/components/common/Card'
import { schoolLinks } from '~/contents/links/external/school'

interface ExternalProps extends SystemProps {
  id: string
}

export const External = ({ id, ...props }: ExternalProps) => (
  <Card title="学校" id={id} {...props}>
    <VStack
      align="flex-start"
      justify="flex-start"
      spacing="0"
      w="full"
      maxW="full"
      pt="2"
      pb="4"
    >
      {schoolLinks.map(link => (
        <Link
          href={link.href}
          key={link.name}
          title={link.name}
          w="full"
          maxW="full"
          px="6"
          py="2"
          d="flex"
          alignItems="center"
          isExternal
          _hover={{
            textDecor: 'none',
            bg: 'gray.200',
          }}
          _dark={{
            _hover: {
              bg: 'gray.700',
            },
          }}
        >
          <Icon
            as={link.lan ? RiBuildingLine : RiGlobalLine}
            aria-label="外部链接"
            mr="4"
            fontSize="xl"
            color="gray.500"
            title={link.lan ? '需要校园网' : '无需校园网'}
          />
          <Text as="span" w="full" isTruncated>
            {link.name}
          </Text>
        </Link>
      ))}
      <Text
        px="6"
        pt="4"
        pb="2"
        fontSize="sm"
        lineHeight="tall"
        color="gray.500"
        _dark={{ color: 'gray.400' }}
      >
        想要添加其他与学校有关的链接？通过&nbsp;
        <Link
          href="https://www.yuque.com/lifeni/qing/contact"
          isExternal
          color="purple.500"
          _hover={{ color: 'purple.700' }}
          _dark={{
            color: 'blue.400',
            _hover: {
              color: 'blue.300',
            },
          }}
          textUnderlineOffset="0.25rem"
        >
          联系方式
        </Link>
        &nbsp;告诉我们。
      </Text>
    </VStack>
  </Card>
)

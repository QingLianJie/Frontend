import { Heading, Icon, Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'

interface PageHeadingProps {
  title: string
  icon?: FC
  color?: string
  description?: string
}
const PageHeading = ({ title, icon, color, description }: PageHeadingProps) => {
  return (
    <VStack
      w="full"
      pt={{ base: 4, md: 6 }}
      pb="8"
      px="4"
      alignItems="flex-start"
    >
      <Heading
        as="h2"
        fontSize="2xl"
        lineHeight="1.5"
        d="flex"
        alignItems="center"
      >
        {icon && (
          <Icon
            as={icon}
            me="4"
            w="8"
            h="8"
            color={`${color}.500`}
            _dark={{ color: `${color}.400` }}
          />
        )}
        {title}
      </Heading>
      {description && <Text as="p">{description}</Text>}
    </VStack>
  )
}

export default PageHeading

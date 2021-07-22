import { Heading, Text, VStack } from '@chakra-ui/react'

interface PageHeadingProps {
  title: string
  description?: string
}
const PageHeading = ({ title, description }: PageHeadingProps) => {
  return (
    <VStack
      w="full"
      pt={{ base: 4, md: 6 }}
      pb="8"
      px="4"
      alignItems="flex-start"
    >
      <Heading as="h2" fontSize="2xl" lineHeight="1.5">
        {title}
      </Heading>
      {description && <Text as="p">{description}</Text>}
    </VStack>
  )
}

export default PageHeading

import { HStack, Icon, Tab, Text } from '@chakra-ui/react'
import { FC, ReactNode, ReactNodeArray } from 'react'

interface MemberTabProps {
  icon: FC
  children: ReactNode | ReactNodeArray
}

const MemberTab = ({ icon, children }: MemberTabProps) => {
  return (
    <Tab>
      <HStack px={{ base: 0, md: 0.5 }} py={{ base: 0, md: 1 }} spacing="4">
        <Icon as={icon} style={{ minWidth: '1em' }} />
        <Text fontWeight="bold">{children}</Text>
      </HStack>
    </Tab>
  )
}
export default MemberTab

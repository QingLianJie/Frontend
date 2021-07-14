import { HStack, Icon, Tab, Text } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'

interface MemberTabProps {
  icon: FC
  children: ReactNode | ReactNode[]
}

const MemberTab = ({ icon, children }: MemberTabProps) => {
  return (
    <Tab>
      <HStack p={{ base: 0, md: 0.5 }} spacing="3">
        <Icon as={icon} style={{ minWidth: '1em' }} />
        <Text fontWeight="600">{children}</Text>
      </HStack>
    </Tab>
  )
}
export default MemberTab

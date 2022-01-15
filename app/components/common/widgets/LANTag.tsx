import { SystemProps, Tag } from '@chakra-ui/react'

interface LANTagProps extends SystemProps {}

export const LANTag = ({ ...props }: LANTagProps) => (
  <Tag
    fontSize="xs"
    ml="2"
    colorScheme="gray"
    transition="all 0.2s"
    title="需要校园网才能访问"
    {...props}
  >
    校园网
  </Tag>
)

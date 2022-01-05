import { Tag } from '@chakra-ui/tag'

const LanTag = () => {
  return (
    <Tag
      fontSize="xs"
      ml="2"
      color="gray.500"
      _dark={{ color: 'gray.400' }}
      transition="all 0.2s"
    >
      校园网
    </Tag>
  )
}

export default LanTag

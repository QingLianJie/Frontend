import { Link, SimpleGrid, Text } from '@chakra-ui/react'
import { Card } from '~/components/common/Card'
import { DeleteMember } from './actions/DeleteMember'
import { Logout } from './actions/Logout'
import { UploadScores } from './actions/UploadScores'
import { ChangePassword } from './modals/ChangePassword'

export const Controls = () => {
  return (
    <Card title="账号管理">
      <SimpleGrid
        w="full"
        templateColumns={{
          base: 'repeat(auto-fill, minmax(50%, 1fr))',
          sm: '100%',
        }}
        px={{ base: '4', sm: '0' }}
        pb="0"
        pt={{ base: '2', sm: '2' }}
      >
        <Logout />
        <UploadScores />
        <ChangePassword />
        <DeleteMember />
      </SimpleGrid>

      <Text
        px="6"
        pt="2"
        pb="6"
        fontSize="sm"
        lineHeight="tall"
        color="gray.500"
        _dark={{ color: 'gray.400' }}
      >
        没有头像？我们使用&nbsp;
        <Link
          href="https://gravatar.com/"
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
          Gravatar
        </Link>
        &nbsp;来提供头像，可以去注册一个。
      </Text>
    </Card>
  )
}

import { Link, Text, VStack } from '@chakra-ui/react'
import { Card } from '~/components/common/Card'

export const Help = () => {
  return (
    <Card title="帮助">
      <VStack px="6" pt="3" pb="6" lineHeight="tall" fontSize="smd" spacing="3">
        <Text>
          登录「清廉街」账号后，可以在这里管理自己发表的评论、修改密码、注销账号等。
        </Text>
        <Text>
          如果此设备绑定 HEU
          账号并获取了数据，还可以选择上传自己的成绩到「清廉街」数据库，帮助我们补充课程数据，
          <Link
            href="https://www.yuque.com/lifeni/qing/upload-scores"
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
            点击这里
          </Link>{' '}
          了解更多。
        </Text>
      </VStack>
    </Card>
  )
}

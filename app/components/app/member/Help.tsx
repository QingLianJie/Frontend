import { Text, VStack } from '@chakra-ui/react'
import { Card } from '~/components/common/Card'

export const Help = () => {
  return (
    <Card title="帮助">
      <VStack px="6" pt="3" pb="6" lineHeight="tall" fontSize="smd" spacing="3">
        <Text>
          登录「清廉街」账号后，可以在这里管理已经发表的评论，也可以修改密码、注销账号等。
        </Text>
        <Text>
          如果此设备绑定 HEU
          账号并获取了数据，还可以选择上传自己的成绩到「清廉街」数据库，帮助我们补充课程数据。
        </Text>
        <Text>
          同时，为了避免重复数据统计，上传成绩时将会根据学号和账号生成匿名的 MD5
          标识符。
        </Text>
      </VStack>
    </Card>
  )
}

import { Link, Text } from '@chakra-ui/react'

export const Tip = () => (
  <Text
    px="4"
    pt="1"
    fontSize="sm"
    lineHeight="tall"
    color="gray.500"
    _dark={{ color: 'gray.400' }}
  >
    由于新版网站统计方式变化，所以部分课程数据可能会出现错误，因此数据仅供参考，
    <Link
      href="https://www.yuque.com/lifeni/qing/collect-data"
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
)

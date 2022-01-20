import { Text, Skeleton, VStack, Link } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Link as RemixLink, useTransition } from 'remix'
import { Card } from '~/components/common/Card'
import { listIt } from '~/utils/system'

export const History = () => {
  const [history, setHistory] = useState<string[]>([])
  const [isLoaded, setIsLoaded] = useState<boolean>(false)

  const transition = useTransition()

  useEffect(() => {
    if (transition.state === 'idle') {
      const session = sessionStorage.getItem('search-history')
      setHistory(session ? JSON.parse(session) : [])
      setIsLoaded(true)
    }
  }, [transition])

  const parseSearchParams = (str: string) => {
    const urls = new URLSearchParams(str)
    const arr = []
    for (const [key, value] of urls.entries()) {
      if (value !== '') {
        if (key === 'credit') arr.push(` ${value} 学分`)
        else if (key === 'period') arr.push(` ${value} 学时`)
        else arr.push(value)
      }
    }
    if (arr.length !== 0) return listIt(arr)
    return '没有查询条件（全部课程）'
  }

  return (
    <Card title="历史搜索">
      <VStack w="full" px="5" pb="6" pt="3">
        {history.length !== 0 ? (
          <VStack w="full" px="1" spacing="2" align="flex-start">
            {history.map(item => (
              <Link
                as={RemixLink}
                to={item}
                key={item}
                w="fit-content"
                isTruncated
                fontSize="smd"
                color="purple.500"
                _dark={{ color: 'blue.400' }}
                _hover={{ textDecor: 'underline' }}
                textUnderlineOffset="0.25rem"
              >
                {parseSearchParams(item)}
              </Link>
            ))}
          </VStack>
        ) : (
          <Skeleton isLoaded={isLoaded}>
            <Text lineHeight="tall" fontSize="smd" px="1">
              暂无搜索过的课程记录，搜索记录只会储存在浏览器里，而且会在关闭页面后消失。
            </Text>
          </Skeleton>
        )}
      </VStack>
    </Card>
  )
}

import { Flex, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { HomeCard } from '~/components/common/containers/HomeCard'
import version from '~/version.json'

export const LogMessage = () => {
  const [message, setMessage] = useState<string[]>([])
  useEffect(
    () =>
      setMessage([
        `Dat. ${new Date().toISOString()}`,
        `Ver. ${version.version}` || 'Unknown Verison',
        `Age. ${navigator.userAgent}`,
        `Loc. ${location.href}`,
        `Int. ${localStorage.getItem('自定义 API 地址') || 'No Custom API'}`,
        `Scr. ${screen.width}x${screen.height} ${devicePixelRatio * 100}% ${
          screen.orientation.type
        }`,
      ]),
    []
  )

  return (
    <HomeCard title="调试信息">
      <Flex pt="3" pb="6" px="6" fontFamily="mono" fontSize="sm">
        {message.length !== 0 ? (
          <Text as="ul" lineHeight="tall">
            {message.map(item => (
              <Text
                as="li"
                key={item}
                listStyleType="none"
                overflowWrap="break-word"
              >
                - {item}
              </Text>
            ))}
          </Text>
        ) : (
          <Text>- Loading ...</Text>
        )}
      </Flex>
    </HomeCard>
  )
}

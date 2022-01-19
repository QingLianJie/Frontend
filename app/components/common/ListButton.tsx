import type { ButtonProps } from '@chakra-ui/react'
import { Button, Icon, Text } from '@chakra-ui/react'
import { useEffect } from 'react'
import type { IconType } from 'react-icons'
import { useNavigate } from 'react-router'
import type { MemberType, IResponse } from '~/types'
import { useResponseToast } from '~/utils/hooks'

interface ListButtonProps extends ButtonProps {
  text: string
  icon: IconType
  color: string
  action?: IResponse<MemberType>
}

export const ListButton = ({
  text,
  action,
  icon,
  color,
  ...props
}: ListButtonProps) => {
  const navigate = useNavigate()
  const toast = useResponseToast<MemberType>()

  useEffect(() => {
    if (action) {
      toast({ ...action })
      if (action.to && action.status === '可以') {
        navigate(action.to)
      }
    }
  }, [action])

  return (
    <Button
      w="full"
      h={{ base: 'auto', sm: '10' }}
      alignItems="center"
      justifyContent={{ base: 'center', sm: 'flex-start' }}
      pl={{ base: '4', sm: '6' }}
      pr={{ base: '6', sm: '6' }}
      py={{ base: '3', sm: '0' }}
      fontWeight="normal"
      rounded={{ base: 'md', sm: 'none' }}
      variant="ghost"
      {...props}
    >
      <Icon
        as={icon}
        aria-label={text}
        mr="4"
        fontSize="xl"
        color={`${color}.500`}
      />
      <Text as="span" isTruncated>
        {text}
      </Text>
    </Button>
  )
}

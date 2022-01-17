import { ButtonProps, Button, Icon, Text } from '@chakra-ui/react'
import { IconType } from 'react-icons'

interface IconButtonProps extends ButtonProps {
  icon: IconType
  text: string
}

export const IconButton = ({
  text,
  icon,
  color = 'gray',
  ...props
}: IconButtonProps) => (
  <Button
    p="1"
    py="0"
    color={`${color}.500`}
    _hover={{
      color: `${color}.600`,
      textDecor: 'none',
    }}
    _active={{
      color: `${color}.600`,
    }}
    _dark={{
      color: `${color}.400`,
      _hover: {
        color: `${color}.300`,
      },
      _active: {
        color: `${color}.300`,
      },
    }}
    variant="link"
    lineHeight="tall"
    rounded="sm"
    {...props}
  >
    <Icon aria-label={text} as={icon} mr="3" fontSize="lg" />
    <Text isTruncated fontSize="smd">
      {text}
    </Text>
  </Button>
)

import { Button, Icon, Text, type ButtonProps } from '@chakra-ui/react'
import { type IconType } from 'react-icons'

interface ListButtonProps extends ButtonProps {
  text: string
  icon: IconType
  color: string
}

export const ListButton = ({
  text,
  icon,
  color,
  ...props
}: ListButtonProps) => (
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

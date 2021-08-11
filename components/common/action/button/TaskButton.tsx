import { Button, Icon, Spacer, Text, Wrap, WrapItem } from '@chakra-ui/react'
import { FC } from 'react'

interface TaskButton {
  color: string
  icon: FC
  title: string
  description: string
  disabled?: boolean
  action: () => void
}

const TaskButton = ({
  color,
  icon,
  title,
  description,
  disabled,
  action,
}: TaskButton) => {
  return (
    <Button
      onClick={action}
      isFullWidth
      variant="outline"
      px="6"
      py="5"
      bg="white"
      _dark={{ bg: 'gray.800' }}
      disabled={disabled}
      _disabled={{ cursor: 'not-allowed', opacity: 0.5 }}
      h="unset"
    >
      <Wrap spacing="3" w="full">
        <WrapItem d="flex" alignItems="center">
          <Icon
            as={icon}
            color={`${color}.500`}
            _dark={{ color: `${color}.400` }}
            w="5"
            h="5"
            me="3"
          />
          <Text>{title}</Text>
        </WrapItem>
        <Spacer />

        <WrapItem d="flex" alignItems="center">
          <Text fontSize="sm" color="gray.500" fontWeight="400">
            {description}
          </Text>
        </WrapItem>
      </Wrap>
    </Button>
  )
}

export default TaskButton

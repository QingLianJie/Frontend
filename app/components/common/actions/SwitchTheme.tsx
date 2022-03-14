import {
  HStack,
  Icon,
  IconButton,
  Spacer,
  Text,
  Tooltip,
  useColorMode,
  type SystemProps,
} from '@chakra-ui/react'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'

interface SwitchThemeProps extends SystemProps {
  hasTooltip?: boolean
}

export const SwitchTheme = ({ hasTooltip, ...props }: SwitchThemeProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isLight = colorMode === 'light'

  return (
    <Tooltip
      hasArrow
      label={isLight ? '变暗' : '变亮'}
      px="2.5"
      py="1.5"
      isDisabled={!hasTooltip}
    >
      <IconButton
        onClick={toggleColorMode}
        aria-label="切换夜间模式"
        icon={<Icon as={isLight ? RiMoonLine : RiSunLine} />}
        rounded="full"
        size="md"
        fontSize="lg"
        color="gray.500"
        bg="transparent"
        _hover={{
          color: 'gray.700',
          bg: 'gray.200',
        }}
        _dark={{
          color: 'gray.400',
          _hover: {
            color: 'gray.200',
            bg: 'gray.800',
          },
        }}
        {...props}
      />
    </Tooltip>
  )
}

export const SwitchThemeText = () => (
  <HStack w="full">
    <Text
      fontSize="sm"
      color="gray.500"
      _dark={{
        color: 'gray.400',
      }}
      transition="all 0.2s"
    >
      点击按钮，切换颜色模式
    </Text>
    <Spacer />
    <SwitchTheme />
  </HStack>
)

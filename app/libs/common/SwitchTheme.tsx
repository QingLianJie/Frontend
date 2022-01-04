import { useColorMode, Tooltip, IconButton, Icon } from '@chakra-ui/react'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'
import type { SystemProps } from '@chakra-ui/react'

interface SwitchThemeProps extends SystemProps {
  hasTooltip?: boolean
}

const SwitchTheme = ({ hasTooltip, ...props }: SwitchThemeProps) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isLight = colorMode === 'light'
  return (
    <Tooltip
      hasArrow
      label={isLight ? '变暗' : '变亮'}
      px="2.5"
      py="1.5"
      rounded="md"
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
            bg: 'gray.700',
          },
        }}
        {...props}
      />
    </Tooltip>
  )
}

export default SwitchTheme

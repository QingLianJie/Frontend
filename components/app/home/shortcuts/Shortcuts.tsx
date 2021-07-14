import { VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { shortcutLinks } from '../../../../data/shortcutLinks'
import HomeGroup from '../Group'
import ShortcutLink from './Link'

const Shortcuts = () => {
  return (
    <HomeGroup title={'快捷方式'}>
      <VStack spacing="1" align="start" w="full">
        {shortcutLinks.map((link, index) => (
          <ShortcutLink
            href={link.href as string}
            color={link.color}
            icon={link.icon as FC}
            key={index}
          >
            {link.text}
          </ShortcutLink>
        ))}
      </VStack>
    </HomeGroup>
  )
}

export default Shortcuts

import { Grid } from '@chakra-ui/react'
import { FC } from 'react'
import { RiLinksLine } from 'react-icons/ri'
import { shortcutLinks } from '../../../../data/shortcut-links'
import HomeGroup from '../Group'
import ShortcutLink from './Link'

const Shortcuts = () => {
  return (
    <HomeGroup title={'快捷方式'} icon={RiLinksLine}>
      <Grid
        templateColumns="repeat(auto-fit, 4.5rem)"
        justifyContent={{ base: 'center', lg: 'flex-start' }}
        gap={{ base: 1, lg: 3 }}
        w="full"
      >
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
      </Grid>
    </HomeGroup>
  )
}

export default Shortcuts

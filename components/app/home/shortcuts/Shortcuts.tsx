import { Grid } from '@chakra-ui/react'
import { FC } from 'react'
import { RiLinksLine } from 'react-icons/ri'
import { shortcutLinks } from '../../../../data/shortcut-links'
import HomeGroup from '../Group'
import ShortcutLink from './Link'

const Shortcuts = () => {
  return (
    <HomeGroup>
      <Grid
        templateColumns="repeat(auto-fit, 4.5rem)"
        justifyContent="center"
        gap={{ base: 1, md: 0 }}
        w="full"
        p={{ base: 2, md: 4 }}
        rounded="md"
        borderWidth={{ base: 'none', md: '1px' }}
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

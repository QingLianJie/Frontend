import { Grid, useBreakpointValue, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { RiLinksLine } from 'react-icons/ri'
import { shortcutLinks } from '../../../../data/shortcut-links'
import HomeGroup from '../Group'
import ShortcutIconLink from './link/Icon'
import ShortcutListLink from './link/List'

const Shortcuts = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false })

  return (
    <HomeGroup title="常用" icon={RiLinksLine}>
      {isMobile ? (
        <Grid
          templateColumns="repeat(auto-fit, 4.5rem)"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          gap={{ base: 1, md: 4, lg: 0 }}
          w="full"
          rounded="md"
        >
          {shortcutLinks.map((link, index) => (
            <ShortcutIconLink
              href={link.href as string}
              color={link.color}
              icon={link.icon as FC}
              key={index}
            >
              {link.text}
            </ShortcutIconLink>
          ))}
        </Grid>
      ) : (
        <VStack align="start" spacing="0" my="-2.5" mx="-2">
          {shortcutLinks.map((link, index) => (
            <ShortcutListLink
              href={link.href as string}
              color={link.color}
              icon={link.icon as FC}
              key={index}
            >
              {link.long}
            </ShortcutListLink>
          ))}
        </VStack>
      )}
    </HomeGroup>
  )
}

export default Shortcuts

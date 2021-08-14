import { Grid, useBreakpointValue, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { RiLinksLine } from 'react-icons/ri'
import { shortcutLinks } from '../../../data/shortcut-links'
import IconLink from '../../common/action/link/IconLink'
import MenuListLink from '../../common/action/link/MenuListLink'
import GroupContainer from '../../common/container/Group'

const Shortcuts = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false })

  return (
    <GroupContainer title="常用" icon={RiLinksLine}>
      {isMobile === undefined ? null : isMobile ? (
        <Grid
          templateColumns="repeat(auto-fit, 4.75rem)"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          gap={{ base: 0.5, md: 4 }}
          py="1"
          w="full"
          rounded="md"
        >
          {shortcutLinks.map((link, index) => (
            <IconLink
              href={link.href as string}
              color={link.color}
              icon={link.icon as FC}
              key={index}
            >
              {link.text}
            </IconLink>
          ))}
        </Grid>
      ) : (
        <VStack align="start" spacing="0" ms="-3" my="-2.5">
          {shortcutLinks.map((link, index) => (
            <MenuListLink
              href={link.href as string}
              color={link.color}
              icon={link.icon as FC}
              key={index}
            >
              {link.long}
            </MenuListLink>
          ))}
        </VStack>
      )}
    </GroupContainer>
  )
}

export default Shortcuts

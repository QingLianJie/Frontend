import { HStack } from '@chakra-ui/react'
import { FC } from 'react'
import { routerLinks } from '../../../../data/router-links'
import NavLink from './Link'
import NavMenu from './menu/Menu'

const HeaderNav = () => {
  return (
    <HStack mx="10" spacing="1">
      {routerLinks.map((link, index) =>
        link.type === 'MENU' ? (
          <NavMenu
            color={link.color}
            icon={link.icon as FC}
            links={link.children as RouterLink[]}
            key={index}
          >
            {link.text}
          </NavMenu>
        ) : (
          <NavLink
            href={link.href as string}
            color={link.color}
            icon={link.icon as FC}
            key={index}
          >
            {link.text}
          </NavLink>
        )
      )}
    </HStack>
  )
}

export default HeaderNav

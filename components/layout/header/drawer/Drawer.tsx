import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure,
  VStack,
} from '@chakra-ui/react'
import { FC } from 'react'
import { RiMenuFill } from 'react-icons/ri'
import { routerLinks } from '../../../../data/routerLinks'
import DrawerAccordion from './Accordion'
import DrawerLink from './Link'

const HeaderDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        alignItems="center"
        justifyContent="center"
        me="4"
        aria-label="Menu"
        icon={<RiMenuFill />}
        onClick={onOpen}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader px="10" py="12" borderBottomWidth="1px">
            清廉街
          </DrawerHeader>
          <DrawerBody py="6">
            <VStack spacing="1" align="start" w="full">
              {routerLinks.map((link, index) =>
                link.type === 'MENU' ? (
                  <DrawerAccordion
                    color={link.color}
                    icon={link.icon as FC}
                    links={link.children as RouterLink[]}
                    key={index}
                  >
                    {link.text}
                  </DrawerAccordion>
                ) : (
                  <DrawerLink
                    href={link.href as string}
                    color={link.color}
                    icon={link.icon as FC}
                    key={index}
                  >
                    {link.text}
                  </DrawerLink>
                )
              )}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default HeaderDrawer

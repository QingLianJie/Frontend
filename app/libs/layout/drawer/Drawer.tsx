import {
  Drawer as CharkraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
  useDisclosure,
} from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { meta } from '~/contents/meta/meta'
import { SwitchThemeText } from '~/libs/common/actions/SwitchTheme'
import {DrawerNav} from './Nav'

export const Drawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton
        aria-label="菜单"
        icon={<Icon as={RiMenuLine} fontSize="xl" />}
        onClick={onOpen}
        d={{ base: 'flex', md: 'none' }}
        rounded="full"
        w="12"
        h="12"
        bg="gray.200"
        color="gray.500"
        _dark={{
          bg: 'gray.700',
          color: 'gray.400',
        }}
      />
      <CharkraDrawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            top="5"
            right="7"
            rounded="full"
            w="12"
            h="12"
            bg="gray.200"
            color="gray.500"
            _dark={{
              bg: 'gray.700',
              color: 'gray.400',
            }}
          />
          <DrawerHeader
            px="8"
            pt="8"
            pb="20vh"
            fontSize="lg"
            bg="gray.100"
            _dark={{ bg: 'gray.800' }}
            transition="all 0.2s"
          >
            {meta.name}
          </DrawerHeader>
          <DrawerBody
            py="8"
            px="5"
            bg="white"
            _dark={{ bg: 'gray.700' }}
            transition="all 0.2s"
          >
            <DrawerNav />
          </DrawerBody>
          <DrawerFooter
            px="8"
            py="5"
            bg="white"
            _dark={{ bg: 'gray.700' }}
            transition="all 0.2s"
          >
            <SwitchThemeText />
          </DrawerFooter>
        </DrawerContent>
      </CharkraDrawer>
    </>
  )
}

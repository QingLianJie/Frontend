import {
  Box,
  Divider,
  Drawer as CharkraDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  IconButton,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { RiMenuLine } from 'react-icons/ri'
import { useLocation } from 'remix'
import { SwitchThemeText } from '~/components/common/actions/SwitchTheme'
import { DrawerNav } from './Nav'

export const Drawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const isMobile = useBreakpointValue({ base: true, md: false })

  const location = useLocation()
  useEffect(() => {
    if (isOpen && isMobile) onClose()
  }, [location])

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
          bg: 'gray.800',
          color: 'gray.400',
        }}
        pointerEvents="auto"
      />
      {isMobile && (
        <CharkraDrawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          blockScrollOnMount={false}
          returnFocusOnClose={false}
        >
          <DrawerOverlay />
          <DrawerContent
            bg="white"
            _dark={{ bg: 'gray.800' }}
            transition="background 0.2s"
          >
            <DrawerCloseButton
              top="5"
              right="7"
              rounded="full"
              w="12"
              h="12"
              bg="gray.200"
              color="gray.500"
              _dark={{
                bg: 'gray.800',
                color: 'gray.400',
              }}
            />

            <DrawerHeader
              px="8"
              pt="8"
              pb="20vh"
              fontSize="lg"
              bg="gray.100"
              _dark={{ bg: 'gray.900' }}
              transition="all 0.2s"
            >
              清廉街
            </DrawerHeader>

            <DrawerBody
              py="8"
              px="5"
              bg="white"
              _dark={{ bg: 'gray.800' }}
              transition="all 0.2s"
            >
              <DrawerNav />
            </DrawerBody>

            <Box px="4">
              <Divider transition="all 0.2s" />
            </Box>

            <DrawerFooter
              px="8"
              py="5"
              bg="white"
              flexDir="column"
              _dark={{ bg: 'gray.800' }}
              transition="all 0.2s"
            >
              <SwitchThemeText />
            </DrawerFooter>
          </DrawerContent>
        </CharkraDrawer>
      )}
    </>
  )
}

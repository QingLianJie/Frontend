import { UseToastOptions } from '@chakra-ui/react'

export const toastConfig: {
  ok: UseToastOptions
  error: UseToastOptions
  warn: UseToastOptions
} = {
  ok: { status: 'success', isClosable: true },
  error: { status: 'error', isClosable: true },
  warn: { status: 'warning', isClosable: true },
}

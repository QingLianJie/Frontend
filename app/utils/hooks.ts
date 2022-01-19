import { useToast as useChakraToast, UseToastOptions } from '@chakra-ui/react'
import type { ResponseStatus } from '~/types'

export const statusMap: {
  [key in ResponseStatus]: 'success' | 'error' | 'warning'
} = {
  可以: 'success',
  不行: 'error',
  有问题: 'warning',
}

interface UseResponseToastOptions<T> extends Omit<UseToastOptions, 'status'> {
  status: ResponseStatus
  type?: T
  message?: string
}

export const useResponseToast = <T>() => {
  const toast = useChakraToast({
    position: 'bottom',
    variant: 'solid',
    containerStyle: {
      margin: '0 1.5rem 1.5rem 1.5rem',
      zIndex: '100',
      width: 'calc(100vw - 3rem)',
      maxWidth: '20rem',
    },
  })

  return ({ status, type, message, ...props }: UseResponseToastOptions<T>) => {
    toast({
      status: statusMap[status],
      title: message ?? `${type}${status}`,
      ...props,
    })
  }
}

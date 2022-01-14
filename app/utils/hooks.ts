import { useToast as useChakraToast, UseToastOptions } from '@chakra-ui/react'
import { statusMap } from './map'

interface UseToast extends Omit<UseToastOptions, 'status'> {
  status: ResponseStatus
}

export const useToast = () => {
  const toast = useChakraToast({
    position: 'bottom',
    variant: 'solid',
    containerStyle: {
      margin: '2rem',
      zIndex: '100',
    },
  })
  return ({ status, ...props }: UseToast) =>
    toast({ status: statusMap[status], ...props })
}

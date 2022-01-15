import { useToast as useChakraToast, UseToastOptions } from '@chakra-ui/react'
import { useNavigate } from 'remix'
import { statusMap } from './map'

interface UseNavToastOptions<T> extends Omit<UseToastOptions, 'status'> {
  status: ResponseStatus
  type?: T
  message?: string
  to?: string | false
}

export const useNavToast = <T>() => {
  const navigate = useNavigate()
  const toast = useChakraToast({
    position: 'bottom',
    variant: 'solid',
    containerStyle: {
      margin: '1.5rem',
      zIndex: '100',
      width: 'calc(100vw - 3rem)',
      maxWidth: '18rem',
    },
  })

  return ({ status, type, message, to, ...props }: UseNavToastOptions<T>) => {
    toast({
      status: statusMap[status],
      title: message ?? `${type}${status}`,
      ...props,
    })
    if (to) navigate(to)
  }
}

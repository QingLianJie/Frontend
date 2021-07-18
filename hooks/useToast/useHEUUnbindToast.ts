import { useToast } from '@chakra-ui/react'

const useHEUUnbindToast = () => {
  const toast = useToast()

  return {
    ok: () =>
      toast({
        title: '解除绑定成功',
        status: 'success',
        isClosable: true,
      }),

    error: (description: string) =>
      toast({
        title: '解除绑定失败',
        description: description,
        status: 'error',
        isClosable: true,
      }),
  }
}

export default useHEUUnbindToast

import { useToast } from '@chakra-ui/react'

const useHEUBindToast = () => {
  const toast = useToast()

  return {
    ok: () =>
      toast({
        title: '绑定成功',
        status: 'success',
        isClosable: true,
      }),

    error: (description: string) =>
      toast({
        title: '绑定失败',
        description: description,
        status: 'error',
        isClosable: true,
      }),
  }
}

export default useHEUBindToast

import { useToast } from '@chakra-ui/react'

export const useLoginToast = () => {
  const toast = useToast()
  return {
    ok: () =>
      toast({
        title: '登录成功',
        status: 'success',
        isClosable: true,
      }),
    error: (description: string) =>
      toast({
        title: '登录失败',
        description: description,
        status: 'error',
        isClosable: true,
      }),
  }
}

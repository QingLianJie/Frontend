import { useToast } from '@chakra-ui/react'

const useLogoutToast = () => {
  const toast = useToast()

  return {
    ok: () =>
      toast({
        title: '成功退出登录',
        status: 'success',
        isClosable: true,
      }),

    error: (description: string) =>
      toast({
        title: '退出登录失败',
        description: description,
        status: 'error',
        isClosable: true,
      }),
  }
}

export default useLogoutToast

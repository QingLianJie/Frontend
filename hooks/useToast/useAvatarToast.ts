import { useToast } from '@chakra-ui/react'

const useAvatarToast = () => {
  const toast = useToast()

  return {
    ok: () =>
      toast({
        title: '修改头像成功',
        status: 'success',
        isClosable: true,
      }),

    error: (description: string) =>
      toast({
        title: '修改头像失败',
        description: description,
        status: 'error',
        isClosable: true,
      }),
  }
}

export default useAvatarToast

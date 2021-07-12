import { useToast } from '@chakra-ui/react'

const useSignupToast = () => {
  const toast = useToast()

  return {
    ok: () =>
      toast({
        title: '注册成功',
        status: 'success',
        isClosable: true,
      }),

    name: () =>
      toast({
        title: '用户名不合适',
        description: '用户名只能包含英文字母、数字、横线、下划线和小数点',
        status: 'warning',
        isClosable: true,
      }),

    password: () =>
      toast({
        title: '密码不合适',
        description: '密码需要包含至少 8 个字符，并且不能是纯数字',
        status: 'warning',
        isClosable: true,
      }),

    diff: () =>
      toast({
        title: '两次密码不一致',
        status: 'warning',
        isClosable: true,
      }),

    error: (description: string) =>
      toast({
        title: '注册失败',
        description: description,
        status: 'error',
        isClosable: true,
      }),
  }
}

export default useSignupToast

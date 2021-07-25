import { useToast } from '@chakra-ui/react'

const useCourseCommentToast = () => {
  const toast = useToast()

  return {
    ok: () =>
      toast({
        title: '发布评论成功',
        status: 'success',
        isClosable: true,
      }),

    error: (description: string) =>
      toast({
        title: '发布评论失败',
        description: description,
        status: 'error',
        isClosable: true,
      }),
  }
}

export default useCourseCommentToast

import { useEffect } from 'react'
import { useNavigate } from 'remix'
import { type BridgeType, type IResponse, type MemberType } from '~/types'
import { useResponseToast } from '~/utils/hooks'

type ResponseType = MemberType | BridgeType

interface ResponseToastProps {
  action?: IResponse<ResponseType>
  state?: boolean
}

export const ResponseToast = ({ action, state = true }: ResponseToastProps) => {
  const navigate = useNavigate()
  const toast = useResponseToast<ResponseType>()

  useEffect(() => {
    if (action && state) {
      toast({ ...action })
      if (action.to && action.status === '可以') {
        navigate(action.to)
      }
    }
  }, [action, state])

  return <></>
}

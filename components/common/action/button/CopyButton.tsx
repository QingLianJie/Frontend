import { Button, ThemeTypings, useClipboard } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface CopyButtonProps {
  text: string
  color?: ThemeTypings['colorSchemes']
  children: ReactNode | ReactNode[]
}

const CopyButton = ({ text, color, children }: CopyButtonProps) => {
  const { hasCopied, onCopy } = useClipboard(text)

  return (
    <Button onClick={onCopy} colorScheme={color}>
      {hasCopied ? '已复制' : children}
    </Button>
  )
}

export default CopyButton

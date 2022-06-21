import { CloseOutlined } from '@mui/icons-material'
import {
  Dialog,
  DialogTitle,
  IconButton,
  Divider,
  DialogContent,
} from '@mui/material'
import { Fragment, ReactNode, RefObject, useRef, useEffect } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  focusRef?: RefObject<HTMLElement | undefined>
  maxWidth?: string
  title?: string
  children: ReactNode
}

export const Modal = ({
  isOpen,
  onClose,
  focusRef,
  maxWidth,
  title,
  children,
}: ModalProps) => {
  const closeRef = useRef<HTMLButtonElement>()

  useEffect(() => {
    if (!isOpen) return
    if (focusRef?.current) focusRef.current?.focus()
    else if (closeRef?.current) closeRef.current?.focus()
  }, [isOpen])

  return (
    <Dialog
      fullWidth
      maxWidth={false}
      open={isOpen}
      onClose={onClose}
      keepMounted
      sx={{
        '& .MuiPaper-root': { maxWidth: maxWidth || '18rem', m: 0 },
        '& .MuiDialogContent-root': { p: 0 },
      }}
    >
      {title && (
        <Fragment>
          <DialogTitle
            sx={{ fontWeight: 'fontWeightBold', fontSize: 'body1.fontSize' }}
          >
            {title}
            <IconButton
              ref={closeRef as RefObject<HTMLButtonElement>}
              aria-label="关闭"
              onClick={onClose}
              sx={{ position: 'absolute', right: 14, top: 8 }}
            >
              <CloseOutlined />
            </IconButton>
          </DialogTitle>
          <Divider />
        </Fragment>
      )}

      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

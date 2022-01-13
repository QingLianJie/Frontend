import type { SystemProps } from '@chakra-ui/react'
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  Kbd,
} from '@chakra-ui/react'
import { useKeyPress } from 'ahooks'
import { useRef } from 'react'
import { RiSearchLine } from 'react-icons/ri'

interface SearchProps extends SystemProps, InputProps {}

export const Search = ({ ...props }: SearchProps) => {
  const ref = useRef<HTMLInputElement>(null)
  useKeyPress(['ctrl.k'], e => {
    e.preventDefault()
    ref.current?.focus()
  })

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" h="full" w="12">
        <Icon
          as={RiSearchLine}
          aria-label="搜索"
          fontSize="lg"
          color="gray.500"
          _dark={{ color: 'gray.400' }}
        />
      </InputLeftElement>
      <Input
        ref={ref}
        type="search"
        w="full"
        h="auto"
        borderColor="white"
        pl="12"
        pr="4"
        py="3"
        bg="white"
        _dark={{ bg: 'gray.800', borderColor: 'gray.800' }}
        _placeholder={{
          color: 'gray.500',
          _dark: 'gray.400',
        }}
        {...props}
      />
      <InputRightElement
        pointerEvents="none"
        d={{ base: 'none', md: 'flex' }}
        h="full"
        w="auto"
        px="4"
        color="gray.500"
        _dark={{ color: 'gray.400' }}
      >
        <Kbd mr="1" rounded="sm" transition="all 0.2s">
          Ctrl
        </Kbd>
        <Kbd rounded="sm" transition="all 0.2s">
          K
        </Kbd>
      </InputRightElement>
    </InputGroup>
  )
}

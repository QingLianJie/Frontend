import {
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Kbd,
} from '@chakra-ui/react'
import { useKeyPress } from 'ahooks'
import { useRef } from 'react'
import { RiSearchLine } from 'react-icons/ri'

const Search = () => {
  const ref = useRef<HTMLInputElement>(null)
  useKeyPress(['ctrl.k'], e => {
    e.preventDefault()
    ref.current?.focus()
  })

  return (
    <Flex w="full">
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
          placeholder="搜索课程"
          type="search"
          w="full"
          h="auto"
          borderColor="white"
          pl="12"
          pr="4"
          py="2.5"
          bg="white"
          _dark={{ bg: 'gray.700', borderColor: 'gray.700' }}
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
          <Kbd mr="1" rounded="sm">
            Ctrl
          </Kbd>
          <Kbd rounded="sm">K</Kbd>
        </InputRightElement>
      </InputGroup>
    </Flex>
  )
}

export default Search

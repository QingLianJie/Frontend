import {
  Button,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text
} from '@chakra-ui/react'
import { useContext } from 'react'
import { RiFilterLine, RiPhoneFindLine } from 'react-icons/ri'
import { Link as RemixLink, useLoaderData } from 'remix'
import { Card } from '~/components/common/Card'
import { TableContext, type CoursesLoader } from '~/routes/courses'

export const ToolBar = () => {
  const { courses } = useLoaderData<CoursesLoader>()
  const { columns, setColumns } = useContext(TableContext)

  const selected = columns
    .filter(column => !column?.hide)
    .map(column => column.key)

  const handleSelect = (value: string | string[]) => {
    setColumns(
      columns.map(column => {
        if (value.includes(column.key)) return { ...column, hide: false }
        return { ...column, hide: true }
      })
    )
  }

  return (
    <Card>
      <HStack px="0" py="0" justify="space-between" w="full">
        <Button
          as={RemixLink}
          to="#filter"
          color="gray.500"
          _dark={{ color: 'gray.400' }}
          h="auto"
          d="flex"
          alignItems="center"
          variant="ghost"
          py="4"
          px="6"
          fontSize="smd"
          fontWeight="bold"
          rounded="none"
          roundedLeft="md"
        >
          <Icon as={RiPhoneFindLine} aria-label="搜索" mr="4" fontSize="lg" />
          <Text as="span" d={{ base: 'inline', md: 'none' }} isTruncated>
            {courses.total} 个课程，点击跳转搜索
          </Text>
          <Text as="span" d={{ base: 'none', md: 'inline' }} isTruncated>
            查询到 {courses.total} 个课程，共 {courses.pages.total} 页
          </Text>
        </Button>
        <Menu closeOnSelect={false}>
          <MenuButton
            as={Button}
            variant="ghost"
            color="gray.500"
            _dark={{ color: 'gray.400' }}
            h="auto"
            d="flex"
            py="4"
            px="6"
            alignItems="center"
            rounded="none"
            roundedRight="md"
            fontWeight="bold"
            leftIcon={<Icon as={RiFilterLine} aria-label="列" fontSize="lg" />}
            fontSize="smd"
            iconSpacing={{ base: '0', md: '4' }}
          >
            <Text d={{ base: 'none', md: 'flex' }}>选择要显示的列</Text>
          </MenuButton>
          <MenuList minWidth="240px" _dark={{ bg: 'gray.800' }}>
            <MenuOptionGroup
              type="checkbox"
              defaultValue={selected}
              value={selected}
              onChange={handleSelect}
            >
              {columns.map(column => (
                <MenuItemOption
                  key={column.key}
                  value={column.key}
                  isChecked={true}
                  pl="5"
                  iconSpacing="4"
                >
                  {column.name}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </HStack>
    </Card>
  )
}

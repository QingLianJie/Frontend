import type { SystemProps } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import Note from '~/contents/notes/home-note.md'
import { HomeCard } from '~/libs/common/containers/HomeCard'

interface HomeNotesProps extends SystemProps {}

export const HomeNotes = (props: HomeNotesProps) => (
  <HomeCard title="公告" {...props}>
    <Text
      as="article"
      w="full"
      px="6"
      pb="6"
      pt="4"
      overflowWrap="break-word"
      lineHeight="tall"
    >
      <Note />
    </Text>
  </HomeCard>
)

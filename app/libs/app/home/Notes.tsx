import { Text } from '@chakra-ui/react'
import Note from '~/contents/notes/home-note.md'
import { HomeCard } from '~/libs/common/containers/HomeCard'

export const HomeNotes = () => (
  <HomeCard title="公告">
    <Text
      as="article"
      w="full"
      px="6"
      pb="6"
      pt="4"
      textAlign="justify"
      overflowWrap="break-word"
      lineHeight="tall"
    >
      <Note />
    </Text>
  </HomeCard>
)

import { Link, SystemProps } from '@chakra-ui/react'
import { Divider, HStack, Text, VStack } from '@chakra-ui/react'
import { HomeCard } from '~/components/common/containers/HomeCard'
import { calendarDate } from '~/utils/time'

interface HomeNotesProps extends SystemProps {
  notes: INotes
}

export const HomeNotes = ({ notes, ...props }: HomeNotesProps) => (
  <HomeCard title="公告" {...props}>
    <VStack
      w="full"
      px="4"
      pb="6"
      pt="4"
      align="flex-start"
      divider={<Divider transition="all 0.2s" />}
      spacing="4"
    >
      {notes.map(note => (
        <VStack
          w="full"
          align="flex-start"
          px="2"
          spacing="2"
          key={note.content}
        >
          <Text
            as="article"
            w="full"
            overflowWrap="break-word"
            lineHeight="tall"
          >
            {note.content}
          </Text>
          <HStack w="full" justify="space-between">
            <Text
              as="time"
              fontSize="sm"
              color="gray.500"
              _dark={{ color: 'gray.400' }}
              isTruncated
            >
              {calendarDate(note.date)}
            </Text>
            {note.link && (
              <Link
                href={note.link}
                isExternal
                fontSize="sm"
                color="blue.500"
                _dark={{ color: 'blue.400' }}
                textUnderlineOffset="0.25rem"
                isTruncated
              >
                查看更多
              </Link>
            )}
          </HStack>
        </VStack>
      ))}
    </VStack>
  </HomeCard>
)

import type { SystemProps } from '@chakra-ui/react'
import { Divider, HStack, Link, Text, VStack } from '@chakra-ui/react'
import { HomeCard } from '~/components/common/containers/HomeCard'
import { calendarDate } from '~/utils/time'

interface HomeNotesProps extends SystemProps {
  notes: INotes
}

export const HomeNotes = ({ notes, ...props }: HomeNotesProps) => {
  const isNoNotes = notes === undefined || notes.length === 0

  return (
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
        {isNoNotes ? (
          <Text px="2">目前没有什么值得说的事。</Text>
        ) : (
          notes.map(note => (
            <VStack
              w="full"
              align="flex-start"
              px="2"
              spacing="2"
              key={note.content}
            >
              <Text
                as="time"
                fontSize="sm"
                color="gray.500"
                _dark={{ color: 'gray.400' }}
                isTruncated
              >
                {calendarDate(note.date)}
              </Text>
              <Text
                as="article"
                w="full"
                overflowWrap="break-word"
                lineHeight="tall"
              >
                {note.content}
              </Text>
              {note.links && (
                <HStack align="flex-start" spacing="4" w="full" px="0.5">
                  {note.links?.map(link => (
                    <Link
                      key={link.text}
                      href={link.href}
                      isExternal
                      d="flex"
                      alignItems="center"
                      fontSize="sm"
                      color="purple.500"
                      _dark={{ color: 'purple.400' }}
                      textUnderlineOffset="0.25rem"
                      isTruncated
                    >
                      # {link.text}
                    </Link>
                  ))}
                </HStack>
              )}
            </VStack>
          ))
        )}
      </VStack>
    </HomeCard>
  )
}

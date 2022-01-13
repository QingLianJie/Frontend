import {
  Divider,
  HStack,
  Link,
  SystemProps,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Card } from '~/components/common/containers/Card'
import { calendarDate } from '~/utils/time'

interface NotesProps extends SystemProps {
  notes: INotes
}

export const Notes = ({ notes, ...props }: NotesProps) => {
  const isNoNotes = notes === undefined || notes.length === 0

  return (
    <Card title="公告" {...props}>
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
              <HStack
                align="center"
                justify="space-between"
                spacing="4"
                w="full"
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
                {note.tag && (
                  <Tag size="sm" colorScheme="green" transition="all 0.2s">
                    {note.tag}
                  </Tag>
                )}
              </HStack>
              <Text
                as="article"
                w="full"
                overflowWrap="break-word"
                lineHeight="tall"
              >
                {note.content}
              </Text>
              {note.links && (
                <HStack justify="flex-start" spacing="4" w="full" px="0.5">
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
    </Card>
  )
}

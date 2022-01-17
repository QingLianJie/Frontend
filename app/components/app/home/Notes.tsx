import {
  Divider,
  HStack,
  SystemProps,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useLoaderData } from 'remix'
import { Card } from '~/components/common/Card'
import { relativeTime } from '~/utils/time'

interface NotesProps extends SystemProps {
  id: string
}

export const Notes = ({ id, ...props }: NotesProps) => {
  const { notes } = useLoaderData<{ notes: INotes }>()
  const isNoNotes = notes === undefined || notes.length === 0

  return (
    <Card title="公告" id={id} {...props}>
      <VStack
        w="full"
        px="4"
        pb="6"
        pt="3"
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
              <HStack align="center" justify="flex-start" spacing="3" w="full">
                {note.tag && (
                  <Tag
                    size="sm"
                    colorScheme="green"
                    mx="1px"
                    transition="all 0.2s"
                  >
                    {note.tag}
                  </Tag>
                )}
                <Text
                  as="time"
                  fontSize="sm"
                  color="gray.500"
                  _dark={{ color: 'gray.400' }}
                  isTruncated
                >
                  发布于 {relativeTime(note.date)}
                </Text>
              </HStack>

              <Text
                className="markdown-body"
                as="article"
                w="full"
                fontSize="smd"
                textAlign="justify"
                overflowWrap="break-word"
                lineHeight="tall"
                dangerouslySetInnerHTML={{ __html: note.content }}
              />
            </VStack>
          ))
        )}
      </VStack>
    </Card>
  )
}

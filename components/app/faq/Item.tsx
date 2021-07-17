import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
} from '@chakra-ui/react'
import { ReactNode } from 'react'

interface FAQItemProps {
  title: string
  children: ReactNode | ReactNode[]
}

const FAQItem = ({ title, children }: FAQItemProps) => {
  return (
    <AccordionItem>
      <AccordionButton _expanded={{ fontWeight: '600' }}>
        <Text textAlign="left" fontSize="lg" p="2">
          {title}
        </Text>
        <AccordionIcon ms="auto" />
      </AccordionButton>
      <AccordionPanel py="4" px="6">
        <Text as="span">{children}</Text>
      </AccordionPanel>
    </AccordionItem>
  )
}

export default FAQItem

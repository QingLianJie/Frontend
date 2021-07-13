import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  ColorProps,
  Icon,
  Text,
} from '@chakra-ui/react'
import { FC, ReactNode, ReactNodeArray } from 'react'
import DrawerLink from './Link'

interface DrawerAccordionItemProps {
  text: string
  href: string
  icon?: FC
  color?: ColorProps['color']
}

interface DrawerAccordionProps {
  icon?: FC
  links: DrawerAccordionItemProps[]
  color?: ColorProps['color']
  children: ReactNode | ReactNodeArray
}

const DrawerAccordion = ({
  icon,
  links,
  color = 'black',
  children,
}: DrawerAccordionProps) => {
  return (
    <Accordion allowToggle allowMultiple w="full">
      <AccordionItem border="none">
        <AccordionButton py="2.5" rounded="md">
          {icon ? <Icon as={icon} me="3" w="5" h="5" color={color} /> : null}
          <Text>{children}</Text>
          <AccordionIcon ms="auto" />
        </AccordionButton>

        <AccordionPanel py="2">
          {links.map((link, index) => (
            <DrawerLink
              href={link.href}
              icon={link.icon}
              color={link.color}
              key={index}
            >
              {link.text}
            </DrawerLink>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default DrawerAccordion

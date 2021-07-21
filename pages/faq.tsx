import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Grid,
  GridItem,
  Text,
} from '@chakra-ui/react'
import Head from 'next/head'
import { ReactNode } from 'react'
import MainContainer from '../components/common/container/Main'
import PlaceholderHeading from '../components/common/typography/Placeholder'
import { faqs } from '../data/frequently-asked-questions'

const FAQPage = () => {
  return (
    <>
      <Head>
        <title>常见问题 | 清廉街</title>
      </Head>
      <MainContainer title="常见问题">
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap="12"
          py={{ base: 4, md: 8, lg: 12 }}
        >
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <PlaceholderHeading
              title="常见问题"
              messages={[
                '第一次使用「清廉街」？',
                '这里有一些常见问题及解答。',
              ]}
              href="/faq"
              back
              feedback
            />
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <Accordion allowMultiple allowToggle>
              {faqs.map((faq, index) => (
                <FAQItem key={index} title={faq.title}>
                  {faq.content}
                </FAQItem>
              ))}
            </Accordion>
          </GridItem>
        </Grid>
      </MainContainer>
    </>
  )
}

export default FAQPage

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

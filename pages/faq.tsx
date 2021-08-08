import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Grid,
  GridItem,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'
import Head from 'next/head'
import { ReactNode } from 'react'
import { RiQuestionFill } from 'react-icons/ri'
import MainContainer from '../components/common/container/Main'
import PageHeading from '../components/common/typography/PageHeading'
import { faqs } from '../data/frequently-asked-questions'

const FAQPage = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  const middle = Math.ceil(faqs.length / 2)
  const left = isMobile ? faqs : faqs.slice(0, middle)
  const right = faqs.slice(middle)

  return (
    <>
      <Head>
        <title>常见问题 | 清廉街</title>
      </Head>
      <MainContainer title="常见问题" gray>
        <PageHeading
          title="第一次使用「清廉街」？这里有一些常见问题及解答。"
          icon={RiQuestionFill}
          color="purple"
        />
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={{ base: 4, md: 8 }}
          py={{ base: 4, md: 8 }}
        >
          <GridItem colSpan={{ base: 2, md: 1 }} minW="0">
            <Accordion allowMultiple allowToggle>
              {left.map((faq, index) => (
                <FAQItem key={index} title={faq.title}>
                  {faq.content}
                </FAQItem>
              ))}
            </Accordion>
          </GridItem>
          <GridItem
            colSpan={{ base: 2, md: 1 }}
            display={isMobile ? 'none' : 'initial'}
            minW="0"
          >
            <Accordion allowMultiple allowToggle>
              {right.map((faq, index) => (
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
    <AccordionItem
      bg="white"
      borderLeftWidth="1px"
      borderRightWidth="1px"
      _first={{ roundedTop: 'md' }}
      _last={{ roundedBottom: 'md', borderBottomWidth: '1px' }}
      _dark={{
        bg: 'gray.800',
      }}
    >
      <AccordionButton _expanded={{ fontWeight: '600' }}>
        <Text textAlign="left" fontSize="lg" p="2">
          {title}
        </Text>
        <AccordionIcon ms="auto" />
      </AccordionButton>
      <AccordionPanel py="4" px="6">
        <Text as="span" lineHeight="1.75">
          {children}
        </Text>
      </AccordionPanel>
    </AccordionItem>
  )
}

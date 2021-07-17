import DevelopmentPage from '../components/template/DevelopmentPage'
import {
  Accordion,
  Divider,
  Grid,
  GridItem,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import FeedbackGroup from '../components/app/feedback/Group'
import CopyButton from '../components/common/button/CopyButton'
import MainContainer from '../components/common/container/Main'
import PlaceholderHeading from '../components/common/heading/Placeholder'
import ButtonLink from '../components/common/link/ButtonLink'
import { faqs } from '../data/frequently-asked-questions'
import FAQItem from '../components/app/faq/Item'

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

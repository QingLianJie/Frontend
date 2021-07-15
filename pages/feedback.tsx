import { Grid, GridItem } from '@chakra-ui/react'
import Head from 'next/head'
import MainContainer from '../components/common/container/Main'
import PlaceholderHeading from '../components/common/heading/Placeholder'

const FeedbackPage = () => {
  return (
    <>
      <Head>
        <title>反馈 | 清廉街</title>
      </Head>
      <MainContainer title="反馈">
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap="12"
          py={{ base: 4, md: 8, lg: 12 }}
        >
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <PlaceholderHeading
              title="反馈"
              messages={['感谢你提供反馈，', '请从右侧选择反馈方式。']}
              href="/feedback"
              back
            />
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}></GridItem>
        </Grid>
      </MainContainer>
    </>
  )
}

export default FeedbackPage

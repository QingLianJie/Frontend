import { Grid, GridItem } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import MemberProfile from '../../components/app/member/Profile'
import MemberTabs from '../../components/app/member/tabs/Tabs'
import MainContainer from '../../components/common/container/Main'

const MemberPage = () => {
  const router = useRouter()
  const name = router.asPath.replace(/[\/@]|[\/@\/]/g, '')

  return (
    <>
      <Head>
        <title>
          {router.isReady && name
            ? `${decodeURIComponent(name)} 的个人主页`
            : `个人主页`}{' '}
          - 清廉街
        </title>
      </Head>
      <MainContainer title="个人主页">
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={{ base: 8, md: 12, lg: 16 }}
        >
          <GridItem colSpan={{ base: 4, md: 1 }}>
            {router.isReady && name && <MemberProfile name={name} />}
          </GridItem>
          <GridItem colSpan={{ base: 4, md: 3 }}>
            {router.isReady && name && <MemberTabs name={name} />}
          </GridItem>
        </Grid>
      </MainContainer>
    </>
  )
}

export default MemberPage

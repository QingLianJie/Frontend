import { Container, Grid, GridItem } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import MemberProfile from '../../components/app/member/Profile'
import MemberTabs from '../../components/app/member/tabs/Tabs'
import Header from '../../components/layout/header/Header'

const MemberPage = () => {
  const router = useRouter()
  const { name } = router.query

  return (
    <>
      <Head>
        <title>{name ? `${name} 的个人主页` : `个人主页`} - 清廉街</title>
      </Head>
      <Header />
      <Container width="full" maxW="container.xl" py="4" px="8">
        <Grid
          templateColumns="repeat(4, 1fr)"
          gap={{ base: 8, md: 12, lg: 16 }}
        >
          <GridItem colSpan={{ base: 4, md: 1 }}>
            {name && <MemberProfile name={name} />}
          </GridItem>
          <GridItem colSpan={{ base: 4, md: 3 }}>
            <MemberTabs />
          </GridItem>
        </Grid>
      </Container>
    </>
  )
}

export default MemberPage

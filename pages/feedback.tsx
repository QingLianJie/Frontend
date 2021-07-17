import {
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

const FeedbackPage = () => {
  const text = useBreakpointValue({
    base: '请在下面选择反馈方式。',
    md: '请从右侧选择反馈方式。',
  })

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
              messages={['感谢你提供反馈，', text || '请从右侧选择反馈方式。']}
              href="/feedback"
              back
            />
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <VStack align="start" spacing="6">
              <FeedbackGroup
                index="1"
                title="加入反馈 QQ 群"
                description="群号是 498047164 ，欢迎加入。"
                recommend
              >
                <ButtonLink
                  href="https://jq.qq.com/?_wv=1027&k=Fj4xfeQE"
                  color="green"
                >
                  一键加入
                </ButtonLink>
                <CopyButton text="498047164">复制群号</CopyButton>
              </FeedbackGroup>
              <Divider />

              <FeedbackGroup
                index="2"
                title="给程序提 Issue"
                description="如果你会写程序，而且有一个 GitHub 账号的话，欢迎在我们的开源仓库中提 Issue 或者 Pull Request，帮助我们改进这个网站。"
                recommend
              >
                <ButtonLink
                  href="https://github.com/QingLianJie/Frontend"
                  color="blue"
                >
                  前端仓库
                </ButtonLink>
                <ButtonLink
                  href="https://github.com/QingLianJie/Backend"
                  color="blue"
                >
                  后端仓库
                </ButtonLink>
              </FeedbackGroup>
              <Divider />

              <FeedbackGroup
                index="3"
                title="邮件联系"
                description="如果你比较喜欢发邮件，也可以点击下面的按钮给我们发邮件。"
              >
                <ButtonLink href="mailto:bakedviolin@foxmail.com">
                  发送邮件
                </ButtonLink>
                <CopyButton text="bakedviolin@foxmail.com">复制邮箱</CopyButton>
              </FeedbackGroup>
            </VStack>
          </GridItem>
        </Grid>
      </MainContainer>
    </>
  )
}

export default FeedbackPage

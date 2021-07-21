import {
  Badge,
  Divider,
  Grid,
  GridItem,
  HStack,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import { ReactNode } from 'react'
import CopyButton from '../components/common/action/button/CopyButton'
import MainContainer from '../components/common/container/Main'
import PlaceholderHeading from '../components/common/typography/Placeholder'
import ButtonLink from '../components/common/action/link/ButtonLink'

const FeedbackPage = () => {
  const text = useBreakpointValue({ base: '在下面', md: '从右侧' })

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
              messages={[
                '感谢你提供反馈，',
                `请${text || '从右侧'}选择反馈方式。`,
              ]}
              href="/feedback"
              back
            />
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <VStack align="start" spacing="6">
              <FeedbackCard
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
                <CopyButton text="498047164" color="blue">
                  复制群号
                </CopyButton>
              </FeedbackCard>
              <Divider />

              <FeedbackCard
                index="2"
                title="去 GitHub 提 Issue"
                description="如果你会写程序，而且有一个 GitHub 账号的话，欢迎在我们的开源仓库中提 Issue 或者 Pull Request，帮助我们改进这个网站。"
                recommend
              >
                <ButtonLink href="https://github.com/QingLianJie">
                  主页
                </ButtonLink>
                <ButtonLink href="https://github.com/QingLianJie/Frontend">
                  前端仓库
                </ButtonLink>
                <ButtonLink href="https://github.com/QingLianJie/Backend">
                  后端仓库
                </ButtonLink>
              </FeedbackCard>
              <Divider />

              <FeedbackCard
                index="3"
                title="邮件联系"
                description="如果你比较喜欢发邮件，也可以点击下面的按钮给我们发邮件。"
              >
                <ButtonLink href="mailto:bakedviolin@foxmail.com">
                  发送邮件
                </ButtonLink>
                <CopyButton text="bakedviolin@foxmail.com">复制邮箱</CopyButton>
              </FeedbackCard>
            </VStack>
          </GridItem>
        </Grid>
      </MainContainer>
    </>
  )
}

export default FeedbackPage

interface FeedbackCardProps {
  index: string
  title: string
  description: string
  recommend?: boolean
  children: ReactNode | ReactNode[]
}

const FeedbackCard = ({
  index,
  title,
  description,
  recommend,
  children,
}: FeedbackCardProps) => {
  return (
    <VStack align="start" pb="2">
      <Text fontSize="xl" fontWeight="600" d="flex" alignItems="center">
        {index}. {title}
        {recommend && (
          <Badge colorScheme="green" ms="2">
            推荐
          </Badge>
        )}
      </Text>
      <Text pt="1.5" pb="3">
        {description}
      </Text>
      <HStack spacing="3">{children}</HStack>
    </VStack>
  )
}

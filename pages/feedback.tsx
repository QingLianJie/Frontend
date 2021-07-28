import {
  Badge,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Icon,
  Text,
  useBreakpointValue,
  VStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import { FC, ReactNode } from 'react'
import { RiGithubLine, RiMailLine, RiQqLine } from 'react-icons/ri'
import CopyButton from '../components/common/action/button/CopyButton'
import ButtonLink from '../components/common/action/link/ButtonLink'
import CardContainer from '../components/common/container/Card'
import MainContainer from '../components/common/container/Main'
import PageHeading from '../components/common/typography/PageHeading'

const FeedbackPage = () => {
  const text = useBreakpointValue({ base: '在下面', md: '从右侧' })

  return (
    <>
      <Head>
        <title>反馈 | 清廉街</title>
      </Head>
      <MainContainer title="反馈" gray>
        <PageHeading title="感谢你提供反馈，请在下面选择反馈方式。" />
        <Grid
          templateColumns="repeat(2, 1fr)"
          gap={{ base: 4, md: 8 }}
          py={{ base: 4, md: 8 }}
        >
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <VStack align="start" spacing={{ base: 4, md: 8 }}>
              <FeedbackCard
                icon={RiQqLine}
                title="加入反馈 QQ 群"
                description="QQ 群号是 498047164 ，欢迎加入。"
                recommend
              >
                <ButtonGroup size="sm">
                  <ButtonLink
                    href="https://jq.qq.com/?_wv=1027&k=Fj4xfeQE"
                    color="green"
                  >
                    一键加入
                  </ButtonLink>
                  <CopyButton text="498047164" color="blue">
                    复制群号
                  </CopyButton>
                </ButtonGroup>
              </FeedbackCard>

              <FeedbackCard
                icon={RiGithubLine}
                title="去 GitHub 提 Issue"
                description="如果你会写程序，而且有一个 GitHub 账号的话，欢迎在我们的开源仓库中提 Issue 或者 Pull Request，帮助我们改进这个网站。"
                recommend
              >
                <ButtonGroup size="sm">
                  <ButtonLink href="https://github.com/QingLianJie">
                    主页
                  </ButtonLink>
                  <ButtonLink href="https://github.com/QingLianJie/Frontend">
                    前端仓库
                  </ButtonLink>
                  <ButtonLink href="https://github.com/QingLianJie/Backend">
                    后端仓库
                  </ButtonLink>
                </ButtonGroup>
              </FeedbackCard>
            </VStack>
          </GridItem>
          <GridItem colSpan={{ base: 2, md: 1 }}>
            <VStack align="start" spacing="6">
              <FeedbackCard
                icon={RiMailLine}
                title="邮件联系"
                description="如果你比较喜欢发邮件，也可以点击下面的按钮给我们发邮件。"
              >
                <ButtonGroup size="sm">
                  <ButtonLink href="mailto:bakedviolin@foxmail.com">
                    发送邮件
                  </ButtonLink>
                  <CopyButton text="bakedviolin@foxmail.com">
                    复制邮箱
                  </CopyButton>
                </ButtonGroup>
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
  icon: FC
  title: string
  description: string
  recommend?: boolean
  children: ReactNode | ReactNode[]
}

const FeedbackCard = ({
  icon,
  title,
  description,
  recommend,
  children,
}: FeedbackCardProps) => {
  return (
    <CardContainer>
      <VStack align="start" pb="2">
        <Text
          fontSize="lg"
          fontWeight="600"
          d="flex"
          alignItems="center"
          px="1"
          pt="2"
        >
          <Icon as={icon} w="5" h="5" me="3" />
          {title}
          {recommend && (
            <Badge colorScheme="green" ms="2">
              推荐
            </Badge>
          )}
        </Text>
        <Text pt="0.5" pb="2" px="1">
          {description}
        </Text>
        <HStack spacing="3">{children}</HStack>
      </VStack>
    </CardContainer>
  )
}

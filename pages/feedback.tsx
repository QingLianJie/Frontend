import {
  Badge,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Icon,
  Spacer,
  Text,
  VStack,
} from '@chakra-ui/react'
import Head from 'next/head'
import { FC, ReactNode } from 'react'
import {
  RiFeedbackFill,
  RiGithubFill,
  RiMailFill,
  RiQqFill,
} from 'react-icons/ri'
import CopyButton from '../components/common/action/button/CopyButton'
import ButtonLink from '../components/common/action/link/ButtonLink'
import CardContainer from '../components/common/container/Card'
import MainContainer from '../components/common/container/Main'
import PageHeading from '../components/common/typography/PageHeading'

const FeedbackPage = () => {
  return (
    <>
      <Head>
        <title>反馈 | 清廉街</title>
      </Head>
      <MainContainer title="反馈" gray>
        <PageHeading
          title="感谢你提供反馈，请在下面选择反馈方式。"
          icon={RiFeedbackFill}
          color="orange"
        />
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          gap={{ base: 4, md: 8 }}
          py={{ base: 4, md: 8 }}
          autoRows="1fr"
        >
          <GridItem w="full" minW="0">
            <FeedbackCard
              icon={RiQqFill}
              color="blue"
              title="加入反馈 QQ 群"
              description="QQ 群号是 498047164 ，欢迎点击下面的按钮加入。"
              recommend
            >
              <ButtonLink
                href="https://jq.qq.com/?_wv=1027&k=Fj4xfeQE"
                color="green"
                external
              >
                一键加入
              </ButtonLink>
              <CopyButton text="498047164" color="blue">
                复制群号
              </CopyButton>
            </FeedbackCard>
          </GridItem>

          <GridItem w="full" minW="0">
            <FeedbackCard
              icon={RiGithubFill}
              color="black"
              title="去 GitHub 提 Issue"
              description="欢迎在我们的开源仓库中提 Issue 或者 Pull Request，帮助我们改进这个网站。"
              recommend
            >
              <ButtonLink href="https://github.com/QingLianJie" external>
                主页
              </ButtonLink>
              <ButtonLink
                href="https://github.com/QingLianJie/Frontend"
                external
              >
                前端仓库
              </ButtonLink>
              <ButtonLink
                href="https://github.com/QingLianJie/Backend"
                external
              >
                后端仓库
              </ButtonLink>
            </FeedbackCard>
          </GridItem>

          <GridItem w="full" minW="0">
            <FeedbackCard
              icon={RiMailFill}
              color="yellow"
              title="邮件联系"
              description="如果你比较喜欢发邮件，也可以点击下面的按钮给我们发邮件。"
            >
              <ButtonLink href="mailto:bakedviolin@foxmail.com">
                发送邮件
              </ButtonLink>
              <CopyButton text="bakedviolin@foxmail.com">复制邮箱</CopyButton>
            </FeedbackCard>
          </GridItem>
        </Grid>
      </MainContainer>
    </>
  )
}

export default FeedbackPage

interface FeedbackCardProps {
  icon: FC
  color: string
  title: string
  description: string
  recommend?: boolean
  children: ReactNode | ReactNode[]
}

const FeedbackCard = ({
  icon,
  color,
  title,
  description,
  recommend,
  children,
}: FeedbackCardProps) => {
  return (
    <CardContainer full>
      <VStack align="start" py="2" pos="relative" zIndex="1" flex="1" h="full">
        <Text
          fontSize="xl"
          fontWeight="600"
          d="flex"
          alignItems="center"
          px="1"
          pt="1.5"
        >
          {title}
          {recommend && (
            <Badge colorScheme="green" ms="2">
              推荐
            </Badge>
          )}
        </Text>
        <Text pt="0.5" pb="1" px="1" lineHeight="1.75">
          {description}
        </Text>
        <Spacer minH="16" />
        <ButtonGroup size="sm" alignItems="flex-start">
          <HStack spacing="3">{children}</HStack>
        </ButtonGroup>
      </VStack>
      <Icon
        as={icon}
        w="48"
        h="48"
        zIndex="0"
        color={`gray.500`}
        _dark={{ color: `gray.400` }}
        bottom="2"
        right="-16"
        pos="absolute"
        pointerEvents="none"
        opacity={0.1}
      />
    </CardContainer>
  )
}

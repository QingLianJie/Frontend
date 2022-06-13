import {
  CategoryOutlined,
  CheckOutlined,
  CloseOutlined,
  ExpandMoreOutlined,
  SchoolOutlined,
} from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Chip,
  Divider,
  Grid,
  Icon,
  Stack,
  Typography,
} from '@mui/material'
import { green, red } from '@mui/material/colors'
import { useAtom } from 'jotai'
import { bindAtom } from '../../contexts/account'
import { fetcherAtom } from '../../contexts/bridge'
import { texture } from '../../utils/patterns'

export const Guide = () => {
  const [fetcher] = useAtom(fetcherAtom)
  const [bindHEU] = useAtom(bindAtom)

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
        <Card variant="outlined">
          <Stack
            spacing={0.5}
            sx={{
              p: 2,
              backgroundPosition: '-1rem -1rem',
              backgroundImage: texture,
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                variant="body1"
                component="h2"
                fontWeight="fontWeightBold"
              >
                如何获取数据？
              </Typography>
              <Chip
                variant="outlined"
                label="提示"
                size="small"
                color="primary"
                sx={{
                  height: 'auto',
                  fontSize: 'caption.fontSize',
                  lineHeight: 1.65,
                  backgroundColor: 'background.paper',
                }}
              />
            </Stack>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              新版网站的数据获取方式
            </Typography>
          </Stack>
          <Divider />
          <Stack spacing={1.5} sx={{ p: 2 }}>
            <Typography variant="body1">
              新版网站对学校数据（课表、成绩等）的获取方式作出修改，数据不再通过「清廉街」服务器获取。
            </Typography>
            <Typography variant="body1">
              学号和密码将存放在浏览器中，并直接通过浏览器登录学校网站，获取和解析数据，从而可以避免学号和密码数据的上传，保护隐私。
            </Typography>
          </Stack>
          <Divider />
          <Stack spacing={1.5} sx={{ p: 2 }}>
            <Stack direction="row" spacing={1}>
              <CategoryOutlined
                fontSize="small"
                sx={{ color: fetcher ? green[500] : red[500] }}
              />
              <Typography
                variant="body2"
                fontWeight="fontWeightBold"
                sx={{ color: fetcher ? green[500] : red[500], flex: 1 }}
              >
                {fetcher ? '已连接到插件' : '未发现可用插件'}
              </Typography>
              <Icon
                component={fetcher ? CheckOutlined : CloseOutlined}
                fontSize="small"
                sx={{ color: fetcher ? green[500] : red[500] }}
              />
            </Stack>
            <Stack direction="row" spacing={1}>
              <SchoolOutlined
                fontSize="small"
                sx={{ color: bindHEU ? green[500] : red[500] }}
              />
              <Typography
                variant="body2"
                fontWeight="fontWeightBold"
                sx={{ color: bindHEU ? green[500] : red[500], flex: 1 }}
              >
                {bindHEU ? '已绑定 HEU 账号' : '未绑定 HEU 账号'}
              </Typography>
              <Icon
                component={bindHEU ? CheckOutlined : CloseOutlined}
                fontSize="small"
                sx={{ color: bindHEU ? green[500] : red[500] }}
              />
            </Stack>
          </Stack>
        </Card>
      </Grid>

      <Grid item xs={12} md={6} lg={8}>
        <Card variant="outlined">
          {faqs.map(faq => (
            <Accordion
              disableGutters
              square
              key={faq.question}
              sx={{
                boxShadow: 'none',
                backgroundColor: 'transparent',
                backgroundImage: 'none',
                width: '100%',
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreOutlined fontSize="small" />}
                sx={{
                  '& .MuiAccordionSummary-content': { overflow: 'hidden' },
                }}
              >
                <Typography
                  variant="body1"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Card>
      </Grid>
    </Grid>
  )
}

const faqs = [
  {
    question: '为何要修改数据获取方式？',
    answer:
      '在旧版网站运行的过程中，学校可能会对「清廉街」服务器进行限制，阻止数据的获取，同时也是为了保护隐私，避免数据泄露，我们决定采用在客户端（浏览器）中获取数据的方法。',
  },
  {
    question: '怎么做到用浏览器获取学校数据的？',
    answer:
      '由于浏览器的跨域限制，「清廉街」无法直接通过 API 请求的方式获取学校数据，因此需要一个可以解除或忽视跨域限制的插件来帮助网站获取数据。Tampermonkey 等用户脚本插件提供的 API 可以忽略跨域限制，Android 平台也可以通过修改 WebView 的方式来获取学校网站上的数据。',
  },
  {
    question: '我的学号和密码储存在哪？',
    answer:
      '学号和密码数据都会储存在当前浏览器中，关闭浏览器后依然会存在，其他的网页通常无法获取此数据，因此较为安全。',
  },
  {
    question: '明明安装了插件，但还是无法获取数据？',
    answer:
      '请添加 HEU 账号再试试，如果不行，可以刷新页面，如果还是有问题，请联系我们排查问题，感谢。',
  },

  {
    question: '我用的是 iOS，不支持插件和 App 咋办？',
    answer:
      'iOS 平台有支持用户脚本的浏览器，可以尝试一下。由于 iOS 等平台上架应用需要支付费用，因此暂时无法开发并上架，我们也欢迎有能力的同学加入我们，一起开发其他平台的客户端。',
  },
  {
    question: '我喜欢以前的网站，还能用吗？',
    answer:
      '可以，旧版网站在 XXX。如果不想装插件，未来我们也会提供在新版网站上使用「清廉街」服务器获取数据的方法。',
  },
  {
    question: 'HEU 账号和「清廉街」账号有啥区别？',
    answer:
      'HEU 账号用来从学校网站上获取数据，仅储存在浏览器中，未经同意，不会上传到「清廉街」服务器。「清廉街」账号用来发表评论和上传成绩数据，在新版网站中与 HEU 账号不再关联，之前的关联信息将被清除。',
  },
]

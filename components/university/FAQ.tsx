import { CloseOutlined, ExpandMoreOutlined } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material'
import { useAtom } from 'jotai'
import { faqsModalAtom } from '../../contexts/toggle'

export const FAQ = () => {
  const [isOpen, setOpen] = useAtom(faqsModalAtom)

  return (
    <Dialog
      fullWidth
      maxWidth={false}
      open={isOpen}
      onClose={() => setOpen(false)}
      sx={{
        '& .MuiDialog-paper': { maxWidth: '24rem', m: 0 },
        '& .MuiDialogContent-root': { p: 0 },
      }}
    >
      <DialogTitle>
        常见问题
        <IconButton
          aria-label="关闭"
          onClick={() => setOpen(false)}
          sx={{ position: 'absolute', right: 14, top: 10 }}
        >
          <CloseOutlined />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Stack>
          <Divider />
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
                px: 1,
                '&.Mui-expanded::before': { opacity: 1 },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreOutlined fontSize="small" />}
                sx={{
                  '& .MuiAccordionSummary-content': { overflow: 'hidden' },
                  '&.Mui-expanded p': { fontWeight: 'fontWeightBold' },
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
          <Divider />
        </Stack>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ py: 2, px: 3 }}
        >
          如果有其他的问题，欢迎{' '}
          <Link
            href="https://wj.qq.com/s2/9542270/79ad/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontWeight: 'fontWeightBold', textDecoration: 'none' }}
          >
            给我们反馈
          </Link>
          。
        </Typography>
      </DialogContent>
    </Dialog>
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

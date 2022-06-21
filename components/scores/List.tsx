import { ExpandMoreOutlined } from '@mui/icons-material'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Checkbox,
  Chip,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  Stack,
  Typography,
  useTheme,
} from '@mui/material'
import { amber, green, red } from '@mui/material/colors'
import { useAtom } from 'jotai'
import { Fragment } from 'react'
import { scoresAtom } from '../../contexts/scores'
import { Score } from '../../types'
import { texture } from '../../utils/patterns'

const scoreMap = (score: string) => {
  const map = {
    不及格: 30,
    及格: 65,
    中等: 75,
    良好: 85,
    优秀: 95,
  }

  if (isNaN(Number(score))) return map[score as keyof typeof map] || 0
  return Number(score)
}

const colorMap = (score: string) => {
  if (score === '不及格' || Number(score) < 60) return red[500]
  if (score === '优秀' || Number(score) >= 90) return green[500]
  if (score === '---' || score === '缺考') return amber[500]
  return 'inherit'
}

export const ScoresList = () => {
  const [scores] = useAtom(scoresAtom)
  const theme = useTheme()
  const isMobile = theme.breakpoints.down('sm')

  const calcAverage = (scores: Score[]) =>
    (
      scores.reduce((pre, cur) => pre + scoreMap(cur.score) * cur.credit, 0) /
      scores.reduce((pre, cur) => pre + cur.credit, 0)
    ).toFixed(2)

  return (
    <Card variant="outlined">
      <Stack spacing={2}>
        {scores && scores.length > 0 && (
          <Stack>
            {scores.reverse().map(term => (
              <Accordion
                disableGutters
                square
                key={term.name}
                sx={{
                  boxShadow: 'none',
                  backgroundColor: 'transparent',
                  backgroundImage: 'none',
                  width: '100%',
                  '&.Mui-expanded::before': { opacity: 1 },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreOutlined fontSize="small" />}
                  sx={{
                    px: { xs: 2.5, sm: 3 },
                    '&.Mui-expanded': {
                      backgroundPosition: '-1rem -1rem',
                      backgroundImage: texture,
                    },
                    '& .MuiAccordionSummary-content': { my: 1 },
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ width: '100%', pr: 1 }}
                  >
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Checkbox
                        aria-label="选择学期所有成绩"
                        size="small"
                        edge="start"
                        checked={false}
                      />
                      <Typography
                        variant="body1"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        fontWeight="fontWeightBold"
                        sx={{ display: 'flex', alignItems: 'center', pr: 0.5 }}
                      >
                        {term.name}
                      </Typography>
                      <Chip
                        variant="outlined"
                        label={`${
                          isMobile ? '平均分' : '加权平均分'
                        } ${calcAverage(term.scores)}`}
                        size="small"
                        color="primary"
                        sx={{
                          height: 'fit-content',
                          fontSize: 'caption.fontSize',
                          lineHeight: 1.65,
                          backgroundColor: 'background.paper',
                        }}
                      />
                    </Stack>
                    <Typography variant="body2" color="text.secondary">
                      {term.scores.length}
                    </Typography>
                  </Stack>
                </AccordionSummary>
                <AccordionDetails sx={{ p: 0 }}>
                  <List sx={{ p: 0 }}>
                    {term.scores
                      .sort((a, b) => scoreMap(b.score) - scoreMap(a.score))
                      .map(score => (
                        <Fragment key={`${score.name}-${score.score}`}>
                          <Divider />
                          <ListItemButton
                            sx={{ px: { xs: 2.5, sm: 3 }, py: 0.75 }}
                          >
                            <ListItemIcon sx={{ minWidth: 'unset', pr: 1 }}>
                              <Checkbox
                                aria-label="选择当前成绩"
                                size="small"
                                edge="start"
                                checked={false}
                              />
                            </ListItemIcon>

                            <Stack
                              direction="row"
                              spacing={1}
                              alignItems="center"
                              sx={{ width: '100%', pr: 2, overflow: 'hidden' }}
                            >
                              <Typography
                                whiteSpace="nowrap"
                                overflow="hidden"
                                textOverflow="ellipsis"
                                sx={{ pr: 1 }}
                              >
                                {score.name}
                              </Typography>
                              <Chip
                                variant="outlined"
                                label={score.type}
                                size="small"
                                color="primary"
                                sx={{
                                  height: 'fit-content',
                                  fontSize: 'caption.fontSize',
                                  lineHeight: 1.65,
                                  backgroundColor: 'background.paper',
                                  display: { xs: 'none', sm: 'flex' },
                                }}
                              />

                              <Chip
                                variant="outlined"
                                label={`学分 ${score.credit}`}
                                size="small"
                                color="primary"
                                sx={{
                                  height: 'fit-content',
                                  fontSize: 'caption.fontSize',
                                  lineHeight: 1.65,
                                  backgroundColor: 'background.paper',
                                  display: { xs: 'none', sm: 'flex' },
                                }}
                              />
                            </Stack>
                            <Typography
                              fontWeight="fontWeightBold"
                              whiteSpace="nowrap"
                              sx={{ color: colorMap(score.score) }}
                            >
                              {score.score}
                            </Typography>
                          </ListItemButton>
                        </Fragment>
                      ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        )}
      </Stack>
    </Card>
  )
}

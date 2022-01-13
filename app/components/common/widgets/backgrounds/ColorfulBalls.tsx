import { Box, SystemProps } from '@chakra-ui/react'
import { RefObject, useEffect, useRef } from 'react'

interface ColorfulBallsProps extends SystemProps {
  count?: number
}

export const ColorfulBalls = ({
  count = 100,
  ...props
}: ColorfulBallsProps) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <Box
      ref={ref}
      pos="absolute"
      top="0"
      left="0"
      w="full"
      h="full"
      zIndex="0"
      overflow="hidden"
      roundedTop="md"
      opacity="0.9"
      onClick={() => createBalls(ref, count)}
      title="点击可重新生成"
      {...props}
    />
  )
}

const createBalls = (ref: RefObject<HTMLDivElement>, count: number) => {
  const box = ref?.current
  if (box) {
    // Copyright (c) 2021 by Nash Vail (https://codepen.io/nashvail/pen/wpGgXO)
    // Modified by Lifeni

    box.innerHTML = ''

    const colors = [
      '#3CC157',
      '#2AA7FF',
      '#FCBC0F',
      '#F85F36',
      '#805ad5',
      '#F687B3',
    ]

    const numBalls = count
    const balls = []
    const { width, height } = box.getBoundingClientRect()

    for (let i = 0; i < numBalls; i++) {
      let ball = document.createElement('div')
      ball.classList.add('ball')
      ball.style.position = 'absolute'
      ball.style.background = colors[Math.floor(Math.random() * colors.length)]
      ball.style.top = `${Math.floor(Math.random() * height)}px`
      ball.style.left = `${Math.floor(Math.random() * width)}px`
      ball.style.width = `${Math.random() * 1.5}em`
      ball.style.height = ball.style.width
      ball.style.transform = `scale(${Math.random()})`
      ball.style.borderRadius = '100%'

      balls.push(ball)
      box.append(ball)
    }

    const calc = () => ({
      x:
        (Math.random() *
          (Math.floor(Math.random() * 10) % 2 === 0 ? -1 : 1) *
          width) /
        2,
      y:
        (Math.random() *
          (Math.floor(Math.random() * 10) % 2 === 0 ? -1 : 1) *
          height) /
        2,
    })

    balls.forEach(el => {
      const from = calc()
      const to = calc()

      el.animate(
        [
          { transform: `translate(${from.x}px, ${from.y}px)` },
          { transform: `translate(${to.x}px, ${to.y}px)` },
        ],
        {
          duration: (Math.random() + 1) * 6000,
          direction: 'alternate',
          fill: 'both',
          iterations: Infinity,
          easing: 'ease-in-out',
        }
      )
    })
  }
}

const removeBalls = (ref: RefObject<HTMLDivElement>) => {
  const box = ref?.current
  if (box) {
    box.innerHTML = ''
  }
}

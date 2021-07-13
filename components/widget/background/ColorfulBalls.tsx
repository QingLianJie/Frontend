import { useEffect, useRef } from 'react'
import BackgroundBox from '../../common/box/BackgroundBox'

const ColorfulBalls = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref?.current) {
      // Copyright (c) 2021 by Nash Vail (https://codepen.io/nashvail/pen/wpGgXO)
      // Modified by Lifeni

      const colors = [
        '#3CC157',
        '#2AA7FF',
        '#FCBC0F',
        '#F85F36',
        '#805ad5',
        '#F687B3',
      ]

      const numBalls = 100
      const balls = []

      for (let i = 0; i < numBalls; i++) {
        let ball = document.createElement('div')
        ball.classList.add('ball')
        ball.style.background =
          colors[Math.floor(Math.random() * colors.length)]
        ball.style.top = `${Math.floor(Math.random() * 100)}vw`
        ball.style.left = `${Math.floor(Math.random() * 100)}vh`
        ball.style.transform = `scale(${Math.random()})`
        ball.style.width = `${Math.random() * 1.5}em`
        ball.style.height = ball.style.width
        ball.style.borderRadius = '100%'

        balls.push(ball)
        ref.current.append(ball)
      }

      const calc = (i: number) => ({
        x: Math.random() * (i % 2 === 0 ? -100 : 100),
        y: Math.random() * 100,
      })

      balls.forEach((el, i) => {
        const from = calc(i)
        const to = calc(i)

        el.animate(
          [
            { transform: `translate(${from.x}vw, ${from.y}vh)` },
            { transform: `translate(${to.x}vw, ${to.y}vh)` },
          ],
          {
            duration: (Math.random() + 1) * 8000,
            direction: 'alternate',
            fill: 'both',
            iterations: Infinity,
            easing: 'ease-in-out',
          }
        )
      })
    }
  }, [ref])

  return <BackgroundBox ref={ref}></BackgroundBox>
}

export default ColorfulBalls

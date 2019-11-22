/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import styled from 'styled-components'
import Typing from 'react-typing-animation'
import Cursor from './Cursor'

const Wrapper = styled.div`
  display: -webkit-box; /* OLD - iOS 6-, Safari 3.1-6, BB7 */
  display: -ms-flexbox; /* TWEENER - IE 10 */
  display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
  display: flex;
  justify-content: center;
  -webkit-justify-content: center;
  align-items: center;
  -webkit-align-items: center;
  color: white;
  height: 80vh;
  padding: 0 0.5rem;
`

const TypingWrapper = styled.div`
  width: 300px;
`

const Big = styled.p`
  font-size: 2rem;
  font-weight: 700;
`

class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <TypingWrapper>
          <Typing cursor={<Cursor />}>
            <Big>
              Hello 猫。。。
              <Typing.Delay ms={1000} />
              <Typing.Backspace count={4} speed={300}/> 谋 <span>🐱</span>
              <Typing.Speed ms={50} />
            </Big>
            <p>
              I have so much fun when we're going out. I really love to spend
              time with you. I look forward to waking up and being able to text
              you... I can't stop thinking about you. <Typing.Delay ms={400} />I
              have been falling asleep with your messages open every night,
              staring at your words. You have, in a short time, invaded my mind.{' '}
              <Typing.Delay ms={200} />I believe that you are really thoughtful
              and caring when you are thinking of me. You show it through the
              way you speak. I feel like when I'm with you I can really be
              myself, and that is something I appreciate so much that I cannot
              describe it in words. <Typing.Delay ms={200} /> I really feel safe
              in the way you talk to me and treat me. I love that we both like
              the same things and that you don't judge me for being a nerdy
              guy... In fact, you tell me that is one of the things you like
              about me. You're so accepting and in a genuine way. I feel that
              you are such a genuine person with so much love to give I really
              feel like I can trust you. I want you to feel that I accept you
              and make you feel safe. I want you to feel happy and have fun
              times! I want to go on road trips with you and see new places. Try
              new foods... Experience life together. I would like to find out
              more about how it could be with you and me. I want to know
              everything about you. I am asking you to take a chance.
            </p>
            <Typing.Delay ms={500} />I really like you
            <Typing.Delay ms={500} /> .
            <Typing.Delay ms={500} /> .
            <Typing.Delay ms={500} /> . Mao
            <Typing.Delay ms={500} />
            <Typing.Delay ms={500} /> .
            <Typing.Delay ms={500} /> .
            <Typing.Delay ms={500} /> .
            <Typing.Reset count={-1} delay={500} />
            <p>
              I'll give you my 100%, mind, heart, body, soul. If you will give
              me yours. <Typing.Delay ms={1000} />
              <Typing.Reset count={-1} delay={500} />
              <Big>谋, will you be my girlfriend?</Big>
            </p>
          </Typing>
        </TypingWrapper>
      </Wrapper>
    )
  }
}
export default App

/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import styled from 'styled-components'
import Typing from 'react-typing-animation'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  height: 100vh;
  padding: 1rem;
`

const TypingWrapper = styled.div`
  width: 300px;
`
class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <TypingWrapper>
          <Typing>
            <p>
              Hello 谋 <span>🐱</span>
            </p>
            <p>
              I have so much fun when we're going out. I really love to spend time with you. I
              look forward to waking up and being able to text you... I can't
              stop thinking about you. You have, in a short time, invaded my
              mind. I believe that you are really thoughtful and caring when you
              are thinking of me. You show it through the way you speak. I feel
              like when I'm with you I can really be myself, and that is
              something I appreciate so much that I cannot describe it in words.
              I really feel safe in the way you talk to me and treat me. I would
              like to find out more about how it could be with you and me. I
              want to know everything about you. I am asking you to take a
              chance.
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
              谋, will you be my girlfriend?
            </p>
          </Typing>
        </TypingWrapper>
      </Wrapper>
    )
  }
}
export default App

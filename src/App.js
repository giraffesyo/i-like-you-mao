/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react"
import styled from "styled-components"
import Typing from "react-typing-animation"
import Cursor from "./Cursor"

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
              <Typing.Backspace count={4} speed={300} /> 谋 <span>🐱</span>
              <Typing.Speed ms={50} />
            </Big>
            <p>
              It's really been an amazing year and I feel that we have grown to
              be so close. I can't believe that a year has passed already. I
              can't wait to spend the next year together with you baby. Thank
              you so much for all you do and the way that you completely
              dedicate your mind, body, and soul to me. I never expected to have
              such an amazing year despite this craziness. If I could go back in
              time I wouldn't change a single thing about this year.
            </p>
            <Typing.Delay ms={500} />
            Mao
            <Typing.Delay ms={500} /> .
            <Typing.Delay ms={500} /> .
            <Typing.Delay ms={500} /> . I love you
            <Typing.Delay ms={500} />
            <Typing.Delay ms={500} /> .
            <Typing.Delay ms={500} /> .
            <Typing.Delay ms={500} /> .
            <Typing.Reset count={-1} delay={500} />
            <p>
              I'll give you my 100%, mind, heart, body, soul. If you will give
              me yours. <Typing.Delay ms={1000} />
              <Typing.Reset count={-1} delay={500} />
              <Big>谋, will you be my Mao for another year?</Big>
            </p>
          </Typing>
        </TypingWrapper>
      </Wrapper>
    )
  }
}
export default App

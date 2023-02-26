import React from 'react';

import { UNDER_LINE_COLOR } from '@/BaseColor';
import { Underline } from '../gsap/Underline';
import GreenLine from '../GreenLine';


import * as Styled from './styled'
import FadeInContent from '../gsap/FadeInContent';
import FadeInHeaderText from '../gsap/FadeInHeaderText';
import FadeInBodyText from '../gsap/FadeInBodyText';

const IntroContainer = () => {
  return (
    <Styled.Container>
      <FadeInContent delay={1}>
        <Styled.Sidebar>
          <Styled.LinkContainer>
            <Styled.Link href="https://github.com/dailybetter" target="_blank">
              GitHub<GreenLine>.</GreenLine>
            </Styled.Link>
            <Styled.Link href="https://www.linkedin.com/in/hyeonsu-jung-5483911a5/" target="_blank">
              LinkedIn<GreenLine>.</GreenLine>
            </Styled.Link>
            <Styled.Link href="https://junghyeonsu.tistory.com/" target="_blank">
              Tistory Blog<GreenLine>.</GreenLine>
            </Styled.Link>
            <Styled.Link href="https://velog.io/@junghyeonsu" target="_blank">
              Velog<GreenLine>.</GreenLine>
            </Styled.Link>
            <Styled.Link href="https://www.youtube.com/channel/UCkC6sYPPSvpnRprmp2GcXZw" target="_blank">
              YouTube<GreenLine>.</GreenLine>
            </Styled.Link>
          </Styled.LinkContainer>

          <Styled.BottomContainer>
            <Styled.Email href="mailto:rth634@naver.com">rth634@naver.com</Styled.Email>
          </Styled.BottomContainer>
        </Styled.Sidebar>
      </FadeInContent>
      <Styled.Main>
        <FadeInHeaderText delay={1.5}>
          <Styled.SubTitle>기록과 공유를 좋아하는</Styled.SubTitle>
        </FadeInHeaderText>
        <FadeInHeaderText delay={1.9}>
          <Styled.Title>
            <Underline color={UNDER_LINE_COLOR} delay={2.4}>
              정현수
            </Underline>
          </Styled.Title>
          <Styled.SubTitle>입니다.</Styled.SubTitle>
        </FadeInHeaderText>
        <FadeInBodyText delay={2.6}>
          <Styled.BodyTextContainer>
            <Styled.BodyText>프론트엔드 개발자를 희망하고 있습니다.</Styled.BodyText>
            <Styled.BodyText>배운 모든 것을 기록하고 공유하는 것을 좋아합니다.</Styled.BodyText>
            <Styled.BodyText>공유의 중요성을 잘 알기에 항상 새기고 실천하려고 노력합니다.</Styled.BodyText>
          </Styled.BodyTextContainer>
        </FadeInBodyText>
        <div>
          <Styled.ImageBox>
          <img src="/pig.png" alt="hyeonsu-background" draggable={false} />
          </Styled.ImageBox>
        </div>

        <FadeInContent delay={3.5}>
          <Styled.DownAnimatedArrow fontSize="large" />
        </FadeInContent>
      </Styled.Main>
    </Styled.Container>
  );
};

export default IntroContainer;
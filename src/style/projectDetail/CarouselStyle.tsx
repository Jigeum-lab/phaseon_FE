import styled from 'styled-components';
import { Icon } from '@/components/common/Icon';

export const Section = styled.section`
  width: 100%;
  height: 232px;
  position: relative;
`;

export const CarouselViewport = styled.section`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 196px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const CarouselSlide = styled.div`
  margin: 0 4px 0 4px;
`;

export const Img = styled.img<{ $type: string }>`
  width: ${({ $type }) => ($type === 'row' ? '320px' : '180px')};
  height: ${({ $type }) => ($type === 'row' ? '180px' : '320px')};
`;

export const ButtonSection = styled.section`
  width: 100%;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SlideButton = styled.button<{ $bgColor: string }>`
  margin: 0 3px 0 3px;
  width: 6px;
  height: 6px;
  border: ${({ $bgColor }) =>
    $bgColor === 'color' ? '0.6px solid rgba(105, 172, 255, 0.08)' : '0.6px solid rgba(23,23,25,0.08)'};
  border-radius: 100%;
  outline: none;
  background-color: ${({ $bgColor }) => ($bgColor === 'color' ? '#69ACFF' : '#F2F2F7')};
  cursor: pointer;
`;

export const PrevButton = styled(Icon)`
  position: absolute;
  top: 93px;
  left: 20px;
  outline: none;
  cursor: pointer;
  z-index: 2;
`;

export const NextButton = styled(Icon)`
  position: absolute;
  top: 93px;
  right: 20px;
  cursor: pointer;
  z-index: 2;
`;

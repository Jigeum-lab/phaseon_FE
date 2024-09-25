import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px;
  width: 100%;
  height: 428px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const TextBox = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;

export const Title = styled.p`
  color: #247bff;
  font-size: 22px;
  font-weight: 600;
  line-height: 136.4%;
  letter-spacing: -0.427px;
`;

export const MoreContent = styled.p`
  color: #858588;
  font-size: 14px;
  font-weight: 600;
  line-height: 142.9%;
  letter-spacing: 0.203px;
  cursor: pointer;
`;

export const CarouselViewport = styled.section`
  height: 85%;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const CarouselContainer = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const CarouselSlide = styled.div`
  margin: 0 16px;
  height: 304px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 240px;
  height: 240px;
  border-radius: 8px;
  box-shadow:
    0px 1px 2px 0px rgba(0, 0, 0, 0.12),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08);
`;

export const ProjectName = styled.p`
  color: #47484c;
  font-size: 14px;
  font-weight: 500;
  line-height: 142.9%;
  letter-spacing: 0.203px;
`;

export const Description = styled.p`
  color: #858588;
  font-size: 12px;
  font-weight: 400;
  line-height: 133.4%;
  letter-spacing: 0.302px;
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

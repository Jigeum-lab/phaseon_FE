import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const Section = styled.section`
  padding: 32px 0;
  width: 840px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(207, 235, 255, 0.9);
  display: flex;
  flex-direction: column;
`;

export const Carousel = styled.section`
  width: 780px;
  height: 218px;
`;

export const ProjectInformation = styled(ReactMarkdown)`
  h2 {
    margin-top: 24px;
    color: #247bff;
    font-size: 22px;
    font-weight: 600;
    line-height: 136.4%;
    letter-spacing: -0.427px;
  }
  blockquote {
    margin-top: 8px;
    color: #858588;
    font-size: 14px;
    font-weight: 400;
    line-height: 142.9%;
    letter-spacing: 0.203px;
  }

  p:has(strong) {
    margin: 20px 0 8px 0;
    color: black;
    font-size: 18px;
    font-weight: 600;
    line-height: 144.5%;
    letter-spacing: -0.004px;
  }
  li {
    list-style: none;
    color: #47484c;
    font-size: 16px;
    font-weight: 400;
    line-height: 162.5%;
    letter-spacing: 0.091px;
  }
  p:has(code) {
    margin-top: 20px;
    width: 100%;
    height: 36px;
    display: flex;
    gap: 16px;
  }
  code {
    padding: 8px 12px;
    height: 100%;
    box-sizing: border-box;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(50, 173, 230, 0.08);

    color: #32ade6;
    font-size: 12px;
    font-weight: 510;
    line-height: 16px;
  }
`;

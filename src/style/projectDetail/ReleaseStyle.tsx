import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

export const Section = styled.section`
  padding: 0 20px 24px 20px;
  width: 840px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(207, 235, 255, 0.9);
  display: flex;
  flex-direction: column;
`;

export const ReleaseBox = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-top: 24px;
  color: #247bff;
  font-size: 22px;
  font-weight: 600;
  line-height: 136.4%;
  letter-spacing: -0.427px;
`;

export const ReleaseInformation = styled(ReactMarkdown)`
  h3 {
    margin-bottom: 8px;
    color: #000;
    font-size: 18px;
    font-weight: 600;
    line-height: 144.5%;
    letter-spacing: -0.004px;
  }
  blockquote {
    margin: 8px 0 12px 0;
    color: #858588;
    font-size: 14px;
    font-weight: 400;
    line-height: 142.9%;
    letter-spacing: 0.203px;
  }
  p {
    color: #47484c;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 162.5%;
    letter-spacing: 0.091px;
  }
`;

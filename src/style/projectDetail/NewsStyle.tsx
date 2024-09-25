import styled from 'styled-components';

export const TitleBox = styled.section`
  margin-bottom: 24px;
`;

export const Title = styled.p`
  margin-bottom: 4px;
  color: #1464e5;
  font-size: 22px;
  font-weight: 600;
  line-height: 136.4%;
  letter-spacing: -0.427px;
`;

export const ShortDescription = styled.p`
  color: #858588;
  font-size: 14px;
  font-weight: 400;
  line-height: 142.9%;
  letter-spacing: 0.203px;
`;

export const PaddingBox = styled.section`
  padding: 0 20px;
  width: 800px;
`;

export const NewsBox = styled.section`
  margin-bottom: 24px;
  width: 800px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const NewsImg = styled.img`
  width: 80px;
  height: 80px;
`;

export const NewsTextBox = styled.section`
  width: 688px;
  height: 100%;
`;

export const NewsTitle = styled.p`
  margin-bottom: 8px;
  color: #47484c;
  font-size: 18px;
  font-weight: 600;
  line-height: 144.5%;
  letter-spacing: -0.004px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const NewsContent = styled.p`
  color: #858588;
  font-size: 12px;
  font-weight: 400;
  line-height: 133.4%;
  letter-spacing: 0.302px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

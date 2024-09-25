import styled from 'styled-components';

export const Section = styled.section`
  padding: 32px 0;
  width: 100%;
  box-sizing: border-box;
`;

export const CategoryBox = styled.section`
  padding: 0 20px;
  width: 840px;
  height: 34px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(207, 235, 255, 0.7);
  display: flex;
  align-items: center;
`;

export const CategoryText = styled.p<{ $currentCategory: string; $id: string }>`
  margin-right: 32px;
  width: auto;
  height: 100%;
  box-sizing: border-box;
  border-bottom: ${(props) => (props.$currentCategory === props.$id ? '4px solid #69acff' : 'none')};
  color: ${(props) => (props.$currentCategory === props.$id ? 'black' : '#47484c')}; // focus -> 000
  font-size: 15px;
  font-weight: 500;
  line-height: 146.7%;
  letter-spacing: 0.144px;
  cursor: pointer;
`;

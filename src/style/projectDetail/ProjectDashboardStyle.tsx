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
  position: relative;
`;

export const CategoryText = styled.div<{ $currentCategory: string; $id: string }>`
  margin-right: 32px;
  width: auto;
  height: 100%;
  color: ${(props) => (props.$currentCategory === props.$id ? 'black' : '#47484c')};
  font-size: 15px;
  font-weight: 500;
  line-height: 146.7%;
  letter-spacing: 0.144px;
  cursor: pointer;
`;

export const UnderLine = styled.div<{
  $width: number;
  $categoryX: number;
}>`
  width: ${({ $width }) => $width}px;
  height: 4px;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: transform 0.3s ease;
  transform: translateX(${({ $categoryX }) => $categoryX}px);
  background-color: #69acff;
`;

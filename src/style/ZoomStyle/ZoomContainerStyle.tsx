import styled from 'styled-components';

export const Section = styled.section<{ $show: boolean }>`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 4;
`;

export const CarouselButtonBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  gap: 8px;
`;

export const CarouselButton = styled.span<{ $focus: boolean }>`
  width: 6px;
  height: 6px;
  border-radius: 100%;
  display: block;
  background: ${({ $focus }) => ($focus ? '#69ACFF' : '#f2f2f7')};
  cursor: pointer;
`;

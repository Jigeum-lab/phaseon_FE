import styled from 'styled-components';
import { Icon } from '@/components/common/Icon';

export const ButtonBox = styled.div<{ $padding: number }>`
  padding: 10px ${({ $padding }) => $padding}px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 49%;
  z-index: 1;
  pointer-events: none;
`;

export const PrevButton = styled(Icon)`
  pointer-events: auto;
  cursor: pointer;
`;

export const NextButton = styled(Icon)`
  pointer-events: auto;
  cursor: pointer;
`;

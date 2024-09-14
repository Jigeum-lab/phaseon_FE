import styled from 'styled-components';
import { ReactComponent as Left } from '../../assets/svg/LeftButton.svg';
import { ReactComponent as Right } from '../../assets/svg/RightButton.svg';

export const ImgWrapper = styled.div<{ $type: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Div = styled.div<{ $zoomCount: number; $type: string }>`
  width: ${({ $zoomCount, $type }) => `${$type === 'row' ? 70 * $zoomCount : 40 * $zoomCount}%`};
  height: ${({ $type }) => ($type === 'row' ? '80%' : '75%')};
  position: relative;
  display: flex;
  align-items: center;
  transition-duration: 0.3s;
`;

export const Img = styled.img<{
  $type: string;
  $zoomCount: number;
  $drag: boolean;
  $dragDirection: string;
  $dragOffSet: number;
}>`
  margin: ${({ $dragOffSet }) => ($dragOffSet === 0 ? '0 auto' : `0 0 0 ${$dragOffSet}px`)};
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: contain;
  user-select: none;
  transition-duration: ${({ $dragOffSet }) => ($dragOffSet !== 0 ? '' : '0.3s')};
  transform-origin: center center;
  opacity: ${({ $dragDirection }) => ($dragDirection !== 'none' ? 0 : 1)};
  cursor: ${({ $drag }) => ($drag ? 'grabbing' : 'grab')};
`;

export const LeftButton = styled(Left)`
  position: absolute;
  left: 20px;
  z-index: 5;
  cursor: pointer;
`;
export const RightButton = styled(Right)`
  position: absolute;
  right: 20px;
  z-index: 5;
  cursor: pointer;
`;

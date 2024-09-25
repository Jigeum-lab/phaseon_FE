import styled from 'styled-components';
import { Icon } from '@/components/common/Icon';

export const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

export const Div = styled.div<{ $zoomCount: number; $type: string }>`
  width: ${({ $zoomCount, $type }) => {
    if ($type === 'row') {
      return 70 * $zoomCount;
    }
    if ($type === 'col') {
      return 40 * $zoomCount;
    }
    return 100;
  }}%;
  height: ${({ $type }) => ($type === 'row' ? '80%' : '75%')};
  position: relative;
  display: flex;
  align-items: center;
  transition-duration: 0.3s;
`;

export const Img = styled.img<{
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

export const LeftButton = styled(Icon)`
  position: absolute;
  left: 20px;
  z-index: 5;
  cursor: pointer;
`;
export const RightButton = styled(Icon)`
  position: absolute;
  right: 20px;
  z-index: 5;
  cursor: pointer;
`;

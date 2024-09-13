import styled from 'styled-components';
import { ReactComponent as CloseButton } from '../../assets/svg/Close.svg';

export const HandelBox = styled.section`
  padding: 0 20px;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 6;
`;

export const Close = styled(CloseButton)`
  cursor: pointer;
`;
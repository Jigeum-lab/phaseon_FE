import styled from 'styled-components';

export const Div = styled.div`
  width: 240px;
  height: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  right: min(190px, calc(70px + ((100vw - 1200px) / 2)));
`;

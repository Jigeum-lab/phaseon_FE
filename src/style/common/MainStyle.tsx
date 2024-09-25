import styled from 'styled-components';

export const Main = styled.main<{ $overflow: string }>`
  padding: 0 min(170px, calc(50px + ((100vw - 1200px) / 2)));
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: ${({ $overflow }) => $overflow};
`;

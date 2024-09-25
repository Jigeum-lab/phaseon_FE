import styled from 'styled-components';

export const MainStyle = styled.main`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Section = styled.section`
  padding: 0 calc(170px - ((1440px - 100vw) * 0.5));
  width: 100%;
  box-sizing: border-box;
  display: flex;
`;

export const StickyRoad = styled.div`
  padding-bottom: 120px;
  margin-right: 40px;
  width: 220px;
  box-sizing: border-box;
  position: relative;
`;

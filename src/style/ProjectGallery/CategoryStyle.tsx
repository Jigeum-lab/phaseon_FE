import styled from 'styled-components';

export const Section = styled.section`
  padding: 12px 20px;
  width: 220px;
  height: 474px;
  box-sizing: border-box;
  border: 1px solid rgba(207, 235, 255, 0.9);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 30px;
  background-color: white;
  gap: 16px;
`;

export const Title = styled.p`
  color: black;
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
  letter-spacing: -0.24px;
`;

export const CategoryBox = styled.ul`
  width: 180px;
  height: 406px;
  list-style: none;
`;

export const Category = styled.li<{ $focus: number; $currentNum: number }>`
  margin-bottom: 8px;
  padding: 0px 24px;
  width: 180px;
  height: 38px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background: ${({ $focus, $currentNum }) => ($currentNum === $focus ? 'rgba(36, 123, 255, 0.12) ' : 'transperent')};
  gap: 8px;

  color: ${({ $focus, $currentNum }) => ($currentNum === $focus ? '#247BFF' : '#47484c')};
  font-size: 15px;
  font-weight: ${({ $focus, $currentNum }) => ($currentNum === $focus ? 600 : 500)};
  line-height: 146.7%;
  letter-spacing: 0.144px;
  cursor: pointer;

  &&:hover {
    background-color: ${({ $focus, $currentNum }) => ($currentNum === $focus ? '' : 'rgba(71, 72, 76, 0.05)')};
  }

  &&:active {
    background-color: ${({ $focus, $currentNum }) => ($currentNum === $focus ? '' : 'rgba(105, 172, 255, 0.12)')};
    background-color: rgba(105, 172, 255, 0.12);
  }
`;

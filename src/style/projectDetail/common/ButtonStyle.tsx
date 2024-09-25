import styled from 'styled-components';

export const Button = styled.button<{
  $border: string;
  $color: string;
  $type: string;
  $width: number;
  $height: number;
}>`
  padding: ${({ $width }) => ($width === 90 ? '7px 14px' : '9px 10.5px')};
  width: ${({ $width }) => `${$width}px`};
  height: ${({ $height }) => `${$height}px`};
  box-sizing: border-box;
  border: ${({ $border }) => $border};
  border-radius: 8px;

  color: ${({ $color }) => $color};
  font-size: ${({ $width }) => ($width === 90 ? '13px' : '16px')};
  font-weight: 600;
  line-height: 138.5%;
  letter-spacing: 0.252px;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ $type }) => ($type === 'star' ? '#69ACFF' : 'white')};
  outline: none;
  gap: 5px;
  cursor: pointer;

  &&:hover {
    background-color: ${({ $type }) => ($type === 'star' ? '#63A1EE' : '#F7FBFF')};
  }
  &&:active {
    background-color: ${({ $type }) => ($type === 'star' ? '#5A91D6' : '#EDF5FF')};
  }
`;

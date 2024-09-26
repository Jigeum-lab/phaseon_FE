import styled from 'styled-components';
import { Icon } from '@/components/common/Icon';

export const Header = styled.header`
  padding: 0 calc(50px + ((100vw - 1200px) / 2));
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(207, 235, 255, 0.7);
  display: flex;
  justify-content: space-between;
`;

export const NavigationBox = styled.section<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  height: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SvgIcon = styled(Icon)`
  cursor: pointer;
`;

export const Nav = styled.nav`
  margin-left: 44px;
  width: 159px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

export const IconBox = styled.div<{ color: string }>`
  width: 79px;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 4px;

  color: ${({ color }) => color};
  font-size: 15px;
`;

export const RegisterButton = styled.button`
  padding: 7px 14px;
  width: 97px;
  height: 32px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #69acff;
  display: flex;
  align-items: center;
  outline: none;
  background-color: rgba(255, 255, 255, 1);

  color: #69acff;
  font-size: 13px;

  &&:hover {
    background-color: #f7fbff;
  }
  &&:active {
    background-color: #edf5ff;
  }
`;

export const Article = styled.p`
  color: #47484c;
  font-size: 15px;
`;

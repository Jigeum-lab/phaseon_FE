import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../assets/svg/Logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/svg/Search.svg';
import { ReactComponent as RegisterIcon } from '../../assets/svg/Register.svg';
import { ReactComponent as UserIcon } from '../../assets/svg/Person.svg';

export const Header = styled.header`
  padding: 0 170px 0 170px;
  width: 100%;
  height: 66px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(207, 235, 255, 0.7);
  display: flex;
  justify-content: space-between;
`;

export const NavigationBox = styled.section<{ width: number }>`
  width: ${({ width }) => `${width}px`};
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(LogoIcon)`
  cursor: pointer;
`;
export const Search = styled(SearchIcon)`
  cursor: pointer;
`;
export const Register = styled(RegisterIcon)`
  cursor: pointer;
`;
export const User = styled(UserIcon)`
  cursor: pointer;
`;

export const Nav = styled.nav`
  width: 177px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconBox = styled.div<{ color: string }>`
  width: 90px;
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const RegisterButton = styled.button`
  padding: 9px 20px;
  width: 78px;
  height: 20px;
  box-sizing: content-box;
  border-radius: 8px;
  border: 1px solid #69acff;
  color: #69acff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  outline: none;
  background-color: rgba(255, 255, 255, 1);

  &&:hover {
    background-color: #f7fbff;
  }
  &&:active {
    background-color: #edf5ff;
  }
`;

export const Article = styled.span`
  color: #47484c;
`;
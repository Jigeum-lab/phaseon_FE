import styled from 'styled-components';
import { Icon } from '@/components/common/Icon';

export const Footer = styled.footer`
  padding: 40px min(170px, calc(70px + ((100vw - 1200px) / 2))) 24px min(170px, calc(70px + ((100vw - 1200px) / 2)));
  width: 100%;
  border-top: 1px solid #cfebff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const TopSection = styled.section`
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: space-between;
`;

export const ServiceInfo = styled.div`
  width: 30%;
  height: 100%;
  gap: 4px;

  color: #171719;
  font-size: 13px;
  font-weight: 400;
  line-height: 138.5%;
  letter-spacing: 0.252px;
`;

export const FooterMenu = styled.div`
  width: 40%;
  display: flex;
  justify-content: end;
  gap: 32px;

  color: #171719;
  font-size: 15px;
  font-weight: 500;
  line-height: 146.7%;
  letter-spacing: 0.144px;
  cursor: pointer;
`;

export const Menu = styled.p`
  cursor: pointer;
`;

export const MidSection = styled.section`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  color: #000000;
  font-size: 13px;
  font-weight: 400;
  line-height: 138.5%;
  letter-spacing: 0.252px;
`;

export const DividingLine = styled.p`
  &&::after {
    margin-right: 8px;
    content: '';
    width: 8px;
    height: 10px;
    border-right: 1px solid #c7c7cc;
    display: inline-block;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
`;

export const BottomSection = styled.section`
  width: 100%;
  height: 40px;
  border-top: 1px solid #cfebff;
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const Instargram = styled(Icon)`
  margin-right: 16px;
  cursor: pointer;
`;
export const LinkedIn = styled(Icon)`
  cursor: pointer;
`;

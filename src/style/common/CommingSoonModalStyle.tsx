import { Icon } from '@/components/common/Icon';
import styled from 'styled-components';

export const Div = styled.div<{ $scroll: number }>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${({ $scroll }) => $scroll}px;
  left: 0;
  background-color: #00000072;
  z-index: 4;
`;

export const ModalBox = styled.div`
  padding: 20px;
  width: 360px;
  height: 326px;
  box-sizing: border-box;
  border-radius: 16px;
  border: 1px solid #e0e0e2;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background: #fff;
`;

export const Close = styled(Icon)`
  position: absolute;
  right: 20px;
  cursor: pointer;
`;

export const Logoicon = styled(Icon)`
  margin-top: 44px;
`;

export const Headline = styled.p`
  margin: 16px 0 16px 0;
  color: #247bff;
  font-size: 28px;
  font-weight: 700;
  line-height: 135.8%;
  letter-spacing: -0.661px;
`;

export const Description = styled.p`
  color: #858588;
  font-size: 14px;
  font-weight: 500;
  line-height: 142.9%;
  letter-spacing: 0.203px;
`;

export const CheckButton = styled.button`
  margin-top: 20px;
  padding: 7px 14px;
  width: 280px;
  height: 32px;
  box-sizing: border-box;
  border: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #69acff;
  box-shadow:
    0px 2px 8px 0px rgba(0, 0, 0, 0.12),
    0px 1px 4px 0px rgba(0, 0, 0, 0.08),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08);
  outline: none;
  gap: 4px;
  cursor: pointer;

  color: white;
  font-size: 13px;
  font-weight: 600;
  line-height: 138.5%;
  letter-spacing: 0.252px;

  &&:hover {
    background-color: #63a1ee;
  }
  &&:active {
    background-color: #5a91d6;
  }
`;

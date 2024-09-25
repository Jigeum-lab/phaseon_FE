import { QRCodeCanvas } from 'qrcode.react';
import styled from 'styled-components';
import { Icon } from '@/components/common/Icon';

export const Section = styled.section<{ $scroll: number }>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: ${({ $scroll }) => $scroll - 66}px;
  left: 0;
  background-color: #00000072;
  z-index: 4;
`;

export const QRcodeBox = styled.section`
  padding: 20px 20px 44px 20px;
  width: 360px;
  height: 434px;
  box-sizing: border-box;
  border-radius: 16px;
  border: 1px solid #e0e0e2;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 16px;
  background-color: white;
`;

export const CloseButton = styled(Icon)`
  cursor: pointer;
`;

export const Div = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  margin-bottom: 4px;
  color: #000;
  font-size: 24px;
  font-weight: 700;
  line-height: 133.4%;
  letter-spacing: -0.552px;
`;
export const Description = styled.p`
  margin-bottom: 40px;
  color: #858588;
  font-size: 11px;
  font-weight: 400;
  line-height: 127.3%;
  letter-spacing: 0.342px;
`;

export const QRCodeStyle = styled(QRCodeCanvas)`
  width: 120px !important;
  height: 120px !important;
`;

export const DownloadBox = styled.section`
  margin-top: 16px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DownloadButton = styled(Icon)`
  margin-right: 4px;
  cursor: pointer;
`;

export const DownloadText = styled.p`
  color: #47484c;
  font-size: 12px;
  font-weight: 600;
  line-height: 133.4%;
  letter-spacing: 0.302px;
  cursor: pointer;
`;

export const CopyBox = styled.section`
  margin-top: 40px;
  padding: 6px 15px;
  width: 296px;
  height: 44px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #e0e0e2;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CopyText = styled.p`
  width: 205px;
  color: #47484c;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.091px;
  // 지금은 localhost가 붙어서 주소에 말줄임표 달아놓음
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;

export const CopyButton = styled.button`
  padding: 7px 10px;
  width: 51px;
  height: 32px;
  box-sizing: border-box;
  border: none;
  border-radius: 6px;
  background: #69acff;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;

  color: #fff;
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

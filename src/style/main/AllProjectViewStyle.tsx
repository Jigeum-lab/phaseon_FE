import styled from 'styled-components';
import { Icon } from '@/components/common/Icon';

export const Section = styled.section`
  margin-bottom: 104px;
  width: 800px;
  display: flex;
  flex-direction: column;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TitleBox = styled.div`
  margin-right: 8px;
`;

export const Title = styled.div`
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 10px;

  color: #247bff;
  font-size: 24px;
  font-weight: 700;
  line-height: 133.4%;
  letter-spacing: -0.552px;
`;

export const SubTitle = styled.p`
  color: #47484c;
  font-size: 14px;
  font-weight: 400;
  line-height: 142.9%;
  letter-spacing: 0.203px;
  b {
    font-weight: 600;
  }
`;

export const SortButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ButtonWrapper = styled.div`
  padding: 2px;
  width: 128px;
  height: 32px;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f7f7f8;
`;

export const SortButton = styled.button<{ $current: string; $buttonName: string }>`
  padding: 10px 4px;
  width: 60px;
  height: 28px;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${({ $current, $buttonName }) =>
    $current === $buttonName
      ? '0px 1px 2px 0px rgba(0, 0, 0, 0.12), 0px 0px 1px 0px rgba(0, 0, 0, 0.08),0px 0px 1px 0px rgba(0, 0, 0, 0.08)'
      : 'none'};
  background: ${({ $current, $buttonName }) => ($current === $buttonName ? 'white' : '#f7f7f8')};
  outline: none;
  cursor: pointer;

  color: ${({ $current, $buttonName }) => ($current === $buttonName ? '#47484C' : '#DFDFE0')};
  font-size: 15px;
  font-weight: 500;
  line-height: 146.7%;
  letter-spacing: 0.144px;
`;

export const LoadingBox = styled.div`
  margin: 40px 0 102px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LoadingImg = styled(Icon)`
  animation: loading 1s infinite;

  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const MoreButton = styled.button`
  margin: 20px 0;
  padding: 12px 28px;
  width: 820px;
  height: 48px;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  background: #69acff;
  box-shadow:
    0px 2px 8px 0px rgba(0, 0, 0, 0.12),
    0px 1px 4px 0px rgba(0, 0, 0, 0.08),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08);
  outline: none;
  cursor: pointer;

  color: #fff;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: 0.091px;

  &&:hover {
    background-color: #63a1ee;
  }
  &&:active {
    background-color: #5a91d6;
  }
`;

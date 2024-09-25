import styled from 'styled-components';
import { Icon } from '@/components/common/Icon';

export const Section = styled.section<{ $buttonNum: number }>`
  margin-bottom: 470px;
  padding: 16px 16px 8px 16px;
  width: 220px;
  height: calc(406px + ${({ $buttonNum }) => $buttonNum * 36}px);
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow:
    0px 1px 2px 0px rgba(0, 0, 0, 0.12),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 140px;
  gap: 8px;
  background-color: white;
  z-index: 3;
`;

export const ViewCategoryBox = styled.div`
  width: 188px;
  display: flex;
  justify-content: space-between;
`;

export const Category = styled.p`
  padding: 3px 4px;
  width: 67px;
  height: 23px;
  box-sizing: border-box;

  color: #32ade6;
  font-size: 11px;
  font-weight: 600;
  line-height: 127.3%;
  letter-spacing: 0.342px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: rgba(50, 173, 230, 0.08);
`;

export const ViewBox = styled.div`
  width: 44px;
  display: flex;
  gap: 4px;
`;

export const View = styled.p`
  color: #47484c;
  font-size: 13px;
  font-weight: 400;
  line-height: 138.5%;
  letter-spacing: 0.252px;
`;

export const PromotionBox = styled.div`
  padding: 8px 0;
  width: 188px;
  border-bottom: 1px solid #cfebff7f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

export const PromotionButton = styled.button`
  padding: 7px 14px;
  width: 188px;
  height: 32px;
  box-sizing: border-box;
  border: 1px solid #69acff;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  outline: none;

  &&:hover {
    background-color: #f7fbff;
  }
  &&:active {
    background-color: #edf5ff;
  }
`;

export const ButtonText = styled.p`
  margin-left: 4px;
  color: #69acff;
  font-size: 13px;
  font-weight: 600;
  line-height: 138.5%;
  letter-spacing: 0.252px;
`;

export const CoffeeChatButton = styled.button`
  padding: 7px 14px;
  width: 188px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 6px;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #69acff;
  outline: none;

  &&:hover {
    background-color: #63a1ee;
  }
  &&:active {
    background-color: #5a91d6;
  }
`;

export const CoffeeChatText = styled.p`
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  line-height: 138.5%;
  letter-spacing: 0.252px;
`;

export const Title = styled.p`
  color: #171719;
  font-size: 11px;
  font-weight: 590;
  line-height: 13px;
  letter-spacing: 0.06px;
`;

export const ImgBox = styled.div`
  padding: 8px 0;
  width: 188px;
  border-bottom: 1px solid #cfebff7f;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const SvgIcon = styled(Icon)`
  margin-right: -10px;
`;

export const MoreContent = styled.p`
  color: #47484c;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.06px;
  text-decoration-line: underline;
  cursor: pointer;
`;

export const Img = styled.img`
  margin-right: -10px;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: white;
`;

export const ButtonBox = styled.div`
  width: 188px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

export const PersonSvg = styled(Icon)`
  margin-right: -10px;
  border-radius: 100%;
  background-color: white;
`;

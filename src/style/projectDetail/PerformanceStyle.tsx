import styled from 'styled-components';
import { Icon } from '@/components/common/Icon';

export const Section = styled.section`
  padding-top: 24px;
  width: 840px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(207, 235, 255, 0.9);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const AwardBox = styled.section`
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Award = styled.section`
  margin-bottom: 8px;
  width: 256px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const AwardName = styled.p`
  margin-bottom: 4px;
  color: #171719;
  font-size: 14px;
  font-weight: 500;
  line-height: 142.9%;
  letter-spacing: 0.203px;
`;

export const Agency = styled.p`
  color: rgba(55, 56, 60, 0.61);
  font-size: 14px;
  font-weight: 400;
  line-height: 142.9%;
  letter-spacing: 0.203px;
`;

export const Title = styled.p`
  margin-bottom: 4px;
  color: #247bff;
  font-size: 22px;
  font-weight: 600;
  line-height: 136.4%;
  letter-spacing: -0.427px;
`;

export const ShortDescription = styled.p`
  color: #858588;
  font-size: 14px;
  font-weight: 400;
  line-height: 142.9%;
  letter-spacing: 0.203px;
`;

export const SvgIcon = styled(Icon)`
  margin-bottom: 16px;
  width: 80px;
`;

export const Uncertifiedaward = styled.ul`
  width: 740px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  list-style: none;
  gap: 4px;
`;

export const Li = styled.li`
  text-indent: 10px;
  width: 100%;
  height: 26px;
  box-sizing: border-box;
  color: #47484c;
  display: flex;
  align-items: center;
  position: relative;

  &&::after {
    content: '';
    width: 3px;
    height: 3px;
    border-radius: 10px;
    border: none;
    display: block;
    position: absolute;
    top: 10px;
    background-color: black;
  }
`;

export const MarginBox = styled.section`
  padding: 0 20px;
  margin: 24px 0;
  width: 740px;
`;

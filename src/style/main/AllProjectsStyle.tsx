import styled from 'styled-components';

export const ProjectContainer = styled.section`
  margin-top: 16px;
  padding: 16px 0 0 0;
  border-top: 1px solid rgba(207, 235, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectBox = styled.section`
  margin-bottom: 16px;
  padding: 16px;
  width: 820px;
  height: 152px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid rgba(207, 235, 255, 0.7);
  display: flex;
  align-items: center;
  box-shadow:
    0px 1px 2px 0px rgba(0, 0, 0, 0.12),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08);
  gap: 24px;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 4px;
  box-shadow:
    0px 1px 2px 0px rgba(0, 0, 0, 0.12),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08);
`;

export const ProjectName = styled.p`
  margin-bottom: 8px;
  color: black;
  font-size: 18px;
  font-weight: 600;
  line-height: 144.5%;
  letter-spacing: -0.004px;
`;

export const Description = styled.p`
  color: #47484c;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.091px;
`;

export const InpoBox = styled.div`
  margin: 8px 0;
  width: 120px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: #858588;
  font-size: 14px;
  font-weight: 500;
  line-height: 142.9%;
  letter-spacing: 0.203px;
`;

export const CategoryBox = styled.div`
  display: flex;
  gap: 10px;

  p {
    padding: 3px 4px;
    height: 20px;
    border-radius: 4px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(50, 173, 230, 0.08);

    color: #32ade6;
    font-size: 11px;
    font-weight: 600;
    line-height: 127.3%;
    letter-spacing: 0.342px;
  }
`;

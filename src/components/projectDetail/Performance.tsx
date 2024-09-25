import { useContext } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import * as s from '@/style/projectDetail/PerformanceStyle';
import News from '@/components/projectDetail/News';

export default function Performance() {
  const { accomplishmentInfo } = useContext(ProjectDetailContext);
  return (
    <s.Section>
      <section>
        <s.Title>수상 및 인증 이력</s.Title>
        <s.ShortDescription>프로젝트 주요 성과</s.ShortDescription>
      </section>
      <s.AwardBox>
        {accomplishmentInfo.accomplishments.map((awardObj, index) => (
          <s.Award key={index}>
            <s.AwardImg src={awardObj.thumbnail} alt="" />
            <s.AwardName>{awardObj.title}</s.AwardName>
            <s.Agency>{awardObj.publisher}</s.Agency>
          </s.Award>
        ))}
        <s.Uncertifiedaward>
          {accomplishmentInfo.certifications.map((awardObj, index) => (
            <s.Li key={index + awardObj.title}>{awardObj.title}</s.Li>
          ))}
        </s.Uncertifiedaward>
      </s.AwardBox>
      {accomplishmentInfo.news.length > 0 && <News data={accomplishmentInfo.news} />}
    </s.Section>
  );
}

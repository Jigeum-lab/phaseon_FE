import { useContext } from 'react';
import * as s from '@/style/main/AllProjectsStyle';
import { MainContext } from '@/context/MainContext';
import { Icon } from '@/components/common/Icon';
import { useNavigate } from 'react-router-dom';
import { formatNumber } from '@/utils/formatNumber';

export default function AllProjects() {
  const { project } = useContext(MainContext);
  const navigate = useNavigate();

  const categoryMap = {
    AI: '인공지능',
    SOCIAL_MEDIA: '소셜 미디어',
    PRODUCTIVITY: '협업 ・ 생산성',
    HEALTH: '건강 ・ 의료',
    TRAVEL: '여행',
    SOCIAL_EFFECT: '소셜 이펙트',
    ENTERTAINMENT: '엔터테이먼트',
    PERSONAL_BRANDING: '퍼스널 브랜딩',
    EDUCATION: '교육',
  } as const;

  type CategoryType = keyof typeof categoryMap;

  function getCategoryText(categoryType: string) {
    if (categoryType in categoryMap) {
      return categoryMap[categoryType as CategoryType];
    }
  }

  return (
    <s.ProjectContainer>
      {project &&
        project.data.projects.map((projectObj, idx) => (
          <s.ProjectBox
            key={idx}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
              navigate(`/${projectObj.id}`);
            }}
          >
            <s.Img src={projectObj.thumbnail} alt="" />
            <div>
              <s.ProjectName>{projectObj.title}</s.ProjectName>
              <s.Description>{projectObj.summary}</s.Description>
              <s.InpoBox>
                <s.IconBox>
                  <Icon name="FillStar" fill="#FFCC00" />
                  <p>{formatNumber(projectObj.likeCount)}</p>
                </s.IconBox>
                <s.IconBox>
                  <Icon name="Medal" />
                  <p>{formatNumber(projectObj.awardCount)}</p>
                </s.IconBox>
                <s.IconBox>
                  <Icon name="Member" fill="#69ACFF" width={16} height={12} />
                  <p>{formatNumber(projectObj.memberCount)}</p>
                </s.IconBox>
                <s.IconBox>
                  <Icon name="View" />
                  <p>{formatNumber(projectObj.viewCount)}</p>
                </s.IconBox>
              </s.InpoBox>
              <s.CategoryBox>
                {projectObj.category.map((text, idx2) => {
                  return <p key={idx2 + text}>{getCategoryText(text)}</p>;
                })}
              </s.CategoryBox>
            </div>
          </s.ProjectBox>
        ))}
    </s.ProjectContainer>
  );
}

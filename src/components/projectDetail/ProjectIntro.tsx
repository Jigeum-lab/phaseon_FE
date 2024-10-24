import { useContext, useEffect } from 'react';
import { Updater } from 'use-immer';
import { useLocation } from 'react-router-dom';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import { CategoryContext } from '@/context/CategoryContext';
import { Accomplishment, Member, ProjectInfo } from '@/interface';
import { Icon } from '@/components/common/Icon';
import { getStroke } from '@/utils/getStroke';
import * as s from '@/style/projectDetail/ProjectIntroStyle';
import { getFill } from '@/utils/getFill';
import { formatNumber } from '@/utils/formatNumber';

export default function ProjectIntro() {
  const { projectInfo, updateProjectInfo, updateMemberInfo, updateAccomplishmentInfo } =
    useContext(ProjectDetailContext);
  const { introRef } = useContext(CategoryContext);
  const id = useLocation().pathname.replace('/', '');
  interface IconProps {
    name:
      | 'AI'
      | 'SOCIAL_MEDIA'
      | 'PRODUCTIVITY'
      | 'HEALTH'
      | 'TRAVEL'
      | 'SOCIAL_EFFECT'
      | 'ENTERTAINMENT'
      | 'PERSONAL_BRANDING'
      | 'EDUCATION';
  }
  const categoryText = [
    'AI',
    'SOCIAL_MEDIA',
    'PRODUCTIVITY',
    'HEALTH',
    'TRAVEL',
    'SOCIAL_EFFECT',
    'ENTERTAINMENT',
    'PERSONAL_BRANDING',
    'EDUCATION',
  ];

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

  const iconWithFill = [2, 3, 4, 5, 6, 7, 9];

  useEffect(() => {
    getData(updateProjectInfo, id);
    getMember(updateMemberInfo, id);
    getAccomplishment(updateAccomplishmentInfo, id);
  }, [id, updateProjectInfo, updateMemberInfo, updateAccomplishmentInfo]);

  return (
    <s.Section ref={introRef}>
      {projectInfo.banner ? (
        <s.Banner src={projectInfo.banner} alt="" />
      ) : (
        <s.ColorBanner $color={projectInfo.brandColor} />
      )}
      <s.IntroSection>
        <s.MainImg src={projectInfo.thumbnail} alt="" />
        <s.ProjectName>{projectInfo.title}</s.ProjectName>
        <s.ProjectBrief>{projectInfo.summary}</s.ProjectBrief>
        <s.Description>{projectInfo.shortDescription}</s.Description>
        <s.CategoryBox>
          {projectInfo.categories.map((text, index) => {
            const currenticon = text as IconProps['name'];
            const currentIconIndex = categoryText.indexOf(text);
            if (currenticon) {
              return (
                <s.Category key={index}>
                  <Icon
                    name={currenticon}
                    width={14}
                    height={14}
                    stroke={getStroke(currentIconIndex, iconWithFill, currentIconIndex, '#32ade6')}
                    fill={getFill(currentIconIndex, iconWithFill, currentIconIndex, '#32ade6')}
                  />
                  <p>{getCategoryText(text)}</p>
                </s.Category>
              );
            }
          })}
        </s.CategoryBox>
      </s.IntroSection>
    </s.Section>
  );
}

async function getData(updateData: Updater<ProjectInfo>, id: string) {
  try {
    const response = await fetch(`https://port-0-bay-core-m20bg38se8c2b49b.sel4.cloudtype.app/api/v1/projects/${id}`);
    const data = await response.json();
    updateData((obj) => {
      Object.assign(obj, data.data);
      obj.likeCount = formatNumber(data.data.likeCount);
      obj.viewCount = formatNumber(data.data.viewCount);
      obj.subscribeCount = formatNumber(data.data.subscribeCount);
    });
  } catch (err) {
    console.log(err);
  }
}

async function getMember(updateData: Updater<Member>, id: string) {
  try {
    const response = await fetch(
      `https://port-0-bay-core-m20bg38se8c2b49b.sel4.cloudtype.app/api/v1/projects/${id}/members`,
    );
    const data = await response.json();
    updateData((obj) => {
      Object.assign(obj, data.data);
    });
  } catch (err) {
    console.log(err);
  }
}

async function getAccomplishment(updateAccomplishmentInfo: Updater<Accomplishment>, id: string) {
  try {
    const response = await fetch(
      `https://port-0-bay-core-m20bg38se8c2b49b.sel4.cloudtype.app/api/v1/projects/${id}/accomplishments`,
    );
    const data = await response.json();
    updateAccomplishmentInfo((draft) => {
      Object.assign(draft, data.data);
    });
  } catch (e) {
    console.log(e);
  }
}

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
      | 'PERSONAL_BRANDING';
  }
  const categoryText = [
    '인공지능',
    '소셜 미디어',
    '협업 ・ 생산성',
    '건강 ・ 의료',
    '여행',
    '소셜 이펙트',
    '엔터테이먼트',
    '퍼스널 브랜딩',
  ];
  const iconWithFill = [2, 3, 4, 5, 6, 8];

  useEffect(() => {
    getData(updateProjectInfo, id);
    getMember(updateMemberInfo, id);
    getAccomplishment(updateAccomplishmentInfo, id);
  }, [id, updateProjectInfo, updateMemberInfo, updateAccomplishmentInfo]);

  return (
    <s.Section ref={introRef}>
      <s.Banner src={projectInfo.banner} alt="" />
      <s.IntroSection>
        <s.MainImg src={projectInfo.thumbnail} alt="" />
        <s.ProjectName>{projectInfo.title}</s.ProjectName>
        <s.ProjectBrief>{projectInfo.summary}</s.ProjectBrief>
        <s.Description>{projectInfo.shortDescription}</s.Description>
        <s.CategoryBox>
          {projectInfo.categories.map((text, index) => {
            const currenticon = text as IconProps['name'];
            if (currenticon) {
              return (
                <s.Category key={index}>
                  <Icon
                    name={currenticon}
                    width={14}
                    height={14}
                    stroke={getStroke(index, iconWithFill, index)}
                    fill={getFill(index, iconWithFill, index)}
                  />
                  <p>{categoryText[index]}</p>
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
    const response = await fetch(`https://name.store:8443/api/project/${id}`);
    // const response = await fetch('/public/dummy/atti2.json');
    const data = await response.json();
    updateData((obj) => {
      Object.assign(obj, data.data[0]);
    });
  } catch (err) {
    console.log(err);
  }
}

async function getMember(updateData: Updater<Member>, id: string) {
  try {
    const response = await fetch(`https://name.store:8443/api/project/${id}/members`);
    // const response = await fetch('/dummy/attiMember.json');
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
    const response = await fetch(`https://name.store:8443/api/project/${id}/accomplishments`);
    // const response = await fetch('dummy/attiPerformance.json');
    const data = await response.json();
    updateAccomplishmentInfo((draft) => {
      Object.assign(draft, data.data);
    });
  } catch (e) {
    console.log(e);
  }
}

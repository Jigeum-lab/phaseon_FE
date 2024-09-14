import { useContext, useEffect } from 'react';
import { Updater } from 'use-immer';
import { useParams } from 'react-router-dom';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import * as s from '../../style/projectDetail/ProjectIntroStyle';
import { DetailDataType } from '../../interface';
import { CategoryContext } from '../../context/CategoryContext';
import { ReactComponent as Temp } from '../../assets/svg/TempImg.svg';

export default function ProjectIntro() {
  const { data, updateData } = useContext(ProjectDetailContext);
  const { introRef } = useContext(CategoryContext);
  const { projectName } = useParams();
  useEffect(() => {
    if (!projectName) return;
    getData(updateData, projectName);
  }, [projectName]);

  return (
    <s.Section ref={introRef}>
      <s.TempBanner />
      <s.IntroSection>
        <s.MainImg src={`/public/png/${projectName}.png`} alt="" />
        <s.ProjectName>{data.projectname}</s.ProjectName>
        <s.ProjectBrief>{data.intro.projectbrief}</s.ProjectBrief>
        <s.Description>{data.intro.description}</s.Description>
        <s.CategoryBox>
          {data.category.map((text, index) => (
            <s.Category key={index}>
              <Temp />
              <p>{text}</p>
            </s.Category>
          ))}
        </s.CategoryBox>
      </s.IntroSection>
    </s.Section>
  );
}

async function getData(updateData: Updater<DetailDataType>, projectName: string) {
  try {
    const response = await fetch(`/public/dummy/${projectName}.json`);
    const data = await response.json();
    updateData((obj) => {
      Object.assign(obj, data.data);
    });
  } catch (err) {
    console.log(err);
  }
}

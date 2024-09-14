import { useEffect } from 'react';
import { Updater, useImmer } from 'use-immer';
import { useNavigate } from 'react-router-dom';
import { ProjectGalleryData } from '../../interface';
import * as s from '../../style/ProjectGallery/ProjectCollectionStyle';

export default function ProjectCollection({ TopRef }: { TopRef: React.RefObject<HTMLDivElement> }) {
  const [project, updateProject] = useImmer<ProjectGalleryData>({
    data: [],
  });
  const navigate = useNavigate();
  useEffect(() => {
    getProjects(updateProject);
  }, []);
  return (
    <s.Section>
      {project.data.map((projectObj, index) => (
        <s.Project
          key={index}
          onClick={() => {
            TopRef.current?.scrollIntoView({ behavior: 'smooth' });
            navigate(projectObj.param.toLowerCase());
          }}
        >
          <s.Img src={projectObj.img} alt="" />
          <s.ProjectName>{projectObj.projectname}</s.ProjectName>
          <s.Description>{projectObj.description}</s.Description>
        </s.Project>
      ))}
    </s.Section>
  );
}

async function getProjects(updateProject: Updater<ProjectGalleryData>) {
  try {
    const response = await fetch('dummy/projectCollection.json');
    const data = await response.json();
    updateProject((obj) => {
      Object.assign(obj, data);
    });
  } catch (err) {
    console.log(err);
  }
}

import { useContext } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import { ZoomContext } from '@/context/ZoomContext';
import ZoomContainer from '@/components/projectDetail/Zoom/ZoomContainer';
import Carousel from '@/components/projectDetail/Carousel';
import * as s from '@/style/projectDetail/ProjectInfoStyle';

export default function ProjectInfo() {
  const { projectInfo } = useContext(ProjectDetailContext);
  const { showZoomComponent } = useContext(ZoomContext);

  return (
    <s.Section>
      {showZoomComponent && <ZoomContainer />}
      <Carousel />
      <s.ProjectInformation>{projectInfo.description}</s.ProjectInformation>
    </s.Section>
  );
}

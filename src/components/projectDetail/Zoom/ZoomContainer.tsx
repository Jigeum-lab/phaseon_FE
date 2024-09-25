import { useContext } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import { ZoomContext } from '@/context/ZoomContext';
import HandleBox from '@/components/projectDetail/Zoom/HandleBox';
import ZoomMediaBox from '@/components/projectDetail/Zoom/ZoomMediaBox';
import * as s from '@/style/ZoomStyle/ZoomContainerStyle';

export default function ZoomContainer() {
  const { projectInfo } = useContext(ProjectDetailContext);
  const { showZoomComponent, setStartImg, startImg } = useContext(ZoomContext);
  const carouselImgs = projectInfo.projectMedia;

  return (
    <s.Section $show={showZoomComponent}>
      <HandleBox />
      <ZoomMediaBox />
      <s.CarouselButtonBox>
        {carouselImgs.map((_carouselObj, index) => (
          <s.CarouselButton
            key={index}
            $focus={index === startImg}
            onClick={() => {
              setStartImg(index);
            }}
          />
        ))}
      </s.CarouselButtonBox>
    </s.Section>
  );
}

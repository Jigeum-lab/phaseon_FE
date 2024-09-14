import { useContext } from 'react';
import { ProjectDetailContext } from '../../../context/ProjectDetailContext';
import { ZoomContext } from '../../../context/ZoomContext';
import HandleBox from './HandleBox';
import ZoomMediaBox from './ZoomMediaBox';
import * as s from '../../../style/ZoomStyle/ZoomContainerStyle';

export default function ZoomContainer() {
  const { data } = useContext(ProjectDetailContext);
  const { showZoomComponent, setStartImg, startImg } = useContext(ZoomContext);
  const carouselImgs = data.menu.projectinfo.carousel;

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

import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import YouTube from 'react-youtube';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import * as s from '@/style/projectDetail/CarouselStyle';
import { ZoomContext } from '@/context/ZoomContext';
import ButtonBox from '@/components/projectDetail/ButtonBox';

export default function Carousel() {
  const options: EmblaOptionsType = { align: 'center', loop: true, slidesToScroll: 2 };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { projectInfo } = useContext(ProjectDetailContext);
  const { setStartImg, setShowZoomComponent } = useContext(ZoomContext);
  const [currentImg, setCurrentImg] = useState<number>(0);
  const img = new Image();
  const projectLength = projectInfo.projectMedia.length;
  const slides =
    projectInfo.projectMedia.length <= 3
      ? [...projectInfo.projectMedia, ...projectInfo.projectMedia]
      : projectInfo.projectMedia;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentImg(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <s.Section>
      <ButtonBox emblaApi={emblaApi} padding={20} />
      <s.CarouselViewport ref={emblaRef}>
        <s.CarouselContainer>
          {slides.map((carouselObj, index) => {
            img.src = carouselObj.url;
            let type = 'row';
            if (img.width < img.height) {
              type = 'col';
            }
            if (carouselObj.mediaType === 'VIDEO') {
              return (
                <s.CarouselSlide key={carouselObj.url + index}>
                  <YouTube
                    videoId={carouselObj.url}
                    opts={{
                      width: '320px',
                      height: '180px',
                    }}
                  />
                </s.CarouselSlide>
              );
            }
            return (
              <s.CarouselSlide key={carouselObj.url + index}>
                <s.Img
                  src={carouselObj.url}
                  alt=""
                  $type={type}
                  onClick={() => {
                    if (index > projectInfo.projectMedia.length - 1) {
                      setStartImg(index - projectInfo.projectMedia.length);
                    } else {
                      setStartImg(index);
                    }
                    setShowZoomComponent(true);
                    document.body.style.overflow = 'hidden';
                  }}
                />
              </s.CarouselSlide>
            );
          })}
        </s.CarouselContainer>
        <s.ButtonSection>
          {slides.map((_carouselObj, index) => {
            if (index < projectLength / 2) {
              return (
                <s.SlideButton
                  aria-label="btn"
                  key={index}
                  $bgColor={currentImg === index ? 'color' : 'none'}
                  onClick={() => {
                    emblaApi?.scrollTo(index);
                  }}
                />
              );
            }
          })}
        </s.ButtonSection>
      </s.CarouselViewport>
    </s.Section>
  );
}

import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import YouTube from 'react-youtube';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import * as s from '../../style/projectDetail/CarouselStyle';
import { ZoomContext } from '../../context/ZoomContext';
import ButtonBox from './ButtonBox';

export default function Carousel() {
  const options: EmblaOptionsType = { align: 'center', loop: true, slidesToScroll: 2 };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { data } = useContext(ProjectDetailContext);
  const { setStartImg, setShowZoomComponent } = useContext(ZoomContext);
  const [currentImg, setCurrentImg] = useState<number>(0);

  const slides =
    data.menu.projectinfo.carousel.length <= 2
      ? [...data.menu.projectinfo.carousel, ...data.menu.projectinfo.carousel]
      : data.menu.projectinfo.carousel;

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
            if (carouselObj.type === 'video') {
              return (
                <s.CarouselSlide key={carouselObj.img + index}>
                  <YouTube
                    videoId={carouselObj.img}
                    opts={{
                      width: '320px',
                      height: '180px',
                    }}
                  />
                </s.CarouselSlide>
              );
            }
            return (
              <s.CarouselSlide key={carouselObj.img + index}>
                <s.Img
                  src={`/public/${carouselObj.img}`}
                  alt=""
                  $type={carouselObj.type}
                  onClick={() => {
                    setStartImg(index);
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
            if (index < slides.length / 2) {
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

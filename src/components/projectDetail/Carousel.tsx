import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import YouTube from 'react-youtube';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import * as s from '@/style/projectDetail/CarouselStyle';
import { ZoomContext } from '@/context/ZoomContext';
import ButtonBox from '@/components/projectDetail/ButtonBox';

export default function Carousel() {
  interface ThumbnailType {
    url: string;
    type: string;
    order: number;
  }

  const options: EmblaOptionsType = { align: 'center', loop: true, slidesToScroll: 2 };
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { projectInfo } = useContext(ProjectDetailContext);
  const { setStartImg, setShowZoomComponent } = useContext(ZoomContext);
  const [currentImg, setCurrentImg] = useState<number>(0);
  const [thumbnails, setThumbnails] = useState<ThumbnailType[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const projectLength = projectInfo.projectMedia.length;
  const img = new Image();

  useEffect(() => {
    const slides =
      projectInfo.projectMedia.length <= 3
        ? [...projectInfo.projectMedia, ...projectInfo.projectMedia]
        : projectInfo.projectMedia;

    const thumbnailArray: ThumbnailType[] = [];

    slides.forEach((imgObj) => {
      const tmpImg = new Image();
      tmpImg.src = imgObj.url;
      tmpImg.crossOrigin = 'anonymous';

      tmpImg.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        canvas.width = tmpImg.width;
        canvas.height = tmpImg.height;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(tmpImg, 0, 0);
        const thumbnail = canvas.toDataURL('image/png');

        if (imgObj.mediaType === 'VIDEO') {
          thumbnailArray.push({
            url: imgObj.url,
            type: imgObj.mediaType,
            order: imgObj.order,
          });
        } else {
          thumbnailArray.push({
            url: thumbnail,
            type: imgObj.mediaType,
            order: imgObj.order,
          });
        }

        if (thumbnailArray.length === slides.length) {
          setThumbnails(thumbnailArray);
        }
      };
    });
  }, [projectInfo]);

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
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <ButtonBox emblaApi={emblaApi} padding={20} />
      <s.CarouselViewport ref={emblaRef}>
        <s.CarouselContainer>
          {thumbnails.map((carouselObj, index) => {
            img.src = carouselObj.url;
            if (carouselObj.type === 'VIDEO') {
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
                  $type={img.width < img.height ? 'col' : 'row'}
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
          {thumbnails.map((_carouselObj, index) => {
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

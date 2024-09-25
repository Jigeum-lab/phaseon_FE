import useEmblaCarousel from 'embla-carousel-react';
import { EmblaCarouselType } from 'embla-carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import { useCallback, useEffect, useState } from 'react';
import { Updater, useImmer } from 'use-immer';
import { useNavigate } from 'react-router-dom';
import { ProjectGalleryData } from '@/interface';
import * as s from '@/style/projectDetail/AllProjectSliderStyle';
import ButtonBox from '@/components/projectDetail/ButtonBox';

export default function AllProjectSlider() {
  const option = { loop: true, slidesToScroll: 2 };
  const [emblaRef, emblaApi] = useEmblaCarousel(option, [AutoScroll({ speed: 1 })]);
  const [data, updateData] = useImmer<ProjectGalleryData>({
    data: {
      projects: [
        {
          id: 0,
          thumbnail: '',
          title: '',
          summary: '',
          likeCount: 0,
          awardCount: 0,
          memberCount: 0,
          viewCount: 0,
          createdAt: '',
          category: [],
        },
      ],
      totalProjects: 0,
      totalMembers: 0,
      category: '',
    },
  });
  const [currentImg, setCurrentImg] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    getProjects(updateData);
  }, [updateData]);

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
      <s.TextBox>
        <s.Title>다른 프로젝트도 함께 구경하세요!</s.Title>
        <s.MoreContent
          onClick={() => {
            navigate('/');
          }}
        >
          전체보기
        </s.MoreContent>
      </s.TextBox>
      <ButtonBox emblaApi={emblaApi} padding={40} />
      <s.CarouselViewport ref={emblaRef}>
        <s.CarouselContainer>
          {data.data.projects.map((dataObj, index) => (
            <s.CarouselSlide
              key={index}
              onClick={() => {
                if (!emblaApi) return;
                navigate(`/${dataObj.id}`);
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
                startScroll(emblaApi);
              }}
            >
              <s.Img src={dataObj.thumbnail} alt="" />
              <s.ProjectName>{dataObj.title}</s.ProjectName>
              <s.Description>{dataObj.summary}</s.Description>
            </s.CarouselSlide>
          ))}
        </s.CarouselContainer>
        <s.ButtonSection>
          {data.data.projects.map((_carouselObj, index) => {
            if (index < data.data.projects.length / 2) {
              return (
                <s.SlideButton
                  aria-label="btn"
                  key={index}
                  $bgColor={currentImg === index ? 'color' : 'none'}
                  onClick={() => {
                    if (!emblaApi) return;
                    emblaApi.scrollTo(index);
                    startScroll(emblaApi);
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

async function getProjects(updateData: Updater<ProjectGalleryData>) {
  try {
    const response = await fetch('https://name.store:8443/api/project?page=0&size=100&sort=createdAt');
    const data = await response.json();
    updateData((slideObj) => {
      Object.assign(slideObj, data);
    });
  } catch (err) {
    console.log(err);
  }
}

function startScroll(emblaApi: EmblaCarouselType) {
  setTimeout(() => {
    emblaApi.plugins().autoScroll.play();
  }, 3000);
}

import React, { SetStateAction, useContext, useEffect, useRef, useState } from 'react';
import { Updater } from 'use-immer';
import AllProjects from '@/components/main/AllProjects';
import { MainContext } from '@/context/MainContext';
import * as s from '@/style/main/AllProjectViewStyle';
import { Icon } from '@/components/common/Icon';
import { ProjectGalleryData } from '@/interface';
import { getStroke } from '@/utils/getStroke';
import { getFill } from '@/utils/getFill';

export default function AllProjectView() {
  const { project, updateProject, currentCategory, category } = useContext(MainContext);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [sortOption, setSortOption] = useState('createdAt');
  const [showMoreButton, setShowMoreButton] = useState(false);
  const isFetching = useRef<boolean>(false);
  const hasMoreData = useRef<boolean>(true);

  const icons = [
    'BigProjectIcon',
    'AI',
    'SOCIAL_MEDIA',
    'PRODUCTIVITY',
    'HEALTH',
    'EDUCATION',
    'TRAVEL',
    'SOCIAL_EFFECT',
    'ENTERTAINMENT',
    'PERSONAL_BRANDING',
  ] as const;
  interface IconProps {
    name:
      | 'BigProjectIcon'
      | 'AI'
      | 'SOCIAL_MEDIA'
      | 'PRODUCTIVITY'
      | 'HEALTH'
      | 'EDUCATION'
      | 'TRAVEL'
      | 'SOCIAL_EFFECT'
      | 'ENTERTAINMENT'
      | 'PERSONAL_BRANDING';
  }
  const iconWithFill = [0, 2, 3, 4, 5, 6, 7, 9];
  const iconName = icons[currentCategory] as IconProps['name'];

  useEffect(() => {
    document.body.style.overflow = 'auto';
  }, []);

  useEffect(() => {
    function handleObserver(entries: IntersectionObserverEntry[]) {
      const target = entries[0];
      if (target.isIntersecting && !isFetching.current && !showMoreButton && hasMoreData.current) {
        isFetching.current = true;
        setPage((prevPage) => prevPage + 1);
      }
    }
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.5,
    });
    if (showMoreButton) return;
    const observerTarget = document.getElementById('observer');
    if (observerTarget) {
      observer.observe(observerTarget);
    }
    return () => {
      if (observerTarget) observer.unobserve(observerTarget);
    };
  }, [showMoreButton, currentCategory, isFetching, hasMoreData]);

  useEffect(() => {
    setPage(0);
    hasMoreData.current = true;
    updateProject((draft) => {
      draft.data.totalMembers = 0;
      draft.data.totalProjects = 0;
      draft.data.projects = [];
    });
    isFetching.current = true;
  }, [currentCategory, sortOption, updateProject]);

  useEffect(() => {
    if (!isFetching.current) return;
    getProjects(
      setIsLoading,
      updateProject,
      isFetching,
      category.categoryicon[currentCategory],
      page,
      sortOption,
      hasMoreData,
    );
  }, [page, updateProject, showMoreButton, sortOption, currentCategory, category.categoryicon]);

  useEffect(() => {
    if (page > 0 && project.data.projects.length % 100 === 0 && hasMoreData.current) {
      setShowMoreButton(true);
    } else {
      setShowMoreButton(false);
    }
  }, [project.data.projects.length, page]);

  return (
    <s.Section>
      <s.TopSection>
        <s.TitleBox>
          <s.Title>
            <Icon
              name={iconName}
              stroke={getStroke(currentCategory, iconWithFill, currentCategory, '#247BFF')}
              fill={getFill(currentCategory, iconWithFill, currentCategory, '#247BFF')}
              width={32}
              height={33}
            />
            <p>{category.categorytext[currentCategory]}</p>
          </s.Title>
          <s.SubTitle>
            <b>{project.data.totalProjects}</b>개의 프로젝트 ・ <b>{project.data.totalMembers}</b>명 활동 중
          </s.SubTitle>
        </s.TitleBox>
        <s.SortButtonBox>
          <Icon name="Swap" />
          <s.ButtonWrapper>
            <s.SortButton $current={sortOption} $buttonName="createdAt" onClick={() => setSortOption('createdAt')}>
              최신
            </s.SortButton>
            <s.SortButton
              $current={sortOption}
              $buttonName="likeCount&sort=viewCount"
              onClick={() => setSortOption('likeCount&sort=viewCount')}
            >
              인기
            </s.SortButton>
          </s.ButtonWrapper>
        </s.SortButtonBox>
      </s.TopSection>
      <AllProjects />
      {showMoreButton && (
        <s.MoreButton
          onClick={() => {
            setShowMoreButton(false);
            setPage((prevPage) => prevPage + 1);
          }}
        >
          <Icon name="Loading" width={20} height={20} fill="white" />
          더보기
        </s.MoreButton>
      )}
      {isLoading && (
        <s.LoadingBox>
          <s.LoadingImg name="Loading" width={36} height={37} fill="#69ACFF" />
        </s.LoadingBox>
      )}
      <div id="observer" />
    </s.Section>
  );
}

async function getProjects(
  setIsLoading: React.Dispatch<SetStateAction<boolean>>,
  updateProject: Updater<ProjectGalleryData>,
  isFetching: { current: boolean },
  currentCategory: string,
  page: number,
  sortOption: string,
  hasMoreData: { current: boolean },
) {
  setIsLoading(true);
  try {
    let response = await fetch(
      `https://port-0-bay-core-m20bg38se8c2b49b.sel4.cloudtype.app/api/v1/projects?page=${page}&sort=${sortOption}`,
    );
    if (currentCategory !== 'ALLPROJECT') {
      response = await fetch(
        `https://port-0-bay-core-m20bg38se8c2b49b.sel4.cloudtype.app/api/v1/projects?page=${page}&size=10&sort=${sortOption}&category=${currentCategory}`,
      );
    }
    const data = await response.json();

    if (data.data.projects.length > 0) {
      updateProject((draft) => {
        if (page === 0) {
          draft.data.projects = data.data.projects;
        } else {
          draft.data.projects = [...draft.data.projects, ...data.data.projects];
        }
        draft.data.totalProjects = data.data.totalProjects;
        draft.data.totalMembers = data.data.totalMembers;
      });
    } else {
      hasMoreData.current = false;
    }
  } catch (err) {
    console.log(err);
  }
  setIsLoading(false);
  isFetching.current = false;
}

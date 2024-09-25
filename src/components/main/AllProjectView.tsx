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
  const [page, setPage] = useState(-1);
  const [sortOption, setSortOption] = useState('updatedAt');
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [isPageUpdate, setIsPageUpdate] = useState(false);
  const isFetching = useRef<boolean>(false);

  const icons = [
    'BigProjectIcon',
    'AI',
    'SOCIAL_MEDIA',
    'PRODUCTIVITY',
    'HEALTH',
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
      | 'TRAVEL'
      | 'SOCIAL_EFFECT'
      | 'ENTERTAINMENT'
      | 'PERSONAL_BRANDING';
  }
  const iconWithFill = [0, 2, 3, 4, 5, 6, 8];
  const iconName = icons[currentCategory] as IconProps['name'];

  function handleObserver(entries: IntersectionObserverEntry[]) {
    const target = entries[0];
    if (target.isIntersecting && !isFetching.current) {
      isFetching.current = true;
      setPage((prevPage) => prevPage + 1);
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.5,
    });
    if (showMoreButton || isPageUpdate) return;
    const observerTarget = document.getElementById('observer');
    if (observerTarget) {
      observer.observe(observerTarget);
    }
    return () => {
      if (observerTarget) observer.unobserve(observerTarget);
    };
  }, [showMoreButton, isPageUpdate]);

  useEffect(() => {
    if (page % 10 === 0 && page !== 0) {
      setShowMoreButton(true);
    }
    if (page === -1 && !isFetching.current) return;

    getProjects(
      setIsLoading,
      updateProject,
      showMoreButton,
      isFetching,
      setIsPageUpdate,
      category.categoryicon[currentCategory],
      page,
      sortOption,
    );
  }, [page, updateProject, showMoreButton, currentCategory, category.categoryicon, sortOption]);

  useEffect(() => {
    setPage(-1);
    isFetching.current = false;
    updateProject((draft) => {
      draft.data.totalMembers = 0;
      draft.data.totalProjects = 0;
      draft.data.projects = [];
    });
  }, [currentCategory, updateProject]);

  return (
    <s.Section>
      <s.TopSection>
        <s.TitleBox>
          <s.Title>
            <Icon
              name={iconName}
              stroke={getStroke(currentCategory, iconWithFill, currentCategory)}
              fill={getFill(currentCategory, iconWithFill, currentCategory)}
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
            <s.SortButton
              $current={sortOption}
              $buttonName="updatedAt"
              onClick={() => {
                setSortOption('updatedAt');
              }}
            >
              최신
            </s.SortButton>
            <s.SortButton
              $current={sortOption}
              $buttonName="likeCount&sort=viewCount"
              onClick={() => {
                setSortOption('likeCount&sort=viewCount');
              }}
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
            setIsPageUpdate(true);
            setPage((prev) => prev + 1);
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
  showMoreButton: boolean,
  isFetching: { current: boolean },
  setIsPageUpdate: React.Dispatch<SetStateAction<boolean>>,
  currentCategory: string,
  page: number,
  sortOption: string,
) {
  setIsLoading(true);
  try {
    let response = await fetch(`https://name.store:8443/api/project?page=${page}&sort=${sortOption}`);
    if (currentCategory !== 'ALLPROJECT') {
      response = await fetch(
        `https://name.store:8443/api/projects?page=${page}&size=10&sort=${sortOption}&category=${currentCategory}`,
      );
    }
    // const response = await fetch('dummy/projectCollection.json');
    const data = await response.json();
    updateProject((draft) => {
      if (!showMoreButton && data.data.projects.length) {
        draft.data.projects = [...draft.data.projects, ...data.data.projects];
        draft.data.totalProjects = data.data.totalProjects;
        draft.data.totalMembers = data.data.totalMembers;
      }
    });
  } catch (err) {
    console.log(err);
  }
  setIsLoading(false);
  isFetching.current = false;
  setIsPageUpdate(false);
}

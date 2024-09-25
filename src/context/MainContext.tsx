import React, { createContext, SetStateAction, useMemo, useState } from 'react';
import { Updater, useImmer } from 'use-immer';
import { MainCategoryType, ProjectGalleryData } from '@/interface';

interface ContextType {
  currentCategory: number;
  setCurrentCategory: React.Dispatch<SetStateAction<number>>;
  project: ProjectGalleryData;
  updateProject: Updater<ProjectGalleryData>;
  category: MainCategoryType;
}

export const MainContext = createContext<ContextType>({
  currentCategory: 0,
  setCurrentCategory: () => {},
  project: {
    data: {
      projects: [
        {
          id: 1,
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
      category: null,
    },
  },
  updateProject: () => {},
  category: {
    categorytext: [],
    categoryicon: [],
  },
});

export function MainProvider({ children }: { children: React.ReactNode }) {
  const [currentCategory, setCurrentCategory] = useState(0);
  const category = useMemo(
    () => ({
      categorytext: [
        '전체보기',
        '인공지능',
        '소셜 미디어',
        '협업 ・ 생산성',
        '건강 ・ 의료',
        '여행',
        '소셜 이펙트',
        '엔터테이먼트',
        '퍼스널 브랜딩',
      ],
      categoryicon: [
        'ALLPROJECT',
        'AI',
        'SOCIAL_MEDIA',
        'PRODUCTIVITY',
        'HEALTH',
        'TRAVEL',
        'SOCIAL_EFFECT',
        'ENTERTAINMENT',
        'PERSONAL_BRANDING',
      ],
    }),
    [],
  );
  const [project, updateProject] = useImmer<ProjectGalleryData>({
    data: {
      projects: [
        {
          id: 1,
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
      category: null,
    },
  });
  const value = useMemo(
    () => ({
      currentCategory,
      setCurrentCategory,
      project,
      updateProject,
      category,
    }),
    [currentCategory, project, updateProject, category],
  );

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

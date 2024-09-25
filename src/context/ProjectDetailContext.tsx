import React, { createContext, SetStateAction, useMemo, useState } from 'react';
import { Updater, useImmer } from 'use-immer';
import { Accomplishment, Member, ProjectInfo, ReleaseType } from '@/interface';

interface ContextType {
  projectInfo: ProjectInfo;
  updateProjectInfo: Updater<ProjectInfo>;
  releaseInfo: ReleaseType;
  updateReleaseInfo: Updater<ReleaseType>;
  accomplishmentInfo: Accomplishment;
  updateAccomplishmentInfo: Updater<Accomplishment>;
  memberInfo: Member;
  updateMemberInfo: Updater<Member>;
  showShare: boolean;
  setShowShare: React.Dispatch<SetStateAction<boolean>>;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}

const initialProjectInfo: ProjectInfo = {
  id: '',
  title: '',
  summary: '',
  shortDescription: '',
  description: '',
  thumbnail: '',
  banner: '',
  categories: [''],
  status: '',
  projectMedia: [
    {
      url: '',
      mediaType: '',
      order: 0,
    },
  ],
  links: [
    {
      link: '',
      type: '',
    },
  ],
  viewCount: 0,
  likeCount: 0,
  notificationCount: 0,
  isLiked: false,
  isNotified: false,
  createdAt: 0,
  updatedAt: 0,
};

const initialReleaseInfo: ReleaseType = {
  data: [
    {
      id: '',
      title: '',
      description: '',
      createdAt: '',
    },
  ],
};

const initialAccomplishmentInfo: Accomplishment = {
  data: {
    accomplishments: [
      {
        id: '',
        title: '',
        publisher: '',
        thumbnail: '',
      },
    ],
    certifications: [
      {
        id: '',
        title: '',
        thumbnail: '',
      },
    ],
    news: [
      {
        id: '',
        title: '',
        description: '',
        link: '',
        thumbnail: '',
      },
    ],
  },
};

const initialMember: Member = {
  users: [
    {
      userPicture: '',
      username: '',
      userRole: '',
      links: [
        {
          linkType: '',
          url: '',
        },
      ],
    },
  ],
};

export const ProjectDetailContext = createContext<ContextType>({
  projectInfo: initialProjectInfo,
  updateProjectInfo: () => {},
  releaseInfo: initialReleaseInfo,
  updateReleaseInfo: () => {},
  accomplishmentInfo: initialAccomplishmentInfo,
  updateAccomplishmentInfo: () => {},
  memberInfo: initialMember,
  updateMemberInfo: () => {},
  showShare: false,
  setShowShare: () => {},
  setShowModal: () => {},
});

export function ProjectDetailProvider({
  children,
  setShowModal,
}: {
  children: React.ReactNode;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}) {
  const [projectInfo, updateProjectInfo] = useImmer(initialProjectInfo);
  const [releaseInfo, updateReleaseInfo] = useImmer(initialReleaseInfo);
  const [accomplishmentInfo, updateAccomplishmentInfo] = useImmer(initialAccomplishmentInfo);
  const [memberInfo, updateMemberInfo] = useImmer(initialMember);
  const [showShare, setShowShare] = useState(false);
  const value = useMemo(
    () => ({
      projectInfo,
      updateProjectInfo,
      releaseInfo,
      updateReleaseInfo,
      accomplishmentInfo,
      updateAccomplishmentInfo,
      memberInfo,
      updateMemberInfo,
      showShare,
      setShowShare,
      setShowModal,
    }),
    [
      projectInfo,
      updateProjectInfo,
      releaseInfo,
      updateReleaseInfo,
      accomplishmentInfo,
      updateAccomplishmentInfo,
      memberInfo,
      updateMemberInfo,
      showShare,
      setShowModal,
    ],
  );
  return <ProjectDetailContext.Provider value={value}>{children}</ProjectDetailContext.Provider>;
}

import { SetStateAction } from 'react';
import { Updater } from 'use-immer';

interface PathType {
  path: string;
  fill: string;
}

export interface SvgType {
  [key: string]: {
    pathObj: PathType[];
    clipPath?: {
      id: string;
      rect: {
        x: string;
        width: string;
        height: string;
        rx: string;
        fill: string;
      };
    };
  };
}

export interface SgvPropsType {
  width: string;
  height: string;
  name: string;
}

export interface Button {
  icon: string;
  buttontext: string;
  link: string;
}

export interface CarouselItem {
  url: string;
  mediaType: string;
  order: number;
}

export interface ProfileLink {
  linkType: string;
  url: string;
}

export interface Member {
  users: [
    {
      userPicture: string;
      username: string;
      userRole: string;
      links: ProfileLink[];
    },
  ];
}

export interface ReleaseObj {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}

export interface ReleaseType {
  data: ReleaseObj[];
}

export interface AccomplishmentObj {
  id: string;
  title: string;
  publisher: string;
  thumbnail: string;
}

export interface CertificationObj {
  id: string;
  title: string;
  thumbnail: string;
}

export interface NewsObj {
  id: string;
  title: string;
  description: string;
  link: string;
  thumbnail: string;
}

export interface Accomplishment {
  data: {
    accomplishments: AccomplishmentObj[];
    certifications: CertificationObj[];
    news: NewsObj[];
  };
}

export interface Link {
  link: string;
  type: string;
}

export interface ProjectInfo {
  id: string;
  title: string;
  summary: string;
  shortDescription: string;
  description: string;
  thumbnail: string;
  banner: string;
  categories: string[];
  status: string;
  projectMedia: CarouselItem[];
  links: Link[];
  viewCount: number;
  likeCount: number;
  notificationCount: number;
  isLiked: boolean;
  isNotified: boolean;
  createdAt: number;
  updatedAt: number;
}
export interface CategoryContextType {
  currentCategory: string;
  setCurrentCategory: React.Dispatch<SetStateAction<string>>;
  introRef: React.RefObject<HTMLDivElement>;
}

export interface Projects {
  id: number;
  thumbnail: string;
  title: string;
  summary: string;
  likeCount: number;
  awardCount: number;
  memberCount: number;
  viewCount: number;
  category: string[];
  createdAt: string;
}

export interface ProjectGalleryData {
  data: {
    projects: Projects[];
    totalProjects: number;
    totalMembers: number;
    category: string | null;
  };
}

export interface HandelDoubleClickType {
  isZoomed: boolean;
  setIsZoomed: React.Dispatch<SetStateAction<boolean>>;
  setZoomCount: React.Dispatch<SetStateAction<number>>;
  updateTransform: Updater<{ x: number; y: number }>;
}

export interface HandleMouseDownType {
  isZoomed: boolean;
  setDrag: React.Dispatch<SetStateAction<boolean>>;
  updateStartPos: Updater<{ x: number; y: number }>;
  updateDragNextImg: Updater<{ x: number; y: number }>;
  setDragAndDrop: React.Dispatch<SetStateAction<boolean>>;
  setDragOffSet: React.Dispatch<SetStateAction<number>>;
}

export interface HandleMouseMoveType {
  imgRef: React.RefObject<HTMLImageElement>;
  drag: boolean;
  startPos: {
    x: number;
    y: number;
  };
  updateStartPos: Updater<{ x: number; y: number }>;
  transform: {
    x: number;
    y: number;
  };
  updateTransform: Updater<{ x: number; y: number }>;
  zoomCount: number;
  setDragOffSet: React.Dispatch<SetStateAction<number>>;
}

export interface HandleMouseUpType {
  setDrag: React.Dispatch<SetStateAction<boolean>>;
  transform: {
    x: number;
    y: number;
  };
  updateTransform: Updater<{ x: number; y: number }>;
  zoomCount: number;
  startPos: {
    x: number;
    y: number;
  };
  isZoomed: boolean;
  drag: boolean;
  dragNextImg: {
    x: number;
    y: number;
  };
  setStartImg: React.Dispatch<SetStateAction<number>>;
  carouselImgs: CarouselItem[];
  dragAndDrop: boolean;
  setDragAndDrop: React.Dispatch<SetStateAction<boolean>>;
  setDragOffSet: React.Dispatch<SetStateAction<number>>;
  setDragDirection: React.Dispatch<SetStateAction<string>>;
}

export interface MainCategoryType {
  categorytext: string[];
  categoryicon: string[];
}

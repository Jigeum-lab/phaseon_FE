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
  img: string;
  type: string;
}

export interface MainFeature {
  title: string;
  description: string;
}

export interface ReleaseVersion {
  version: number;
  date: string;
  extrafeature: ExtraFeatur[];
}

export interface ExtraFeatur {
  feature: string;
  description: string;
}

export interface CertifiedAward {
  badge: string;
  award: string;
  certifyingAgency: string;
}

export interface NewsItem {
  img: string;
  title: string;
  content: string;
  link: string;
}

export interface ProfileLink {
  icon: string;
  link: string;
}

export interface Member {
  img: string | null;
  name: string;
  role: string;
  email: string;
  profilelink: ProfileLink[];
}

export interface MainProjectInfo {
  carousel: CarouselItem[];
  mainfeatures: {
    shortdescription: string;
    feature: MainFeature[];
  };
  techstack: string[];
}

export interface FloatMenu {
  phase: string;
  view: number;
  buttons: Button[];
  releasenote: string;
  isLiked: boolean;
  isNotified: boolean;
}

export interface Intro {
  banner: string;
  projectimg: string;
  projectbrief: string;
  description: string;
}

export interface Performance {
  certifiedaward: CertifiedAward[];
  accomplishment: string[];
  news: NewsItem[];
}

export interface Introduction {
  members: Member[];
}

export interface DetailDataType {
  projectname: string;
  star: number;
  notification: number;
  category: string[];
  floatmenu: FloatMenu;
  intro: Intro;
  menu: {
    projectinfo: MainProjectInfo;
    release: {
      releaseversion: ReleaseVersion[];
    };
    performance: Performance;
    introduction: Introduction;
  };
}
export interface CategoryContextType {
  currentCategory: string;
  setCurrentCategory: React.Dispatch<SetStateAction<string>>;
  introRef: React.RefObject<HTMLDivElement>;
}

export interface Projects {
  img: string;
  param: string;
  projectname: string;
  description: string;
}

export interface ProjectGalleryData {
  data: Projects[];
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

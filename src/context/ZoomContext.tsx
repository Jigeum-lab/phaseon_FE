import { createContext, SetStateAction, useMemo, useState } from 'react';
import { Updater, useImmer } from 'use-immer';

interface ZoomContextType {
  showZoomComponent: boolean;
  setShowZoomComponent: React.Dispatch<SetStateAction<boolean>>;
  startImg: number;
  setStartImg: React.Dispatch<SetStateAction<number>>;
  isZoomed: boolean;
  setIsZoomed: React.Dispatch<SetStateAction<boolean>>;
  zoomCount: number;
  setZoomCount: React.Dispatch<SetStateAction<number>>;
  transform: {
    x: number;
    y: number;
  };
  updateTransform: Updater<{ x: number; y: number }>;
}

export const ZoomContext = createContext<ZoomContextType>({
  showZoomComponent: false,
  setShowZoomComponent: () => {},
  startImg: 0,
  setStartImg: () => {},
  isZoomed: false,
  setIsZoomed: () => {},
  zoomCount: 1,
  setZoomCount: () => {},
  transform: { x: 0, y: 0 },
  updateTransform: () => {},
});

export function ZoomImgProvider({ children }: { children: React.ReactNode }) {
  const [showZoomComponent, setShowZoomComponent] = useState(false);
  const [startImg, setStartImg] = useState(0);
  const [zoomCount, setZoomCount] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);
  const [transform, updateTransform] = useImmer<{ x: number; y: number }>({ x: 0, y: 0 });
  const value = useMemo(
    () => ({
      showZoomComponent,
      setShowZoomComponent,
      startImg,
      setStartImg,
      isZoomed,
      setIsZoomed,
      zoomCount,
      setZoomCount,
      transform,
      updateTransform,
    }),
    [showZoomComponent, startImg, isZoomed, zoomCount, transform],
  );

  return <ZoomContext.Provider value={value}>{children}</ZoomContext.Provider>;
}

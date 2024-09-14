import { useContext, useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import { useImmer } from 'use-immer';
import { ProjectDetailContext } from '../../../context/ProjectDetailContext';
import { ZoomContext } from '../../../context/ZoomContext';
import * as s from '../../../style/ZoomStyle/ZoomMediaStyle';
import { handleDoubleClick, handleMouseDown, handleMouseMove, handleMouseUp } from '../../../utils/ZoomFunction';

export default function ZoomMediaBox() {
  const { data } = useContext(ProjectDetailContext);
  const { startImg, setIsZoomed, isZoomed, zoomCount, setZoomCount, transform, updateTransform, setStartImg } =
    useContext(ZoomContext);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const imgWrapperRef = useRef<HTMLDivElement | null>(null);
  const [drag, setDrag] = useState(false);
  const [dragAndDrop, setDragAndDrop] = useState(false);
  const [startPos, updateStartPos] = useImmer<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dragNextImg, updateDragNextImg] = useImmer<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dragOffSet, setDragOffSet] = useState(0);
  const [dragDirection, setDragDirection] = useState('none');
  const carouselImgs = data.menu.projectinfo.carousel;

  useEffect(() => {
    const MouseMoveFunction = (e: MouseEvent) => {
      handleMouseMove(e, {
        imgRef,
        drag,
        startPos,
        updateStartPos,
        updateTransform,
        zoomCount,
        transform,
        setDragOffSet,
      });
    };

    const MouseUpFunction = (e: MouseEvent) => {
      handleMouseUp(e, {
        zoomCount,
        updateTransform,
        transform,
        setDrag,
        startPos,
        isZoomed,
        drag,
        dragNextImg,
        setStartImg,
        carouselImgs,
        dragAndDrop,
        setDragAndDrop,
        setDragOffSet,
        setDragDirection,
      });
    };
    document.addEventListener('mousemove', MouseMoveFunction);
    document.addEventListener('mouseup', MouseUpFunction);

    return () => {
      document.removeEventListener('mousemove', MouseMoveFunction);
      document.removeEventListener('mouseup', MouseUpFunction);
    };
  }, [drag, startPos, isZoomed, dragDirection]);

  const getLeftPosition = (direction: string) => {
    switch (direction) {
      case 'left':
        return '-2000px';
      case 'right':
        return '2000px';
      case 'none':
      default:
        return '0';
    }
  };

  return (
    <>
      {carouselImgs[startImg].type !== 'video' && (
        <s.ImgWrapper
          ref={imgWrapperRef}
          $type={carouselImgs[startImg].type}
          onDoubleClick={() => {
            handleDoubleClick({ setIsZoomed, isZoomed, setZoomCount, updateTransform });
          }}
        >
          <s.Div $zoomCount={zoomCount} $type={carouselImgs[startImg].type}>
            <s.LeftButton
              onClick={() => {
                setStartImg((prev) => {
                  if (prev === 0) {
                    return carouselImgs.length - 1;
                  }
                  return prev - 1;
                });
              }}
            />
            <s.Img
              src={`/public/${carouselImgs[startImg].img}`}
              alt=""
              ref={imgRef}
              $type={carouselImgs[startImg].type}
              $zoomCount={zoomCount}
              $drag={drag}
              $dragOffSet={dragOffSet}
              $dragDirection={dragDirection}
              style={{
                transform: `translateX(${dragOffSet}px) scale(${zoomCount}) translate(${transform.x}px, ${transform.y}px)`,
                left: getLeftPosition(dragDirection),
              }}
              onMouseDown={(e) => {
                handleMouseDown(e, {
                  isZoomed,
                  setDrag,
                  updateStartPos,
                  updateDragNextImg,
                  setDragAndDrop,
                  setDragOffSet,
                });
              }}
            />
            <s.RightButton
              onClick={() => {
                setStartImg((prev) => {
                  if (prev === carouselImgs.length - 1) {
                    return 0;
                  }
                  return prev + 1;
                });
              }}
            />
          </s.Div>
        </s.ImgWrapper>
      )}
      {carouselImgs[startImg].type === 'video' && (
        <YouTube
          videoId={carouselImgs[0].img}
          opts={{
            width: '1200px',
            height: '700px',
          }}
        />
      )}
    </>
  );
}

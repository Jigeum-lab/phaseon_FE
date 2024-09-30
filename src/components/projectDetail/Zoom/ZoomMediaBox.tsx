import { useContext, useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import { useImmer } from 'use-immer';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import { ZoomContext } from '@/context/ZoomContext';
import * as s from '@/style/ZoomStyle/ZoomMediaStyle';
import { closeZoom, handleDoubleClick, handleMouseDown, handleMouseMove, handleMouseUp } from '@/utils/ZoomFunction';

export default function ZoomMediaBox() {
  const { projectInfo } = useContext(ProjectDetailContext);
  const {
    startImg,
    setIsZoomed,
    isZoomed,
    zoomCount,
    setZoomCount,
    transform,
    updateTransform,
    setStartImg,
    setShowZoomComponent,
  } = useContext(ZoomContext);

  const imgRef = useRef<HTMLImageElement | null>(null);
  const imgWrapperRef = useRef<HTMLDivElement | null>(null);
  const [drag, setDrag] = useState(false);
  const [dragAndDrop, setDragAndDrop] = useState(false);
  const [startPos, updateStartPos] = useImmer<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dragNextImg, updateDragNextImg] = useImmer<{ x: number; y: number }>({ x: 0, y: 0 });
  const [dragOffSet, setDragOffSet] = useState(0);
  const [dragDirection, setDragDirection] = useState('none');
  const [imgDirection, setImgDirection] = useState('row');
  const carouselImgs = projectInfo.projectMedia;

  useEffect(() => {
    const img = new Image();
    img.src = carouselImgs[startImg].url;

    img.onload = () => {
      if (img.width > img.height) {
        setImgDirection('row');
      } else {
        setImgDirection('col');
      }
    };
  }, [carouselImgs, startImg]);

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
  }, [
    drag,
    startPos,
    isZoomed,
    dragDirection,
    updateStartPos,
    updateTransform,
    zoomCount,
    transform,
    dragNextImg,
    setStartImg,
    carouselImgs,
    dragAndDrop,
  ]);

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
    <s.Section
      onClick={(e) => {
        if (imgRef.current && !imgRef.current.contains(e.target as Node)) {
          closeZoom(setIsZoomed, setZoomCount, updateTransform, setShowZoomComponent);
        }
      }}
    >
      {carouselImgs[startImg].mediaType !== 'VIDEO' && (
        <s.ImgWrapper ref={imgWrapperRef}>
          <s.Div
            ref={imgRef}
            $zoomCount={zoomCount}
            $type={imgDirection}
            onDoubleClick={() => {
              handleDoubleClick({ setIsZoomed, isZoomed, setZoomCount, updateTransform });
            }}
          >
            <s.LeftButton
              name="LeftButton"
              onDoubleClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
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
              src={carouselImgs[startImg].url}
              alt=""
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
              name="RightButton"
              onDoubleClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
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
      {carouselImgs[startImg].mediaType === 'VIDEO' && (
        <s.Div $zoomCount={1} $type="row">
          <s.LeftButton
            name="LeftButton"
            onClick={() => {
              setStartImg((prev) => {
                if (prev === 0) {
                  return carouselImgs.length - 1;
                }
                return prev - 1;
              });
            }}
          />
          <YouTube
            videoId={carouselImgs[startImg].url}
            opts={{
              width: '1200px',
              height: '700px',
            }}
          />{' '}
          <s.RightButton
            name="RightButton"
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
      )}
    </s.Section>
  );
}

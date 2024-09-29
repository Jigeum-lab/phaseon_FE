import { useContext } from 'react';
import { ZoomContext } from '@/context/ZoomContext';
import * as s from '@/style/ZoomStyle/HandleBoxStyle';
import { closeZoom } from '@/utils/ZoomFunction';

export default function HandleBox() {
  const { setShowZoomComponent, setIsZoomed, setZoomCount, updateTransform } = useContext(ZoomContext);

  return (
    <s.HandelBox>
      <s.Close
        name="Close"
        fill="white"
        onClick={() => {
          closeZoom(setIsZoomed, setZoomCount, updateTransform, setShowZoomComponent);
        }}
      />
    </s.HandelBox>
  );
}

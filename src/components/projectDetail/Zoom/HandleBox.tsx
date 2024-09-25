import { useContext } from 'react';
import { ZoomContext } from '@/context/ZoomContext';
import * as s from '@/style/ZoomStyle/HandleBoxStyle';

export default function HandleBox() {
  const { setShowZoomComponent, setIsZoomed, setZoomCount, updateTransform } = useContext(ZoomContext);

  return (
    <s.HandelBox>
      <s.Close
        name="Close"
        fill="white"
        onClick={() => {
          document.body.style.overflow = 'auto';
          setZoomCount(1);
          updateTransform((transformObj) => {
            transformObj.x = 0;
            transformObj.y = 0;
          });
          setShowZoomComponent(false);
          setIsZoomed(false);
        }}
      />
    </s.HandelBox>
  );
}

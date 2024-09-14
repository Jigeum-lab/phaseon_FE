import { useContext } from 'react';
import * as s from '../../style/projectDetail/common/ButtonStyle';
import { ReactComponent as Share } from '../../assets/svg/Share.svg';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';

export default function ShareButton({ width, height }: { width: number; height: number }) {
  const { setShowShare } = useContext(ProjectDetailContext);
  return (
    <s.Button
      $width={width}
      $height={height}
      $border="none"
      $color="#69acff"
      $type="share"
      onClick={() => {
        setShowShare(true);
      }}
    >
      <Share />
      <p>공유하기</p>
    </s.Button>
  );
}

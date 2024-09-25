import { useContext } from 'react';
import * as s from '@/style/projectDetail/common/ButtonStyle';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import { Icon } from '@/components/common/Icon';

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
      <Icon name="Share" />
      <p>공유하기</p>
    </s.Button>
  );
}

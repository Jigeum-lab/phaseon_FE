import React, { useContext, useState } from 'react';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import * as s from '../../style/projectDetail/common/ButtonStyle';
import { ReactComponent as EmptyStar } from '../../assets/svg/EmptyStar.svg';
import { ReactComponent as FillStar } from '../../assets/svg/FillStar.svg';

export default function StarButton({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children?: React.ReactNode;
}) {
  const { data, updateData } = useContext(ProjectDetailContext);
  const [isLiked, setIsLiked] = useState(data.floatmenu.isLiked);
  return (
    <s.Button
      $width={width}
      $height={height}
      $border="none"
      $color="white"
      $type="star"
      onClick={() => {
        setIsLiked((prev) => !prev);
        updateData((update) => {
          if (isLiked) {
            update.star--;
          } else {
            update.star++;
          }
          update.floatmenu.isLiked = isLiked;
        });
      }}
    >
      {isLiked ? <FillStar /> : <EmptyStar />}
      {children}
      <p>{data.star}</p>
    </s.Button>
  );
}

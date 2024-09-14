import { useContext, useState } from 'react';
import { ReactComponent as EmptyNotification } from '../../assets/svg/EmptyNotification.svg';
import { ReactComponent as FillNotification } from '../../assets/svg/FillNotification.svg';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import * as s from '../../style/projectDetail/common/ButtonStyle';

export default function NotificationButton({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children?: React.ReactNode;
}) {
  const { data, updateData } = useContext(ProjectDetailContext);
  const [isNotified, setIsNotified] = useState(data.floatmenu.isNotified);

  return (
    <s.Button
      $width={width}
      $height={height}
      $border="1px solid #69ACFF"
      $color="#69acff"
      $type="notification"
      onClick={() => {
        setIsNotified((prev) => !prev);
        updateData((update) => {
          if (isNotified) {
            update.notification--;
          } else {
            update.notification++;
          }
          update.floatmenu.isNotified = isNotified;
        });
      }}
    >
      {isNotified ? <FillNotification /> : <EmptyNotification />}
      {children}
      <p>{data.notification}</p>
    </s.Button>
  );
}

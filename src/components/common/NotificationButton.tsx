import { useContext, useState } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import * as s from '@/style/projectDetail/common/ButtonStyle';
import { Icon } from '@/components/common/Icon';

export default function NotificationButton({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children?: React.ReactNode;
}) {
  const { data, updateData, setShowModal } = useContext(ProjectDetailContext);
  const [isNotified, setIsNotified] = useState(data.floatmenu.isNotified);

  return (
    <s.Button
      $width={width}
      $height={height}
      $border="1px solid #69ACFF"
      $color="#69acff"
      $type="notification"
      onClick={() => {
        setShowModal(true);
        return;
        // 모달창 사라지면 다시 활성화 예정
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
      {isNotified ? <Icon name="FillNotification" /> : <Icon name="EmptyNotification" />}
      {children}
      <p>{data.notification}</p>
    </s.Button>
  );
}

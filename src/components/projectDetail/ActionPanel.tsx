import { useContext } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import * as s from '@/style/projectDetail/ActionPanelStyle';
import StarButton from '@/components/common/StarButon';
import NotificationButton from '@/components/common/NotificationButton';

export default function ActionPanel() {
  const { projectInfo } = useContext(ProjectDetailContext);

  return (
    <s.Section>
      <s.ProjectName>{projectInfo.title}</s.ProjectName>
      <s.ShortDescription>{projectInfo.summary}</s.ShortDescription>
      <s.ButtonBox>
        <StarButton width={108} height={40}>
          빛내기
        </StarButton>
        <NotificationButton width={108} height={40}>
          알림
        </NotificationButton>
      </s.ButtonBox>
    </s.Section>
  );
}

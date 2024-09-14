import { useContext } from 'react';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import * as s from '../../style/projectDetail/ActionPanelStyle';
import StarButton from '../common/StarButon';
import NotificationButton from '../common/NotificationButton';

export default function ActionPanel() {
  const { data } = useContext(ProjectDetailContext);

  return (
    <s.Section>
      <s.ProjectName>{data.projectname}</s.ProjectName>
      <s.ShortDescription>{data.intro.projectbrief}</s.ShortDescription>
      <s.ButtonBox>
        <StarButton width={108} height={40}>
          좋아요
        </StarButton>
        <NotificationButton width={108} height={40}>
          알림
        </NotificationButton>
      </s.ButtonBox>
    </s.Section>
  );
}

import { useContext } from 'react';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import * as s from '../../style/projectDetail/ActionPanelStyle';
import StarButton from '../common/StarButon';
import ShareButton from '../common/ShareButton';

export default function ActionPanel() {
  const { data, updateData } = useContext(ProjectDetailContext);

  return (
    <s.Section>
      <s.ProjectName>{data.projectname}</s.ProjectName>
      <s.ShortDescription>{data.intro.projectbrief}</s.ShortDescription>
      <s.ButtonBox>
        <StarButton />
        <ShareButton />
      </s.ButtonBox>
    </s.Section>
  );
}

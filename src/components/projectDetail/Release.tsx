import { useContext, useEffect } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import * as s from '@/style/projectDetail/ReleaseStyle';
import { ReleaseType } from '@/interface';
import { Updater } from 'use-immer';
import { useLocation } from 'react-router-dom';

export default function Release() {
  const { releaseInfo, updateReleaseInfo } = useContext(ProjectDetailContext);
  const id = useLocation().pathname.replace('/', '');

  useEffect(() => {
    getRelease(updateReleaseInfo, id);
  }, [id, updateReleaseInfo]);

  return (
    <s.Section>
      {releaseInfo.projectReleases.map((releaseObj, index) => (
        <s.ReleaseBox key={index}>
          <s.Title>{releaseObj.title}</s.Title>
          <s.ReleaseInformation>{releaseObj.description}</s.ReleaseInformation>
        </s.ReleaseBox>
      ))}
    </s.Section>
  );
}

async function getRelease(updateReleaseInfo: Updater<ReleaseType>, id: string) {
  try {
    const response = await fetch(
      `https://port-0-bay-core-m20bg38se8c2b49b.sel4.cloudtype.app/api/v1/projects/${id}/release`,
    );
    const data = await response.json();
    updateReleaseInfo((draft) => {
      Object.assign(draft, data.data);
    });
  } catch (e) {
    console.log(e);
  }
}

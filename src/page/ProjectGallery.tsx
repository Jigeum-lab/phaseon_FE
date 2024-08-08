import React, { useRef } from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import ProjectInfo from '../components/projectGallery/GalleryBanner';
import ProjectCollection from '../components/projectGallery/ProjectCollection';
import * as s from '../style/projectDetail/ProjectDetailsStyle';

export default function ProjectGallery() {
  const TopRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Header />
      <s.Main>
        <ProjectInfo TopRef={TopRef} />
        <ProjectCollection TopRef={TopRef} />
      </s.Main>
      <Footer />
    </>
  );
}
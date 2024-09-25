import { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AllProjectView from '@/components/main/AllProjectView';
import MainBanner from '@/components/main/MainBanner';
import { MainProvider } from '@/context/MainContext';
import * as s from '@/style/main/MainStyle';
import Category from '@/components/main/Category';
import ComingSoonModal from '@/components/common/ComingSoonModal';

export default function Main() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && <ComingSoonModal setShowModal={setShowModal} showModal={showModal} />}
      <Header setShowModal={setShowModal} />
      <s.MainStyle>
        <MainProvider>
          <MainBanner />
          <s.Section>
            <s.StickyRoad>
              <Category />
            </s.StickyRoad>
            <AllProjectView />
          </s.Section>
        </MainProvider>
      </s.MainStyle>
      <Footer />
    </>
  );
}

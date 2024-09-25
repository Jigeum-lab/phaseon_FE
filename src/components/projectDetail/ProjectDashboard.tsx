import { useContext } from 'react';
import { CategoryContext } from '@/context/CategoryContext';
import { ZoomImgProvider } from '@/context/ZoomContext';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import ProjectInfo from '@/components/projectDetail/ProjectInfo';
import Performance from '@/components/projectDetail//Performance';
import Introduction from '@/components/projectDetail//Introduction';
import Release from '@/components/projectDetail//Release';
import ActionPanel from '@/components/projectDetail//ActionPanel';
import Share from '@/components/projectDetail//Share';
import AllProjectSlider from '@/components/projectDetail/AllProjectSlider';
import * as s from '@/style/projectDetail/ProjectDashboardStyle';

export default function ProjectDashboard() {
  const { showShare } = useContext(ProjectDetailContext);
  const { currentCategory, setCurrentCategory } = useContext(CategoryContext);
  const categories = [
    { text: '프로젝트 정보', id: 'information' },
    { text: '출시', id: 'release' },
    { text: '성과', id: 'performance' },
    { text: '팀 소개', id: 'introduction' },
  ];
  return (
    <>
      {showShare && <Share />}
      <s.Section>
        <s.CategoryBox>
          {categories.map((category, key) => (
            <s.CategoryText
              key={key}
              $id={category.id}
              $currentCategory={currentCategory}
              onClick={() => {
                setCurrentCategory(category.id);
              }}
            >
              {category.text}
            </s.CategoryText>
          ))}
        </s.CategoryBox>
        <ZoomImgProvider>{currentCategory === 'information' && <ProjectInfo />}</ZoomImgProvider>
        {currentCategory === 'performance' && <Performance />}
        {currentCategory === 'release' && <Release />}
        {currentCategory === 'introduction' && <Introduction />}
        <ActionPanel />
        <AllProjectSlider />
      </s.Section>
    </>
  );
}

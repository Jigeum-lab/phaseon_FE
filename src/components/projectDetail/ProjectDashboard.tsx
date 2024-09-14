import { useContext } from 'react';
import * as s from '../../style/projectDetail/ProjectDashboardStyle';
import { CategoryContext } from '../../context/CategoryContext';
import ProjectInfo from './ProjectInfo';
import Performance from './Performance';
import Introduction from './Introduction';
import Release from './Release';
import ActionPanel from './ActionPanel';
import { ZoomImgProvider } from '../../context/ZoomContext';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import Share from './Share';
import AllProjectSlider from './AllProjectSlider';

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

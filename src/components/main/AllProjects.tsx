import { useContext } from 'react';
import * as s from '@/style/main/AllProjectsStyle';
import { MainContext } from '@/context/MainContext';
import { Icon } from '@/components/common/Icon';
import { useNavigate } from 'react-router-dom';

export default function AllProjects() {
  const { project } = useContext(MainContext);
  const navigate = useNavigate();
  return (
    <s.ProjectContainer>
      {project &&
        project.data.projects.map((projectObj, idx) => (
          <s.ProjectBox
            key={idx}
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              });
              navigate(`/${projectObj.id}`);
            }}
          >
            <s.Img src={projectObj.thumbnail} alt="" />
            <div>
              <s.ProjectName>{projectObj.title}</s.ProjectName>
              <s.Description>{projectObj.summary}</s.Description>
              <s.InpoBox>
                <s.IconBox>
                  <Icon name="FillStar" fill="#FFCC00" />
                  <p>{projectObj.likeCount}</p>
                </s.IconBox>
                <s.IconBox>
                  <Icon name="Medal" />
                  <p>{projectObj.awardCount}</p>
                </s.IconBox>
                <s.IconBox>
                  <Icon name="Member" fill="#69ACFF" width={16} height={12} />
                  <p>{projectObj.memberCount}</p>
                </s.IconBox>
              </s.InpoBox>
              <s.CategoryBox>
                {projectObj.category.map((categoryText, idx2) => (
                  <p key={idx2 + categoryText}>{categoryText}</p>
                ))}
              </s.CategoryBox>
            </div>
          </s.ProjectBox>
        ))}
    </s.ProjectContainer>
  );
}

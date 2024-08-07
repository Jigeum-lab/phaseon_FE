import { useContext } from 'react';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import * as s from '../../style/projectDetail/IntroductionStyle';
import { ReactComponent as Instargram } from '../../assets/svg/Instargram.svg';

export default function Introduction() {
  const { data } = useContext(ProjectDetailContext);
  return (
    <s.Section>
      {data.category.introduction.members.map((memberObj, index) => (
        <s.Profile key={index}>
          {memberObj.img == null ? <s.PersonSvg width="80" height="80" /> : <s.Img src={memberObj.img} alt="" />}
          <s.Name>{memberObj.name}</s.Name>
          <s.InfoBox>
            <span>{memberObj.role}</span>
            <span>{memberObj.email}</span>
          </s.InfoBox>
          <div>
            {memberObj.profilelink.map((links, linkindex) => {
              if (links.icon == 'instargram') {
                return (
                  <Instargram
                    key={links.link}
                    onClick={() => {
                      window.open(links.link);
                    }}
                  />
                );
              }
            })}
          </div>
        </s.Profile>
      ))}
    </s.Section>
  );
}

import { useContext } from 'react';
import { ProjectDetailContext } from '../../context/ProjectDetailContext';
import * as s from '../../style/projectDetail/IntroductionStyle';
import { ReactComponent as Instargram } from '../../assets/svg/Instargram.svg';

export default function Introduction() {
  const { data } = useContext(ProjectDetailContext);
  return (
    <s.Section>
      {data.menu.introduction.members.map((memberObj, index) => (
        <s.Profile key={index}>
          {memberObj.img == null ? (
            <s.PersonSvg width="56" height="56" />
          ) : (
            <s.Img src={`/public/${memberObj.img}`} alt="" />
          )}
          <s.Name>{memberObj.name}</s.Name>
          <s.Role>{memberObj.role}</s.Role>
          <s.LinkBox>
            {memberObj.profilelink.map((links, memberIndex) => {
              if (links.icon === 'instargram') {
                return (
                  <Instargram
                    key={links.link + memberIndex}
                    onClick={() => {
                      window.open(links.link);
                    }}
                  />
                );
              }
            })}
          </s.LinkBox>
        </s.Profile>
      ))}
    </s.Section>
  );
}

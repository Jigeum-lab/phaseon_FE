import { useContext } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import * as s from '@/style/projectDetail/IntroductionStyle';

export default function Introduction() {
  const { memberInfo } = useContext(ProjectDetailContext);

  function getIcon(platform: string, key: string) {
    switch (platform) {
      case 'GITHUB':
        return <s.SvgIcon key={key} name="GITHUB" width={24} height={24} fill="black" />;
        break;
      case 'LINKEDIN':
        return <s.SvgIcon key={key} name="LINKEDINCOLOR" />;
        break;
      case 'TWITTER':
        return <s.SvgIcon key={key} name="TWITTER" width={24} height={24} fill="#00acee" />;
        break;
      case 'FACEBOOK':
        return <s.SvgIcon key={key} name="FACEBOOKCOLOR" />;
        break;
      case 'INSTARGRAM':
        return <s.SvgIcon key={key} name="INSTARGRAMCOLOR" />;
        break;
      case 'YOUTUBE':
        return <s.SvgIcon key={key} name="YOUTUBECOLOR" />;
        return;
      case 'BLOG':
        return <s.SvgIcon key={key} name="BLOGCOLOR" />;
      default:
        return <s.SvgIcon key={key} name="OTHER" width={24} height={24} fill="black" />;
    }
  }

  return (
    <s.Section>
      {memberInfo.users.map((memberObj, index) => (
        <s.Profile key={index}>
          <s.Img src={memberObj.userPicture} alt="" />
          <s.Name>{memberObj.username}</s.Name>
          <s.Role>{memberObj.userRole}</s.Role>
          <s.LinkBox>
            {memberObj.links.map((linkObj) => {
              return getIcon(linkObj.linkType, linkObj.url);
            })}
          </s.LinkBox>
        </s.Profile>
      ))}
    </s.Section>
  );
}

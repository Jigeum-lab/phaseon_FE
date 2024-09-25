import { useContext } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import * as s from '@/style/projectDetail/IntroductionStyle';

export default function Introduction() {
  const { memberInfo } = useContext(ProjectDetailContext);

  type Platform = 'GITHUB' | 'LINKEDIN' | 'TWITTER' | 'FACEBOOK' | 'INSTAGRAM' | 'YOUTUBE' | 'BLOG' | 'OTHER';

  type IconName =
    | 'GITHUB'
    | 'LINKEDIN'
    | 'TWITTER'
    | 'FACEBOOKCOLOR'
    | 'INSTAGRAMCOLOR'
    | 'YOUTUBECOLOR'
    | 'BLOGCOLOR'
    | 'OTHER'
    | 'LINKEDINCOLOR'
    | 'FACEBOOKCOLOR'
    | 'INSTAGRAMCOLOR'
    | 'YOUTUBECOLOR'
    | 'BLOGCOLOR';

  // 링크 타입이 유효한지 확인하는 함수
  function isValidPlatform(linkType: string): linkType is Platform {
    return ['GITHUB', 'LINKEDIN', 'TWITTER', 'FACEBOOK', 'INSTAGRAM', 'YOUTUBE', 'BLOG', 'OTHER'].includes(linkType);
  }

  function getIcon(platform: Platform, url: string) {
    const iconConfig: Record<Platform, { name: IconName; width?: number; height?: number; fill?: string }> = {
      GITHUB: { name: 'GITHUB', width: 24, height: 24, fill: 'black' },
      LINKEDIN: { name: 'LINKEDINCOLOR' },
      TWITTER: { name: 'TWITTER', width: 24, height: 24, fill: '#00acee' },
      FACEBOOK: { name: 'FACEBOOKCOLOR' },
      INSTAGRAM: { name: 'INSTAGRAMCOLOR' },
      YOUTUBE: { name: 'YOUTUBECOLOR' },
      BLOG: { name: 'BLOGCOLOR' },
      OTHER: { name: 'OTHER', width: 24, height: 24, fill: 'black' },
    };

    const { name, width, height, fill } = iconConfig[platform] || iconConfig.OTHER;

    return (
      <s.SvgIcon key={url} name={name} width={width} height={height} fill={fill} onClick={() => window.open(url)} />
    );
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
              return isValidPlatform(linkObj.linkType) ? getIcon(linkObj.linkType, linkObj.url) : null;
            })}
          </s.LinkBox>
        </s.Profile>
      ))}
    </s.Section>
  );
}

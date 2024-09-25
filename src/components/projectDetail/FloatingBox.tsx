import { SetStateAction, useContext } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import { CategoryContext } from '@/context/CategoryContext';
import StarButton from '@/components/common/StarButon';
import ShareButton from '@/components/common/ShareButton';
import NotificationButton from '@/components/common/NotificationButton';
import * as s from '@/style/projectDetail/FloatingBoxStyle';
import { Icon } from '@/components/common/Icon';
import * as icons from '@/components/icon';

export default function FloatingBox({ setShowModal }: { setShowModal: React.Dispatch<SetStateAction<boolean>> }) {
  const { projectInfo, memberInfo, accomplishmentInfo } = useContext(ProjectDetailContext);

  const { setCurrentCategory, introRef } = useContext(CategoryContext);

  function changeCategory(category: string) {
    setCurrentCategory(category);
    introRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  const linkObj: { [key: string]: string } = {
    GITHUB: 'GitHub',
    LINKEDIN: '링크드인',
    TWITTER: '트위터',
    FACEBOOK: '페이스북',
    INSTARGRAM: '인스타그램',
    YOUTUBE: '유튜브',
    BLOG: '블로그',
    WEBSITE: '웹사이트',
    OTHER: '그 외',
  };

  return (
    <s.Section $buttonNum={projectInfo.links.length}>
      <s.ViewCategoryBox>
        <s.Category>{projectInfo.status}</s.Category>
        <s.ViewBox>
          <Icon name="View" />
          <s.View>{projectInfo.viewCount}</s.View>
        </s.ViewBox>
      </s.ViewCategoryBox>
      <s.PromotionBox>
        {projectInfo.links.map((buttonObj, index) => (
          <s.PromotionButton
            key={buttonObj.link + index}
            onClick={() => {
              window.open(buttonObj.link);
            }}
          >
            <Icon
              name={buttonObj.type in icons ? (buttonObj.type as keyof typeof icons) : 'OTHER'}
              width={16}
              height={16}
              fill="#69acff"
            />
            <s.ButtonText>{linkObj[buttonObj.type] || '그 외'}</s.ButtonText>
          </s.PromotionButton>
        ))}
        <s.CoffeeChatButton
          onClick={() => {
            setShowModal(true);
          }}
        >
          <Icon name="Coffee" />
          <s.CoffeeChatText>커피챗 요청하기</s.CoffeeChatText>
        </s.CoffeeChatButton>
      </s.PromotionBox>
      <s.ImgBox>
        <s.Title>주요 성과</s.Title>
        <div>
          {accomplishmentInfo.data.accomplishments.map((awardObj, index) => {
            if (index < 5) {
              return <s.Img key={awardObj.title + index} src={awardObj.thumbnail} alt="" />;
            }
          })}
        </div>
        <s.MoreContent
          onClick={() => {
            changeCategory('performance');
          }}
        >
          전체보기
        </s.MoreContent>
      </s.ImgBox>
      <s.ImgBox>
        <s.Title>제작자</s.Title>
        <div>
          {memberInfo.users.map((memberObj, index) => {
            if (index < 5) {
              return <s.Img src={`/public/${memberObj.userPicture}`} alt="" key={index} />;
            }
          })}
        </div>
        <s.MoreContent
          onClick={() => {
            changeCategory('introduction');
          }}
        >
          전체보기
        </s.MoreContent>
      </s.ImgBox>
      <s.ButtonBox>
        <s.Div>
          <StarButton width={90} height={32} />
          <NotificationButton width={90} height={32} />
        </s.Div>
        <ShareButton width={188} height={32} />
      </s.ButtonBox>
    </s.Section>
  );
}

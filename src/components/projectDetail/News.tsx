import { NewsObj } from '@/interface';
import * as s from '@/style/projectDetail/NewsStyle';

export default function News({ data }: { data: NewsObj[] }) {
  return (
    <s.PaddingBox>
      <s.TitleBox>
        <s.Title>보도 자료</s.Title>
        <s.ShortDescription>관련 기사 모음</s.ShortDescription>
      </s.TitleBox>
      {data.map((newsObj, index) => (
        <s.NewsBox
          key={newsObj.title + index}
          onClick={() => {
            window.open(newsObj.link);
          }}
        >
          <s.NewsImg src={newsObj.thumbnail} alt="" />
          <s.NewsTextBox>
            <s.NewsTitle>{newsObj.title}</s.NewsTitle>
            <s.NewsContent>{newsObj.description}</s.NewsContent>
          </s.NewsTextBox>
        </s.NewsBox>
      ))}
    </s.PaddingBox>
  );
}

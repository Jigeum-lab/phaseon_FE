import { SetStateAction } from 'react';
import { Icon } from '@/components/common/Icon';
import * as s from '@/style/common/CommingSoonModalStyle';
import { usePreventScroll } from '@/utils/usePreventScroll';

export default function ComingSoonModal({
  setShowModal,
  showModal,
}: {
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
}) {
  usePreventScroll(showModal);

  return (
    <s.Div $scroll={window.scrollY}>
      <s.ModalBox>
        <s.Close
          name="Close"
          fill="black"
          width={24}
          height={24}
          onClick={() => {
            setShowModal(false);
          }}
        />
        <s.Logoicon name="LogoIcon" />
        <s.Headline>곧 런칭 예정!</s.Headline>
        <s.Description>페이즈온은 10월 중 정식 런칭 예정에 있어요.</s.Description>
        <s.Description> 잠시 후 훌륭한 서비스로 다시 찾아올게요!</s.Description>
        <s.CheckButton
          type="button"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <Icon name="Check" />
          <p>확인 완료</p>
        </s.CheckButton>
      </s.ModalBox>
    </s.Div>
  );
}

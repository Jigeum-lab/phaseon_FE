import { useNavigate } from 'react-router-dom';
import * as s from '@/style/common/HeaderStyle';
import { Icon } from '@/components/common/Icon';
import React, { SetStateAction } from 'react';

export default function Header({ setShowModal }: { setShowModal: React.Dispatch<SetStateAction<boolean>> }) {
  const navigate = useNavigate();

  function handleModal() {
    setShowModal(true);
  }

  return (
    <s.Header>
      <s.NavigationBox width={353}>
        <s.SvgIcon
          name="Logo"
          onClick={() => {
            navigate('/');
          }}
        />
        <s.Nav>
          <s.IconBox
            color="#69ACFF"
            onClick={() => {
              navigate('/');
            }}
          >
            <Icon name="SmallProjectIcon" fill="#69ACFF" />
            <p>프로젝트</p>
          </s.IconBox>
          <s.Article onClick={handleModal}>아티클</s.Article>
        </s.Nav>
      </s.NavigationBox>
      <s.NavigationBox width={214}>
        <s.SvgIcon name="Search" onClick={handleModal} />
        <s.RegisterButton onClick={handleModal}>
          <s.SvgIcon name="Register" />
          등록하기
        </s.RegisterButton>
        <s.SvgIcon name="DefaultUserImg" width={32} height={32} onClick={handleModal} />
      </s.NavigationBox>
    </s.Header>
  );
}

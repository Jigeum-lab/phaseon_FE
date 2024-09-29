import { useNavigate } from 'react-router-dom';
import * as s from '@/style/common/HeaderStyle';
import { Icon } from '@/components/common/Icon';
import React, { SetStateAction, useState } from 'react';

export default function Header({ setShowModal }: { setShowModal: React.Dispatch<SetStateAction<boolean>> }) {
  const [currentPage, setCurrentPage] = useState('projects');
  const navigate = useNavigate();

  function handleModal() {
    setShowModal(true);
  }

  return (
    <s.Header>
      <s.NavigationBox width={335}>
        <s.SvgIcon
          name="Logo"
          onClick={() => {
            navigate('/');
          }}
        />
        <s.Nav>
          <s.IconBox
            $color={currentPage === 'projects' ? '#69ACFF' : '#47484c'}
            onClick={() => {
              setCurrentPage('projects');
              navigate('/');
            }}
          >
            <Icon name="SmallProjectIcon" fill="#69ACFF" />
            <p>프로젝트</p>
          </s.IconBox>
          <s.Article
            $color={currentPage === 'article' ? '#69ACFF' : '#47484c'}
            onClick={() => {
              handleModal();
            }}
          >
            아티클
          </s.Article>
        </s.Nav>
      </s.NavigationBox>
      <s.NavigationBox width={243}>
        <s.SvgIcon name="Search" onClick={handleModal} />
        <s.SvgIcon name="Notice" onClick={handleModal} />
        <s.SvgIcon name="DefaultUserImg" width={32} height={32} onClick={handleModal} />
        <s.RegisterButton onClick={handleModal}>
          <s.SvgIcon name="Register" />
          등록하기
        </s.RegisterButton>
      </s.NavigationBox>
    </s.Header>
  );
}

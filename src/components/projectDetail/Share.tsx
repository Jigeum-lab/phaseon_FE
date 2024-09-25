import { useContext } from 'react';
import { ProjectDetailContext } from '@/context/ProjectDetailContext';
import * as s from '@/style/projectDetail/ShareStyle';
import { usePreventScroll } from '@/utils/usePreventScroll';

export default function Share() {
  const { setShowShare, showShare } = useContext(ProjectDetailContext);

  usePreventScroll(showShare);

  return (
    <s.Section $scroll={window.screenY}>
      <s.QRcodeBox>
        <s.CloseButton
          name="Close"
          fill="black"
          onClick={() => {
            setShowShare(false);
          }}
        />
        <s.Div>
          <s.Title>공유하기</s.Title>
          <s.Description>아래의 QR 또는 링크를 복사하여 공유해보세요!</s.Description>
          <s.QRCodeStyle value={window.location.href} />
          <s.DownloadBox>
            <s.DownloadButton name="Download" onClick={HandleDownload} />
            <s.DownloadText onClick={HandleDownload}>다운로드</s.DownloadText>
          </s.DownloadBox>
          <s.CopyBox>
            <s.CopyText>{window.location.href}</s.CopyText>
            <s.CopyButton
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
              }}
            >
              저장
            </s.CopyButton>
          </s.CopyBox>
        </s.Div>
      </s.QRcodeBox>
    </s.Section>
  );
}

function HandleDownload() {
  const canvas = document.querySelector('canvas');
  const url = canvas ? canvas.toDataURL('image/png') : '';
  const link = document.createElement('a');
  link.href = url;
  link.download = 'qr.png';
  link.click();
}

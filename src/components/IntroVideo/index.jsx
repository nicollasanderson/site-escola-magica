import { StyledVideoDiv } from "./style";

const IntroVideo = () => {
  return (
    <StyledVideoDiv>
      <iframe
        width="650"
        height="365"
        src="https://www.youtube.com/embed/mOtydZlnRL0?si=cPtfyT6fjccRgZiu"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </StyledVideoDiv>
  );
};

export default IntroVideo;

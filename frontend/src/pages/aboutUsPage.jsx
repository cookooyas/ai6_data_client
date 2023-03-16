// import RicidivismChart from "../components/pages/aboutUS/charts/RicidivismChart";
import Chart3 from "../components/pages/aboutUS/charts/chart3";
import ArrestedChart from "../components/pages/aboutUS/charts/ArrestedChart";
import styled from "styled-components";
import bgImg from "../images/aboutus_back_image.png";

function AboutUsPage() {
  return (
    <div>
      <BackgroundImgLayout>
        <Title>24/7은 언제 어디서나</Title>
        <Title>당신과 함께하겠습니다.</Title>
      </BackgroundImgLayout>
      {/* <RicidivismChart /> */}
      <ArrestedChart />
      <Chart3 />
    </div>
  );
}

const BackgroundImgLayout = styled.div`
  width: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  font-size: 55px;
  font-weight: 1000;
  text-align: center;
  margin-bottom: 30px;
`;

export default AboutUsPage;

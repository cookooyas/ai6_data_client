import ReportRateChart from "../components/pages/aboutUS/charts/ReportRateChart";
import RicidivismChart from "../components/pages/aboutUS/charts/RicidivismChart";
import ArrestedChart from "../components/pages/aboutUS/charts/ArrestedChart";
import SurveyResultsChart from "../components/pages/aboutUS/charts/SurveyResultsChart";
import SupportServicesChart from "../components/pages/aboutUS/charts/SupportServicesChart";
import styled from "styled-components";
import bgImg from "../images/aboutus_back_image.png";

function AboutUsPage() {
  return (
    <div>
      <BackgroundImgLayout>
        <Title>24/7은 언제 어디서나</Title>
        <Title>당신과 함께하겠습니다.</Title>
      </BackgroundImgLayout>
      <ChartLayoutRaw>
        <ReportRateChart />
        <p>가정폭력 신고 비율은 매년 증가하고 있습니다.</p>
      </ChartLayoutRaw>
      <p>
        가정폭력은 재범률이 높지만 처벌 강도는 낮아, 피해자들은 여전히 고통을
        받고 있습니다.
      </p>
      <p>
        전국 가정폭력 융합요소 데이터에 따르면 가정폭력범죄는 재범율이 총 신고
        접수 건수에서 30% 이상을 차지합니다.
      </p>
      <p>
        또한 검거인원 중 구속 처리되는 인원은 소수이며 대다수의 가정폭력
        가해자는 불구속 처리되거나 가정보호사건으로 송치됩니다.
      </p>
      <ChartLayoutRaw>
        <ArrestedChart />
        <RicidivismChart />
      </ChartLayoutRaw>
      <ChartLayoutRaw>
        <p>
          시민들은 '폭력 허용적 사회문화의 개선' '가정폭력 관련 법 및 지원서비스
          홍보'를 가정폭력을 감소시키기 위해 필요한 정책으로 꼽았습니다.
        </p>
        <SurveyResultsChart />
      </ChartLayoutRaw>
      <ChartLayoutRaw>
        <SupportServicesChart />
        <p>
          그러나 현행중인 지원 서비스 중 인터넷 매체를 이용한 비대면 지원
          서비스의 인지도는 가장 낮습니다.
        </p>
      </ChartLayoutRaw>
      <h3>
        사회의 가정폭력 인식 개선을 위한 정책 및 캠페인부터 편하게 고민을 상담할
        수 있는 익명 상담 서비스와 커뮤니티까지 24/7이 당신의 안전과 행복을 위해
        함께하겠습니다.
      </h3>
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

const ChartLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartLayoutRaw = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default AboutUsPage;
import PageBanner from "../../components/Shared/PageBanner/PageBanner"
import CoreValues from "./CoreValues/CoreValues"
import HistoricalTimeline from "./HistoricalTimeline/HistoricalTimeline"
import StatsSection from "./StatsSection/StatsSection"
import VisionMission from "./VisionMission/VisionMission"

const About = () => {
  return (
    <div>
      <PageBanner></PageBanner>
      <VisionMission></VisionMission>
      <StatsSection></StatsSection>
      <CoreValues></CoreValues>
      <HistoricalTimeline></HistoricalTimeline>
    </div>
  )
}

export default About
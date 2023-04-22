import { HistoryList } from "../../components/History/HistoryList/HistoryList"
import { HistorySummary } from "../../components/History/HistorySummary/HistorySummary"
import { HistoryToolbar } from "../../components/History/HistoryToolbar/HistoryToolbar"

export const History: React.FC = () => {
  return <>
    <HistorySummary/>
    <HistoryToolbar/>
    <HistoryList/>
  </>
}
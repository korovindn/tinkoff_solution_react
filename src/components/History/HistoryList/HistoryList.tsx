import { useAppSelector } from "../../../redux/hooks";
import { HistoryItem } from "../HistoryItem/HistoryItem";

export const HistoryList: React.FC = () => {
  const historyItems = useAppSelector((state) => state.history.items);
  return (
    <ul>
      {historyItems.map((item) => (
        <HistoryItem {...item} />
      ))}
    </ul>
  );
};

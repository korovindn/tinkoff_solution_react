import { Filter } from "./Filter/Filter"
import { Sort } from "./Sort/Sort"

export const HistoryToolbar: React.FC = () => {
  return <div>
    <Filter/>
    <Sort/>
  </div>
}
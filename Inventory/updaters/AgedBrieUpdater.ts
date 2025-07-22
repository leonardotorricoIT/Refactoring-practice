import { Item } from "../Item";
import { ItemUpdater } from "./ItemUpdater";

export class AgedBrieUpdater implements ItemUpdater {
  update(item: Item): void {
    item.sellIn--;
    if (item.quality < 50) item.quality++;
    if (item.sellIn < 0 && item.quality < 50) item.quality++;
  }
}
import { Item } from "../../Item";
import { ItemUpdater } from "../intefaces/ItemUpdater";

export class DefaultItemUpdater implements ItemUpdater {
  update(item: Item): void {
    item.sellIn--;
    if (item.quality > 0) item.quality--;
    if (item.sellIn < 0 && item.quality > 0) item.quality--;
  }
}

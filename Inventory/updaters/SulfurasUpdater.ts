import { Item } from "../Item";
import { ItemUpdater } from "./ItemUpdater";

export class SulfurasUpdater implements ItemUpdater {
  update(item: Item): void {
    // Legendary item, does not change
  }
}
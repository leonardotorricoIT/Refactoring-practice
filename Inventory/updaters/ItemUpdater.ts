import { Item } from "../Item";

export interface ItemUpdater {
  update(item: Item): void;
}
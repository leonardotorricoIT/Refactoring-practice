import { Item } from "../Item";
import { ItemUpdater } from "./ItemUpdater";
import { AgedBrieUpdater } from "./AgedBrieUpdater";
import { BackstagePassUpdater } from "./BackstagePassUpdater";
import { SulfurasUpdater } from "./SulfurasUpdater";
import { DefaultItemUpdater } from "./DefaultItemUpdater";

export class ItemUpdaterFactory {
  static getUpdater(item: Item): ItemUpdater {
    switch (item.name) {
      case "Aged Brie":
        return new AgedBrieUpdater();
      case "Backstage passes to a Pokemon Gym concert":
        return new BackstagePassUpdater();
      case "Sulfuras, Hand of Ragnaros":
        return new SulfurasUpdater();
      default:
        return new DefaultItemUpdater();
    }
  }
}
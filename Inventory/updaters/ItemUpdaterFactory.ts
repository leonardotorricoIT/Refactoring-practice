import { Item } from "../Item";
import { ItemUpdater } from "./intefaces/ItemUpdater";
import { AgedBrieUpdater } from "./strategies/AgedBrieUpdater";
import { BackstagePassUpdater } from "./strategies/BackstagePassUpdater";
import { SulfurasUpdater } from "./strategies/SulfurasUpdater";
import { DefaultItemUpdater } from "./strategies/DefaultItemUpdater";

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

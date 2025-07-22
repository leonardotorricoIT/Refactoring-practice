import { Item } from "./Item";
import { ItemUpdaterFactory } from "./updaters/ItemUpdaterFactory";

export class GameInventory {
  constructor(private readonly items: Item[]) {}

  updateQuality(): void {
    for (const item of this.items) {
      const updater = ItemUpdaterFactory.getUpdater(item);
      updater.update(item);
    }
  }
}
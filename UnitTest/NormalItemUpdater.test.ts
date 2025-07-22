import { DefaultItemUpdater } from "../Inventory/updaters/strategies/DefaultItemUpdater";
import { Item } from "../Inventory/Item";

describe("DefaultItemUpdater", () => {
  it("should decrease quality and sellIn by 1", () => {
    const item = new Item("Normal Item", 5, 10);
    const updater = new DefaultItemUpdater();
    updater.update(item);
    expect(item.sellIn).toBe(4);
    expect(item.quality).toBe(9);
  });

  it("should degrade quality twice as fast after sellIn", () => {
    const item = new Item("Normal Item", 0, 10);
    const updater = new DefaultItemUpdater();
    updater.update(item);
    expect(item.quality).toBe(8);
  });

  it("should never have negative quality", () => {
    const item = new Item("Normal Item", 0, 0);
    const updater = new DefaultItemUpdater();
    updater.update(item);
    expect(item.quality).toBe(0);
  });
});

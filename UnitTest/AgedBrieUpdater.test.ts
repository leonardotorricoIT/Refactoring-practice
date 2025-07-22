import { AgedBrieUpdater } from "../Inventory/updaters/strategies/AgedBrieUpdater";
import { Item } from "../Inventory/Item";

describe("AgedBrieUpdater", () => {
  it("should increase quality as it ages", () => {
    const item = new Item("Aged Brie", 2, 0);
    const updater = new AgedBrieUpdater();
    updater.update(item);
    expect(item.quality).toBe(1);
    expect(item.sellIn).toBe(1);
  });

  it("should increase quality twice as fast after sellIn date", () => {
    const item = new Item("Aged Brie", 0, 0);
    const updater = new AgedBrieUpdater();
    updater.update(item);
    expect(item.quality).toBe(2);
    expect(item.sellIn).toBe(-1);
  });

  it("should never increase quality above 50", () => {
    const item = new Item("Aged Brie", 2, 50);
    const updater = new AgedBrieUpdater();
    updater.update(item);
    expect(item.quality).toBe(50);
  });
});

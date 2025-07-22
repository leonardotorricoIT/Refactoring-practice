import { SulfurasUpdater } from "../Inventory/updaters/strategies/SulfurasUpdater";
import { Item } from "../Inventory/Item";

describe("SulfurasUpdater", () => {
  it("should not change quality or sellIn", () => {
    const item = new Item("Sulfuras, Hand of Ragnaros", 10, 80);
    const updater = new SulfurasUpdater();
    updater.update(item);
    expect(item.sellIn).toBe(10);
    expect(item.quality).toBe(80);
  });
});

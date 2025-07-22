import { BackstagePassUpdater } from "../Inventory/updaters/strategies/BackstagePassUpdater";
import { Item } from "../Inventory/Item";

describe("BackstagePassesUpdater", () => {
  it("should increase quality by 1 when sellIn > 10", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20);
    const updater = new BackstagePassUpdater();
    updater.update(item);
    expect(item.quality).toBe(21);
  });

  it("should increase quality by 2 when 6 <= sellIn <= 10", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 25);
    const updater = new BackstagePassUpdater();
    updater.update(item);
    expect(item.quality).toBe(27);
  });

  it("should increase quality by 3 when 0 < sellIn < 6", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30);
    const updater = new BackstagePassUpdater();
    updater.update(item);
    expect(item.quality).toBe(33);
  });

  it("should drop quality to 0 after concert", () => {
    const item = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 40);
    const updater = new BackstagePassUpdater();
    updater.update(item);
    expect(item.quality).toBe(0);
  });
});

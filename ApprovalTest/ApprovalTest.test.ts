import { Program } from "../Program";

describe("ApprovalTest", () => {
  test("ThirtyDays", () => {
    // Mock console.log to capture output
    const originalLog = console.log;
    const output: string[] = [];
    console.log = jest.fn((message: string) => {
      output.push(message);
    });

    Program.main();

    // Restore console.log
    console.log = originalLog;

    // Join all output into a single string for approval testing
    const fullOutput = output.join("\n");

    // You would typically compare this output against a golden master file
    // For now, just verify that output was generated and contains expected elements
    expect(output.length).toBeGreaterThan(0);
    expect(output[0]).toBe("Here we are!");
    expect(fullOutput).toContain("-------- day 0 --------");
    expect(fullOutput).toContain("-------- day 30 --------");
    expect(fullOutput).toContain("name, sellIn, quality");
    expect(fullOutput).toContain("+5 Dexterity Vest");
    expect(fullOutput).toContain("Aged Brie");
    expect(fullOutput).toContain("Sulfuras, Hand of Ragnaros");

    // Optional: You can uncomment this line to see the full output for creating a golden master
    // console.log("Full output for approval:\n" + fullOutput);
  });
});

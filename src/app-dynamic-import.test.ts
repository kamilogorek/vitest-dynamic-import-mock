import { expect, it } from "vitest";

it("can draw random number", async () => {
  const { randomNumber } = await import("@/lib/utils");
  const number = randomNumber(10);
  expect(number).toEqual(13);
});

import { expect, it } from "vitest";
import { randomNumber } from "@/lib/utils";

it("can draw random number", async () => {
  const number = randomNumber(10);
  expect(number).toEqual(13);
});

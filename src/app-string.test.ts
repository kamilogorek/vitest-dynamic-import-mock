import { expect, it, vi } from "vitest";
import { drawNumber } from "@/app";

vi.mock("@/lib/utils", async (importOriginal) => {
  const original = await importOriginal<typeof import("@/lib/utils")>();
  return {
    ...original,
    randomNumber() {
      return 13;
    },
  };
});

it("can draw random number", () => {
  const number = drawNumber(10);
  expect(number).toEqual(13);
});

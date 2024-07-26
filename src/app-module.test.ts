import { expect, it, vi } from "vitest";
import { drawNumber } from "@/app";

vi.mock(import("@/lib/utils"), async (importOriginal) => {
  const original = await importOriginal();
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

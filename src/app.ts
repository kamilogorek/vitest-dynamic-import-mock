import { randomNumber } from "@/lib/utils";

async function bar() {
  const foo = await import("@/lib/utils");
}

export function drawNumber(max: number): number {
  return randomNumber(max);
}

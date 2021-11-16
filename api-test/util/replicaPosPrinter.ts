import { callCharAtEndpoint } from "./callCharAtEndpoint";

export async function replicaPosPrinter(
  pos: number,
  times: number
): Promise<string> {
  const char = await callCharAtEndpoint(pos);
  return char.repeat(times);
}

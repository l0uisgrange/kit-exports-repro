import { getFruits } from "./y.remote";

export async function load({ parent }) {
  const fruitsList = await getFruits("all");
  return { fruitsServer: fruitsList };
}

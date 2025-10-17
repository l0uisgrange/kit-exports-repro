import { query } from "$app/server";
import z from "zod";
import { getBananaProfile } from "../x.remote";
import { sleep } from "$lib";

export const getFruits = query(z.string(), async (data) => {
  return {
    fruits: ["apple", "peer", "banana", "peach"],
    banana: await getBananaProfile(),
  };
});

export const computeBananaQuality = query(async () => {
  await sleep(1000);
  return 10;
});

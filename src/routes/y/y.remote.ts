import { form, query } from "$app/server";
import z from "zod";
import { getBananaProfile } from "../x.remote";
import { sleep } from "$lib";

const FRUITS = ["apple", "peer", "banana", "peach"];

const mySchema = z.object({
  name: z.string(),
  quantity: z.number(),
});

export const createFruit = form(mySchema, async (formData) => {
  return [...FRUITS, formData.name];
});

// This remote uses getBananaProfile, which is defined in x.remote.ts
export const getFruits = query(z.string(), async (data) => {
  return {
    fruits: FRUITS,
    banana: await getBananaProfile(), // this call creates the bug
  };
});

export const computeBananaQuality = query(async () => {
  await sleep(1000);
  return 10;
});

import { query } from "$app/server";
import z from "zod";
import { computeBananaQuality } from "./y/y.remote";

export const getBananaProfile = query(async () => {
  return { quantity: 8, quality: await computeBananaQuality() };
});

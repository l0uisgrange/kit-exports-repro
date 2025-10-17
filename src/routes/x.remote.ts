import { query } from "$app/server";
import z from "zod";

export const getBananaProfile = query(async () => {
  return { quantity: 8, quality: 10 };
});

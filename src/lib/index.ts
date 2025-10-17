// place files you want to import through the `$lib` alias in this folder.
export function sleep(ms: number): Promise<void> {
  // Crée et retourne une nouvelle promesse
  return new Promise((resolve) => setTimeout(resolve, ms));
}

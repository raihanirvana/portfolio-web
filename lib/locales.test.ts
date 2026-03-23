import { enDictionary } from "@/content/locales/en";
import { idDictionary } from "@/content/locales/id";
import { loadDictionary } from "@/lib/locales";

describe("loadDictionary", () => {
  it("loads the english dictionary", async () => {
    await expect(loadDictionary("en")).resolves.toBe(enDictionary);
  });

  it("loads the indonesian dictionary", async () => {
    await expect(loadDictionary("id")).resolves.toBe(idDictionary);
  });
});

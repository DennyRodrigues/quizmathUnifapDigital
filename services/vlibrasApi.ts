
const API_URL = "https://traducao2.vlibras.gov.br/translate";


export const vlibrasService = {
  async translateText(text: string): Promise<string> {
    try {
      if (!text || !text.trim())  {
        return "";
      }

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });

      if (!response.ok) {
        throw new Error(`Translation failed with status: ${response.status}`);
      }

      const data = await response.text();
      console.log("Translation API response GLOSS:", data);
      return data;
    } catch (error) {
      console.error("Error translating text:", error);
      return ""
    }
  },
};

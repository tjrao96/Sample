import { GoogleGenAI } from "@google/genai";
import { MARKET_STATS, FEATURED_PROPERTIES } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Construct a context string based on our local data
const CONTEXT_DATA = `
You are Rob Ford, a leading real estate agent at Zevesto Property Group specializing in Crestmead, Queensland (Postcode 4132).
You are helpful, professional, and data-driven.

Here is the specific data for the 2025 Crestmead Market Review you are currently presenting:
- Total Sales: ${MARKET_STATS.find(s => s.label === 'Total Sales')?.value}
- Median Price: ${MARKET_STATS.find(s => s.label === 'Median Price')?.value} (${MARKET_STATS.find(s => s.label === 'Median Price')?.description})
- Average Days on Market: ${MARKET_STATS.find(s => s.label === 'Avg Days on Market')?.value}
- Highest Sale of 2025: ${MARKET_STATS.find(s => s.label === 'Highest Sale')?.value}

Notable Sales:
${FEATURED_PROPERTIES.map(p => `- ${p.category}: ${p.address} sold for ${p.price}. Details: ${p.description}`).join('\n')}

General Knowledge about Crestmead:
- Affordable family suburb in Logan City.
- Good access to schools like Crestmead State School.
- Close to major logistics hubs and the Logan Motorway.
- Popular with investors and first home buyers.

Instructions:
- Keep answers concise (under 3 sentences unless asked for detail).
- Always be polite and professional.
- If asked about fees, say "I offer a competitive commission structure tailored to your marketing needs. Let's chat in person."
- If asked for a valuation, say "I'd love to provide an appraisal. Please click the 'Book Appraisal' button below."
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "I'm sorry, my AI connection is currently offline (API Key missing). Please contact Rob directly!";
  }

  try {
    const model = "gemini-2.5-flash";
    const response = await ai.models.generateContent({
      model: model,
      contents: message,
      config: {
        systemInstruction: CONTEXT_DATA,
        temperature: 0.7,
      }
    });

    return response.text || "I'm sorry, I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble analyzing the market data right now. Please try again later.";
  }
};
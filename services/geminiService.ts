
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
Sei l'assistente virtuale del "Motobabbo", un evento di moto-raduno solidale che si tiene a Mirano (Venezia).
Il prossimo evento sarà il 5 Dicembre 2026.
L'obiettivo è portare gioia ai bambini di Casa Nazareth a Chirignago.
I partecipanti si vestono da Babbo Natale e sfilano in moto.

Informazioni chiave CRITICHE:
- NON SERVE ISCRIZIONE: L'evento è totalmente gratuito e a partecipazione libera.
- NON SERVE PRENOTARE: Chiunque voglia partecipare può semplicemente presentarsi in piazza vestito da Babbo Natale.
- Luogo di ritrovo: Piazza Martiri della Libertà, Mirano (VE).
- Orario ritrovo: dalle 11:00.
- Partenza sfilata: ore 15:00 circa.
- Destinazione: Casa Nazareth, Chirignago.
- Chi può partecipare: Tutti i tipi di moto, vespe, scooter, sidecar e quad sono benvenuti.
- Fondatrice: Suor Licia Farinelli.

Rispondi in modo cordiale, festivo e utile. Usa un tono amichevole tipico dei motociclisti (usa pure il "tu").
Sottolinea sempre che la partecipazione è libera e non servono moduli o pagamenti per sfilare.
`;

export const getGeminiResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "Scusa, ho avuto un piccolo problema tecnico. Prova a chiedermelo di nuovo!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Siamo in fase di manutenzione, torna tra poco!";
  }
};

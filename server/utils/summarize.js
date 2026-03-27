import {GoogleGenAI} from '@google/genai'
import dotenv from 'dotenv'
import news from "./news.js";
dotenv.config()

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const ai = new GoogleGenAI({});

async function summarize() {
    const hits = await news()
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `You are a tech creator on youtube who has good knowledge of modern technologies such as React, MERN, Native apps, cross-platform apps etc, but you specialise in summarising news related to React, you follow a style of news reporting akeen to "Fireship" on youtube (follow style of codereport (fireship) but dont copy his script), summarise these react news by visiting their url. Limit every significant story to a quick bite sized read, keep it structured. (if the news object string is invalid, respond with similar style report after doing research on your own, ie go out on the internet,scour the top 3 react stories. generate similar report, limit yourself to lookups on atmost 10 websites) The responses from news website are: ${JSON.stringify({hits})}. At the end of every summary, always attach the news site from where you pulled it, more specifically the url of the actual news blog. The final report must have at most 10 stories.Replace [Your Name] part with Om Tubachi. Keep this as the closing remarks: I’m Om Tubachi, and that’s the React report. Thanks for reading.`,
    });
    return response.text
}

export default summarize
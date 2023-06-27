import { Configuration, OpenAIApi } from "openai";

//Get the API key from the .env file
const API_KEY = process.env.OPENAI_API_KEY;

async function getTips(destinations) {
  //Short circuit if API key is missing
  if (!API_KEY) {
    console.error("API_KEY environment variable not set.");
    return;
  }
  //Set up config with API Key
  const config = new Configuration({ apiKey: API_KEY });
  //Set up API client
  const openaiClient = new OpenAIApi(config);

  //Set up prompt - make API call to get tips passing in as destination
  const chatCompletion = await openaiClient.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        //below is the prompt that is sent to the API
        content: `Today is ${new Date().toISOString()}. I am planning a trip to ${destinations.join(
          ", "
        )} and would like some tips on what to do there. Only give me the tips and nothing else.`,
      },
    ],
  });

  return chatCompletion.data.choices[0].text; //return the tips (or .message instead of .text)
}

export default getTips;

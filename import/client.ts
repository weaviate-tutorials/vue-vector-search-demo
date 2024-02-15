import weaviate, { type WeaviateClient, ApiKey } from 'weaviate-ts-client';
import * as dotenv from 'dotenv'
dotenv.config()

let client: WeaviateClient;

export const getWeaviateClient = () => {
  if (!client) {
    client = weaviate.client({
      // add WCS
      scheme: 'https',
      host: process.env.VITE_WEAVIATE_HOST_URL || 'localhost',
      apiKey: new ApiKey(process.env.VITE_WEAVIATE_API_KEY),
      headers: {
        "X-OpenAI-Api-Key": process.env.VITE_OPENAI_KEY || '1234567890',
      },
    });
  };
  
  // client.misc.readyChecker().do().then(console.log)
  return client;
}
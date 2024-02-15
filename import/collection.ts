import { type WeaviateClient } from 'weaviate-ts-client';
import { getWeaviateClient } from './client';

const client: WeaviateClient = getWeaviateClient();

const collectionExists = async (name: string) => {
  return client.schema.exists(name);
}

export const createCollection = async (name: string) => {
  if (await collectionExists(name)) {
    console.log(`The collection [${name}] already exists. No need to create it.`);
    return;
  }

  console.log(`Creating collection [${name}].`);

  const textSchema = {
    class: name,
    vectorizer: "text2vec-openai",
    moduleConfig: {
      "text2vec-openai": {},
      "generative-openai": {

      },
    },
  }

  const res = await client
    .schema.classCreator()
    .withClass(textSchema)
    .do();

  console.log(JSON.stringify(res, null, 2));
}

export const deleteCollection = async (name: string) => {
  console.log(`Deleting collection ${name}...`);
  await client.schema
    .classDeleter()
    .withClassName(name)
    .do();

  console.log(`Deleted collection ${name}.`);
}
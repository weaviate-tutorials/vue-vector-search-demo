import { createCollection, deleteCollection } from './collection';
import { importMediaFiles } from './import';

const collectionName = 'RSSGoo';
const test = process.env.WEAVIATE_PORT;

const run = async () => {
  console.log('this is from the trenches',test);

  await deleteCollection(collectionName);
  await createCollection(collectionName);
  await importMediaFiles(collectionName);
}

run();



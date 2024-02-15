import { ObjectsBatcher, type WeaviateClient, generateUuid5 } from 'weaviate-ts-client';
import { getWeaviateClient } from './client';

const client: WeaviateClient = getWeaviateClient();

export const importMediaFiles = async (collectionName: string) => {
    await importMusic(collectionName);
}


async function getJsonData() {
    const file = await fetch(
        "https://gist.githubusercontent.com/malgamves/ca7d28dae20672912c85c358d7e42e31/raw/c323dd7e1de78073d772df870b4056e1c3e52a1b/songs.json"
    );
    return file.json();
}

async function importMusic(collectionName: string) {
    // Get the questions directly from the URL
    const data = await getJsonData();

    // Prepare a batcher
    let batcher: ObjectsBatcher = client.batch.objectsBatcher();
    let counter = 0;
    const batchSize = 100;

    for (const songs of data) {
        // Construct an object with a class and properties corresponding to data shape
        const obj = {
            class: collectionName,
            properties: {
                rank: songs.rank,
                title: songs.title,
                artist: songs.artist,
                album: songs.album,
                year: songs.year,
            },
        };

        // add the object to the batch queue
        batcher = batcher.withObject(obj);

        // When the batch counter reaches batchSize, push the objects to Weaviate
        if (counter++ == batchSize) {
            // flush the batch queue
            const res = await batcher.do();
            // console.log(res);

            // restart the batch queue
            counter = 0;
            batcher = client.batch.objectsBatcher();
        }
    }

    // Flush the remaining objects
    const res = await batcher.do();
    // console.log(res);
}
import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');


async function fetchDocumentsAfter(params) {
    const resultList = await pb.records.getList('document', 1, 50, {
        filter: `created >= "${params.date}"`
    });

    return resultList;
}

async function getDocumentById(id) {
    const doc = await pb.records.getOne('document', id, {});
    return { id: doc.id, title: doc.title, content: doc.content };
}

export { fetchDocumentsAfter }
export { getDocumentById }
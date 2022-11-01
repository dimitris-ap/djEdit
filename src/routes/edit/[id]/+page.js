import { getDocumentById } from '../../../ws/DocumentService';

// fetch recent documents list
export async function load({params}) {
    let doc = await getDocumentById(params.id);//"vfq63nr5xgg26kf"
    return doc;
}
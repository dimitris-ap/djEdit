import { fetchDocumentsAfter } from './../../ws/DocumentService';
import moment from 'moment/moment';

// fetch a year of documents
export async function load() {
    const startOfPrevWeek = moment().subtract(1, "year").startOf("week").format("YYYY-MM-DD HH:mm:ss");
    return await fetchDocumentsAfter({ date: startOfPrevWeek });
}
import { fetchDocumentsAfter } from '../../ws/DocumentService';
import moment from 'moment/moment';

// fetch recent documents list
export async function load() {
    // const startOfPrevWeek = moment().subtract(1, "week").startOf("week").format("YYYY-MM-DD HH:mm:ss");
    // return await fetchDocumentsAfter({ date: startOfPrevWeek });
}
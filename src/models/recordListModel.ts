import clone from '@/lib/clone';
import getNowDate from '@/lib/date';

const localStorageRecordName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  create(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.createAt = getNowDate();
    this.data.push(record2);
    this.save();
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageRecordName) || '[]') as RecordItem[];
    return this.data;
  },
  save() {
    window.localStorage.setItem(localStorageRecordName, JSON.stringify(this.data));
  }
};
export default recordListModel;
import clone from '@/lib/clone';
import getNowDate from '@/lib/date';

const localStorageRecordName = 'recordList';

const recordStore = {
  recordList: [] as RecordItem[],
  fetchRecord() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageRecordName) || '[]') as RecordItem[];
    return this.recordList;
  },
  createRecord(record: RecordItem) {

    const record2: RecordItem = clone(record);
    record2.createAt = getNowDate();
    this.recordList?.push(record2); // 最新可选链语法，等价于this.recordList && this.recordList.push(record2);
    this.saveRecord();

  },
  saveRecord() {
    window.localStorage.setItem(localStorageRecordName, JSON.stringify(this.recordList));
  }
};
recordStore.fetchRecord();
export default recordStore;


const localStorageRecordName = 'recordList';
const recordListModel = {
  data: [] as RecordItem[],
  clone(data: RecordItem) {
    return JSON.parse(JSON.stringify(data));
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
const localStorageRecordName = 'recordList';
const recordListModel = {
  clone(data: RecordItem) {
    return JSON.parse(JSON.stringify(data));
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageRecordName) || '[]') as RecordItem[];
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageRecordName, JSON.stringify(data));
  }
};
export default recordListModel;
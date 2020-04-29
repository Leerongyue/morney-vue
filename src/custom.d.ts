type RootState = {
  recordList: RecordItem[];
  // createTagError: Error | null
  tagList: Tag[];
  currentTag?: Tag;
}

type RecordItem = {
  tags: Tag[];
  notes: string;
  type: string;
  amount: number;// 数据类型 object | string
  createAt?: string; //类|构造函数
}
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  remove: (id: string) => boolean;
  create: (name: string) => 'success' | 'duplicated';//联合类型
  save: () => void;
}

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void;
  removeTag: (id: string) => boolean;
  updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
  findTag: (id: string) => Tag;
  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void;
}



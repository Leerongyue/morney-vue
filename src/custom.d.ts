type RecordItem = {
  tags: RecordItem[];
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
}



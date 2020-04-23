const localStorageTagName = 'tagList';
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
const tagListModel: TagListModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageTagName) || '[]');
    return this.data;
  },
  create(name: string) {
    const names = this.data.map(n => n.name);
    if (names.indexOf(name) >= 0 ) {return 'duplicated';}
    this.data.push({id: name, name: name});
    this.save();
    return 'success';
  },
  update(id, name) {
    const idList = this.data.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.data.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.data.filter(item => item.id === id)[0];
        tag.name = name;
        // tag.id = name;
        this.save();
        return 'success';
      }
    } else {
      return 'not found';
    }
  },
  remove(id: string) {
    let index = -1;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].id === id) {
        index = i;
        break;
      }
    }
    this.data.splice(index, 1);
    this.save();
    return true;
  },
  save() {
    window.localStorage.setItem(localStorageTagName, JSON.stringify(this.data));
  }
};
export default tagListModel;
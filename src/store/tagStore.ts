import createID from '@/lib/createID';

const localStorageTagName = 'tagList';

const tagStore = {
  tagList: [] as Tag[],
  findTag(id: string) {
    return this.tagList.filter(t => t.id === id)[0];
  },
  fetchTag() {
    this.tagList = JSON.parse(window.localStorage.getItem(localStorageTagName) || '[]');
    return this.tagList;
  },
  createTag(name: string) {
    const names = this.tagList.map(n => n.name);
    if (names.indexOf(name) >= 0) {
      window.alert('标签名重复');
      return 'duplicated';
    } else {
      const id = createID().toString();
      this.tagList.push({id: id, name: name});
      this.saveTag();
      window.alert('添加成功');
      return 'success';
    }

  },
  saveTag() {
    window.localStorage.setItem(localStorageTagName, JSON.stringify(this.tagList));
  },
  removeTag(id: string) {
    let index = -1;
    for (let i = 0; i < this.tagList.length; i++) {
      if (this.tagList[i].id === id) {
        index = i;
        break;
      }
    }
    this.tagList.splice(index, 1);
    this.saveTag();
    return true;
  },
  updateTag(id: string, name: string) {
    const idList = this.tagList.map(item => item.id);
    if (idList.indexOf(id) >= 0) {
      const names = this.tagList.map(item => item.name);
      if (names.indexOf(name) >= 0) {
        return 'duplicated';
      } else {
        const tag = this.tagList.filter(item => item.id === id)[0];
        tag.name = name;
        // tag.id = name;
        this.saveTag();
        return 'success';
      }
    } else {
      return 'not found';
    }
  }
};
tagStore.fetchTag();
export default tagStore;


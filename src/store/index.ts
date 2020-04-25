import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import getNowDate from '@/lib/date';
import createID from '@/lib/createID';

Vue.use(Vuex);

type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}
const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    currentTag: undefined
  } as RootState,
  mutations: {
    setCurrentTag(state, id: string) {
      state.currentTag = state.tagList.filter(t => t.id === id)[0];
    },
    fetchRecord(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    createRecord(state, record: RecordItem) {
      const record2: RecordItem = clone(record);
      record2.createAt = getNowDate();
      state.recordList.push(record2); // 最新可选链语法，等价于this.recordList && this.recordList.push(record2);
      store.commit('saveRecord');
    },
    saveRecord(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetchTag(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    createTag(state, name: string) {
      const names = state.tagList.map(t => t.name);
      if (names.indexOf(name) >= 0) {
        window.alert('标签名重复');
        // return 'duplicated';
      } else {
        const id = createID().toString();
        state.tagList.push({id: id, name: name});
        store.commit('saveTag');
        window.alert('添加成功');
        // return 'success';
      }
    },
    saveTag(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    // removeTag(state, id: string) {
    //   let index = -1;
    //   for (let i = 0; i < this.tagList.length; i++) {
    //     if (this.tagList[i].id === id) {
    //       index = i;
    //       break;
    //     }
    //   }
    //   this.tagList.splice(index, 1);
    //   this.saveTag();
    //   return true;
    // },
  },

  actions: {},
  modules: {}
});
export default store;

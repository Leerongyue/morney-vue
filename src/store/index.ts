import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import getNowDate from '@/lib/date';
import createID from '@/lib/createID';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
  },
  mutations: {
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
    findTag(state, id: string) {
      return state.tagList.filter(t => t.id === id)[0];
    },
    fetchTag(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    createTag(state, name: string) {
      const names = state.tagList.map(n => n.name);
      if (names.indexOf(name) >= 0) {
        window.alert('标签名重复');
        return 'duplicated';
      } else {
        const id = createID().toString();
        state.tagList.push({id: id, name: name});
        store.commit('saveTag');
        window.alert('添加成功');
        return 'success';
      }
    },
    saveTag(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
  },

  actions: {},
  modules: {}
});
export default store;

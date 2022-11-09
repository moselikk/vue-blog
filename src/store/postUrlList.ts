import { defineStore } from 'pinia';

const postUrlList = defineStore({
  // 这里的id必须为唯一ID
  id: 'theme',
  state: () => {
    return {
      postRoutes: [] as string[],
    };
  },
  // 等同于vuex的getter
  getters: {
    getThemeColor: (state) => state.postRoutes,
  },
  // pinia 放弃了 mutations 只使用 actions
  actions: {
    // actions可以用async做成异步形式
    setPostRoutes(list: Array<string>) {
      this.postRoutes = list;
    },
  },
});

export default postUrlList;

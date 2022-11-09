import { defineStore } from 'pinia';

const theme = defineStore({
  // 这里的id必须为唯一ID
  id: 'theme',
  state: () => {
    return {
      themeType: '亮蓝色',
      themeColor: '#2080F0FF',
      postRoutes: [] as string[],
    };
  },
  // 等同于vuex的getter
  getters: {
    getThemeType: (state) => state.themeType,
    getThemeColor: (state) => state.themeColor,
  },
  // pinia 放弃了 mutations 只使用 actions
  actions: {
    // actions可以用async做成异步形式
    setThemeType(type: string) {
      this.themeType = type;
    },
    setPostRoutes(type: Array<string>) {
      this.postRoutes = type;
    },
  },
});

export default theme;

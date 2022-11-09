<template>
  <div class="container max-w-3xl mx-auto mt-40">
    <div class="h-60 mb-8">
      <div class="w-52 h-52 mx-auto mb-4"><vitecamp class="w-52 h-52"></vitecamp></div>
    </div>
    <el-form ref="form" label-width="80px" :inline="false" size="default">
      <el-form-item label="你好">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>

    <div class="text-center text-md" style="display: none">
      <h1 class="font-serif font-bold text-4xl mb-8">{{ t('hello') }} , {{ t('welcome to') }} Vitecamp</h1>
      <p class="mb-10">
        <strong>Vitecamp</strong>
        {{ t('includes features') }}
      </p>
      <p class="mb-10">
        <template v-for="(item, index) in featureList" :key="index">
          <a :href="item.href" target="_blank">{{ item.name }}</a>
          <template v-if="!item.isEnd"> | </template>
        </template>
      </p>
      <div>{{ t('before coding') }} , {{ t('setup ide') }} <strong>VSCode</strong> + <strong>Volar</strong></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import vitecamp from '@/assets/svg/vitecamp.svg?component';

const { t } = useI18n();
ElMessage.success({ message: 'welcome', duration: 1000 });
ElNotification({
  title: 'Issue',
  message: 'If you encounter problems in using the template, please raise them in the issue',
  duration: 0,
});
const featureList = [
  {
    name: 'Vite3',
    href: 'https://github.com/vitejs/vite',
  },
  {
    name: 'Vue3',
    href: 'https://github.com/vuejs/core',
  },
  {
    name: 'TypeScript',
    href: 'https://github.com/microsoft/TypeScript',
  },
  {
    name: 'Element Plus',
    href: 'https://element-plus.gitee.io/zh-CN/',
  },
  {
    name: 'Vue Router 4',
    href: 'https://router.vuejs.org/zh/',
  },
  {
    name: 'Pinia',
    href: 'https://pinia.vuejs.org/',
  },
  {
    name: 'icones',
    href: 'https://icones.netlify.app/',
  },
  {
    name: 'Windi CSS',
    href: 'https://github.com/windicss/windicss',
  },
  {
    name: 'Axios',
    href: 'https://axios-http.com/',
  },
  {
    name: 'I18n',
    href: 'https://github.com/intlify/vite-plugin-vue-i18n',
  },
  {
    name: 'Prettier',
    href: 'https://github.com/prettier/prettier',
  },
  {
    name: 'ESLint',
    href: 'https://github.com/eslint/eslint',
  },
  {
    name: 'Airbnb Style',
    href: 'https://github.com/airbnb/javascript',
  },
  {
    name: 'Husky',
    href: 'https://github.com/typicode/husky',
  },
  {
    name: 'VueUse',
    href: 'https://github.com/vueuse/vueuse',
  },
  {
    name: 'Markdown',
    href: 'https://github.com/antfu/vite-plugin-md',
  },
  {
    name: 'NProgress',
    href: 'https://github.com/rstacruz/nprogress',
    isEnd: true,
  },
];
</script>

<style lang="scss" scoped>
a {
  @apply text-sky-400 hover:(text-sky-600) transition-all ease-out duration-100;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
.max-w-3xl {
  max-width: 48rem; /* 768px */
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.mt-40 {
  margin-top: 10rem; /* 160px */
}

.h-60 {
  height: 15rem; /* 240px */
}
.mb-8 {
  margin-bottom: 2rem; /* 32px */
}
.w-52 {
  width: 13rem; /* 208px */
}
.h-52 {
  height: 13rem; /* 208px */
}
.mb-4 {
  margin-bottom: 1rem; /* 16px */
}
.text-center {
  text-align: center;
}
</style>

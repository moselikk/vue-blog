<template>
  <el-card :body-style="{ padding: '60px 98px 80px 98px' }" shadow="never" :class="size >= 896 ? 'shadow' : ''">
    <header v-if="!isList" class="header">
      <h1 class="title">{{ route.meta.title }}</h1>
    </header>
    <AsyncComp v-if="!isList"></AsyncComp>
    <List v-else></List>
  </el-card>
</template>

<script setup lang="ts">
import * as _ from 'lodash';
import List from '@/views/list/index.vue';

const { locale } = useI18n();
const route = useRoute();
const router = useRouter();
const size = ref<number>(0);

const isList = computed(() => {
  return route.path.slice(1) === 'list';
});

const AsyncComp = defineAsyncComponent(() => import(`../../components/${route.path.slice(1)}.md`));

watch(locale, (lang) => {
  router.push(`/${lang.slice(0, 2)}${route.path.slice(1).slice(2)}`);
  console.log(route.path.slice(3));
});

const reSize = () => {
  size.value = window.innerWidth;
};

const reLoadeShadow = _.debounce(reSize, 300, {
  leading: true,
  trailing: true,
});

onMounted(() => {
  reLoadeShadow();
  window.addEventListener('resize', reLoadeShadow);
});
onUnmounted(() => {
  window.removeEventListener('resize', reLoadeShadow);
});
</script>

<style lang="scss" scope>
:root {
  --shadow: 0px 10px 20px 0px rgb(236 236 236 / 86%);
}

html.dark {
  --shadow: none;
}

.shadow {
  box-shadow: var(--shadow);
}

.el-card {
  width: 56rem;
  margin: auto;
  border: none;
  border-radius: 0;
}

.header {
  margin-bottom: 40px;

  .title {
    font-size: 1.5em;
    font-weight: 700;
    margin-bottom: 67px;
  }
}

@media (max-width: 56rem) {
  .el-card {
    width: 100%;
  }
}
</style>

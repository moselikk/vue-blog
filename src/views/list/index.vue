<template>
  <el-card :body-style="{ padding: '60px 98px 80px 98px' }" shadow="never" :class="size >= 896 ? 'shadow' : ''">
    <div v-for="year in years" :key="year" class="list">
      <h2>{{ year }}</h2>
      <ul class="post-list">
        <li v-for="item in postList[year]" :key="item">
          <router-link :to="posts[item].default.__name">
            {{ posts[item].title }}
          </router-link>
        </li>
      </ul>
    </div>
  </el-card>
</template>

<script setup lang="ts">
import * as _ from 'lodash';

const posts = import.meta.glob('@/components/*.md', { eager: true }) as any;
const postList = ref(<{ [index: number]: string[] }>{});
const years = ref([]);

const size = ref<number>(0);

const reSize = () => {
  size.value = window.innerWidth;
};

const reLoadeShadow = _.debounce(reSize, 300, {
  leading: true,
  trailing: true,
});

// 提取文章年份分组 years []
function sortPostListYear(list: any) {
  const tempYears = [
    ...new Set(
      list.map((item: string) => {
        return Number(item.slice(16, 20)) ? Number(item.slice(16, 20)) : 2018;
      }),
    ),
  ];
  years.value = tempYears.sort((a: any, b: any) => {
    return b - a;
  }) as [];
}

// 整理文章列表页数据
function sortPostList(list: any) {
  years.value.forEach((year) => {
    postList.value[year] = [];
    list.forEach((item: any) => {
      if (Number(item.slice(16, 20)) === year) {
        postList.value[year].push(item);
      }
    });
    postList.value[year].sort((a, b) => {
      return Number(b.slice(21, 23) + b.slice(24, 26)) - Number(a.slice(21, 23) + a.slice(24, 26));
    });
  });
}

onMounted(() => {
  reLoadeShadow();
  window.addEventListener('resize', reLoadeShadow);
  sortPostListYear(Object.keys(posts));
  sortPostList(Object.keys(posts));
});

onUnmounted(() => {
  window.removeEventListener('resize', reLoadeShadow);
});
</script>

<style scoped>
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
  margin: 40px auto 60px auto;
  border: none;
  border-radius: 0;
}

@media (max-width: 56rem) {
  .el-card {
    width: 100%;
  }
}
.list {
  box-sizing: border-box;
  /* border: 1px solid black; */
  /* width: 56rem; */
  margin: 0 auto;
}
.post-list {
  margin: 0 40px;
  list-style-position: inside;
  /* margin-left: 2em; */
  color: $text-color;
  @include media-query-max($on-screen) {
    padding-left: 0;
  }
}
</style>

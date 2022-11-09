<template>
  <div class="text-center">
    <el-tooltip :content="t('home')" placement="right">
      <button class="icon-btn mx-2 !outline-none" @click="handleLink('/')">
        <i-mdi-home-search-outline class="icon-footer" />
      </button>
    </el-tooltip>

    <el-tooltip :content="t('posts')" placement="right">
      <button class="icon-btn mx-2 !outline-none" @click="handleLink('/list')">
        <i-ri-article-line class="icon-footer" />
      </button>
    </el-tooltip>

    <el-tooltip :content="isDark ? t('change light') : t('change dark')" placement="right">
      <button class="icon-btn mx-2 !outline-none" @click="toggleDark()">
        <i-ph-cloud-moon-bold v-if="isDark" class="icon-footer" />
        <i-ph-sun-horizon-bold v-else class="icon-footer" />
      </button>
    </el-tooltip>

    <el-tooltip :content="t('change lang')" placement="right">
      <button class="icon-btn mx-2" @click="toggleLocales()">
        <i-la-language class="icon-footer" />
      </button>
    </el-tooltip>

    <el-tooltip :content="t('template process')" placement="right">
      <button class="icon-btn mx-2 !outline-none" @click="handleLinkUrl('blog')">
        <i-mdi-content-duplicate class="icon-footer" />
      </button>
    </el-tooltip>

    <el-tooltip content="GitHub" placement="right">
      <button class="icon-btn mx-2 !outline-none" @click="handleLinkUrl('github')">
        <i-akar-icons-github-fill class="icon-footer" />
      </button>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '@/utils/dark';

const router = useRouter();

const { t, availableLocales, locale } = useI18n();
const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};
function handleLink(adress: string) {
  router.push(adress);
}
const urlList = ref({
  github: 'https://github.com/moselikk',
  blog: 'https://github.com/moselikk/m-blog',
});
function handleLinkUrl(type: string) {
  window.location.href = urlList.value[type as keyof typeof urlList.value];
}
</script>

<style lang="scss">
.icon-footer {
  font-size: 1.3em;
}

.text-center {
  height: 260px;
  margin: 0 30px;
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

@media (max-width: 56rem) {
  .text-center {
    display: none;
  }
}

.mx-2 {
  margin-left: 0.5rem;
  /* 8px */
  margin-right: 0.5rem;
  /* 8px */
}

.\!outline-none {
  outline: 2px solid transparent !important;
  outline-offset: 2px !important;
}

.icon-btn {
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  text-transform: none;
  background-color: transparent;
  background-image: none;
  padding: 0;
  line-height: inherit;
  color: inherit;
  // -webkit-appearance: button;
  // appearance: auto;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  writing-mode: horizontal-tb !important;
  border-image: initial;
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: #e5e7eb;
}
</style>

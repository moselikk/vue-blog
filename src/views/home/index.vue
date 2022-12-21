<template>
  <div class="container max-w-3xl mx-auto mt-40">
    <div class="h-60 mb-8">
      <el-row align="middle" style="flex-direction: column">
        <div class="w-52 h-52 mx-auto mb-4">
          <img src="@/assets/202206192339428.png" class="w-52 h-52" />
        </div>
        <h1>{{ message }}</h1>
      </el-row>
    </div>
    <br />
    <el-form ref="form" :inline="false" size="default">
      <el-row align="middle" style="flex-direction: column">
        <el-form-item label="你好">
          <el-input></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getMsg">刷新</el-button>
          <el-button type="info">取消</el-button>
        </el-form-item>
      </el-row>
    </el-form>
  </div>
</template>

<script setup lang="ts">
// import vitecamp from '@/assets/svg/vitecamp.svg?component';
import messageApi from '@/api/modules/message';

const { getMessage } = messageApi;

// const { t } = useI18n();
const message = ref<string>('正因为生来什么都没有，因此我们能拥有一切。');

function getMsg() {
  getMessage().then(({ data }) => {
    console.log(data);
    message.value = data.hitokoto;
  });
}

onMounted(() => {
  getMsg();
});

ElMessage.success({ message: 'welcome', duration: 1000 });
ElNotification({
  title: 'Issue',
  message: 'If you encounter problems in using the template, please raise them in the issue',
  duration: 0,
});
</script>

<style lang="scss" scoped>
a {
  @apply text-sky-400 hover: (text-sky-600) transition-all ease-out duration-100;
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
  max-width: 48rem;
  /* 768px */
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mt-40 {
  margin-top: 10rem;
  /* 160px */
}

.h-60 {
  height: 15rem;
  /* 240px */
}

.mb-8 {
  margin-bottom: 2rem;
  /* 32px */
}

.w-52 {
  width: 13rem;
  /* 208px */
}

.h-52 {
  height: 13rem;
  /* 208px */
}

.mb-4 {
  margin-bottom: 1rem;
  /* 16px */
}

.ml-2 {
  margin-left: 8px;
}

.text-center {
  text-align: center;
}
</style>

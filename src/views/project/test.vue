<template>
  <canvas id="c"></canvas>
</template>

<script setup lang="ts">
import * as THREE from 'three';
import { OffscreenCanvas } from 'three';
import { isDark } from '@/utils/dark';

function main() {
  const canvas = document.querySelector('#c') as HTMLCanvasElement | OffscreenCanvas | undefined;
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setClearColor(isDark.value ? 0x141414 : 0xf7f7f7);

  const fov = 75;
  const aspect = 2; // the canvas default
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  const scene = new THREE.Scene();

  // eslint-disable-next-line no-lone-blocks
  {
    const color = 0xffffff;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(-1, 2, 4);
    scene.add(light);
  }

  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  // eslint-disable-next-line no-shadow
  function makeInstance(geometry: THREE.BoxGeometry, color: number, x: number) {
    const material = new THREE.MeshPhongMaterial({ color });

    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.x = x;

    return cube;
  }

  const cubes = [
    makeInstance(geometry, 0x44aa88, 0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844, 2),
  ];

  // eslint-disable-next-line no-shadow
  function resizeRendererToDisplaySize(renderer: THREE.WebGLRenderer) {
    // eslint-disable-next-line no-shadow
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render(time: number) {
    // eslint-disable-next-line no-param-reassign
    time *= 0.001;

    if (resizeRendererToDisplaySize(renderer)) {
      // eslint-disable-next-line no-shadow
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    cubes.forEach((cube, ndx) => {
      const speed = 1 + ndx * 0.1;
      const rot = time * speed;
      // eslint-disable-next-line no-param-reassign
      cube.rotation.x = rot;
      // eslint-disable-next-line no-param-reassign
      cube.rotation.y = rot;
    });

    renderer.render(scene, camera);

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
  function aaa() {
    renderer.setClearColor(isDark.value ? 0x141414 : 0xf7f7f7);
  }

  console.log('执行了');
  return aaa;
}
const ccc = ref();

watch(isDark, () => {
  ccc.value();
});

onMounted(() => {
  main();
  nextTick(() => {
    ccc.value = main();
  });
});
</script>

<style scoped>
#c {
  width: 100vw;
  height: 100vh;
  display: block;
}
</style>

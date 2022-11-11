<template>
  <div ref="threeDemo"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three';

const threeDemo = <any>ref();

// init
function initThree() {
  // 创建场景
  const scene = new THREE.Scene();

  // 创建相机
  const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
  camera.position.z = 1;

  // 创建渲染器
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xf7f7f7);

  // 创建立方体
  const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
  // const material = new THREE.MeshNormalMaterial();
  const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
  // 立方体添加至场景
  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  function animate() {
    requestAnimationFrame(animate);
    // 转动
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    // 渲染
    renderer.render(scene, camera);
  }
  animate();

  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  // 添加到页面
  // document.body.appendChild(renderer.domElement);
  nextTick(() => {
    threeDemo.value.appendChild(renderer.domElement);
  });
}

// 窗口比例大小改变，模型渲染位置大小不变
// 在窗口调整大小时保持场景比例不变
// 通过改变摄像机的视野角度（FOV）
// All objects, regardless of their distance from the camera, appear the same size,
// even as the window is resized.
// WestLangley

/* // dom
var container = document.createElement( 'div' );
document.body.appendChild( container );

// renderer
var renderer = new THREE.CanvasRenderer( { clearColor: 0x000000 } );
renderer.setSize( window.innerWidth, window.innerHeight );
container.appendChild( renderer.domElement );

// scene
var scene = new THREE.Scene();

// camera
var camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 1, 1000 );
camera.position.set(16, 8, 16);
camera.lookAt( scene.position );
scene.add(camera);

// material
var material = new THREE.MeshBasicMaterial( { color: 0xff00ff, wireframe: true } );

// geometry
var geometry = new THREE.CubeGeometry( 3, 4, 8, 2, 3, 4 );

// mesh
mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

// axes
var axes = new THREE.AxisHelper();
axes.scale.set(1, 1, 1);
scene.add(axes);

// render
renderer.render( scene, camera );

// remember these initial values
var tanFOV = Math.tan( ( ( Math.PI / 180 ) * camera.fov / 2 ) );
var windowHeight = window.innerHeight;

// Event Listeners
// -----------------------------------------------------------------------------
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize( event ) {

    camera.aspect = window.innerWidth / window.innerHeight;

    // adjust the FOV
    camera.fov = ( 360 / Math.PI ) * Math.atan( tanFOV * ( window.innerHeight / windowHeight ) );

    camera.updateProjectionMatrix();
    camera.lookAt( scene.position );

    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.render( scene, camera );

}

 */

onMounted(() => {
  initThree();
});
</script>

<style scoped></style>

<template>
  <div>
    <canvas ref="canvas" class="canvas" aria-label="3D view" :width="canvasWidth" :height="canvasHeight"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

export default {
  name: 'ThreeDModel',
  props: {
    canvasWidth: {
      type: Number,
      default: 2031,
    },
    canvasHeight: {
      type: Number,
      default: 1137,
    },
  },
  mounted() {
    this.initialize3DView();
  },
  methods: {
    // Inicializar a visualização 3D
    initialize3DView() {
      const canvas = this.$refs.canvas;
      this.loadModelAndTextures(canvas);
    },

    // Carregar o modelo FBX e as texturas
    loadModelAndTextures(canvas) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, this.canvasWidth / this.canvasHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ canvas });
      renderer.setSize(this.canvasWidth, this.canvasHeight);

      // Luz ambiente
      const light = new THREE.AmbientLight(0x404040); // luz suave
      scene.add(light);

      // Luz direcional para destacar o modelo
      const dirLight = new THREE.DirectionalLight(0xffffff, 1);
      dirLight.position.set(5, 5, 5).normalize();
      scene.add(dirLight);

      // Carregar texturas
      const textureLoader = new THREE.TextureLoader();
      const textures = this.loadTextures(textureLoader);

      // Carregar o modelo FBX
      const loader = new FBXLoader();
      const fbxPath = require('@/assets/object_3d/source/final_model.fbx'); // Usar require para obter o caminho correto

      loader.load(fbxPath, (object) => {
        object.traverse((child) => {
          if (child.isMesh) {
            // Aplicar texturas ao modelo
            if (textures.length > 0) {
              child.material.map = textures[0]; // Exemplo: aplicando a primeira textura
            }
          }
        });

        // Adicionar o modelo carregado à cena
        scene.add(object);
        camera.position.z = 5;

        // Animação
        const animate = () => {
          requestAnimationFrame(animate);
          object.rotation.y += 0.01; // Rotacionar o modelo
          renderer.render(scene, camera);
        };
        animate();
      });
    },

    // Função para carregar as texturas da pasta
    loadTextures(textureLoader) {
      const texturePaths = [
        require('@/assets/object_3d/source/common_carbon05_black_diff.png'),
        require('@/assets/object_3d/textures/Ferrari_DaytonaSP3_2022_EngineA_DiffuseAOSO.png'),
      ];

      return texturePaths.map((path) => textureLoader.load(path));
    },
  },
};
</script>

<style scoped>
.canvas {
  width: 100%;
  height: auto;
}
</style>

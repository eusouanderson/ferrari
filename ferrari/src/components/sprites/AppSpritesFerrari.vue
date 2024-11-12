<template>
  <div class="sprite-container">
    <div
      class="sprite"
      :style="spriteStyle"
      :class="spriteClass"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'AppSpritesFerrari',
  data() {
    return {
      scale: 1,
      spriteIndex: 0,
      sprites: [
        require('@/assets/img/sprite_ferrari/ferrari1.jpg'),
        require('@/assets/img/sprite_ferrari/ferrari2.jpg'),
        require('@/assets/img/sprite_ferrari/ferrari3.jpg'),
        require('@/assets/img/sprite_ferrari/ferrari4.jpg'),
        require('@/assets/img/sprite_ferrari/ferrari5.jpg'),
        require('@/assets/img/sprite_ferrari/ferrari6.jpg'),
        require('@/assets/img/sprite_ferrari/ferrari7.jpg'),
        require('@/assets/img/sprite_ferrari/ferrari8.jpg'),
        require('@/assets/img/sprite_ferrari/ferrari9.jpg'),
        require('@/assets/img/sprite_ferrari/ferrari10.jpg'),
        require('@/assets/img/sprite_ferrari/ferrari11.jpg'),
        require('@/assets/img/sprite_ferrari/ferrari12.jpg'),
        require('@/assets/img/sprite_ferrari/ferrari13.jpg'),
        require('@/assets/img/sprite_ferrari/ferrari14.jpg'),
        require('@/assets/img/sprite_ferrari/ferrari15.jpg'),
        require('@/assets/img/sprite_ferrari/ferrari16.jpg'),
      ],
      intervalId: null, // Para armazenar o identificador do intervalo
    };
  },
  computed: {
    spriteStyle() {
      return {
        backgroundImage: `url(${this.sprites[this.spriteIndex]})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      };
    },
  },
  methods: {
    changeSprite() {
      
      this.spriteIndex = (this.spriteIndex + 1) % this.sprites.length;
    },
    startAutoChange() {
      
      this.intervalId = setInterval(this.changeSprite, 3000);
    },
    stopAutoChange() {
      
      clearInterval(this.intervalId);
    },
  },
  mounted() {
    this.startAutoChange();
  },
  beforeUnmount() {
    this.stopAutoChange(); 
  },
};
</script>

<style scoped>
.sprite-container {
  background-color: black;
  background-size: contain; 
  background-repeat: repeat;
  background-position: top left -5px;
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}




.sprite {
  width: 100%;
  height: 1000px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

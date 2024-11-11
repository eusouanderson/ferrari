<template>
  <footer class="footer">
    <div class="scrolling-text">
      <p>Ferrari: Where innovation meets passion, speed becomes art, and every road is a masterpiece.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'StylishFooter',
};
</script>

<style scoped>
.footer {
  text-align: center;
  position: fixed;
  bottom: 0;
  width: auto; 
  height: 50px;
  background: rgba(0, 0, 0, 0.723); 
  color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  backdrop-filter: blur(8px); 
  padding: 0 10px;
  box-sizing: border-box; 
}

.scrolling-text {
  display: inline-block;
  white-space: nowrap;
  animation: scroll 15s linear infinite;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  width: 100%; 
  text-align: center;
}

@keyframes scroll {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>

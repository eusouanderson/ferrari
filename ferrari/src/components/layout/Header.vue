<template>
  <header class="header">
    <div class="logo">
      <h1>Ferrari</h1>
    </div>
    <nav class="nav-links" :class="{ 'active': isMenuOpen }">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/daytona">Ferrari Daytona</router-link></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
    <div class="hamburger" @click="toggleMenu">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      isMenuOpen: false, // Controle do menu hamburguer
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px 40px;
  background: rgba(0, 0, 0, 0.4); 
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); 
  z-index: 1000;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}


.logo h1 {
  font-family: 'Arial', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
  padding-right: 20px;
}

.nav-links {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
}

.nav-links ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

.nav-links li {
  margin-left: 15px;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #b02222;
}

/* Estilos do Menu Hamburguer */
.hamburger {
    
  display: none; 
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 25px;
  cursor: pointer;
  
}

.bar {
  width: 100%;
  height: 5px;
  background-color: white;
  border-radius: 5px;
  transition: transform 0.3s ease;
}

/* Media Query para telas pequenas */
@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    background-color: rgba(0, 0, 0, 0.9);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(100%);
    transition: transform 0.3s ease;
  }

  .nav-links.active {
    transform: translateX(0);
  }

  .hamburger {
    display: flex; /* Agora o botão hamburguer será visível em telas pequenas */
  }

  .logo {
    flex-grow: 1;
  }
}
</style>

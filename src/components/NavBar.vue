<template>
    <nav>
      <div class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul :class="{ active: isMenuOpen }">
        <li><router-link to="/">Главная</router-link></li>
        <li><router-link to="/guest-form">Анкета гостя</router-link></li>
        <li><router-link to="/event-info">Информация о событии</router-link></li>
      </ul>
    </nav>
  </template>

  <script>
  export default {
    data() {
      return {
        isMenuOpen: false,
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      closeMenu() {
        this.isMenuOpen = false;
      },
    },
    watch: {
      $route() {
        this.closeMenu();
      },
    },
  };
  </script>

  <style scoped>
  :root {
    --sage: #B2AC88;
    --mustard: #D4A418;
    --sunset: #E67E51;
    --terracotta: #E27D5E;
    --rust: #B8523A;
    --olive: #6B7C3F;
    --background: #F5F3E7;
    --text: #3E3E3E;
    --text-light: #5E5E5E;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    background-color: var(--sage);
    position: relative;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .hamburger {
    display: none;
    flex-direction: column;
    cursor: pointer;
    z-index: 1001;
  }

  .hamburger span {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 4px 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .hamburger.active span:nth-child(1) {
    transform: rotate(45deg) translate(5px, 5px);
  }

  .hamburger.active span:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active span:nth-child(3) {
    transform: rotate(-45deg) translate(5px, -5px);
  }

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  ul li {
    margin-left: 20px;
  }

  ul li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    padding: 8px 12px;
    border-radius: 6px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  ul li a:hover {
    background-color: var(--mustard);
    color: var(--text);
  }

  @media (max-width: 768px) {
    .hamburger {
      display: flex;
    }

    ul {
      display: none;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: var(--sage);
      z-index: 1000;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    ul.active {
      display: flex;
    }

    ul li {
      margin: 0;
      text-align: center;
    }

    ul li a {
      display: block;
      padding: 12px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }

  @media (max-width: 480px) {
    nav {
      padding: 10px;
    }

    ul li a {
      font-size: 0.9rem;
    }
  }
  </style>
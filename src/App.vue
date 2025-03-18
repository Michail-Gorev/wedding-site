<template>
  <div id="app">
    <!-- Компонент навигации -->
    <NavBar />

    <!-- Отображение текущего маршрута -->
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'; // Импортируем компонент навигации
import EventInfo from './views/EventInfo.vue';
import GuestForm from './views/GuestForm.vue';
import Home from './views/Home.vue';

export default {
  name: 'App',
  components: {
    NavBar, // Регистрируем компонент навигации
    EventInfo,
    GuestForm,
    Home,
  },
};
</script>

<style>
/* Глобальные стили для всего приложения */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  color: #333;
}

#app {
  text-align: center;
  padding: 20px;
}

/* Стили для ссылок */
a {
  color: #A47148;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Стили для кнопок */
button {
  background-color: #A47148;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #8a5c3d;
}
</style>
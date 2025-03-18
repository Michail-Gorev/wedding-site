<template>
    <div class="home">
      <h1 class="welcome-text">Добро пожаловать на нашу свадьбу!</h1>
      <div class="info-section">
        <img src="/public/photo_2025-03-17_21-28-46.jpg" alt="Мы" class="couple-image" />
      </div>
      <p class="names-date">Михаил и Яна, 11.05.2025</p>
      <p class="invitation-text">Пожалуйста, расскажите немного о себе</p>
      <router-link to="/guest-form" class="guest-form-button">Заполнить анкету гостя</router-link>
    </div>
  </template>

  <script>
  export default {
    name: 'Home',
  };
  </script>

  <style scoped>
  .home {
    text-align: center;
    padding: 20px;
    background-color: var(--background);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 0 auto;
  }

  .welcome-text {
    font-family: 'Great Vibes', cursive;
    font-size: 3rem;
    color: var(--rust);
    margin-bottom: 20px;
  }

  .names-date {
    font-size: 2rem;
    color: var(--olive);
    margin-bottom: 20px;
  }

  .invitation-text {
    font-size: 1.5rem;
    color: var(--text-light);
    margin-bottom: 20px;
  }

  .guest-form-button {
    display: inline-block;
    margin-top: 20px;
    padding: 12px 24px;
    background-color: var(--mustard);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    transition: background-color 0.3s ease;
  }

  .guest-form-button:hover {
    background-color: var(--sunset);
  }

  .couple-image {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    .welcome-text {
      font-size: 2.5rem;
    }

    .names-date {
      font-size: 1.75rem;
    }

    .invitation-text {
      font-size: 1.25rem;
    }

    .guest-form-button {
      font-size: 0.9rem;
      padding: 10px 20px;
    }
  }

  @media (max-width: 480px) {
    .home {
      padding: 15px;
    }

    .welcome-text {
      font-size: 2rem;
    }

    .names-date {
      font-size: 1.5rem;
    }

    .invitation-text {
      font-size: 1rem;
    }

    .guest-form-button {
      font-size: 0.8rem;
      padding: 8px 16px;
    }
  }
  </style>
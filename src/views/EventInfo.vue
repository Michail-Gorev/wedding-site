<template>
    <div class="event-info">
      <h2>Информация о событии</h2>
      <div class="info-section">
        <h3>Расписание</h3>
        <p>Сбор гостей на площадке - в 13:00</p>
        <p>Welcome-зона: с 13:00 до 14:00</p>
        <p>Банкетная часть: с 14:00 до 20:00</p>
      </div>
      <div class="info-section">
        <h3>Место</h3>
        <p>Кафе "Переделки"</p>
        <div class="map-container">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=37.329023%2C55.664486&mode=search&oid=46596805341&ol=biz&z=17"
            width="100%"
            height="400"
            frameborder="1"
            allowfullscreen="true"
            style="border-radius: 8px;"
          ></iframe>
        </div>
      </div>
      <!-- <div class="info-section">
        <h3>Ведущий</h3>
        <p>Дмитрий Захаров</p>
        <p><a>https://dmitry-zaharov.ru/</a></p>
        <img src="" alt="Фото ведущего" class="responsive-image" />
      </div> -->
      <div class="info-section">
        <h3>Стиль</h3>
        <p>Будем рады, если Вы захватите с собой ностальгическое настроение и выберете наряд в следующих тонах:</p>
        <div class="info-section">
          <img
            src="/public/photo_2025-03-12_12-18-50.jpg"
            alt="Референсные цвета"
            class="responsive-image"
          />
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'EventInfo',
  };
  </script>

  <style scoped>
  .event-info {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    box-sizing: border-box;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
    color: var(--rust);
  }

  .info-section {
    margin-bottom: 30px;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: var(--olive);
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 15px;
    color: var(--text-light);
  }

  .map-container {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    margin-top: 10px;
  }

  .responsive-image {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .carousel {
    display: flex;
    overflow-x: auto;
    gap: 10px;
    padding-bottom: 10px;
  }

  .carousel-image {
    max-width: 200px;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.75rem;
    }

    h3 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.9rem;
    }

    .carousel-image {
      max-width: 150px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1rem;
    }

    p {
      font-size: 0.85rem;
    }

    .carousel-image {
      max-width: 120px;
    }

    .carousel {
      gap: 5px;
    }
  }
  </style>
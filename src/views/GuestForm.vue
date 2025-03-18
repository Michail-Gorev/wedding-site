<template>
    <div class="guest-form">
      <h2>Анкета гостя</h2>
      <form @submit.prevent="submitForm">
        <!-- Имя -->
        <div class="form-group">
          <label for="name">Имя</label>
          <input
            v-model="form.name"
            type="text"
            id="name"
            placeholder="Введите ваше имя"
            required
          />
        </div>

        <!-- Номер телефона -->
        <div class="form-group">
          <label for="phone">Номер телефона</label>
          <input
            v-model="form.phone"
            type="tel"
            id="phone"
            placeholder="8-XXX-XXX-XX-XX"
            required
            @input="formatPhoneNumber"
          />
        </div>

        <!-- Предпочтения по алкоголю -->
        <div class="form-group">
          <label for="alcohol">Предпочтения по алкоголю</label>
          <select
            v-model="form.alcohol"
            id="alcohol"
            @change="toggleCustomAlcohol"
            required
          >
            <option value="" disabled>Выберите вариант</option>
            <option value="Вина тихие">Вина тихие</option>
            <option value="Вина игристые">Вина игристые</option>
            <option value="Коньяк и арманьяк">Коньяк и арманьяк</option>
            <option value="Виски и бурбон">Виски и бурбон</option>
            <option value="Водка">Водка</option>
            <option value="Свой вариант">Свой вариант</option>
          </select>
          <input
            v-if="showCustomAlcohol"
            v-model="form.customAlcohol"
            type="text"
            placeholder="Ваш вариант"
            required
          />
        </div>

        <!-- Предпочтения по горячему -->
        <div class="form-group">
          <label for="hot">Предпочтения по горячему</label>
          <select v-model="form.hot" id="hot" required>
            <option value="" disabled>Выберите вариант</option>
            <option value="Птица">Птица</option>
            <option value="Рыба">Рыба</option>
            <option value="Мясо">Мясо</option>
            <option value="Овощи">Овощи</option>
          </select>
        </div>

        <!-- Предпочтения по музыке -->
        <div class="form-group">
          <label for="music">5 песен, которые хотели бы услышать</label>
          <textarea
            v-model="form.music"
            id="music"
            placeholder="Введите ваши предпочтения по музыке"
          ></textarea>
        </div>

        <!-- Буду на машине -->
        <div class="form-group">
          <label>
            <input v-model="form.car" type="checkbox" />
            Буду на машине
          </label>
        </div>

        <!-- Комментарий -->
        <div class="form-group">
          <label for="comment">Комментарий</label>
          <textarea
            v-model="form.comment"
            id="comment"
            placeholder="Введите ваш комментарий"
          ></textarea>
        </div>

        <!-- Кнопка подтверждения -->
        <button type="submit">Подтвердить</button>
      </form>

      <!-- Модальное окно -->
      <div v-if="showModal" class="modal">
        <p>Спасибо! Ждём Вас!</p>
        <button @click="closeModal">ОК</button>
      </div>
    </div>
  </template>

  <script>
  import axios from "axios";

  export default {
    data() {
      return {
        form: {
          name: "",
          phone: "",
          alcohol: "",
          customAlcohol: "",
          hot: "",
          music: "",
          car: false,
          comment: "",
        },
        showCustomAlcohol: false,
        showModal: false,
      };
    },
    methods: {
      toggleCustomAlcohol() {
        this.showCustomAlcohol = this.form.alcohol === "Свой вариант";
      },
      formatPhoneNumber() {
        // Форматирование номера телефона: 8-XXX-XXX-XX-XX
        let phone = this.form.phone.replace(/\D/g, ""); // Удаляем все нецифровые символы
        if (phone.length > 1) {
          phone = phone.substring(0, 11); // Ограничиваем длину номера
          phone = phone.replace(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/, "$1-$2-$3-$4-$5");
        }
        this.form.phone = phone;
      },
      async submitForm() {
        try {
          await axios.post(
            "http://localhost:8000/save/",
            this.form
          );
          this.showModal = true;
        } catch (error) {
          console.error("Ошибка при отправке формы:", error);
        }
      },
      closeModal() {
        this.showModal = false;
        this.$router.push('/'); // Переадресация на главную страницу
      },
    },
  };
  </script>

  <style scoped>
  .guest-form {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: var(--background);
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  h2 {
    color: var(--rust);
    text-align: center;
    margin-bottom: 20px;
    font-size: 2rem;
  }

  .form-group {
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 5px;
    color: var(--text);
    font-weight: 500;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid var(--olive);
    border-radius: 6px;
    font-size: 16px;
    box-sizing: border-box;
    background-color: white;
    color: var(--text);
  }

  textarea {
    resize: vertical;
    min-height: 100px;
  }

  button {
    width: 100%;
    padding: 12px 24px;
    background-color: var(--mustard);
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: var(--sunset);
  }

  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    text-align: center;
    z-index: 1000;
  }

  .modal p {
    margin-bottom: 20px;
    color: var(--text);
  }

  .modal button {
    background-color: var(--mustard);
    color: white;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .modal button:hover {
    background-color: var(--sunset);
  }

  @media (max-width: 768px) {
    .guest-form {
      padding: 15px;
    }

    h2 {
      font-size: 1.75rem;
    }

    input,
    select,
    textarea {
      font-size: 14px;
    }

    button {
      font-size: 14px;
    }
  }

  @media (max-width: 480px) {
    .guest-form {
      padding: 10px;
    }

    h2 {
      font-size: 1.5rem;
    }

    input,
    select,
    textarea {
      font-size: 12px;
    }

    button {
      font-size: 12px;
    }
  }
  </style>
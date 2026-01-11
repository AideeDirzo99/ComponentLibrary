<template>
  <div></div>
  <div class="main-container">
    <div class="main-card shadow-2">
      <div class="main-card-picture"><img src="/profile-pic.png" alt="" /></div>
      <ButtonComponent
        textValue="Contact Me"
        type="primary"
        bgColor="primary"
        icon-name="mail"
        textColor="#fff"
        @handleClick="openDialog"
        class="full-width"
      ></ButtonComponent>
      <ButtonComponent
        textValue="Download CV"
        type="secondary"
        bgColor="secondary"
        icon-name="download"
        textColor="#000"
        @handleClick="downloadPdf"
        class="full-width"
      ></ButtonComponent>
    </div>
    <div class="main-content">
      <div class="full-title">
        <div class="main-title">Front-end</div>
        <div class="main-subtitle typing">Developer</div>
      </div>

      <div class="main-description">
        I’m a junior front-end developer who loves creating clean, user-friendly interfaces. I’m
        very sociable, communicate well, and enjoy collaborating to make ideas fit together
        smoothly. I learn fast, pay close attention to detail, and bring a positive energy while
        growing as a developer.
      </div>
      <div class="courses-section">
        <div class="courses-section-title">Courses</div>
        <div class="courses-cards-container">
          <div class="card">Bootcamp Web Development- Neoland</div>
          <div class="card">Diseño Web Profesional- Udemy</div>
          <div class="card">Fundamentos y Lógica de Programación- Udemy</div>
          <div class="card">Quasar, VUE 3, Firebase y desarrollo Web y Móvil- Udemy</div>
          <div class="card">Desarrollo Web Completo con HTML5, CSS3, JS- Udemy</div>
        </div>
      </div>
      <div class="library-section">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="useLayoutStore().isLeftDrawerOpen = !useLayoutStore().isLeftDrawerOpen"
        />
        <div>Explore a few examples of my work in my custom component library</div>
      </div>
      <a href="https://easyjobtracking.netlify.app/#/" target="_blank" class="library-section-2">
        <q-btn flat dense round icon="link" />
        <div>
          Check out my latest project on production: Easy Job Tracker <br />
          <small>(Test credentials: admin@gmail.com / admin123 )</small>
        </div>
      </a>
    </div>
  </div>

  <!--Contact Dialog-->
  <q-dialog v-model="isOpen">
    <q-card class="q-pa-md" style="min-width: 360px">
      <div class="text-h6 q-mb-md">Let's work together!</div>

      <div class="row items-center q-gutter-sm">
        <q-input dense readonly class="col" v-model="email" filled />

        <q-btn color="primary" icon="content_copy" size="md" @click="copyEmail" />
      </div>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import ButtonComponent from 'src/components/ButtonComponent.vue';
import { useLayoutStore } from 'src/stores/example-store';
import { ref } from 'vue';

const isOpen = ref(false);
const email = ref('aideedirzo@gmail.com');
const $q = useQuasar();

/** Copies the email string to the clipboard and shows a notification */
const copyEmail = async () => {
  await navigator.clipboard.writeText(email.value);
  $q.notify({
    type: 'positive',
    message: 'Email copied to clipboard!',
    color: 'secondary',
  });
};

/** Opens the dialog */
const openDialog = () => {
  isOpen.value = true;
};

const downloadPdf = () => {
  const link = document.createElement('a');
  link.href = '/cv.pdf'; // Path inside public
  link.download = 'AideeDirzoCV.pdf';
  link.click();
};
</script>
<style scoped lang="scss">
.main-container {
  display: flex;
  justify-content: center;
  gap: 70px;
  padding-top: 100px;
  align-items: start;
  z-index: 2;
  @media (max-width: 1000px) {
    flex-direction: column;
    padding-top: 10px;
    align-items: center;
    gap: 20px;
  }

  .main-card {
    width: 300px;
    height: 440px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center;
    gap: 10px;
    background-color: $white;

    .main-card-picture {
      width: 256px;
      height: 280px;
      border-radius: 100% 100% 6px 6px;
      background-color: rgb(232, 232, 239);
      overflow: hidden;
      margin-bottom: 16px;
      img {
        width: 110%;
        position: relative;
        bottom: 10px;
        right: 10px;
      }
    }
    .contact-button {
      width: 240px;
      height: 40px;
      border: 1px solid #000;
      border-radius: 6px;
      background-color: rgb(41, 41, 84);
      color: aliceblue;
      padding: 8px;
      display: flex;
      justify-content: center;
      font-weight: 500;
      font-size: 16px;
    }
  }

  .main-content {
    width: 600px;
    height: 500px;
    //border: 1px solid #000;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    @media (max-width: 1000px) {
      align-items: center;
      width: 100vw;
    }
    .full-title {
      @media (max-width: 1000px) {
        display: flex;
        flex-direction: row;
        gap: 10px;
      }

      .main-title {
        font-size: 50px;
        font-weight: 700;
        height: 50px;
        @media (max-width: 1000px) {
          font-size: 30px;
        }
      }
      .main-subtitle {
        font-size: 50px;
        font-weight: 700;
        opacity: 0.5;
        letter-spacing: 1.5px;
        @media (max-width: 1000px) {
          font-size: 30px;
        }
      }

      .typing {
        display: inline-block;
        position: relative;
        white-space: nowrap;
        overflow: hidden;

        border-right: 2px solid rgba(0, 0, 0, 0.6);
        animation:
          typingEffect 1.5s steps(9, end) forwards,
          blinkCursor 0.7s step-end infinite;

        @media (max-width: 1000px) {
          animation: none !important;
          border-right: none !important;
          clip-path: none !important;
        }
      }
    }

    .main-description {
      font-size: 14px;
      margin-bottom: 20px;
      @media (max-width: 1000px) {
        width: 90vw;
        font-size: 12px;
      }
    }
  }

  .courses-section {
    width: 600px;
    height: 160px;
    //border: 1px solid #000;
    border-radius: 6px;
    background-color: rgb(232, 232, 239);
    @media (max-width: 1000px) {
      width: 90vw;
    }

    .courses-section-title {
      font-weight: 500;
      font-size: 16px;
    }

    .courses-cards-container {
      display: flex;
      padding: 10px 0px 10px 0px;
      overflow-x: auto;
      overflow-y: hidden;

      .card {
        margin-right: 20px;
        min-width: 160px;
        height: 100px;
        background-color: $secondary;
        display: flex;
        align-items: center;
        padding: 14px;
        font-size: 12px;
        font-weight: 300;
        letter-spacing: 0.5px;
        text-align: center;
        border-radius: 6px;
        color: aliceblue;
      }
    }
  }
  .library-section {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding-top: 25px;
    @media (max-width: 1000px) {
      width: 90vw;
      padding-top: 10px;
    }
  }
  .library-section-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    padding-top: 25px;
    color: black;
    text-decoration: none;
    @media (max-width: 1000px) {
      width: 90vw;
      padding-top: 10px;
    }
  }
}

/* Animations */
@keyframes typingEffect {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

@keyframes blinkCursor {
  50% {
    border-color: transparent;
  }
}
</style>

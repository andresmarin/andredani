<template>
  <div class="home">
    <!-- ROUND COUNDOWN -->
    <div class="container marg-lg-t60 marg-sm-t40" style="text-align: center;">
      <h2 class="block-title">¡Nos vamos a casar!</h2>
      <h3 class="block-subtitle">El domingo 14 de noviembre del 2021</h3>
    </div>
    <div class="container">
      <div class="row marg-lg-t55 marg-sm-t15">
        <div class="col-md-12 no-padd-md">
          <template>
            <div><Countdown end="November 14, 2021"></Countdown></div>
          </template>
        </div>
      </div>
    </div>
    <!-- ABOUT COUPLE -->
    <div class="container">
      <div class="row text-center marg-lg-t40 marg-sm-t40">
        <h3 class="about-couple__name">
          Y nosotros hemos llegado a saber y creer que Dios nos ama. Dios es
          amor. El que permanece en amor, permanece en Dios, y Dios en él.
          <br />1 Juan 4:16
        </h3>
      </div>
    </div>

    <!-- TEXT BANNER -->
    <div class="text-banner-box">
      <div class="container" style="width: 90%">
        <div class="row text-center marg-lg-t60 marg-lg-b60">
          <div class="col-md-12">
            <h2 class="text-banner__main-text">“Té de Cocina”</h2>
            <h3 class="schedule__adress" style="color: white">
              En medio de todo lo que implica empezar un matrimonio queremos
              tomar un tiempo para conversar, reírnos y comer junto a las
              personas especiales de nuestra vidas. ¡Esperamos que nos puedan
              acompañar!
            </h3>
            <a href="/#/tedecocina" class="our-mary__link hvr-glow gray" >Ver Té de Cocina</a>
          
          </div>
        </div>
      </div>
    </div>
    <!-- GALLERY -->
    <div class="container">
      <div class="row text-center marg-lg-t110 marg-sm-t40">
        <h2 class="block-title">Galería</h2>
        <h3 class="block-subtitle">
          "Las fotos sacan un instante del tiempo, alteran la vida manteniéndola
          quieta" - Dorothea Lange
        </h3>
      </div>
      <div class="row marg-lg-t60 marg-sm-t20">
        <!-- Effects for image pop-up:
- data-effect="mfp-zoom-in"
- data-effect="mfp-newspaper"
- data-effect="mfp-move-horizontal"
- data-effect="mfp-move-from-top"
- data-effect="mfp-3d-unfold"
- data-effect="mfp-zoom-out" -->
        <div class="gallery popup-gallery">
          <a
            
            class="gallery__item col-xs-12 col-sm-6 col-md-3"
            data-effect="mfp-zoom-in"
          >
            <img src="img/gallery/img-2.jpg" alt="" class="gallery__img" />
          </a>
          <a
            
            class="gallery__item col-xs-12 col-sm-6 col-md-3"
            data-effect="mfp-zoom-in"
          >
            <img src="img/gallery/img-3.jpg" alt="" class="gallery__img" />
          </a>
          <a
            
            class="gallery__item col-xs-12 col-sm-12 col-md-6"
            data-effect="mfp-zoom-in"
          >
            <img src="img/gallery/img-4.jpg" alt="" class="gallery__img" />
          </a>
          <a
            
            class="gallery__item col-xs-12 col-sm-12 col-md-6"
            data-effect="mfp-zoom-in"
          >
            <img src="img/gallery/img-5.jpg" alt="" class="gallery__img" />
          </a>
          <a
            
            class="gallery__item col-xs-12 col-sm-6 col-md-3"
            data-effect="mfp-zoom-in"
          >
            <img src="img/gallery/img-6.jpg" alt="" class="gallery__img" />
          </a>
          <a
            
            class="gallery__item col-xs-12 col-sm-6 col-md-3"
            data-effect="mfp-zoom-in"
          >
            <img src="img/gallery/img-7.jpg" alt="" class="gallery__img" />
          </a>
        </div>
      </div>
     <div class="row text-center marg-lg-b140 marg-sm-b40">
       <!--  <a href="/#/galeria" class="our-mary__link hvr-glow ">Ver Galería</a>-->
      </div> 
    </div>
    <GifRegBanner />
    

  </div>
</template>

<script>
import Countdown from './utils/CustomCountDown.vue';
import GifRegBanner from './GifRegBanner.vue';

export default {
  name: "Index",
  props: {
    msg: String,
  },
  components: {
    Countdown,
    GifRegBanner
  },
  data() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);

    return {
      time: newYear - now,
    };
  },
};
</script>

<style scoped>
.bg-raro {
  background-color: #6d6d6dfc;
}

.gray{
  background-color: #595959;
  width: 250px;
}
</style>

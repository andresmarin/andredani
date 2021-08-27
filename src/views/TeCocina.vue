<template>
  <div class="home">
    <div class="container marg-lg-t130 marg-sm-t40">
      <h2 class="block-title">Té de Cocina</h2>
    </div>
    <!-- ADDRESS -->
    <div class="container">
      <div class="row text-center marg-lg-b40 marg-sm-b40">
        <div class="col-sm-4">
          <h3 class="rooms__title">Lugar</h3>
          <h3 class="block-subtitle block-subtitle--small">
            Calle Vieja Foodtruck Park<br />
            250mts al este de Walmart Curridabat.
          </h3>
          <a
            href="https://goo.gl/maps/Q1DtmhbTBMPUg8ba6 "
            class="our-mary__link hvr-glow"
            >Google Map</a
          >
        </div>
        <div class="col-sm-4">
          <h3 class="rooms__title">Fecha y Hora</h3>
          <h3 class="block-subtitle block-subtitle--small">
            Ocho de la mañana.<br />Domingo 3 de Octubre del 2021
          </h3>
        </div>
        <div class="col-sm-4">
          <h3 class="rooms__title">Contacto</h3>
          <h3 class="block-subtitle block-subtitle--small">
            Si tienes duda puedes contactar a <br />Diana Alvarado
            <br />Teléfono: 6293 9959
          </h3>
        </div>
      </div>
    </div>
    <div class="container marg-lg-b40 marg-sm-b40">
      <div class="row">
        <div class="col-md-6 text-center marg-sm-b40">
          <div class="timeline__event">
            <h4 class="timeline__title">Cuota</h4>
            <div class="timeline__desc">
              Estaremos compartiendo un delicioso desayuno, la cuota para toda
              la actividad es de 7 000. Los cuales debes de cancelar con Diana
              Alvarado, a la cuenta IBAN o por SINPE al
              <strong>6293 9959</strong>, en la descripción pueden poner Té y
              las personas invitadas. <br />
              <br />
              Cuenta: 200-01-000-016038-8<br />
              Cuenta Cliente: 15100020019160385<br />
              Cuenta Iban: CR10015100020019160385<br />
              Titular: Diana Alvarado Fernández<br />
            </div>

            <img
              src="img/decorations/icon-4.png"
              alt=""
              class="timeline__icon"
            />
          </div>
        </div>
        <div class="col-md-6 text-center">
          <div class="timeline__event timeline__event--right">
            <h4 class="timeline__title">Concurso de Postres</h4>
            <div class="timeline__desc">
              Siempre que vamos a comer pedimos dos postres diferentes y
              compartimos, nos encanta probar cosas nuevas y diferentes. Desde
              hace meses hemos estado intentando decidir cuál es el mejor postre
              del mundo y queremos que nos ayuden a decidir. Saca tu chef
              interior y trae tu mejor postre para que lo probemos, nuestros
              favoritos ganarán premios especiales.<br />
              <br />
            </div>
            <img
              src="img/decorations/icon-2.png"
              alt=""
              class="timeline__icon"
            />
          </div>
        </div>
      </div>
    </div>

    <section class="rsvp marg-lg-b40 marg-sm-b40">
      <div
        class="rsvp__bg"
        style="
          background-image: url('http://localhost:8888/static/img/bg/rsvp.jpg');
        "
      >
        <img
          src="img/bg/rsvp.jpg"
          alt="rsvp-background"
          class="rsvp__img"
          style="display: none"
        />
        <div class="container">
          <div class="row marg-lg-t130 marg-sm-t60 marg-lg-b130 marg-sm-b60">
            <div class="rsvp__decoration">
              <img
                src="img/decorations/form-decoration.png"
                alt="form-decoration"
              />
              <div class="rsvp__form-wrapper">
                <h2 class="rsvp__title">Nos van a acompañar?</h2>
                <h3 class="rsvp__subtitle">Por favor confirme su asistencia</h3>
                <form class="rsvp__form" @submit.prevent="sendEmail">
                  <input
                    type="text"
                    class="rsvp__input rsvp__input--full"
                    placeholder="Nombre"
                    v-model="name"
                    name="name"
                  />
                  <input
                    type="email"
                    v-model="email"
                    name="email"
                    class="rsvp__input rsvp__input--marg-r"
                    placeholder="Correo"
                  />
                  <input
                    type="text"
                    v-model="guess"
                    name="guess"
                    class="rsvp__input"
                    placeholder="№ de acompañantes"
                  />
                  <textarea
                    v-model="comment"
                    name="comment"
                    class="rsvp__input rsvp__input--area"
                    id="comment"
                    cols="30"
                    rows="10"
                    placeholder="¿Que traerás al concurso de postres? / Comentarios"
                  ></textarea>
                  <input
                    type="submit"
                    class="rsvp__submit hvr-glow"
                    value="Enviar"
                  />
                  <p v-if="sent" style="margin-top: 20px; font-size: 20px">
                    Confirmación enviada
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <GifRegBanner />
  </div>
</template>

<script>
import GifRegBanner from "../components/GifRegBanner.vue";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_w0abW0AtI5OP3S8WKSBtc");

/*it works*/
export default {
  name: "Laboda",
  components: {
    GifRegBanner,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      guess: "",
      comment: "",
      sent: false,
    };
  },
  methods: {
    sendEmail() {
      try {
        emailjs.send("service_o8a2lz2", "template_00h1d8s", {
          from_name: this.name,
          message:
            "Invitados:" +
            this.guess +
            " \n | Comentario:" +
            this.comment +
            " \n | Correo:" +
            this.email,
        });
      } catch (error) {
        console.log({ error });
      }

      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
      this.guess = "";
      this.comment = "";
      this.sent = true;
    },
  },
};
</script>

<style scoped>
.text-banner {
  margin-bottom: 50px;
}

.text-banner__signature {
  line-height: 40px;
  font-size: 23px;
  letter-spacing: 3px;
}
strong {
  font-weight: bolder;
}
.tecocina {
  display: flex;
  width: auto;
}
.timeline__event:first-child {
  margin-top: auto;
}
.block-title {
  text-align: center;
}
</style>

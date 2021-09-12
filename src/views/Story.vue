<template>
  <div class="home">
    <div class="container marg-lg-t60 marg-sm-t40">
      <h2 class="block-title">Nuestra Historia</h2>
    </div>
  <div class="container">
      <div class="story">
        <div class="row marg-lg-b120 marg-sm-b40 localPadding">
          <div class="col-md-6 padd-only-sm padd-only-xs">
            <div class="vert-align-wrap js-match-height">
              <div class="vert-align">
                <div class="story__photo">
                  <img src="img/about-her-bio.jpg" alt="" class="story__img" />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-md-offset-1 padd-only-sm padd-only-xs">
            <div class="story__text-block">
              <div class="story__desc">
                <p>
                  Como todas las historias de amor esta empieza cuando menos lo
                  esperábamos. Nos conocimos en la U y desde la primera vez que
                  hablamos fue diferente, no sabemos cómo describirlo pero en la
                  vida tenemos estas conexiones con otras personas, si tenemos
                  suerte nos puede pasar una vez y esto fue así, era como si
                  fuéramos amigos de toda la vida y cómodos como con nadie más.
                  Ninguna otra persona nos entendía como el otro y eso nos llevó
                  a hablar horas que se volvieron en años hasta el día de hoy.
                </p>

                <p>
                  En nuestras citas nos encanta ver películas desde el Cine
                  Magaly hasta en casa, jugar juegos de mesa con nuestra familia
                  y estar con nuestros amigos. Siempre intentamos comer en
                  lugares diferentes y comidas nuevas, nos encanta viajar y
                  soñamos con hacerlo mucho ahora que estemos casados :)
                </p>

                <p>
                  Centrados en Dios dimos el paso de empezar nuestra propia
                  familia y ¡no podríamos estar más felices!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div >
        <TimeLine />
    </div>
  </div>
</template>

<script>
import TimeLine from '../components/utils/TimeLine.vue'

export default {
  name: "Story",
  components: {
      TimeLine
  },
};
</script>

<style scoped>
.story-timeline__flowers {
  background-color: grey;
}
</style>

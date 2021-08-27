<template>
  <div class="home">
    <div class="container marg-lg-t130 marg-sm-t40">
          <h2 class="block-title">La boda</h2>
      </div>
    <!-- ADDRESS -->
    <div class="container">
      <div class="row text-center  marg-lg-b130 marg-sm-b40">
        <div class="col-sm-4">
          <h3 class="rooms__title">Lugar</h3>
          <h3 class="block-subtitle block-subtitle--small">
            Rancho Monte Brumoso<br />
            1 km al noreste de la iglesia de San Jerónimo de Moravia<br />
          </h3>
          <a href="https://goo.gl/maps/k6kg7Btb9CVtVwio6" class="our-mary__link hvr-glow">Google Map</a>
        </div>
        <div class="col-sm-4">
          <h3 class="rooms__title">Fecha y Hora</h3>
          <h3 class="block-subtitle block-subtitle--small">
            Dos y media de la tarde<br />Domingo 14 de Noviembre del 2021
          </h3>
        </div>
        <div class="col-sm-4">
          <h3 class="rooms__title">Contacto</h3>
          <h3 class="block-subtitle block-subtitle--small">
            Si tienes duda puedes contactar a <br />Jacke Chavarría<br />Teléfono: 8909 6849
          </h3>
        </div>
      </div>
    </div>
    <div class="text-banner">
    <div class="container">
        <div class="row text-center marg-lg-t55 marg-lg-b55">
            <div class="col-md-12">
                <h2 class="text-banner__main-text">Confirmación</h2>
                <h3 class="text-banner__signature">Por favor confirma tu asistencia antes del domingo 24 de octubre para que podamos guardar tu espacio y acomodarnos con los aforos y protocolos sanitarios. </h3>
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
  name: "Laboda",
  components: {},
};
</script>

<style scoped>
.text-banner{
    margin-bottom: 50px;    
}

.text-banner__signature{
    line-height: 40px;
    font-size: 23px;
    letter-spacing: 3px;
}

.block-title{
    text-align: center;
}
</style>

<template>
  <div class="container">
      <div class="row text-center" style="margin-bottom: 80px">
        <h2 class="block-title">Lista de Regalos</h2>
        <h3 class="block-subtitle">
          Compartir con las personas que amamos es el mejor regalo de todos,
          pero si gustan comprarnos algo pueden revisar nuestro Registro de
          Bodas para saber que necesitamos.
        </h3>
        <div class="row text-center" style="margin-top: 30px">
          <a href="/#/lista " class="our-mary__link hvr-glow regalos">Ver Lista de Regalos</a>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "GifRegBanner",
  props: {
    msg: String,
  },
};
</script>

<style  lang="scss" scoped>
.regalos{
    width: 300px;
}
</style>

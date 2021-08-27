<template>
  <!-- HEADER -->
  <header class="main-header">
    <a name="contactos"></a>
    <div class="container">
      <div class="row text-center">
        <div class="col-md-8 no-padd-md col-md-offset-2">
          
          <h4 class="main-header__title contacto">
            Contactos
          </h4>
          <h3 class="text-banner__signature contacto"><strong> Té de Cocina:</strong> Diana Alvarado al 6293 9959</h3>
          <h3 class="text-banner__signature contacto"><strong>Día de la Boda:</strong> Jacke Chavarría al 8909 6849</h3>
         
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String,
  },
};
</script>

<style  lang="scss" scoped>
.main-header{
  &__title{
    font-size: 40px;
  }

  &:before {
    background-color: #6d6d6dfc;
  } 

.text-banner__signature{
  &.contacto{
    font-family: "Playfair Display", Times, "Times New Roman", Georgia, serif;
    font-size: 16px;
    color: #fff;
    line-height: 30px;
  }
}

}
</style>

<template>
  <!-- HEADER -->
  <header class="main-header">
    
    <div class="container">
      <div
        class="
          row
          text-center
          marg-lg-t140 marg-sm-t45 marg-lg-b140 marg-sm-b45
          
        "
      >
        <div class="col-md-8 no-padd-md col-md-offset-2">
          <img
            src="img/decorations/decoration-1.png"
            alt=""
            class="main-header__decoration"
          />
          <h1 class="main-header__title">
            Andre<span class="main-header__title--color"> &amp; </span>Dani
          </h1>
          <img
            src="img/decorations/decoration-2.png"
            alt=""
            class="main-header__decoration marg-lg-t10"
          />
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

<style scoped>


</style>

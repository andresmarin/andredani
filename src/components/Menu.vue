<template>
 <!-- MENU -->
    <div class="main-menu-wrapper clearfix">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 col-lg-offset-1 col-md-12 col-md-offset-0">
                    <div class="wpc-navigation">
                        <nav id="dl-menu" class="dl-menuwrapper">
                            <button class="dl-trigger" @click="toggleMenu()">Menu</button>
                            <ul class="main-menu dl-menu">
                                <li class="menu-item"><a href="index.html">Inicio</a></li>
                                <li class="menu-item "><a href="/#/story">Nuestra historia</a></li>
                                <li class="menu-item "><a href="/#/laboda">La boda</a></li>
                                <li class="menu-item "><a href="/#/tedecocina">Té de Cocina</a></li>
                                <li class="menu-item "><a href="/#/lista">Lista de regalos</a></li>
                                <li class="menu-item "><a href="/#/galeria">Galería</a></li>
                                <li class="menu-item "><a href="#contactos">Contactos</a></li>
                            </ul>
                            <ul class="main-menu dl-menu2" v-if="showMenu" @click="hideMenu">
                                <li class="menu-item"><a href="index.html">Inicio</a></li>
                                <li class="menu-item "><a href="/#/story">Nuestra historia</a></li>
                                <li class="menu-item "><a href="/#/laboda">La boda</a></li>
                                <li class="menu-item "><a href="/#/tedecocina">Té de Cocina</a></li>
                                <li class="menu-item "><a href="/#/lista">Lista de regalos</a></li>
                                <li class="menu-item "><a href="/#/galeria">Galería</a></li>
                                <li class="menu-item "><a href="#contactos">Contactos</a></li>
                            </ul>
                            <div class="nav-menu-icon"><i></i></div>
                        </nav>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    msg: String,
  },
  data() {
    return {
      showMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    hideMenu(){
        this.showMenu = false
    }
  }
};
</script>

<style scoped>
.main-header:before {
    background-color: #6d6d6dfc;
}
</style>

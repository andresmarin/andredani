<template>
  <div class="home">
    <div class="container marg-lg-t60 marg-sm-t40">
      <h2 class="block-title">Lista de regalos</h2>
    </div>
    <!-- ADDRESS -->
    <div class="container">
      <div class="row text-center marg-lg-b130 marg-sm-b40">
        <div class="row marg-lg-t40 marg-lg-b10 row marg-sm-t20 marg-sm-b10">
          <p>
            Muchos amigos y familiares nos han pedido sugerencias de regalos.
            Gracias a Dios ya tenemos algunas de las cosas que necesitamos para
            comenzar nuestra nueva vida juntos, pero aún necesitamos varias
            cosas. No queríamos registrarnos en ninguna tienda específica, así
            que el papá de Andre nos ayudó a hacer este maravilloso registro en
            línea.
          </p>

          <h3 class="como-funciona-title">
            ¿Cómo funciona nuestra lista de regalos?
          </h3>

          <ul class="como-funciona">
            <li>
              Esta es una lista de algunas cosas que necesitamos y otras que no
              son indispensables pero nos fascinan, hemos marcado nuestras
              favoritas para que puedan identificarlas de manera más sencilla
              <img title="Favorito" src="img/favorito.png" alt="favorito" />.
            </li>
            <li>
              No somos muy exigentes con la mayoría de las cosas, así que pueden
              ir a su tienda favorita, buscar ofertas o pedir en línea. Los
              pocos artículos que queremos de un modelo específico estan
              marcados con un
              <img src="img/exacto.png" title="Exactamente este" alt="Exacto" />
              (<a class="vermas" @click="verToggle">{{ verLabel }}</a
              >)
            </li>
            <li v-show="vermas">
              Una vez que hayan encontrado el o los artículos que deseen
              regalarnos pueden agregarlo al carrito de compras para que sea más
              sencillo de ubicar luego. Cuando ya compren nuestros regalos
              simplemente le dan en Confirmar y se borrará de la lista.
            </li>
            <li v-show="vermas">
              Cada regalo incluye la cantidad que necesitamos y una imagen como
              ejemplo (no tiene que ser exactamente igual, son solo
              sugerencias). Sientanse en la libertad de darnos la cantidad que
              deseen, solo recuerden indicarlo para evitar recibir el mismo
              regalo varias veces.
            </li>
            <li v-show="vermas">
              No es necesario que envuelvan nuestros regalos, así evitamos papel
              de un solo uso. Si quieren que sea sorpresa pueden usar papel
              reutilizado o bolsas de tela que podamos usar luego para el super.
            </li>
            <li v-show="vermas">
              Si gustan regalarnos algo que no está en la lista es bienvenido!
              Nada más haganselo saber a Diana Alvarado al 6293 9959.
            </li>
            <li v-show="vermas">
              Puedes contactar a Diana Alvarado al 6293 9959 si tienes cualquier
              duda.
            </li>
          </ul>
        </div>
        <div style="position: relative; min-height: 60px">
          <div class="carrito">
            <div class="container">
              <div
                class="
                  row
                  text-center
                  marg-lg-t80 marg-sm-t20 marg-lg-b60 marg-sm-b20
                "
              >
                <header>
                  <h3 class="carritotitulo">Carrito de compras</h3>
                  <img
                    src="img/caja.png"
                    title="Carrito de compras"
                    alt="Carrito de compras"
                    class="icon"
                  />
                  &nbsp;({{ selectedCount }})
                </header>

                <ul
                  v-show="!inConfirmation"
                  v-for="(item, index) in selectedItems"
                  :key="index"
                >
                  <li class="carrito_elemento">
                    {{ item.title }} | {{ item.selected_quantity }}
                    <img
                      src="img/garbage-can.png"
                      class="borrar_icon"
                      alt="Borrar"
                      @click="removeFromCart(item, index)"
                    />
                  </li>
                </ul>
                <div>
                  <input
                    @click="confirm()"
                    v-show="selectedCount > 0 && !inConfirmation"
                    type="submit"
                    value="Confirma tu regalo"
                    class="rsvp__submit hvr-glow confirmar"
                  />
                </div>
                <div v-show="inConfirmation && !saved" class="confirmation">
                  <form class="rsvp__form" @submit.prevent="save">
                    <input
                      type="text"
                      :class="['rsvp__input rsvp__input--full', nameErrorClass]"
                      placeholder="Nombre *"
                      v-model="name"
                      name="name *"
                    />
                    <input
                      type="email"
                      v-model="email"
                      name="email"
                      :class="[
                        'rsvp__input rsvp__input--marg-r',
                        emailErrorClass,
                      ]"
                      placeholder="Correo *"
                    />

                    <textarea
                      v-model="message"
                      name="message"
                      class="rsvp__input rsvp__input--area"
                      id="message"
                      cols="30"
                      rows="10"
                      placeholder="¡Agrega un mensaje personalizado para que tu regalo sea más especial!"
                    ></textarea>
                    <input
                      type="submit"
                      class="rsvp__submit hvr-glow confirmar"
                      value="Enviar"
                    />
                    
                    <p v-if="sent" style="margin-top: 20px; font-size: 20px">
                      Confirmación enviada
                    </p>
                    <p
                      v-if="error"
                      class="error"
                      style="margin-top: 20px; font-size: 20px"
                    >
                      Por favor llene todos los campos requeridos (*)
                    </p>
                  </form>
                  <input
                      @click="returnToCart()"
                      type="submit"
                      class="rsvp__submit hvr-glow confirmar"
                      value="Regresar al carrito"
                    />
                </div>
                <div v-show="saved">
                  <h3>Muchas gracias</h3>
                  <p>Hemos recibido la confirmación.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row marg-lg-t20 marg-lg-b110 row marg-sm-t10 marg-sm-b30">
          <ul id="items">
            <li
              v-show="item.quantity_needed > 0"
              v-for="(item, index) in items"
              :key="index"
              class="gifts__item_local"
            >
              <!--<img
                src="img/logos/logo-1.png" 
                :alt="item.title" />-->
              <div class="carouser_container">
                <Carousel
                  id="carousel-1"
                  background="#ababab"
                  :imgwidth="71"
                  :imgheight="48"
                  cstyle="text-shadow: 1px 1px 2px #333"
                  :images="[
                    { src: 'img/regalos/' + item.item_id + 'a.jpg' },
                    { src: 'img/regalos/' + item.item_id + 'b.jpg' },
                  ]"
                />

                <img
                  v-show="item.favorite === '1'"
                  v-b-tooltip.hover
                  title="Favorito"
                  src="img/favorito.png"
                  alt="favorito"
                  class="icon favorito"
                />
                <img
                  v-show="item.exact === '1'"
                  src="img/exacto.png"
                  v-b-tooltip.hover
                  title="Exactamente este"
                  alt="Exacto"
                  class="icon exacto"
                />
              </div>

              <p class="gifts__title">{{ item.title }}</p>
              <p class="gifts__desc">{{ item.description }}</p>
              <ul class="gifts__icons">
                <li style="width: 80px">
                  <vue-numeric-input
                    v-model="quantity[index]"
                    :min="1"
                    :max="
                      parseInt(item.quantity_needed) === 0
                        ? 100
                        : parseInt(item.quantity_needed)
                    "
                    size="80px"
                    align="center"
                  >
                  </vue-numeric-input>
                </li>
                <li>
                  <input
                    @click="addToCart(item, index)"
                    :disabled="disabled(item.item_id)"
                    data-v-47476810=""
                    type="submit"
                    :value="disabled(item.item_id) ? 'Agregado' : 'Agregar'"
                    class="rsvp__submit hvr-glow agregar"
                  />
                </li>
              </ul>
            </li>
          </ul>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="col-sm-4">
          <h3 class="rooms__title"></h3>
          <h3 class="block-subtitle block-subtitle--small"></h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import getToken from "../api-services/token";
import fetchItems from "../api-services/fetchItems";
import addPurchase from "../api-services/addPurchase";
import addPurchasedItem from "../api-services/addPurchasedItem";
import updateItem from "../api-services/updateItem";
import VueNumericInput from "vue-numeric-input";
import Carousel from "../components/Carousel.vue";

export default {
  name: "ListaDeRegalos",
  components: {
    VueNumericInput,
    Carousel,
  },
  data() {
    return {
      quantity: [],
      inCart: [],
      vermas: false,
      inConfirmation: false,
      name: "",
      email: "",
      message: "",
      nameErrorClass: "",
      emailErrorClass: "",
      comment: "",
      error: false,
      sent: false,
      saved: false
    };
  },

  mounted() {
    if (!this.token) {
      getToken()
        .then((tk) => {
          this.setToken(tk);
        })
        .then(() => {
          this.getItems();
        })
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    } else {
      this.getItems();
    }

    this.clearSelectedItems();

    const saved = JSON.parse(this.$cookie.get("andreDani"));

    if (saved && saved.length > 0) {
      saved.forEach((item) => {
        this.inCart.push(item.item_id);
        this.addSelectedItems(item);
      });
    }
  },
  computed: {
    ...mapGetters({
      token: "config/token",
      items: "items/items",
      selectedItems: "items/selectedItems",
    }),
    verLabel() {
      return this.vermas ? "Ocultar" : " Ver más";
    },
    selectedCount() {
      return this.selectedItems.length;
    },
  },
  methods: {
    ...mapActions({
      setToken: "config/setToken",
      setItems: "items/setItems",
      setPageNo: "items/setPageNo",
      setTotalCount: "items/setTotalCount",
      addSelectedItems: "items/addSelectedItems",
      removeSelectedItems: "items/removeSelectedItems",
      clearSelectedItems: "items/clearSelectedItems",
      updateQuantityNeeded: "items/updateQuantityNeeded"
    }),
    clearErrors() {
      this.nameErrorClass = "";
      this.emailErrorClass = "";
    },
    validatefields() {
      let validated = true;

      if (this.name === "") {
        this.nameErrorClass = "error";
        validated = false;
      }

      if (this.email === "") {
        this.emailErrorClass = "error";
        validated = false;
      }

      this.error = !validated;

      return validated;
    },
    getItems() {
      fetchItems(this.token, 1, 90)
        .then((result) => {
          result.records.forEach(() => {
            this.quantity.push(1);
          });
          this.setItems(result.records), this.setPageNo(result.pageno);
          this.setTotalCount(result.total_count);
        })
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
    },
    addToCart(item, i) {
      this.inCart.push(item.item_id);
      item.selected_quantity = this.quantity[i];
      this.addSelectedItems(item);
      this.$cookie.delete("andreDani");
      this.$cookie.set("andreDani", JSON.stringify(this.selectedItems), 10);
      this.scrollToTop();
    },
    removeFromCart(item) {
      this.inCart.splice(this.inCart.indexOf(item.item_id), 1);
      this.removeSelectedItems(item);
      this.$cookie.delete("andreDani");
      this.$cookie.set("andreDani", JSON.stringify(this.selectedItems), 10);
    },
    disabled(item_id) {
      return this.inCart.indexOf(item_id) >= 0 ? true : false;
    },
    verToggle() {
      this.vermas = !this.vermas;
    },
    scrollToTop() {
      window.scrollTo(0, 1000);
    },
    confirm() {
      this.inConfirmation = true;
    },
    returnToCart() {
      this.inConfirmation = false;
    },
    save() {
      if(this.validatefields()){ 

      addPurchase(this.token, {
        gid: "1",
        uid: "1",
        name: this.name,
        email: this.email,
        message: this.message,
      })
        .then((res) => {
          if (res?.status && res?.status == "success") {
            this.selectedItems.forEach((item) => {
              addPurchasedItem(this.token, {
                item_id: item.item_id,
                pid: res.pid,
              }).then((resItem) => {
                if (resItem?.status && resItem?.status == "success") {
                  const newQ = item.quantity_needed - item.selected_quantity;
                  updateItem(this.token, {
                    quantity_needed: newQ,
                    item_id: item.item_id,
                  })
                    .then(() => {
                      this.removeFromCart(item)
                      this.updateQuantityNeeded({item_id: item.item_id, quantity_needed: newQ})
                      if(this.selectedItems.length <= 0){
                        this.saved = true
                      }
                    })
                    .catch((error) => {
                      this.errorMessage = error.message;
                      alert(
                        "Hubo un error, por favor comuníquese con Diana Alvarado al 6293 9959"
                      );
                      console.error("There was an error!", error);
                    });
                } else {
                  alert(
                    "Hubo un error, por favor comuníquese con Diana Alvarado al 6293 9959"
                  );
                }
              });
            });
          } else {
            alert(
              "Hubo un error, por favor comuníquese con Diana Alvarado al 6293 9959"
            );
          }
        })
    
        .catch((error) => {
          this.errorMessage = error.message;
          alert(
            "Hubo un error, por favor comuníquese con Diana Alvarado al 6293 9959"
          );
          console.error("There was an error!", error);
        });

        // Reset form field
        this.name = "";
        this.email = "";
        this.message = "";
      }
    },
  },
};
</script>

<style scoped>
.error {
  border: 1px solid red;
}

.carrito {
  background-color: #c09f42;
}

.carrito_icon {
  height: 60px;
  width: 315px;
  position: absolute;
  right: 0;
}

.borrar_icon {
  height: 20px;
  margin-left: 10px;
  position: absolute;
  right: 11px;
}

header {
  display: flex;
  margin: auto;
  text-align: ;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  cursor: pointer;
  /* padding: 17px 15px; */
}

.carritotitulo {
  font-size: 28px;
  font-family: "Great Vibes", Times, "Times New Roman", Georgia, serif;
  padding-top: 17px;
  margin-right: 20px;
}

.carrito_elemento {
  font-style: normal;
  font-size: 15px;
  line-height: 23px;
  border-bottom: 1px solid white;
  border: 1px solid white;
  padding: 6px;
  background-color: white;
  position: relative;
}

.vermas {
  color: #c09f42;
}
.como-funciona-title {
  margin-top: 20px;
}

.como-funciona {
  text-align: left;
  padding-top: 20px;
}

.como-funciona li {
  list-style: disc;
  padding-bottom: 5px;
}

.text-banner {
  margin-bottom: 50px;
}

.text-banner__signature {
  line-height: 40px;
  font-size: 23px;
  letter-spacing: 3px;
}

.block-title {
  text-align: center;
}

#items {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  margin: auto;
}

.gifts__item_local,
.gifts__item_local:hover {
  width: 30%;
  min-width: 300px;
  margin: 10px 16px;
  position: relative;
  background-color: #ffffff;
  box-sizing: border-box;
  border: 1px solid #e6e7e8;
  padding: 60px 40px;
  text-align: center;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  cursor: default;
}

.gifts__title {
  line-height: 35px;
}

.gifts__desc {
  word-break: break-word;
}

.carouser_container {
  position: relative;
}

.gifts__icons {
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 15px;
  left: 10px;
  justify-content: space-between;
}

.gifts__icons li {
  width: 50px;
}

.gifts__icons li:last-of-type {
  width: 115px;
}

.icon {
  height: 35px;
}

.favorito {
  position: absolute;
  right: 0;
  top: 0;
}

.exacto {
  position: absolute;
  right: 0;
  top: 45px;
}

.agregar {
  margin: 0;
  width: 100px;
  text-align: center;
  line-height: 30px;
  padding: 0;
}

.agregar:disabled {
  background-color: white;
  color: #c09f42;
}

.confirmation {
  max-width: 450px;
  margin: auto;
}

.confirmation input {
  width: 100%;
}

.confirmar {
  text-align: center;
  line-height: 30px;
  padding: 0;
  background: white;
  color: #c09f42;
  width: 242px !important;
  border-radius: 5px;
  font-size: 12px;
}
@media screen and (max-width: 767px) {
  .agregar {
    width: 115px;
  }
}

@media screen and (max-width: 374px) {
}
</style>

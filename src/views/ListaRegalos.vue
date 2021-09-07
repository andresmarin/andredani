<template>
  <div class="home">
    <div class="container marg-lg-t130 marg-sm-t40">
      <h2 class="block-title">Lista de regalos</h2>
    </div>
    <!-- ADDRESS -->
    <div class="container">
      <div class="row text-center marg-lg-b130 marg-sm-b40">
        <div class="col-sm-4">
          <h3 class="rooms__title"></h3>
          <h3 class="block-subtitle block-subtitle--small">
            <br />
          </h3>
        </div>
        <div class="row marg-lg-t60 marg-lg-b110 row marg-sm-t20 marg-sm-b30">
          <ul id="items">
            <li
              v-for="(item, index) in items"
              :key="index"
              class="gifts__item_local"
            >
              <img src="img/logos/logo-1.png" alt="logo" />
              <p class="gifts__title">{{ item.title }}</p>
              <p class="gifts__desc">{{ item.description }}</p>
              <ul class="gifts__icons">
                <li>
                  <img src="img/favorito.png" alt="Favorito" class="icon" />
                </li>
                <li>
                  <img src="img/excato.png" alt="Exacto" class="icon" />
                </li>
                
                <li>
                  <input data-v-47476810="" type="submit" value="Agregar" class="rsvp__submit hvr-glow agregar">
                </li>
              </ul>
            </li>
          </ul>
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

export default {
  name: "ListaDeRegalos",
  components: {},
  data() {
    return {};
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
  },
  computed: {
    ...mapGetters({
      token: "config/token",
      items: "items/items",
    }),
  },
  methods: {
    ...mapActions({
      setToken: "config/setToken",
      setItems: "items/setItems",
      setPageNo: "items/setPageNo",
      setTotalCount: "items/setTotalCount",
    }),
    getItems() {
      fetchItems(this.token, 1, 90)
        .then((result) => {
          console.log("redult", result);
          this.setItems(result.records), this.setPageNo(result.pageno);
          this.setTotalCount(result.total_count);
        })
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });
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

.block-title {
  text-align:
   center;
}

#items{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
    margin: auto;
}

.gifts__item_local, .gifts__item_local:hover{
  width: 30%;
  min-width: 300px;
  margin: 10px 16px;
  position: relative;
  background-color: #ffffff;
  box-sizing: border-box;
  border: 1px solid #e6e7e8;
  padding: 60px 40px;
  text-align: center;
  -webkit-transition: all .2s;
  transition: all .2s;
  cursor: default;
}



.gifts__title {
  line-height: 35px;
}

.gifts__desc {
  word-break: break-word;
}

.gifts__icons{
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 5px;
}

 .gifts__icons li{
    margin: 0 15px 0px 5px
  }

.icon{
  height: 35px;
}

.agregar{
    margin: 0;
    width: 115px;
    line-height: 35px;
    padding: 0;
}

@media screen and (max-width: 767px) {
  .agregar {
    width: 115px;
  }


}

@media screen and (max-width: 374px) {
  
}
</style>

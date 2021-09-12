<template>
  <div class="home">
    <div class="container marg-lg-t60 marg-sm-t40">
      <h2 class="block-title">Reporte de Regalos</h2>
    </div>
    <div class="container">
      <div
        class="row marg-lg-b10 marg-sm-b10"
      >
        <div class="col-sm-2">
          <h3 class="rooms__title">De</h3>
        </div>
        <div class="col-sm-4">
          <h3 class="rooms__title">Mensaje</h3>
        </div>
        <div class="col-sm-6">
          <h3 class="rooms__title">Regalos</h3>
        </div>
      </div>
    </div>
    <div class="container">
      <div
        v-for="(item, index) in formatedList"
        :key="index"
        class="row marg-lg-b10 marg-sm-b10"
      >
        <div class="col-sm-2">
          <p><strong>Nombre: </strong>{{ item.name }}</p>
          <p><strong>Correo: </strong> {{ item.email }}</p>
        </div>
        <div class="col-sm-4">
          <p>
            {{ item.message }}
          </p>
        </div>
        <div class="col-sm-6">
          <ul v-for="(gift, index) in item.items" :key="index">
            <li>{{ gift.title }}</li>
          </ul>
        </div>
        <hr />
      </div>
      
    </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import getToken from "../api-services/token";
import fetchPurchased from "../api-services/fetchPurchased";
import fetchPurchasedItems from "../api-services/fetchPurchasedItems";

export default {
  name: "ReporteDeRegalos",
  data() {
    return {
      purchased: [],
      purchasedItems: [],
      formatedList: [],
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
  },
  computed: {
    ...mapGetters({
      token: "config/token",
    }),
  },
  methods: {
    ...mapActions({
      setToken: "config/setToken",
    }),
    getItems() {
      //Get purchased
      const fPur = fetchPurchased(this.token, 1, 90)
        .then((result) => {
          const list = [];
          result.records.forEach((pur) => {
            list.push({
              pid: pur.pid,
              name: pur.name,
              email: pur.email,
              message: pur.message,
            });
          });
          this.purchased = list;
        })
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });

      const fPurItems = fetchPurchasedItems(this.token, 1, 90)
        .then((result) => {
          this.items = result.records;
        })
        .catch((error) => {
          this.errorMessage = error.message;
          console.error("There was an error!", error);
        });

      Promise.all([fPur, fPurItems]).then(() => {
        console.log("purchased", this.purchased);
        console.log("itmes", this.items);
        this.formatItems();
      });
    },
    formatItems() {
      const list = [];
      this.purchased.forEach((p) => {
        const items = this.items.filter((item) => item.pid === p.pid);

        list.push({
          pid: p.pid,
          name: p.name,
          email: p.email,
          message: p.message,
          items: items,
        });

        this.formatedList = list;

        console.log("list", this.formatedList);
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
  text-align: center;
}
</style>

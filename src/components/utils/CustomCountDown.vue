<template>
  <div class="ClassyCountdown-wrapper">
    <div class="ClassyCountdown-days" style="height: 145px">
      <div style="display: inline; height: 145px; width: 145px">
        <canvas width="145" height="145"></canvas
        ><input
          type="text"
          readonly="readonly"
          style="display: none; width: 0px; visibility: hidden"
        />
      </div>
      <span
        class="ClassyCountdown-value"
        style="
          font-family: 'Open Sans';
          font-weight: 300;
          color: rgb(52, 73, 94);
          margin-top: -28px;
          font-size: 58px;
        "
        ><div>{{ days | twoDigits }}</div>
        <span style="font-size: 13px">{{
          days > 1 ? "días" : "día"
        }}</span></span
      >
    </div>
    <div class="ClassyCountdown-hours" style="height: 145px">
      <div style="display: inline; height: 145px; width: 145px">
        <canvas width="145" height="145"></canvas
        ><input
          type="text"
          readonly="readonly"
          style="display: none; width: 0px; visibility: hidden"
        />
      </div>
      <span
        class="ClassyCountdown-value"
        style="
          font-family: 'Open Sans';
          font-weight: 300;
          color: rgb(52, 73, 94);
          margin-top: -28px;
          font-size: 58px;
        "
        ><div>{{ hours | twoDigits }}</div>
        <span style="font-size: 13px">{{
          hours > 1 ? "horas" : "hora"
        }}</span></span
      >
    </div>
    <div class="ClassyCountdown-minutes" style="height: 145px">
      <div style="display: inline; height: 145px; width: 145px">
        <canvas width="145" height="145"></canvas
        ><input
          type="text"
          readonly="readonly"
          style="display: none; width: 0px; visibility: hidden"
        />
      </div>
      <span
        class="ClassyCountdown-value"
        style="
          font-family: 'Open Sans';
          font-weight: 300;
          color: rgb(52, 73, 94);
          margin-top: -28px;
          font-size: 58px;
        "
        ><div>{{ minutes | twoDigits }}</div>
        <span style="font-size: 13px">minutos</span></span
      >
    </div>
    <div class="ClassyCountdown-seconds" style="height: 145px">
      <div style="display: inline; height: 145px; width: 145px">
        <canvas width="145" height="145"></canvas
        ><input
          type="text"
          readonly="readonly"
          style="display: none; width: 0px; visibility: hidden"
        />
      </div>
      <span
        class="ClassyCountdown-value"
        style="
          font-family: 'Open Sans';
          font-weight: 300;
          color: rgb(52, 73, 94);
          margin-top: -28px;
          font-size: 58px;
        "
        ><div>{{ seconds | twoDigits }}</div>
        <span style="font-size: 13px">segundos</span></span
      >
    </div>
  </div>
</template>

<script>
let interval = null;

export default {
  name: "vuejsCountDown",
  props: {
    deadline: {
      type: String,
    },
    end: {
      type: String,
    },
    stop: {
      type: Boolean,
    },
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      date: null,
      diff: 0,
    };
  },
  created() {
    if (!this.deadline && !this.end) {
      throw new Error("Missing props 'deadline' or 'end'");
    }

    let endTime = this.deadline ? this.deadline : this.end;
    this.date = Math.trunc(Date.parse(endTime.replace(/-/g, "/")) / 1000);

    if (!this.date) {
      throw new Error("Invalid props value, correct the 'deadline' or 'end'");
    }

    interval = setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  computed: {
    seconds() {
      return Math.trunc(this.diff) % 60;
    },

    minutes() {
      return Math.trunc(this.diff / 60) % 60;
    },

    hours() {
      return Math.trunc(this.diff / 60 / 60) % 24;
    },

    days() {
      return Math.trunc(this.diff / 60 / 60 / 24);
    },
  },
  watch: {
    now() {
      /*value*/
      this.diff = this.date - this.now;
      if (this.diff <= 0 || this.stop) {
        this.diff = 0;
        // Remove interval
        clearInterval(interval);
      }
    },
  },
  filters: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString();
      }
      return value.toString();
    },
  },
  destroyed() {
    clearInterval(interval);
  },
};
</script>
<style>
.vuejs-countdown {
  padding: 0;
  margin: 0;
}
.vuejs-countdown li {
  display: inline-block;
  margin: 0 8px;
  text-align: center;
  position: relative;
}
.vuejs-countdown li p {
  margin: 0;
}
.vuejs-countdown li:after {
  content: ":";
  position: absolute;
  top: 0;
  right: -13px;
  font-size: 32px;
}
.vuejs-countdown li:first-of-type {
  margin-left: 0;
}
.vuejs-countdown li:last-of-type {
  margin-right: 0;
}
.vuejs-countdown li:last-of-type:after {
  content: "";
}
.vuejs-countdown .digit {
  font-size: 32px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 0;
}
.vuejs-countdown .text {
  text-transform: uppercase;
  margin-bottom: 0;
  font-size: 10px;
}
</style>

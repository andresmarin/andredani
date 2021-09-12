<template>
  <div>
    <b-carousel
      :id="id"
      v-model="slide"
      :interval="interval ? interval : 0"
      controls
      indicators
      :background="background ? background : '#ababab'"
      :img-width="imgwidth"
      :img-height="imgheight"
      :style="cstyle ? cstyle : ''"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image 
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>-->

      <!-- Slides with custom text
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide> -->

      <!-- Slides with image only -->
     <div v-for="(image, index) in images"
              :key="index">
      <b-carousel-slide
        :img-src="image.src"
        :width="imgwidth"
        :height="imgheight"
      ></b-carousel-slide>
      </div>
      

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment 
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          />
        </template>
      </b-carousel-slide> -->

      <!-- Slide with blank fluid image to maintain slide aspect ratio 
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          eros felis, tincidunt a tincidunt eget, convallis vel est. Ut
          pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>-->
    </b-carousel>
  </div>
</template>

<script>
//https://bootstrap-vue.org/docs/components/carousel#carousel-slide-content
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    imgwidth: {
      type: Number,
      required: true,
    },
    imgheight: {
      type: Number,
      required: true,
    },
    interval: {
      type: Number,
      required: false,
    },
    background: {
      type: String,
      required: false,
    },
    cstyle: {
      type: String,
      required: false,
    },
    images: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      //recieves slide as parameter
    },
    onSlideEnd() {
      //recieves slide as parameter
    },
  },
};
</script>
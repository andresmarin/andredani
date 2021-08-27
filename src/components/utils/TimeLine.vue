<template>
  <div>
    <div class="new-timeline">
      <div
        class="
          new-timeline__event
          animated
          fadeInUp
          delay-3s
          new-timeline__event--type1
        "
      >
        <div class="new-timeline__event__icon">
          <i class="lni-cake"></i>
        </div>
        <div class="new-timeline__event__date">9/3/2015</div>
        <div class="new-timeline__event__content">
          <div class="new-timeline__event__description">
            <p>
              Nos conocemos en el día 1 de la Carrera en la UCR
            </p>
          </div>
        </div>
      </div>
      <div
        class="
          new-timeline__event
          animated
          fadeInUp
          delay-2s
          new-timeline__event--type2
        "
      >
        <div class="new-timeline__event__icon">
          <i class="lni-burger"></i>
        </div>
        <div class="new-timeline__event__date">14/11/2016</div>
        <div class="new-timeline__event__content">
          <div class="new-timeline__event__description">
            <p>
              Salimos en nuestra primera cita 
            </p>
          </div>
        </div>
      </div>
      <div
        class="
          new-timeline__event
          animated
          fadeInUp
          delay-1s
          new-timeline__event--type3
        "
      >
        <div class="new-timeline__event__icon">
          <i class="lni-slim"></i>
        </div>
        <div class="new-timeline__event__date">14/12/2016</div>
        <div class="new-timeline__event__content">
          <div class="new-timeline__event__description">
            <p>
             Nos hacemos novios!
            </p>
          </div>
        </div>
      </div>
      <div
        class="new-timeline__event animated fadeInUp new-timeline__event--type1"
      >
        <div class="new-timeline__event__icon">
          <i class="lni-cake"></i>
        </div>
        <div class="new-timeline__event__date">14/12/2017</div>
        <div class="new-timeline__event__content">
          <div class="new-timeline__event__description">
            <p>
              Cumplimos nuestro primer año de ser novios
            </p>
          </div>
        </div>
      </div>
      <div
        class="
          new-timeline__event
          animated
          fadeInUp
          delay-2s
          new-timeline__event--type2
        "
      >
        <div class="new-timeline__event__icon">
          <i class="lni-burger"></i>
        </div>
        <div class="new-timeline__event__date">14/11/2020</div>
        <div class="new-timeline__event__content">
          <div class="new-timeline__event__description">
            <p>
              Nos comprometemos
            </p>
          </div>
        </div>
      </div>
      <div
        class="
          new-timeline__event
          animated
          fadeInUp
          delay-1s
          new-timeline__event--type3
        "
      >
        <div class="new-timeline__event__icon">
          <i class="lni-slim"></i>
        </div>
        <div class="new-timeline__event__date">3/10/2021</div>
        <div class="new-timeline__event__content">
          <div class="new-timeline__event__description">
            <p>
              Será nuestro té de cocina
            </p>
          </div>
        </div>
      </div>
      <div
        class="new-timeline__event animated fadeInUp new-timeline__event--type1"
      >
        <div class="new-timeline__event__icon">
          <i class="lni-cake"></i>
        </div>
        <div class="new-timeline__event__date">14/11/2021</div>
        <div class="new-timeline__event__content">
          <div class="new-timeline__event__description">
            <p>
              ¡Nos vamos a casar! 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "new-timeline",
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
};
</script>

<style lang="scss">
$content-width: calc(40vw - 84px);
$margin: 20px;
$spacing: 20px;
$bdrs: 6px;
$circle-size: 40px;
$icon-size: 32px;
$bdrs-icon: 100%;

$color1: #595959;
$color2: #c09f42;

$color3: #c09f42;
$color4: #595959;

$color5: #595959;
$color6: #c09f42;
* {
  box-sizing: border-box;
}
html {
  font-size: 14px;
}
body {
  background: #f6f9fc;
  font-family: "Open Sans", sans-serif;
  color: #525f7f;
}
h2 {
  margin: 5%;
  text-align: center;
  font-size: 2rem;
  font-weight: 100;
}
.new-timeline {
  display: flex;
  flex-direction: column;
  margin: $margin auto;
  position: relative;

  &__event {
    margin-bottom: $spacing;
    position: relative;
    display: flex;
    margin: $spacing 0;
    border-radius: $bdrs;
    align-self: center;
    width: 50vw;

    &:nth-child(2n + 1) {
      flex-direction: row-reverse;
      .new-timeline__event__date {
        border-radius: 0 $bdrs $bdrs 0;
      }
      .new-timeline__event__content {
        border-radius: $bdrs 0 0 $bdrs;
        
      }

      .new-timeline__event__icon {
        &:before {
          content: "";
          width: 2px;
          height: 100%;
          background: $color2;
          position: absolute;
          top: 0%;
          left: 50%;
          right: auto;
          z-index: -1;
          transform: translateX(-50%);
          animation: fillTop 2s forwards 4s ease-in-out;
        }
        &:after {
          content: "";
          width: 100%;
          height: 2px;
          background: $color2;
          position: absolute;
          right: 0;
          z-index: -1;
          top: 50%;
          left: auto;
          transform: translateY(-50%);
          animation: fillLeft 2s forwards 4s ease-in-out;
        }
      }
    }

    &__title {
      font-size: 1.2rem;
      line-height: 1.4;
      text-transform: uppercase;

      font-weight: 600;
      color: $color1;
      letter-spacing: 1.5px;
    }
    &__content {
      padding: $spacing;
      box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
        0 18px 36px -18px rgba(0, 0, 0, 0.3),
        0 -12px 36px -8px rgba(0, 0, 0, 0.025);
      background: #fff;
      width: $content-width;
      border-radius: 0 $bdrs $bdrs 0;
    }
    &__date {
      color: $color2;
      font-size: 1.5rem;
      font-weight: 600;
      background: $color1;
      display: flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      padding: 0 $spacing;
      border-radius: $bdrs 0 0 $bdrs;
    }
    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: $color1;
      padding: $spacing;
      align-self: center;
      margin: 0 $spacing;
      background: $color2;
      border-radius: $bdrs-icon;
      width: $circle-size;
      box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
        0 18px 36px -18px rgba(0, 0, 0, 0.3),
        0 -12px 36px -8px rgba(0, 0, 0, 0.025);
      padding: 40px;
      height: $circle-size;
      position: relative;

      i {
        font-size: $icon-size;
      }

      &:before {
        content: "";
        width: 2px;
        height: 100%;
        background: $color2;
        position: absolute;
        top: 0%;
        z-index: -1;
        left: 50%;
        transform: translateX(-50%);
        animation: fillTop 2s forwards 4s ease-in-out;
      }
      &:after {
        content: "";
        width: 100%;
        height: 2px;
        background: $color2;
        position: absolute;
        left: 0%;
        z-index: -1;
        top: 50%;
        transform: translateY(-50%);
        animation: fillLeftOdd 2s forwards 4s ease-in-out;
      }
    }
    &__description {
      flex-basis: 60%;
      padding-top: 12px;
    }

    &--type2 {
      &:after {
        background: $color4;
      }
      .new-timeline__event__date {
        color: $color3;
        background: $color4;
      }

      &:nth-child(2n + 1) {
        .new-timeline__event__icon {
          &:before,
          &:after {
            background: $color3;
          }
        }
      }

      .new-timeline__event__icon {
        background: $color3;
        color: $color4;
        &:before,
        &:after {
          background: $color3;
        }
      }
      .new-timeline__event__title {
        color: $color4;
      }
      .new-timeline__event__title {
      }
    }

    &--type3 {
      &:after {
        background: $color5;
      }
      .new-timeline__event__date {
        color: $color6;
        background-color: $color5;
      }

      &:nth-child(2n + 1) {
        .new-timeline__event__icon {
          &:before,
          &:after {
            background: $color6;
          }
        }
      }

      .new-timeline__event__icon {
        background: $color6;
        color: $color5;
        &:before,
        &:after {
          background: $color6;
        }
      }
      .new-timeline__event__title {
        color: $color5;
      }
      .new-timeline__event__title {
      }
    }
    &:last-child {
      .new-timeline__event__icon {
        &:before {
          content: none;
        }
      }
    }
  }
}

@media (max-width: 786px) {
  .new-timeline__event {
    flex-direction: column;
    align-self: center;
    &__content {
      width: 100%;
    }

    &__icon {
      border-radius: $bdrs $bdrs 0 0;
      width: 100%;
      margin: 0;
      box-shadow: none;

      &:before,
      &:after {
        display: none;
      }
    }
    &__date {
      border-radius: 0;
      padding: $spacing;
    }

    &:nth-child(2n + 1) {
      flex-direction: column;
      align-self: center;

      .new-timeline__event__date {
        border-radius: 0;
        padding: $spacing;
      }

      .new-timeline__event__icon {
        border-radius: $bdrs $bdrs 0 0;
        margin: 0;
      }
    }
  }
}

@keyframes fillLeft {
  100% {
    right: 100%;
  }
}

@keyframes fillTop {
  100% {
    top: 100%;
  }
}

@keyframes fillLeftOdd {
  100% {
    left: 100%;
  }
}
</style>

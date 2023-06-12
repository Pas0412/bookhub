<template>
  <div class="recommand-title">{{ title }}</div>
  <div class="recommand">
    <div class="arrow left" @click="slide(-1)">
      <img class="arrow-left" src="../assets/arrow-left.svg" alt="" />
    </div>
    <div class="recommand-list" :id="title">
      <div class="recommand-card" v-for="(book, index) in books" :key="index">
        <book-card :book="book"></book-card>
      </div>
    </div>
    <div class="arrow right" @click="slide(1)">
      <img class="arrow-right" src="../assets/arrow-right.svg" />
    </div>
  </div>
</template>

<script>
import BookCard from "./BookCard.vue";

export default {
  name: "Recommand",
  components: {
    BookCard,
  },
  props: {
    books: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {},
  methods: {
    slide(direction) {
      const totalPages = Math.ceil(this.books.length / 4);
      const nextIndex = this.currentIndex + direction;
      const recommandList = document.getElementById(this.title);
      if (nextIndex >= 0 && nextIndex < totalPages + 2) {
        this.currentIndex = nextIndex;
        recommandList.style.transform = `translateX(-${nextIndex * 50}% )`;
      }
    },
  },
};
</script>

<style scoped>
.recommand {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: auto;
}

.recommand-title {
  margin: 20px 20px 0 80px;
  font-size: 30px;
  font-weight: bold;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-30px);
  font-size: 2rem;
  cursor: pointer;
  background-color: transparent;
  transition: opacity 0.2s ease-in-out;
  z-index: 1;
  height: 50px;
  width: 50px;
  margin: 10px;
}

.arrow:hover {
  opacity: 0.8;
  animation: arrow-slide 2s ease-in-out infinite;
}

.left {
  left: 0;
}

.right {
  right: 0;
}

.arrow-left {
  height: 50px;
  width: 50px;
}
.arrow-right {
  height: 50px;
  width: 50px;
}

.recommand-list {
  display: flex;
  width: 110%;
  justify-content: flex-start;
  align-items: center;
  /* overflow: hidden; */
  transform: translateX(0px);
  transition: transform 1s;
  margin-left: 50px;
}

.recommand-card {
  width: 400px;
  flex-grow: 0;
  padding: 1rem;
  box-sizing: border-box;
  margin: 1rem;
}

@media (max-width: 768px) {
  .recommand-card {
    width: 50%;
  }
}

@keyframes arrow-slide {
  0% {
    transform: translateY(-30px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(-30px);
  }
}
</style>

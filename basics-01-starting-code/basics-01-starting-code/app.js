const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Finish the course and learn Vue!",
      // rngGoal: this.outputGoal,
      vueLink: "https://github.com/",
    };
  },
  methods: {
    outputGoal() {
      const rngNumber = Math.random();
      if (rngNumber < 0.5) {
        return "Become smart";
      } else {
        return "Cry in the shower";
      }
    },
  },
});

app.mount("#user-goal");

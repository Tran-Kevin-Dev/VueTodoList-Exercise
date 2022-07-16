const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Work with Vue!",
      courseGoalB: "Enjoy Vue!",
      // rngGoal: this.outputGoal,
      vueLink: "https://github.com/",
    };
  },
  methods: {
    outputGoal() {
      const rngNumber = Math.random();
      if (rngNumber < 0.5) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
  },
});

app.mount("#user-goal");

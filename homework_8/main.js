const ladder = {
  currentStep: 0,
  up: function (n = 1) {
    this.currentStep += n;
    return this;
  },
  down: function (n = 1) {
    this.currentStep -= n;
    return this;
  },
  showStep: function () {
    console.log(this.currentStep);
  },
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep();

ladder.up().up().down().showStep();

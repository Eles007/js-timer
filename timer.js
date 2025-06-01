class Timer {
  constructor(displayElementId) {
    this.timer = null;
    this.seconds = 0;
    this.displayElement = document.getElementById(displayElementId);
  }

  updateDisplay() {
    const hours = String(Math.floor(this.seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((this.seconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const sec = String(this.seconds % 60).padStart(2, "0");

    if (this.displayElement) {
      this.displayElement.textContent = `${hours}:${minutes}:${sec}`;
    }
  }

  start() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this.seconds++;
        this.updateDisplay();
      }, 1000);
    }
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  reset() {
    this.stop();
    this.seconds = 0;
    this.updateDisplay();
  }
}

const timer = new Timer("timer");

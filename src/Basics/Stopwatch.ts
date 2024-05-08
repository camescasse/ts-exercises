class Stopwatch {
  isRunning: boolean;
  startTime: number;
  endTime: number;
  duration: number;

  start() {
    if (this.isRunning) {
      console.log('Stopwatch is already running.');
    } else {
      this.isRunning = true;
      this.startTime = Date.now();
      console.log('Stopwatch is now running.');
    }
  }

  stop() {
    if (this.isRunning) {
      this.isRunning = false;
      this.endTime = Date.now();
      console.log('Stopwatch is now stopped.');
    } else {
      console.log('Stopwatch is already stopped.');
    }
  }

  printDuration() {
    if (this.isRunning) {
      this.endTime = Date.now();
      const duration = this.endTime - this.startTime;
      console.log(`Current duration is: ${duration}`);
    } else if (!this.isRunning && this.endTime) {
      const duration = this.endTime - this.startTime;
      console.log(`Current duration is: ${duration}`);
    } else {
      console.log('Stopwatch is not running.');
    }
  }
}

export default Stopwatch;

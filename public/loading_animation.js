/* global document, window */

class LoadingAnimation {
  constructor(element, frames, waitingTime, dir) {
    this.element = element;
    this.frames = frames;
    this.index = 0;
    this.dir = dir || 'round-robin';
    this.waitingTime = waitingTime;
  }

  animate() {
    this.element.innerHTML = this.frames[this.index];
    this.advanceFrame();

    return window.setTimeout(() => { this.animate(); }, this.waitingTime);
  }

  advanceFrame() {
    switch (this.dir) {
    case 'round-robin':
      this.index += 1;

      if (this.index >= this.frames.length) {
        this.index = 0;
      }

      break;

    case 'right':
      this.index += 1;

      if (this.index >= this.frames.length) {
        this.index -= 2;
        this.dir = 'left';
      }

      break;

    case 'left':
      this.index -= 1;

      if (this.index < 0) {
        this.index += 2;
        this.dir = 'right';
      }

      break;

    default:
      throw new Error(`Unknown ${this.element} ${this.dir}`);
    }
  }
}

export const throttle = (func, delay) => {
  let prevTime = 0;
  return (...args) => {
    let now = new Date().getTime();

    if (now - prevTime > delay) {
      prevTime = now;

      return func(...args);
    }
  };
};

export const shouldNavShow = (scrollDown, isMenuOpened) => {
  const animation = { top: "0%" };

  if (scrollDown > 0 && !isMenuOpened) {
    animation.top = "-10%";
  }

  return animation;
};

export const requestExecuter = async (request) => {
  let data;
  try {
    data = await request;
  } catch (error) {
    throw new Error(
      "Server Error: Keep refreshing this page. We will be back soon!"
    );
  }

  return data;
};

export class Canvas {
  constructor(parent) {
    if (document.querySelector("canvas")) {
      return;
    }
    this.parent = parent;
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    parent.appendChild(this.canvas);

    this.waveLine = new WaveLine();

    window.addEventListener("resize", this.resize.bind(this));

    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.viewportWidth = document.body.clientWidth;
    this.viewportHeight = document.body.clientHeight;

    this.canvas.width = this.viewportWidth;
    this.canvas.height = this.viewportHeight;
    this.waveLine.resize(this.viewportWidth, this.viewportHeight);
  }
  animate() {
    this.ctx.clearRect(0, 0, this.viewportWidth, this.viewportHeight);
    this.waveLine.draw(this.ctx);
    requestAnimationFrame(this.animate.bind(this));
  }
}

class Point {
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.initalY = y;
    this.index = index;
    this.speed = 0.002;
    this.cur = index;
    this.max = Math.random() * 75 + 70;
  }

  update() {
    this.cur += this.speed;
    this.y = this.initalY + Math.sin(this.cur) * this.max + 150;
  }
}

class Wave {
  constructor(index, totalPoints, color) {
    this.index = index;
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
  }

  resize(clientX, clientY) {
    this.clientX = clientX;
    this.clientY = clientY;

    this.centerX = clientX / 2;
    this.centerY = clientY / 2;

    this.pointGap = this.clientX / (this.totalPoints - 1);

    this.init();
  }
  init() {
    this.points = [];

    for (let i = 0; i < this.totalPoints; i++) {
      const point = new Point(
        this.index - i,
        this.pointGap * i,
        i > Math.round(this.totalPoints / 2)
          ? this.centerY - i * 20
          : this.centerY + (i + 1) * 20
      );
      this.points[i] = point;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;

    let prevX = this.points[0].x;
    let prevY = this.points[0].y + this.clientY / 3;

    ctx.moveTo(prevX, prevY);

    for (let i = 1; i < this.totalPoints; i++) {
      this.points[i].update();

      let cx = (prevX + this.points[i].x) / 2;
      let cy = (prevY + this.points[i].y) / 2;

      ctx.quadraticCurveTo(prevX, prevY, cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }

    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.clientX, this.clientY);
    ctx.lineTo(this.points[0].x, this.clientY);

    ctx.fill();
    ctx.closePath();
  }
}

class WaveLine {
  constructor() {
    this.totalWaves = 5;
    this.totalPoints = 6;

    this.colors = [
      "rgba(244, 180, 0, 0.2)",
      "rgba(244, 180, 0, 0.4)",
      "rgba(244, 180, 0, 0.6)",
      "rgba(244, 180, 0, 0.4)",
      "rgba(244, 180, 0, 0.2)",
    ];

    this.waves = [];

    for (let i = 0; i < this.totalWaves; i++) {
      const newWave = new Wave(i, this.totalPoints, this.colors[i]);
      this.waves[i] = newWave;
    }
  }

  resize(clientX, clientY) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(clientX, clientY);
    }
  }
  draw(ctx) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
}

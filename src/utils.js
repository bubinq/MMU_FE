import { object, string, ref, boolean } from "yup";

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

export const passwordSchema = object({
  password: string()
    .required("Please enter a password.")
    .min(8, "Password must be at least 8 characters long.")
    .max(100, "Password must not exceed 100 characters.")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w]).*$/,
      "Your password must have at least 8 characters, with a mix of uppercase, lowercase, numbers and symbols."
    ),
  matchingPassword: string().oneOf(
    [ref("password"), null],
    "Those passwords didn't match. Please try again."
  ),
});

export const passwordInitial = {
  password: "",
  matchingPassword: "",
};

export const signUpInitialValues = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  matchingPassword: "",
  isOver18: false,
};
export const signUpValidationSchema = object({
  email: string()
    .email("Please enter a valid email address.")
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/,
      "Please enter a valid email address."
    )
    .required("Please enter an email address."),
  firstName: string()
    .required("Please enter a first name.")
    .max(50, "First name must not exceed 50 characters.")
    .matches(
      /^[A-Za-z'-]{1,50}$/,
      "Please enter a first name containing only English letters."
    ),
  lastName: string()
    .required("Please enter a last name.")
    .max(50, "Last name must not exceed 50 characters.")
    .matches(
      /^[A-Za-z'-]{1,50}$/,
      "Please enter a last name containing only English letters."
    ),
  password: string().required("Please enter a password."),
  matchingPassword: string().required("Please enter a password."),
  isOver18: boolean().required(),
});

export const validatePassword = async (values, setError) => {
  try {
    await passwordSchema.validate(values, { abortEarly: false });
    setError(null);
    return null;
  } catch (err) {
    setError(err.errors[0]);
    return err.errors[0];
  }
};

export class Canvas {
  constructor(parent) {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.parent = parent;
    this.parent.appendChild(this.canvas);

    this.waveLine = new WaveLine();

    this.boundResize = this.resize.bind(this);
    this.boundAnimate = this.animate.bind(this);

    window.addEventListener("resize", this.boundResize);

    this.resize();

    requestAnimationFrame(this.boundAnimate);
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
    if (this.waveLine) {
      this.waveLine.draw(this.ctx);
    }
    setTimeout(() => {
      requestAnimationFrame(this.boundAnimate);
    }, 1000 / 60);
  }
  cleanup() {
    window.removeEventListener("resize", this.boundResize);
    cancelAnimationFrame(this.boundAnimate);
    this.waveLine = null;
    this.parent.removeChild(this.canvas);
    this.parent = null;
  }
}

class Point {
  constructor(index, x, y) {
    this.x = x;
    this.y = y;
    this.initalY = y;
    this.index = index;
    this.speed = 0.006;
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

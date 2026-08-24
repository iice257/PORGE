export const lerp = (a, b, t) => a + (b - a) * t;

export const EASE_OUT_CUBIC = [0.33, 1, 0.68, 1];
export const EASE_IN_OUT_CUBIC = [0.65, 0, 0.35, 1];

// Find t that produces x and give y
const cubicBezier = (x1, y1, x2, y2) => {
  const at = (a, b, t) =>
    3 * a * t * (1 - t) ** 2 + 3 * b * t * t * (1 - t) + t ** 3;
  return (x) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let lo = 0;
    let hi = 1;
    let t = x;
    for (let i = 0; i < 24; i++) {
      if (at(x1, x2, t) < x) lo = t;
      else hi = t;
      t = (lo + hi) / 2;
    }
    return at(y1, y2, t);
  };
};

const SPRING_SAMPLE_RATE = 240;

const resolveSpring = (config) => {
  const mass = config.mass ?? 1;
  let stiffness;
  let damping;
  if (config.visualDuration !== undefined) {
    const omega = (2 * Math.PI) / config.visualDuration;
    stiffness = omega * omega * mass;
    damping = 2 * Math.sqrt(stiffness * mass) * (1 - (config.bounce ?? 0));
  } else {
    stiffness = config.stiffness ?? 100;
    damping = config.damping ?? 10;
  }
  const dt = 1 / SPRING_SAMPLE_RATE;
  const samples = [0];
  let x = 0;
  let v = 0;
  for (let i = 0; i < SPRING_SAMPLE_RATE * 10; i++) {
    v += ((-stiffness * (x - 1) - damping * v) / mass) * dt;
    x += v * dt;
    samples.push(x);
    if (Math.abs(x - 1) < 0.001 && Math.abs(v) < 0.01) break;
  }
  const last = samples.length - 1;
  return {
    duration: last * dt,
    ease: (t) => {
      if (t <= 0) return 0;
      if (t >= 1) return 1;
      const pos = t * last;
      const i = Math.floor(pos);
      return lerp(samples[i], samples[i + 1], pos - i);
    },
  };
};

export const resolveTransition = (config) =>
  config.type === "easing"
    ? { duration: config.duration, ease: cubicBezier(...config.ease) }
    : resolveSpring(config);

export const POSE_ORDER = [
  "idle",
  "compressed",
  "extended",
  "split",
  "tracking",
];

const AXIS_MARGIN_RIGHT = 40;
const IDLE_TIP_MARGIN_BOTTOM = 40;
const SPLIT_DOT_LENGTH = 0.01;

export const getPoses = ({ width, height }, geometry) => {
  const verticalAxis = width - AXIS_MARGIN_RIGHT;
  const bottomY = height - IDLE_TIP_MARGIN_BOTTOM;
  const extendedLineTop = height / 2 - geometry.lineLength / 2;
  const extendedLineBottom = height / 2 + geometry.lineLength / 2;
  const shaftPieces = linePieces(
    verticalAxis,
    bottomY - geometry.arrowLength,
    bottomY,
    geometry.dotCount
  );

  const splitBottomDotCenter =
    extendedLineBottom - geometry.lineLength / geometry.dotCount / 2;

  const dotsPose = {
    leftWing: [verticalAxis, splitBottomDotCenter, verticalAxis, splitBottomDotCenter],
    rightWing: [verticalAxis, splitBottomDotCenter, verticalAxis, splitBottomDotCenter],
    pieces: dotPieces(verticalAxis, extendedLineTop, extendedLineBottom, geometry.dotCount),
  };

  return {
    idle: {
      leftWing: [verticalAxis - geometry.wingSpread, bottomY - geometry.wingSpread, verticalAxis, bottomY],
      rightWing: [verticalAxis + geometry.wingSpread, bottomY - geometry.wingSpread, verticalAxis, bottomY],
      pieces: shaftPieces,
    },
    compressed: {
      leftWing: [verticalAxis, bottomY, verticalAxis, bottomY],
      rightWing: [verticalAxis, bottomY, verticalAxis, bottomY],
      pieces: shaftPieces,
    },
    extended: {
      leftWing: [verticalAxis, extendedLineBottom, verticalAxis, extendedLineBottom],
      rightWing: [verticalAxis, extendedLineBottom, verticalAxis, extendedLineBottom],
      pieces: linePieces(verticalAxis, extendedLineTop, extendedLineBottom, geometry.dotCount),
    },
    split: dotsPose,
    tracking: dotsPose,
  };
};

export const getTargetForState = (state) => {
  const i = POSE_ORDER.findIndex((pose) => pose === state);
  return i === -1 ? POSE_ORDER.length - 1 : i;
};

function linePieces(x, top, bottom, dotCount) {
  const step = (bottom - top) / dotCount;
  return Array.from({ length: dotCount }, (_, i) => [
    x,
    top + i * step,
    x,
    top + (i + 1) * step,
  ]);
}

function dotPieces(x, top, bottom, dotCount) {
  const step = (bottom - top) / dotCount;
  return Array.from({ length: dotCount }, (_, i) => {
    const center = top + (i + 0.5) * step;
    return [x, center - SPLIT_DOT_LENGTH / 2, x, center + SPLIT_DOT_LENGTH / 2];
  });
}

// ======================
// COMPONENT - Random Movement Generator for Background Circle SVGs
// ======================

// Select circles (Jquery)
const $circles = $(
  '.sm--full-page__background-circles circle, .sm--full-page__background-circles path'
);

// Select forms over feature icons (Jquery)
const $featureIconForms = $('.sm--features__feature-card-icon-cover');

// Create motion matrix for each circle
function createMotionMatrix($elements, directions, range, weight) {
  // Motion matrix array

  // [
  // [[15, -10],[25, 40],[-30, -15],[45, 20], ...],
  // [[25, -15],[-35, -10],[30, -25],[05, 10], ...],
  // ...
  // ]

  //  Create matrices array
  const motionMatrices = [];

  // For each circle create a motion matrix
  for (let i = 0; i < $elements.length; i++) {
    // Create matrix array
    const currentMotionMatrix = [];
    // For each direction create X & Y values for translation
    for (let j = 0; j < directions + 2; j++) {
      let motionValueXY = [];

      // Maintain position at 0,0 during start and end
      if (j === 0 || j === directions + 2) {
        motionValueXY = [0, 0];
      } else {
        // Get random integer between -4 & 4 and multiply by weight to get each X & Y value
        const motionValueX = createRandomInteger(-range, range) * weight;
        const motionValueY = createRandomInteger(-range, range) * weight;
        motionValueXY = [motionValueX, motionValueY];
      }
      // Push X,Y pairs to matrix array
      currentMotionMatrix.push(motionValueXY);
    }
    // Push matrix array to matrices array
    motionMatrices.push(currentMotionMatrix);
  }
  return motionMatrices;
}
// Animate circles with matrix values and keyframes
function createRandomMovementKeyframes($elements, name, matrices, duration) {
  // Get number of directions
  const directions = matrices[0].length;
  // Create keyframe for each element
  for (let i = 0; i < matrices.length; i++) {
    const currentMatrix = matrices[i];

    // Set up keyframes object
    const keyframesObject = {
      name: `random_${name}_${i}`,
    };
    // Set keyframe steps
    for (let j = 0; j < directions; j++) {
      // Get percent intervals for keyframes
      const currentPercent = `${(100 / directions) * j}%`;
      // Get current X,Y pair
      const currentXYValues = currentMatrix[j];

      // Add transformation for each keyframe step using X,Y pair
      keyframesObject[currentPercent] = {
        transform: `translate(${currentXYValues[0]}px,${currentXYValues[1]}px)`,
      };
    }
    // Create the keyframe
    $.keyframe.define([keyframesObject]);
    console.log(keyframesObject);

    // Add and play keyframe to each circle
    $elements
      .eq(i)
      .playKeyframe(
        `random_${name}_${i} ${duration}s ease-in-out 0s infinite normal forwards`
      );
  }
}

// Animate circles using random movements
function animateElementsWithRandomMovements($elements, options) {
  // Number of directions for random movement
  const { directions } = options;

  // Number of directions for random movement
  const { name } = options;

  // Range for movement distance values
  const { range } = options;

  // Weight multiplier for movement distance values
  const { weight } = options;

  // Duration of animation
  const { duration } = options;

  // Create motion matrices
  const matrices = createMotionMatrix($elements, directions, range, weight);

  // Animate circles with create matrices over desired duration
  createRandomMovementKeyframes($elements, name, matrices, duration);
}

$(document).ready(function() {
  // Animate background circles
  animateElementsWithRandomMovements($circles, {
    name: 'background_circles',
    directions: 10,
    range: 4,
    weight: 8,
    duration: 20,
  });

  // Animate feature icon cover forms
  animateElementsWithRandomMovements($featureIconForms, {
    name: 'feature_icon_covers',
    directions: 10,
    range: 3,
    weight: 2,
    duration: 20,
  });
});

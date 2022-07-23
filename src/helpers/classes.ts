export function applyClasses(
  classConditions:
    | {
        [className: string]:
          | boolean
          | ((fps: number, frame: number) => boolean);
      }
    | undefined,
  fps: number,
  frame: number
) {
  if (classConditions === undefined) {
    return undefined;
  }

  const classes: { [className: string]: boolean } = {};

  Object.entries(classConditions).forEach(([className, condition]) => {
    if (typeof condition === "function") {
      classes[className] = condition(fps, frame);
    } else if (typeof condition === "boolean") {
      classes[className] = condition;
    }
  });

  return classes;
}

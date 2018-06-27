class XmlStyle {
  strokeColor = "";
  fillColor = "";
  strokeWidth = "";
  lineJoin = "";
  miterLimit = "";
  dashPattern = "";
  dashed = "";
  alpha = "";
  fontColor = "";
  isFontStyleBold = "";
  isFontStyleUnderline = "";
  fontSize = "";
  fontFamily = "";
  vAlign = "";

  set align(align: string) {
    if (align && align !== "") {
      switch (align) {
        case "start":
          this.align = "left";
          break;
        case "end":
          this.align = "right";
          break;
        default:
          this.align = align;
          break;
      }
    }
  }
}

export default XmlStyle;

class Constraint {
  x: number;
  y: number;
  perimeter: number;
  name: string;
}

import Constraint from "./Constraint";

class Connection {
  name: string;
  id: string;
  constraints: Constraint[];

  /**
   * Returns the index of the constraint if it's added.
   * If a constraint with that name already exists, the new one isn't added and -1 is returned.
   * @param {Constraint} constraint
   * @returns number
   */
  addConstraint(constraint: Constraint): number {
    let isExistingName = true;
    const currName = constraint.name;
    if (this.constraints && currName !== "") {
      isExistingName =
        this.constraints.findIndex(
          constraint => constraint.name === currName
        ) !== -1;
    }
    if (!isExistingName) {
      this.constraints.push(constraint);
      return this.constraints.length - 1;
    }
    return -1;
  }
}

console.log(Connection);

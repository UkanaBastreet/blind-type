export class KeyC {
  constructor(params) {
    Object.keys(params).forEach((key) => {
      this[key] = params[key]
    })
    if (leftHandKeys.includes(params.id)) {
      this.shiftSide = "ShiftRight"
      this.handSide = "Left"
    } else if (rightHandKeys.includes(params.id)) {
      this.shiftSide = "ShiftLeft"
      this.handSide = "Right"
    }
  }
  bluelight() {
    if (!this.classList.includes("activeKey")) {
      this.classList.push("activeKey")
    }
  }
  redlight() {
    if (!this.classList.includes("wrongKey")) {
      this.classList.push("wrongKey")
    }
  }
  graylight() {
    if (!this.classList.includes("rightKey")) {
      this.classList.push("rightKey")
    }
  }
  blueOff(className = "activeKey") {
    if (this.classList.includes(className)) {
      this.classList = remove(this.classList, className)
    }
  }
  redOff(className = "wrongKey") {
    if (this.classList.includes(className)) {
      this.classList = remove(this.classList, className)
    }
  }
  grayOff(className = "rightKey") {
    if (this.classList.includes(className)) {
      this.classList = remove(this.classList, className)
    }
  }
  lightOff() {
    this.classList = remove(this.classList, "rightKey")
    this.classList = remove(this.classList, "wrongKey")
    this.classList = remove(this.classList, "activeKey")
  }
}
function remove(arr, value) {
  let index = arr.indexOf(value)
  if (index > -1) {
    arr.splice(index, 1)
  }
  return arr
}
const leftHandKeys = [
  0, 1, 2, 3, 4, 5, 6, 15, 16, 17, 18, 19, 29, 30, 31, 32, 33, 42, 43, 44, 45,
  46,
]
const rightHandKeys = [
  7, 8, 9, 10, 11, 12, 20, 21, 22, 23, 24, 25, 26, 34, 35, 36, 37, 38, 39, 47,
  48, 49, 50, 51,
]

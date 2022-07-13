export class KeyC {
  constructor(params) {
    Object.keys(params).forEach((key) => {
      this[key] = params[key];
    });
    this.isRightKey = false;
  }
  click(isStarted) {
    if (isStarted) {
      if (this.isRightKey) {
        this.bluelight();
      } else {
        this.redlight();
      }
    } else {
      this.graylight();
    }
  }
  switchIsRightKey(isRight) {
    if (isRight) {
      this.graylight();
    } else {
      this.grayOff();
    }
    this.isRightKey = isRight;
  }
  bluelight() {
    if (this.classList.indexOf("activeKey") === -1) {
      this.classList.push("activeKey");
    }
    return this;
  }
  redlight() {
    if (this.classList.indexOf("wrongKey") === -1) {
      this.classList.push("wrongKey");
    }
    return this;
  }
  graylight() {
    if (this.classList.indexOf("rightKey") === -1) {
      this.classList.push("rightKey");
    }
    return this;
  }
  blueOff() {
    this.classList = remove(this.classList, "activeKey");
    return this;
  }
  redOff() {
    this.classList = remove(this.classList, "wrongKey");
    return this;
  }
  grayOff() {
    this.classList = remove(this.classList, "rightKey");
    return this;
  }
  lightOff() {
    this.classList = remove(this.classList, "rightKey");
    this.classList = remove(this.classList, "wrongKey");
    this.classList = remove(this.classList, "activeKey");
    return this;
  }
}
function remove(arr, value) {
  let index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

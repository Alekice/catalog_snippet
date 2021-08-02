var lowerSlider = document.querySelector("#lower"),
  upperSlider = document.querySelector("#upper"),
  lowerVal = parseInt(lowerSlider.value);
upperVal = parseInt(upperSlider.value);

var min = document.getElementById("min");
min.value += lowerVal;

var max = document.getElementById("max");
max.value += upperVal;

upperSlider.oninput = function () {
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);

  if (upperVal < lowerVal + 6000) {
    lowerSlider.value = upperVal - 6000;

    if (lowerVal == lowerSlider.min) {
      upperSlider.value = 6000;
    }
  }
  max.value = "до " + this.value;
};

lowerSlider.oninput = function () {
  lowerVal = parseInt(lowerSlider.value);
  upperVal = parseInt(upperSlider.value);

  if (lowerVal > upperVal - 6000) {
    upperSlider.value = lowerVal + 6000;

    if (upperVal == upperSlider.max) {
      lowerSlider.value = parseInt(upperSlider.max) - 6000;
    }
  }
  min.value = "от " + this.value;
};

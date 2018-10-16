Vue.directive("time", {
  bind: function (el, binding) {
    el.innerHTML = Time.getFormatTime(binding.value);
    el._timeout_ = setInterval(function () {
      el.innerHTML = Time.getFormatTime(binding.value);
    }, 60000);
  },
  unbind: function (el) {
    clearInterval(el._timeout_);
    delete el._timeout_;
  }
});

var app = new Vue({
  el: "#app",
  data: {
    timeNow: (new Date()).getTime(),
    timeBefore: 1488930695721
  }
});

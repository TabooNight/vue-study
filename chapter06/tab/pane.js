Vue.component("pane", {
  name: "pane",
  template: '\
  <div class="pane" v-show="show">\
    <slot></slot>\
  </div>',
  props: {
    name: {
      type: String
    },
    label: {
      type: String,
      default: ""
    }
  },
  data: function () {
    return {
      show: true
    }
  },
  methods: {
    updateNav () {
      this.$parent.updateNav();
    }
  },
  watch: {
    lable () {
      this.updateNav();
    }
  },
  mounted () {
    this.updateNav();
  }
});

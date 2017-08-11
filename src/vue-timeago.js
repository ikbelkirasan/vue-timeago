import moment from 'moment'

export default {

  name: 'vue-timeago',

  template: `<div class="time-ago">{{elapsed}}</div>`,

  props: {
    time: {
      type: Number,
      default: 0,
    }
  },

  data() {
    return {
      now: moment().unix(),
      timerID: 0,
    }
  },

  computed: {
    elapsed() {
      var diff = (this.now - this.time) * 1000
      return moment.duration(diff).humanize() + ' ago'
    },
  },

  methods: {
    update() {
      this.now = moment().unix()
    }
  },

  mounted() {
    this.timerID = setInterval(this.update, 1000)
  },

  beforeDestroy() {
    clearInterval(this.timerID)
  }
}
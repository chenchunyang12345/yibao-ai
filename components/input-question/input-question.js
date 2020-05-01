Component({
  mixins: [],
  data: {
    inputValue: '',
  },
  props: {
    onSendMsg: () => {},
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    bindSend() {
      this.props.onSendMsg(this.data.inputValue);
      this.setData({
        inputValue: '',
      })
    },
    bindInput(e) {
      this.setData({
        inputValue: e.detail.value,
      });
    }
  },
});

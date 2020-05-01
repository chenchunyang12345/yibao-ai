Component({
  mixins: [],
  data: {},
  props: {
    questionsArr: [],
    onSendMsg: () => {},
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    bindClick(e) {
      this.props.onSendMsg(e.target.dataset.text);
    }
  },
});

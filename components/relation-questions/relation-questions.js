Component({
  mixins: [],
  data: {},
  props: {
    title: '小保为您列举如下问题可点击直接查看：',
    relationsArr: []
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

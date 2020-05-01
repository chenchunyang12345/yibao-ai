Page({
  data: {
    chatArr: [
      // 1为用户询问的话
      // 2为机器人头像
      // 3为机器人回答文本
      // 4为“猜你想问”
      // 5为关联问题推荐
      // 6为进入页面的时间
      // 7为tips
      {num: 6},
      {num: 7},
      // {num: 1, value: '你好'},
      {num: 2},
      {num: 3, value: '[姓名]上午好，很高兴为您服务！\n我是小保，【华来知识】公司专属保险小助手'},
      {num: 3, value: '我是一个非常专业的团险售后人员。对于您的保险产品，保单以及保全，理赔等内容了如指掌，并可以帮助您完成理赔申请。有问题可以随时问我哦！'},
      {num: 4, questionsArr: ['理赔申请的流程是什么', '理赔申请的流程是什么']},
      {num: 5, relationsArr: ['理赔申请的流程是什么', '理赔申请的流程是什么']}
    ],
    hiWords: '',  // 欢迎词的时间
    scrollTop: 0,
  },
  // 生命周期函数
  onLoad() {
    this.init();
  },
  // 自定义函数
  // 滚到聊天框底部
    scrollToBottom() {
      this.setData({
        scrollTop: this.data.scrollTop + 99,
      })
    },
  // 初始化
  init() {
    this.renderHiWords();
  },
  // 渲染欢迎词
  renderHiWords() {
    // 获得时间
      let nowHour = new Date().getHours();
      let newHiWords;
      if (nowHour === 12) {
        newHiWords = '中午';
      } else if (nowHour > 5 && nowHour < 12) {
        newHiWords = '上午';
      } else if (nowHour > 12 && nowHour < 18) {
        newHiWords = '下午';
      } else if (nowHour >= 18 || nowHour <= 5) {
        newHiWords = '晚上';
      }
      this.setData({
        hiWords: newHiWords,
      })
  },
  // 发消息
  onSendMsg(msg) {
    this.setData({
      chatArr: [
        ...this.data.chatArr,
        { num: 1, value: msg },
      ]
    })
    this.scrollToBottom();
  }
});

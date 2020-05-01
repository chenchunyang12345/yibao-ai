if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../components/input-question/input-question?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/bottom-btns/bottom-btns?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/top-date/top-date?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/chat-tips/chat-tips?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/bot-head/bot-head?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/bot-text/bot-text?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/more-questions/more-questions?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/ask-text/ask-text?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../components/relation-questions/relation-questions?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../pages/index/index?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/chat/chat?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/my/my?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/chatAi/chatAi?hash=05fd4c4c4a7b16e9463f1ca21c6466342fc7470c');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}
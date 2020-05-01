App({
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
    // 获取access_token
    dd.httpRequest({
      url: 'https://oapi.dingtalk.com/gettoken?appkey=dinglxnz5ittn1ojz6dv&appsecret=wBVzlFwAm5G7uaIg5laPk6Grh77854macY_SsacBu6Wozrn9EdN1jRIa7rbCfYZ7',
      success: res1 => {
        let { access_token } = res1.data;
        // 获取免登授权码
        dd.getAuthCode({
        success: res2 => {
          let { authCode } = res2;
          dd.httpRequest({
            url: `https://oapi.dingtalk.com/user/getuserinfo?access_token=${access_token}&code=${authCode}`,
            success: res3 => {
              console.log(res3)
            }
          })
        },
        fail:function(err){
          console.log('获取免登授权码失败');
        }
        })
      },
      fail: function(res) {
        
      },
    })
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});

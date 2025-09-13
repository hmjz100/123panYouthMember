<center>
	<p>“随风潜入夜，润物细无声”</p>
	<hr>
	<p>
		搭配使用，效果更佳！👋姊妹脚本
		<br/>
		<a href="https://scriptcat.org/script-show-page/1604" target="_blank">LinkSwift * 直链获取</a> | <a href="https://scriptcat.org/script-show-page/2236" target="_blank">百度网盘会员青春版</a> | <a href="https://scriptcat.org/script-show-page/2470" target="_blank">阿里云盘会员青春版</a>
		<br/>
		↓&nbsp;&nbsp;↓&nbsp;&nbsp;↓&nbsp;&nbsp;↓&nbsp;&nbsp;↓
	</p>
	<p>
		<img alt="Github Stargazers" src="https://img.shields.io/github/stars/hmjz100/123panYouthMember?label=星标&logo=github&logoColor=white&labelColor=black&color=gold&style=for-the-badge&cacheSeconds=10">
		<img alt="Github Forks" src="https://img.shields.io/github/forks/hmjz100/123panYouthMember?label=复刻&logo=github&logoColor=white&labelColor=black&color=grey&style=for-the-badge&cacheSeconds=10">
		<img alt="Github Licence" src="https://img.shields.io/github/license/hmjz100/123panYouthMember?label=许可&logo=github&logoColor=white&labelColor=black&color=grey&style=for-the-badge&cacheSeconds=10">
		<br/>
		<img src="https://img.shields.io/chrome-web-store/v/gcalenpjmijncebpfijmoaglllgpjagf.svg?label=Tampermonkey%20BETA%20篡改猴测试版&logo=tampermonkey&logoColor=red&color=red&style=for-the-badge" alt="Tampermonkey BETA 篡改猴测试版">
		<img src="https://img.shields.io/chrome-web-store/v/dhdgffkkebhmkfjojejmpbldmpobfkfo.svg?label=Tampermonkey%20篡改猴&logo=tampermonkey&logoColor=white&color=brightgreen&style=for-the-badge" alt="TamperMonkey 篡改猴">
	</p>
</center>

## 说明

基于 123 云盘下载辅助 重置
* 原作者：[保清](https://github.com/Bao-qing/)
* 原脚本：[https://greasyfork.org/scripts/510621](https://greasyfork.org/scripts/510621)（已删除）
* 原脚本仓库：[https://github.com/Bao-qing/123pan](https://github.com/Bao-qing/123pan)（已删除）
* 本脚本开源至 Github：[https://github.com/hmjz100/123panYouthMember](https://github.com/hmjz100/123panYouthMember)

## 简介

基于保清(Qing)大佬的脚本做出的小玩意，可以更换头像等，需要修改代码来配置显示内容，  
伪破解会员，仅为界面显示，只能用用超 1G 限制下载、视频倍速播放、免广告等功能  
要用加容量什么的这些基于服务器的就买会员去吧

#### 卑微的小标题

这个脚本只有一个人在修改\~如果喜欢的话还请留个 [星标](https://github.com/hmjz100/123panYouthMember/issues) 和 [好评](https://scriptcat.org/zh-CN/script-show-page/2385/comment) 哦\~  

* 如有 bug 等问题请前往 Github 发 [议题反馈](https://github.com/hmjz100/123panYouthMember/issues)

## 功能

以下是本脚本配置的一部分，光看注释就知道自定义程度有多高了
```
// 以下设置项中，常规项目（就是以//开头注释的项目）除非特殊说明，否则一般 0 为关闭，1 为开启
vip: 1, // 开启会员修改（总开关）
svip: 1, // 显示为超级会员，建议 1
pvip: 1, // 显示为长期会员，建议 1
ad: 1, // 关闭广告，仅 SVIP 有效，建议 1

// 以下是自定义项目（以/*开头注释的项目），修改也非常简单
/*
自定义用户名与头像还有邮箱、手机号、用户 ID，留空则使用已登录账号数据
*/
name: "壹贰叁的上级明赋云",
photo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd' clip-rule='evenodd'%3E%3Cpath d='M33.26 18.651 23.098 8.97s-2.103-1.86-4.08.175L30.88 20.653s-1.896 1.376-3.245 2.401c-1.155.881-1.675.73-2.83-.394-2.79-2.707-8.619-8.357-8.619-8.357s-1.318-1.998-3.427-.27c-2.11 1.727-5.182 3.774-5.182 3.774l-5.149-4.991L16.093 1.64s4.354-4.939 10.35 2.319l11.639 11.288-4.822 3.403Z' fill='%23E80808'%3E%3C/path%3E%3Cpath d='m6.757 21.345 10.161 9.678s2.104 1.86 4.08-.175L9.134 19.34s1.9-1.377 3.245-2.402c1.155-.88 1.676-.727 2.83.394 2.787 2.707 8.616 8.36 8.616 8.36s1.318 1.999 3.427.271c2.11-1.724 5.183-3.775 5.183-3.775l5.148 4.994-13.666 11.175s-4.354 4.94-10.352-2.316L1.925 24.754l4.832-3.409Z' fill='%23131628'%3E%3C/path%3E%3C/g%3E%3C/svg%3E",
mail: "", // 最好不改，修改后将拦截相关账户操作
phone: "", // 最好不改，修改后将拦截相关账户操作
id: "", // 最好不改，修改后将拦截相关账户操作
/* 成长容量等级，最高可叠加 128 级 */
level: 128,
/*
会员过期时间 格式为Unix时间戳，可留空为""
1638288000 * 2021-11-31 00:00:00 (123上线时)
2147483648 * 2038-01-19 11:14:08 (2038问题时)
253402185600 * 9999-12-31 00:00:00 (终极时)
*/
endtime: 253402185600,

// 以下的常规项目（就是以//开头注释的项目）均为独立功能，不受总开关控制
debug: 0, // 显示本脚本的调试信息到 JavaScript 控制台中，建议 0
```

## 告示
项目并未以任何形式承诺、宣传或实现对网盘会员功能的破解，亦未声称具备 “完美解锁会员功能” 等能力。  
此项目部分功能（如下载超过 1GB 的文件）仅为模拟移动端权限，该权限属官方允许范围且可能随时调整。  
请勿将其误解为本项目具备破解的功能或提供相应服务。  
任何第三方修改版本若因夸大宣传或混淆概念导致的问题，均与本脚本无关。

## AI 说明
项目仅使用 AI 辅助编码，严格杜绝 Vibe Coding；
代码均经过人工复验，品质有保障。
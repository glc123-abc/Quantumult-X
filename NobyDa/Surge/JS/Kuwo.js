/*
KuWo music unlock vip

QX1.0.0:
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Kuwo.js

Surge4.0:
http-response ^https?:\/\/vip1\.kuwo\.cn\/(vip\/v2\/user\/vip|vip\/spi/mservice) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Kuwo.js
http-request ^https?:\/\/musicpay\.kuwo.cn\/music\.pay\?uid=\d+ script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/KuWoMusicDownload.js

MITM = vip1.kuwo.cn
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/vip/v2/user/vip';
const time = '/vip/spi/mservice';

if (url.indexOf(vip) != -1) {
	obj.data["isNewUser"] = "1";
	obj.data["vipLuxuryExpire"] = "0";
	obj.data["time"] = "0";
	obj.data["isYearUser"] = "0";
	obj.data["vipmExpire"] = "0";
	obj.data["vipOverSeasExpire"] = "0";
	obj.data["vipExpire"] = "0";
	obj.data["vip3Expire"] = "0";
	body = JSON.stringify(obj);
}

if (url.indexOf(time) != -1) {
	obj["isVIPMAutoPay"] = 2;
	obj["isVIPLuxAutoPay"] = 2;
	body = JSON.stringify(obj);
}

$done({body});

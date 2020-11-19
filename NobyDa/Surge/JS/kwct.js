var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/v2/api/user/info';
const vip = '/a.p';

if (url.indexOf(vip) != -1) {
	obj.data["packs"] = {"type":2,"end":1800000000,"period":111,"bought_vip":1,"bought_vip_end":1800000000};
	obj.data["limitfree"] = 1;
	obj.data["playright"] = 1;
  obj.data["downright"] = 1;
  obj.data["policytype"] = 1;
	body = JSON.stringify(obj);
}
if (url.indexOf(vip) != -1) {
	obj.data["vipType"] = 1;
	obj.data["autoRenewal"] = true;
	obj.data["vipmExpire"] = 1800000000;
	body = JSON.stringify(obj);
}
$done({body});

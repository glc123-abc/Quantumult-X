var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/v2/api/user/info';

if (url.indexOf(vip) != -1) {
	obj.data["vipType"] = "1";
	obj.data["autoRenewal"] = "true";
	obj.data["vipmExpire"] = "1800000000";
	body = JSON.stringify(obj);
}
$done({body});

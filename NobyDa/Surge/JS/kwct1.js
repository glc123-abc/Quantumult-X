var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/a.p?';

if (url.indexOf(vip) != -1) {
	obj.data["packs"] = {"type":2,"end":1800000000,"period":111,"bought_vip":1,"bought_vip_end":1800000000};
	body = JSON.stringify(obj);
}

$done({body});

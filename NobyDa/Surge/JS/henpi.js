MITM = api3.henpi.vip
*/

var body = $response.body;
var url = $request.url; 
var obj = JSON.parse(body);

const vip = '/app/subscribe/ranking'; 
if (url.indexOf(vip) != -1) { 
obj.["is_need_pay"] = 0; 
obj.["isNeedAdvUnlock"] = "no"; 
body = JSON.stringify(obj); 
}
$done({body});

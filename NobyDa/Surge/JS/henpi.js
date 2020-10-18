let obj = JSON.parse($response.body);

const vip = '/app/subscribe/ranking'; 
if (url.indexOf(vip) != -1) { 
obj.["is_need_pay"] = 0; 
obj.["isNeedAdvUnlock"] = "no"; 
body = JSON.stringify(obj); 
}
$done({body});

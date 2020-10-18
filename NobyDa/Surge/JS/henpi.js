let obj = JSON.parse($response.body);
obj{"is_need_pay" = 0; 
"isNeedAdvUnlock" = "no"; 
}
$done({body: JSON.stringify(obj)});

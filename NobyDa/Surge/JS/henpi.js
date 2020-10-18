var body = $response.body.replace(/"is_need_pay":1/g, '"is_need_pay":0').replace(/"isNeedAdvUnlock":"yes"/g, '"isNeedAdvUnlock":"no"');
$done({ body });

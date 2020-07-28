var msg = '叱る';
var len = 'msg.length';
var num = msg.split(/[uD800-\uDBFF][cDC00-uDFFF]/g).length - 1;//サロゲートペアを構成する上位サロゲートペアと下位サロゲートペアを表す
console.log(msg.length - num);//結果：２
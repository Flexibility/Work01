//设置js方法调用的父对象为mam
var mam = {navigator:navigator}
var loadinghandle;
var headtitle = document.title;
document.title = "";
document.title = headtitle;

/***加载信息方法一**/
function loading(){
	if($('#loaddiv').length<=0){
		$(document.body).append('<div id="loaddiv" style="text-align:center;position:fixed;top:100px;width:100%;z-index:1100"><div style="display:inline-block;padding:10px;border-radius:5px;"><img id="progress_dialog_loading_green" src="images/progress_dialog_loading_green.png" style="width:50px;" /></div></div>');
	}
	$('#loaddiv').show();
	var loadingi=0;
	clearInterval(loadinghandle);
	loadinghandle=setInterval(function (){
	loadingi+=3;
	$$('progress_dialog_loading_green').style.webkitTransform='rotate('+loadingi+'deg)';},20);

}
function loading_hide(){
	clearInterval(loadinghandle);
	$('#loaddiv').hide();
}

/***加载信息方法二**/
function ajaxloading()
{
    $(document.body).append('<div id="loading_overlay" style="position:fixed;top:0;right:0;bottom:0;left:0;z-index:998;width:100%;height:100%;_padding:0 20px 0 0;background:#f6f4f5;display:none;"></div><div id="AjaxLoading"  style="position:fixed;top:0;left:50%;z-index:9999;opacity:0;filter:alpha(opacity=0);margin-left:-80px;border:1px solid #8CBEDA;color:#37a;font-size:12px;font-weight:bold;"><div  style="width:180px;height:50px;line-height:50px;border:2px solid #D6E7F2;background:#fff;"><img src="images/loading.gif" width="25px" style="margin:10px 15px;float:left;display:inline;">正在加载...</div></div>');
    $("#loading_overlay").css({ 'display': 'block', 'opacity': '0.8' });
    $("#AjaxLoading").stop(true).animate({ 'top': '40%', 'opacity': '1' }, 200);
}
function ajaxhide()
{
    $("#AjaxLoading").stop(true).animate({ 'top': '40%', 'opacity': '0' }, 400);
    $("#loading_overlay").css({ 'display': 'none', 'opacity': '0' });
}
function msg(v){
	if($('#msgbox').length<=0){
		var content='<div id="msgbox" style="position:fixed;top:50px;width:100%;text-align:center;">'+
					'	<div style="display:inline-block;width:90%;background:#fff;box-shadow:0px 0px 5px #999;padding:5px;text-align:left;overflow:hidden;">'+
					'		<div id="msgbody">'+v+'</div>'+
					'		<div style="text-align:center;padding-top:5px;border-top:1px solid #ccc;margin-top:5px;"><a class="button" onclick="msg_hide();"><span>关闭</span></a></div>'+
					'	</div>'+
					'</div>';
		$(document.body).append(content);
	}else{
		$('#msgbody').html(v);
	}
		
	$('#msgbox').show();
}
function msg_hide(){
	$('#msgbox').hide();
}
function get_obj_position(e)
{ 
	var t=e.offsetTop; 
	var l=e.offsetLeft; 
	var w=e.offsetWidth;
	var h=e.offsetHeight;
	while(e=e.offsetParent)
	{ 
		t+=e.offsetTop; 
		l+=e.offsetLeft; 
	}
	var re=new Array();
	re[0]=t;
	re[1]=l;
	re[2]=w;
	re[3]=h;
	return re;
}

function getqueryvalue(v){
	var s=window.location.search;
	var para=s.split('?')[1];
	if(para){
	para=para.split('&');
	for(i=0;i<para.length;i++){
		para[i]=para[i].split('=');
		if(para[i][0]==v){
			return para[i][1];
		}
	}
	}
	return '';
}
function Serialize(obj){ 
	switch(obj.constructor){ 
		case Object: 
			var str = "{"; 
			for(var o in obj){ 
				str += o + ":" + Serialize(obj[o]) +","; 
			}
			if(str.substr(str.length-1) == ",") 
				str = str.substr(0,str.length -1); 
			return str + "}"; 
			break; 
		case Array:   
			var str = "["; 
			for(var o in obj){ 
				str += Serialize(obj[o]) +","; 
			} 
			if(str.substr(str.length-1) == ",") 
				str = str.substr(0,str.length -1); 
			return str + "]"; 
			break; 
		case Boolean: 
			return "" + obj.toString() + ""; 
			break; 
		case Date: 
			return "\"" + obj.toString() + "\""; 
			break; 
		case Function: 
			break; 
		case Number: 
			return "" + obj.toString() + ""; 
			break;  
		case String:
			return "\"" + obj.toString() + "\""; 
			break;
	}
}
function addEvent( obj, type, fn ) {
	if ( obj.attachEvent ) {
		obj['e'+type+fn] = fn;
		obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
		obj.attachEvent( 'on'+type, obj[type+fn] );
	} else {
		obj.addEventListener( type, fn, false );
	}
}
function CurentTime() {
    var now = new Date();
    var year = now.getFullYear();       //年
    var month = now.getMonth() + 1;     //月
    var day = now.getDate();            //日

    var hh = now.getHours();            //时
    var mm = now.getMinutes();          //分

    //跨年问题
    if (month <= 0) {
        month = month + 12;
        year = year - 1;
    }
    var clock = year + "-";
    if (month < 10)
        clock += "0";

    clock += month + "-";

    if (day < 10)
        clock += "0";

    clock += day + " ";
    return (clock);
}
function clickautohide(i, m) {
    var tip = "";
    switch (i) {
        case 1:
            tip = m;
            break;
        case 4:
            tip = m;
            break;
        case 5:
            tip = m;
            break;
        case 6:
            tip = m;
            break;
    }
    ZENG.msgbox.show(tip, i, 3000);
}
//截取字符串
function getStr(str,len) {
    if (str.length >len) {
        str = str.substr(0, len);
    }
    return str;
}
//执行更有效率 
function scrollHight(elem) {
    var hei = elem.clientHeight;
    window.requestAnimationFrame(function () {
        elem.style.height = (hei * 2) + 'px';
    })
}
//环境
function HuanJingURL() {
    // return "https://mam1.ft-power.com.cn:10013"; //生产环境(业务应用)
    // return "https://mam1.ft-power.com.cn:10005";//内侧环境
    return "https://mam1.ft-power.com.cn:10030";//内部测试环境
}
/*
* @description        根据某个字段实现对json数组的排序
* @param     array    要排序的json数组对象
* @param     field    排序字段（此参数必须为字符串）
* @param     reverse  是否倒序（默认为false）
* @return    array    返回排序后的json数组
*/
function jsonSort(array, field, reverse) {

    //数组长度小于2 或 没有指定排序字段 或 不是json格式数据
    if (array.length < 2 || !field || typeof array[0] !== "object") return array;

    //数字类型排序
    if (typeof array[0][field] === "number") {
        array.sort(function (x, y) { return x[field] - y[field] });
    }

    //字符串类型排序
    if (typeof array[0][field] === "string") {
        array.sort(function (x, y) { return x[field].localeCompare(y[field]) });
    }

    //倒序
    if (reverse) {
        array.reverse();
    }

    return array;
}
/*
 * power by DZY
 * date:2016-3-23
 */
var electric = {
    //获取网络连接
    checkConnection: function () {
        var networkState = mam.navigator.network.connection.type;
        var states = {};
        states[Connection.UNKNOWN] = '未知连接';
        states[Connection.WIFI] = 'WiFi连接';
        states[Connection.CELLULAR] = '手机连接';
        states[Connection.NONE] = '网络未连接';
        states[Connection.CELL_2G] = '2G网';
        states[Connection.CELL_3G] = '3G网';
        states[Connection.CELL_4G] = '4G网';
        return states[networkState];
    },
    //移动门户提示框
    alert:function(params)
    {
        mam.navigator.notification.alert(params.mess, function () { }, params.title);
    },
    toast: function(params)
    {
        mam.navigator.notification.toast(params.mess, 0);
    },
    confirm:function(params)
    {
        mam.navigator.notification.confirm(params.mess,
                         function (e) {
                             if (e == 1) {
                                 params.okfun();
                             } else {
                                 params.cancelfun();
                             }
                         }, params.title, ['确认', '取消']);
    },
    //添加菜单
    addmenu:function(params)
    {
        mam.navigator.appmenu.addMenu(successCallback, null,params.type,params.title,params.menuFun());
        function successCallback() {}
    },
    //获取数据
    getJSON: function (params)
    {
        mam.navigator.ajax.getJSON(params.appcode,params.params, params.appservercode, params.callbackFun);
    },
    post:function(params)
    {
        mam.navigator.ajax.post(params.appcode, params.params, params.appservercode, params.callbackFun);
    },
    get:function(params)
    {
        mam.navigator.ajax.get(params.appcode, params.params, params.appservercode, params.callbackFun);
    }

}
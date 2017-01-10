//地图
$(function () {
    //地图
    // 1、生成地图
    var map = new BMap.Map("maps");

    // 2、设置中心点坐标和缩放比例
    var oPoint=new BMap.Point(116.479354, 39.997747);
    map.centerAndZoom(oPoint, 18);
    // 3、添加标注
    var marker = new BMap.Marker(oPoint);   // 创建标注
    map.addOverlay(marker);                 // 添加标注
    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
    map.enableScrollWheelZoom(true);
    var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
    // var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}); //右上角，仅包含平移和缩放按钮
    (function add_control(){
        // map.addControl(top_left_control);
        map.addControl(top_left_navigation);
        // map.addControl(top_right_navigation);
    })()
});
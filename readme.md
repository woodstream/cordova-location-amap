# cordova-location-amap

## 说明
重复造轮子的原因：基于高德原生sdk封装的插件，要么是库太旧（半年以上），要么ios没有集成Amap的定位SDK，而是借用cordova-plugin-geolocation

## 描述
高德(amap)定位cordova插件，采用高德(amap)最新的api版本。

---

高德地图定位 SDK V3.8.0 2018-02-01
功能
1、支持使用前台服务通知的方式规避Android O对于后台连续定位权限的限制。

2、新版H5辅助定位，支持https，支持连续定位、GPS定位等。

3、问题修复，性能优化。

---

高德地图iOS 定位 SDK V2.6.0            2017-12-28
解决问题

1、新增设备朝向的heading回调，可以AMapLocationManager 中相关heading方法获取到设备的朝向；

2、新增地理围栏暂停监控的方法；

3、新增支持逆地理信息的语言设置；

4、废弃旧版AMapLocationManager中的围栏方法，替换为AMapGeoFenceManager的方法。具体请参考详细文档说明；

5、问题修复。

## 安装

    cordova plugin add cordova-location-amap --variable ANDROID_KEY=高德网站申请android证书 --variable IOS_KEY=高德网站申请IOS证书

## 方法
- 获取当前定位
`cordova.plugins.aMapLocation.getCurrentPosition(success, fail);`

- 启用定时获取定位，interval参数仅支持Android，单位为毫秒，需要大于1000毫秒，success方法定时得到位置信息回调
`cordova.plugins.aMapLocation.watchPosition(success, fail, interval);`

- 关闭定时获取定位
`cordova.plugins.aMapLocation.clearWatch(success, fail);`

## callback function have a params

### success callback params properties
	#### locationType  获取当前定位结果来源，如网络定位结果，详见定位类型表，仅支持Android
	#### latitude  获取纬度
	#### longitude  获取经度
	#### accuracy  获取精度信息
	#### speed  获取速度信息
	#### bearing  获取方向信息
	#### date  定位时间
	#### address  地址详情
	#### country  国家信息
	#### province  省信息
	#### city  城市信息
	#### district  城区信息
	#### street  街道信息
	#### streetNum  街道门牌号
	#### cityCode  城市编码
	#### adCode  地区编码
	#### poiName POI名称
	#### aoiName AOI名称


### fail callback params properties
	#### code
	#### message

### example
	cordova.plugins.aMapLocation.getCurrentPosition(function(response){
			console.log(response.locationType);
			console.log(response.latitude);
			console.log(response.longitude);
		},function(response){
			console.log(response.code);
			console.log(response.message);
		})

### Supported Platforms
- Android
- iOS
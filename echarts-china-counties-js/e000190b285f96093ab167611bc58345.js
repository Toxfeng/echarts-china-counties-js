(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('花王堂区', {"type":"FeatureCollection","features":[{"id":"820002","type":"Feature","geometry":{"type":"Polygon","coordinates":["@@MK@CA@AAGDEB@NVFJG"],"encodeOffsets":[[116281,22734]]},"properties":{"cp":[113.549052,22.199175],"name":"花王堂区","childNum":1}}],"UTF8Encoding":true});}));
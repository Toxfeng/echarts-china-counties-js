(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('瑞昌市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"360481","properties":{"name":"瑞昌市","cp":[115.681335,29.675834],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@AAAACC@ABA@@A@ACAA@@AAA@@AA@@C@A@CAA@ABA@@@@A@AA@@@A@A@ABA@A@@@A@A@@AC@A@@AAAA@A@@@@A@A@@@@@AA@@@AA@@@AB@@A@@@@AA@AA@@AB@@@B@@@@@@@BA@@@@@@B@B@@AB@@A@A@ABA@@BA@A@@B@@@@A@A@ABA@@@@A@@@@C@A@AB@B@@@@@B@@ABA@@BA@@@A@A@@@ABAB@@CAA@@@A@BA@@AA@@@@@A@@@A@@@@@AA@A@A@A@@@A@@@A@ACAA@@@@@@@@BABA@@AA@@AAA@@@AA@@BA@@@@BA@@@A@@B@@@@C@@@@AAAA@@AACC@@@AAA@@A@@A@@AA@A@@@ABAB@@A@A@A@A@@AAA@A@@@A@@@BA@@AAAAB@BA@@@C@@@@D@BA@@@A@@@AA@@@@A@A@@@@BAAA@@@AA@@@AA@@@A@@BA@@AC@A@A@@@A@@@AA@@@@A@@@C@@@@AA@@A@@@AAA@ABAB@@A@@@AB@B@@A@AB@@A@@@ABA@@@A@@@@@@@A@CBAA@@@BA@@A@A@A@@@@A@@@@@AB@@@@AB@@@AA@@@A@@A@@A@@B@@@B@B@B@@A@@BAAAA@@AA@@@AA@@A@@@@A@A@@@AB@@@@CA@@A@@@A@@@@B@BAB@B@B@@@@@@AB@@@BB@@@BB@B@@AB@@@@@@@B@@@B@@A@A@@B@@@@A@A@A@@A@@AA@@AA@@A@@@A@@@A@@@@BAB@@@@A@A@A@@@A@CA@@@@@@A@@@@@CBA@AAA@@BA@@B@@@B@@@@A@@BA@@BC@@@@@A@@@AB@@@@@B@@@B@@C@@@A@@B@@@@@@@BA@@@@B@B@@B@@B@B@@A@BB@@A@@B@@@B@@@BB@B@@@@@@BBD@@B@@B@@A@@@@@AB@BB@@BB@@B@@@B@@@@@BB@@D@D@BB@B@@@@@BDB@@BBB@@@B@D@@@BABABAB@B@@A@AB@B@B@B@B@D@@@B@B@BBB@@BB@@@BBB@B@B@@AF@BA@@B@@@@@BABA@@B@@CB@@A@@@C@C@AAAA@@A@@@A@@@CBA@ABA@@@@@@AA@@@@B@BBB@B@@@B@@A@@B@@@@AJ@B@@B@@@@@@@BBBB@@B@@@AB@B@B@@B@BB@@BB@@B@@@BB@B@@@B@@@D@B@@B@BBBB@@BB@B@@B@@BB@@BA@@B@@C@A@@@ABCD@@A@@B@B@@AB@@C@A@@@@@@BA@A@AA@BA@A@CA@AA@@@@@@@@AA@A@A@C@A@@@A@@AA@A@@@@@@BAB@@A@@AABCA@@A@A@A@C@A@@AA@A@AA@A@AAA@@C@@@AB@@AB@@A@@@A@A@A@A@AA@AAB@@A@@@A@A@A@@@C@E@AAAAC@A@@@AAABE@@@A@@@A@@@A@A@CA@AAA@A@@BABAB@BAB@@@BA@@@AAA@@A@@@CBA@A@@@@B@@ABABABC@AB@@AA@BA@@BC@@@@@AA@AA@@@@@AAA@@@AC@@@@@A@@@AAA@@@AAC@@@AAAA@@@AC@AAAAA@@@@CBCBABA@CBC@CD@@A@A@A@AB@B@@@BBB@@@@@BC@@BAB@@A@@BIFA@AB@@@DCBC@ABA@AA@@@@@AA@C@@@A@@@A@@@ABABA@C@C@AB@@AB@BABA@@BA@A@ABAB@@A@@BA@@@@@IHDDDD@JEJCJBHAH@J@H@JBF@BBJFJ@BA@@B@F@@@@@BA@ADAB@@@@@B@B@@@B@@@@@@@@DB@@B@B@@B@@@@@B@@@BA@@B@B@B@BBB@@BBB@HD@@@@B@@@@B@@@@B@@@@@B@@@@@BA@@@@B@@BB@@@BBB@B@@@@@@FAFA@ADGBEBEAEAEAGAG@E@A@@AEAAAAAC@@A@@A@@@@@@@A@@@@@A@A@ABCBCBCBA@A@CB@BABB@@BHBJBBBB@@B@@@@AB@@ABAB@B@BDF@BBBBBB@BBBBBB@B@BA@ABA@@@A@@B@@@D@B@@BD@B@B@BAD@B@B@BBBBBBB@BB@B@B@BBBB@@DDBH@D@F@BADGDC@A@ABE@EAIBE@EBGFCDEFABAHAD@FBFBFDFBBFDFBL@HELGDEDCDIJIFEJCHAJ@J@B@F@JCDABAH@JDHBJAP@NBL@HAJALCHDJBNBLDNBJ@HAFABG@G@IEGAGBKDEBCHGFAH@@@B@FC@AB@@AB@@@B@@BFH@BDBB@BB@@B@D@@@BFB@DD@@BD@@DBB@@@@B@D@@@@D@B@DABA@@B@@@@@@BB@BA@@B@@@BBB@BBD@B@FFDHHDPFD@D@FADBBBBBB@BABA@@B@@@DB@@B@DADCBA@@BBBBBB@BBB@BAB@BFBBBBBNNFFBBJD@@DBDBFFB@BB@@BAD@@@B@@@@@HH@B@B@@HFJDDDDDDFDFDDBFHFHHHHBBFF@BDBDDHFJFJDFFHDHD@BHFFFDFCV@@@FELAHBHBJDHDHDH@DAHBFBFBJ@HFH@@HFBDHDFBD@DBFBPDBAB@BA@@@@@@ABAD@BBB@B@F@@BB@@@@@B@@BB@B@@@BDJ@BB@F@JAF@B@JANAPBD@J@B@D@F@JBD@H@LB@@L@B@L@P@D@HBL@D@J@DBF@JB^DFBFBF@FBJ@DB@@BM@C@A@AB@@A@A@A@@B@@A@@@A@@BA@@@C@A@A@AB@B@@@@@BAB@@@@@AC@@BA@ABA@@@@BA@ABA@A@@BC@@BADEBADADABABA@A@A@A@@@AAA@A@@BABAFCDA@AFE@ABABAB@FEBABAB@NGFEDABAFABAD@BA@@DCBCFK@@@C@@@AAA@ACCAACCGEAAACAA@@AA@@A@@A@C@@@ACAAACEAAA@@EBA@@D@D@DBDADA@@@A@A@AD@@@@@@A@AA@A@@A@@@AB@BAB@BA@@@@CAAA@@A@CB@@AA@@@BA@AA@@@ABA@AB@@@@@AA@@AA@@@C@A@A@C@@AAAAAA@@BAA@AA@A@@BA@@B@@A@@B@@ABB@@@@B@@AB@BCB@@@@@@A@@B@B@@@B@BABB@ABB@@@ABA@CBA@@DAB@@@@@D@BBB@BBB@@@BA@@BBD@B@@@B@@@F@HBD@@@@@@AB@BA@BD@@@B@D@@@B@F@DBD@B@D@BB@@BBB@@@BBFFB@BBLH@@B@FA@@@A@@AAEE@A@@@ABCBEBC@C@A@@AA@@@@ABAB@B@@C@C@A@IBA@A@A@CAAAAAA@AC@@@@@AB@L@FA@@B@@A@@@CAA@@A@A@A@A@AAAA@@A@AAA@A@@@AA@@AAA@CBA@@AA@@@AAC@A@@@ABA@ABA@@@A@@@A@A@@AA@A@@AC@E@AAA@@A@@ABA@@@@B@JA@E@@@AEAA@@ACA@@@A@@ACAAA@@@A@@@A@@A@@@AB@@@B@@AB@@A@C@A@CAEA@@AAAAAA@@@A@ABA@AAA@@AAA@A@A@@@@@@BBJ@B@@@@@BEBA@AA@@@AAA@AAA@AA@@@CA@@@AA@@EAABA@@B@@@DB@A@@@A@@BCBA@@B@@AB@@A@A@A@A@@A@A@@@A@A@C@ABA@AAI@@@ABCC@@@@AAA@@@DCAA@@A@AA@AA@@AB@@@AAA@AA@@A@@@A@A@AA@@@@A@@@AA@@@BA@@@A@@@@AB@@@BA@@@A@@@@BCDAA@@@AAA@@@@@@@A@A@@@AB@@AB@@AD@B@B@D@@@@ABA@AB@@@@AA@@@@@A@@A@@@@AAA@A@@AA@A@@A@@@AB@@AACA@@BCB@@@BC@@@@@@A@A@@@@@A@A@@@@@@@@A@@@C@@DA@@@AA@@AA@A@A@A@@@AB@@ABAD@@@@GA@BAAA@@@@@@B@D@@@@@@C@A@@@A@AA@AAA@A@@@@A@AA@@AB@@AAA@@@A@@@AAAA@@BABA@@@@@A@A@A@@@ABA@@AAA@@A@@BA@A@@AAB@@ABA@@B@@@BAB@@@DA@@DB@@B@@@@D@@BA@@BA@@BA@@@@@AB@@ABA@@@@BAA@B@@A@ABAB@@CB@@@B@@@BAB@@@@AB@@A@@B@@@B@BC@@B@BA@A@AB@@AB@@A@ABA@@DAB@B@@A@A@A@A@@@A@A@@@AD@@@BA@A@@@AAC@@BA@AB@@A@@BC@A@@@A@@B@@@B@@AB@DCB@BABBB@@AB@@B@A@@@A@@B@@@@CB@@A@@AA@@A@EA@@A@@A@@@ABA@@B@@@B@@@@AB@BCB@@A@AB@B@BABA@@@A@A@AAAA@@A@@@CA@@@AA@@A@A@@@ABA@@@@BA@A@CA@@AAC@AAAACC@@A@A@A@AAAA@@@BA@A@A@C@A@@@@@CB@@@AC@@@AB@@A@@@@BA@@@CCA@A@A@C@@AA@A@AAA@A@A@@@@@@@AA@@@@A@@@AAA@AA@@@AA@A@@AA@A@@@AAA@A@@@A@C@A@A@@AA@ABA@C@A@@@@BA@@A@@AAA@CA@AA@@@AAA@A@A@AAA@A@AACA@@C@@@@@@@@B@@@BDHBB@B@B@@A@@@CAEACACAAAA@A@GBA@AAA@@@A@A@A@AAA@AAC@@@@@@C@@B@BC@@BA@@@@@A@@@AAC@C@AA@AI@A@A@@BA@ABA@@@@@@@@@A@@BA@@B@@@@@@A@@B@@@CC@@A@@@AAA@@AC@AAA@@@ABA@@@A@CA@@@B@BBBABA@@BA@@@A@@@A@@B@@@@A@A@AB@@AB@@@@BDB@@B@B@@A@@BCBC@@@E@@@A@@D@B@B@B@B@@@B@B@@@B@@@@C@C@AAAA@@A@A@A@AAA@AAA@@@AAA@A@AAA@CAA@CAA@A@AA@@A@A@A@@@CCCA@@@@@@@@CA@@A@@@ABABABA@@@AAC@@@A@AB@@CAAAA@A@@@A@@@@@A@@AABAA@BA@ABAB@@A@AAAA@@@A@@A@CA@@CA@@A@@AA@@@@A@@@@@@@AAAAAA@@@C@@AAAAA@@@@@AB@@A@CB@@A@@@A@AA@AA@@E@@AA@CA@@B@@A@@@A@@@A@ACABC@@@A@@@A@@CAAAA@C@C@AAE@@@@AA@@A"],"encodeOffsets":[[118219,30176]]}}],"UTF8Encoding":true});}));
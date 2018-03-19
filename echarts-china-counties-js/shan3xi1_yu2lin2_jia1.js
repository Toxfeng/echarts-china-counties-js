(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('佳县', {"type":"FeatureCollection","features":[{"type":"Feature","id":"610828","properties":{"name":"佳县","cp":[110.491345,38.01951],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@A@BA@@@AB@@@@@AAA@CAA@@C@@AA@@A@@AA@BAA@@BA@@B@@@@@B@@A@AB@@AB@@ADA@CF@B@BAB@@ABC@AB@BA@@@CCA@A@A@@BA@@B@@AB@B@@@@CCA@A@A@@@A@@A@CCA@@A@@@A@A@@@A@@@GB@@@A@A@A@@@AB@@ACAC@@@@F@F@@@@@@AC@AAA@@AA@@B@@A@@@@A@@@AA@A@B@@A@@@@BDBABBB@B@@BBBB@F@@@@CBA@@B@@@@BBBB@@@B@@A@ABA@A@CA@BA@AB@B@B@BAD@BABAB@@C@@@@@@B@@@@@BA@@B@D@B@@BBA@@B@@@BB@@@@@B@BA@@B@@A@@@@BB@B@BBB@BBBAB@@@B@@B@@@@B@@@@@B@@@@ABA@@@@@@@BB@@@@@@@BA@@@@B@@@@BB@@@@@@BA@@@@@@BBABABEDA@@AAAA@@@A@A@@@@BDB@@@@@B@@A@ABA@A@AB@@@BBB@@AB@@@@@@A@@@ABABAH@@@BA@@@A@@@A@@@BD@@AB@BABABA@@A@@A@@AA@BC@@BA@@@@CA@@@A@@@AA@A@BA@@AAA@C@A@@@@@BA@@@@@@B@AA@@@@AA@@A@@@@@@@@A@@@@A@@@@@A@@BA@@BA@@B@@AB@@BB@@@@@B@BABC@@B@@BB@@@@@B@@ABAB@BAB@B@@@@DDB@B@D@BB@@@@B@@@@@BA@@@A@@B@@@B@B@@@BB@@@B@@@@BB@@A@@@@B@@B@BBB@@@A@@@@B@@A@@BA@@@AAA@@B@B@@@DAH@@@B@BAB@B@@AB@@@@@BAB@BA@@@@BA@@B@@@@AB@@@BAB@@AB@@A@@BA@CBAB@@@BA@CA@@A@@@@BA@@AAB@AAA@@A@@@@BCD@BABA@@@@@@@@@@A@AB@DE@@AA@@@@@BCBAB@@A@@@@@A@A@@@@@@B@B@@@BCAA@@@@@@B@@BB@B@@A@AB@@ABAB@@BB@@BB@BBB@@@@AB@@@B@@A@@@@AAAA@@A@@A@A@@@@BB@BBB@@BBB@@A@@@@@AA@A@@@B@@@B@B@@@@@B@@@BB@AB@@@BA@B@@B@@@@@B@@@B@@@@@BA@A@@@@A@@@@@AA@@@@@@@@A@@B@@A@@C@@AA@@@AB@@AB@@@@@AA@@@A@@AAB@@@@BB@@B@@DA@@@@@BBA@@@A@A@A@A@ABEBCDA@@B@@AB@@AA@@@B@@AB@@@@@C@@A@@@@B@B@@A@A@@BA@@B@B@@@BA@A@@@A@@AA@@A@@@@AAA@@@@@AA@@B@@A@@@BB@D@@@@@@A@@@@@AC@A@@@AA@@AA@@@@A@@BB@@B@@A@@@@@@@A@@@@A@@@A@ABA@@@AA@@BA@@B@@A@A@A@@@@A@@@@B@B@@@@A@@AA@AA@@@AB@@@@CB@@@@@BB@@@@B@D@B@@@@ABA@A@@BA@@B@@A@@@A@AB@@B@B@BBA@@@@@@B@@A@A@@@A@@@C@A@@@@B@@@@@B@B@@A@ABA@@@@@@@@B@@D@@A@B@@BB@BB@@@@@BE@@@@B@@@B@@B@@@BAB@B@@@@A@@@A@@FABA@AB@@AB@@@@A@@@@A@@@AB@@@@A@A@@AA@@@A@@A@@BA@A@A@@@@@@@@@@BBBBB@B@@@@@@A@CA@@AB@@A@ABA@@DAB@@A@@BAB@B@@AB@B@@ABA@AB@B@B@B@@AB@B@@A@@@@@A@@DA@@@@@A@A@@@AB@BAB@@AAA@CAE@CA@B@@ADAD@BAB@@@BBB@@DBB@BBB@B@@B@BB@@B@BA@A@@@A@@@AB@BA@@B@@B@@@@@@@@BA@ABA@A@@@@@AA@@@@@B@@@@A@@@@A@A@A@A@@@@AB@@@BAB@DB@@DA@@BA@@B@@BBB@A@AB@B@B@BBB@B@B@B@B@B@@AD@B@@B@@B@B@B@D@B@@@@A@@@A@@@@BABABBFAB@@AB@@AB@@AB@@B@@B@B@@@@ABA@@B@@A@CAA@@@A@@@@A@@B@AA@A@A@@@ABA@@A@@AA@@@AC@A@A@ACAA@EA@@A@@@A@@BABA@A@CBA@@AA@A@A@@@@AA@@@@ABA@A@@BA@A@@A@@@CFABA@@@A@@@@A@@B@DC@@@@@A@@@AA@@@A@ABAB@B@DA@@BA@@BA@@AA@@@ABAB@@A@A@A@@@@B@@@@@BD@@@@B@@@BB@@@BBB@B@@@@B@@@@AB@@@@@@B@@B@@@@@B@@A@ABA@A@@@@@@A@@@A@@A@AB@@@@@BA@A@A@ABC@@@AB@@@@B@@B@@AB@@A@@@@A@@@@A@@B@@@B@B@BA@@BA@@@A@A@ABAA@@@@A@A@@@A@@A@AA@@@A@@@A@@BAFAD@@@B@@@@B@@@B@@@B@@@AB@B@@@@A@AA@B@@A@A@ABAB@@AFA@@B@@A@C@@@C@@BAA@@A@@@CB@@@@A@@B@@A@@@A@@@A@@@AAA@@@A@A@@@A@@@@@A@A@@@AAA@A@@@@AAAACAA@C@@@AA@ABE@@@E@@@ABABC@@AC@CAA@A@@@@B@@@BBBDDBB@D@@@@AB@B@@BB@B@BA@ABC@@@AA@@@A@@CACA@@A@AA@@@A@@@@BA@A@AA@@@A@@@C@@BA@@A@@@@@A@@@AA@EAC@A@AB@@@@@B@@@@BBAB@@@B@B@B@BA@@@@B@@@BB@@@DBD@@@@B@@@@A@@B@@@BAB@@BB@@@BB@B@@B@@@@BBB@@@DB@@B@@B@@@BBB@@@B@@@B@@@B@BBF@B@B@@@@ABA@A@C@A@A@@@@BAB@BAB@@@@D@@@@D@@B@@B@BCDABCDABABA@ABC@G@CB@ACA@@C@@@A@@@@BBF@@@B@@B@@D@B@@@BBDA@ADA@@BA@ABA@A@@@A@@A@@A@A@@@A@@B@B@B@B@@@@@BA@AB@@A@@@A@A@AAA@@BABA@A@CAC@A@A@A@@@AAA@C@A@A@@B@@A@@@B@@@@B@@@@@BBB@BAB@B@@AB@@CA@@@B@@@B@@AB@@ABABABBBBB@B@@@B@@D@@BB@BD@@A@@@A@@@A@@@C@A@@@A@A@CB@@AB@@@@CBB@@@B@@@B@BBBB@@A@AAA@@@@@@@AB@B@@@@A@@BB@@B@@@@A@@@@B@B@B@@@B@BBB@@@@@B@B@@@B@B@BA@@@EBCBA@A@AD@@@BAB@@A@@B@@@@BB@F@BBB@B@@B@@@@@DA@@B@@B@B@BA@BB@@@D@@@B@@@@A@BBA@@B@@ABA@CBEBA@A@ADABABA@CBAB@@ABCB@BA@AB@B@@AB@DA@BB@@@ABA@@B@BBB@@B@@@BBB@@@B@@@BB@BB@@B@BAB@B@@BAB@@@BCFA@@BA@A@A@@@@BDB@@@@@BA@A@@@ABAB@@@@AD@@@@@BA@A@@@AB@@@B@@@B@@AB@@AAA@AAAAAAA@@@@@A@AB@@AB@@@B@@CBABA@A@ABA@@BABA@AB@B@B@BABA@@@A@@@AA@@AAA@AA@@AA@@@@A@@@B@AB@@@B@@BDBB@BB@@B@@@B@B@@B@@@@@B@@BB@@@B@HC@@BBB@B@@B@BA@ABE@ABA@A@CBA@A@@@@@@@@DB@@A@B@@@@@@@@@BB@@@@@@@@B@B@@ABA@A@AAC@EBA@A@@B@B@B@@D@D@@@@@@@ABA@ABA@C@C@ABA@@@A@@A@@@A@@@AC@ACA@@@A@@@A@ADA@@B@@@@@@A@A@C@A@@@AB@B@@@D@B@BAB@@@BCBA@@@@B@B@@@BB@@B@@AB@@@@B@@B@@@@@BA@@B@B@@BD@B@@@B@B@B@@@BAB@B@@@B@@@BBD@BB@@BBBBBD@B@@@DABBA@@@@@BBBBB@@@BA@@@@@B@@A@CBA@AD@@AB@BA@A@@@A@A@AAA@@A@@@AA@@@@@C@@BA@@BCB@BAB@BA@@BAF@@@@AA@@C@@AA@@@AA@AA@@@A@@D@BAB@DA@@BA@@B@@BBH@@@B@@BA@@BB@B@B@B@BAB@BD@B@B@@B@@@@D@@BB@BB@@@B@@BB@@@B@@@@ABB@@@@@@CBAB@@A@@B@@AB@@@BB@@B@B@@AB@@@BAB@@@@@B@@A@AB@@B@@@CB@@@@@B@@@@A@@@@@@@@B@@@@A@@B@@@B@@A@@@@B@@@@B@@@B@D@@BB@@@@B@@@B@@AB@BA@AB@B@@A@A@AAA@@@@@@B@@@@@@B@@@BB@@@BBB@@AB@B@@BB@@@@FAB@@@B@@DBB@@@BA@B@@@ABAB@@@B@BCB@BBB@@@@@@@@@B@@@@@B@@ABBB@@@@@@@B@@@@@B@@ABA@@B@@@@B@@@B@@B@@ABABCB@BAA@B@@A@A@@@A@@BA@@@A@AB@@@@@B@@B@@@@@@B@B@@@@B@D@D@FAF@B@@@@@BB@BBD@@@@ABA@ABA@AB@B@@B@@@BA@@B@@@@@@BAB@BA@@@@@@@B@B@@B@@ABBB@@AB@BDF@@B@@@@@DAB@@@D@@@B@D@BB@@BBBAB@@ABA@@BA@@@@@A@@B@@AB@@A@@@@@@@A@@@@@A@@B@@A@@B@@@B@B@D@BAFA@@@@B@@B@@B@BAB@@AB@@@B@@@@B@@ABABAB@BA@ABAB@@BBBB@@B@BA@@B@@B@@AB@BBB@BB@@@@BBDBBBB@B@BA@AB@@A@AA@@A@@BA@@B@BB@@@B@@@D@B@@B@@AB@@A@BB@@@@BAB@@@@BB@@@@@BC@@@@@@BB@@@B@@@D@@AB@@@B@@@@BB@@@@@BB@@@@@@@BB@@@B@@AB@@@@@@BB@@B@@@BA@@B@@@@B@@ABABCB@BA@@@A@@AA@@@A@@@A@@B@BA@B@@BB@BBB@B@@@B@@BB@@@@B@@@B@B@@@BB@@D@@@B@@@BBB@@BD@B@@@@DA@@BAD@@@B@@B@@@B@@@@@@B@B@@A@@@A@@@AAA@@@A@@B@BAD@B@@@@B@B@@@@B@B@@@BA@AB@@AB@@AB@B@B@D@@@@A@A@A@A@@B@@@B@@BBBB@@@BA@@A@@A@A@@@@@@B@B@@BB@B@BB@@BABAB@B@BAB@B@BA@@@ABA@A@@B@B@@@@AA@@@A@AB@@AAB@@A@@AA@@@@B@@ABB@@@@BA@@B@@B@@@B@@@@B@D@B@B@BCB@BAD@@@@@@@BA@@BA@@B@DAB@@@FABA@B@@@@BB@@B@@@B@@@@DB@@@@BBB@@@BB@ABB@@@BB@B@D@B@@BB@@@@@@@AB@@@@BB@@@BB@@@B@@@BB@@B@@@@B@@@@B@@@B@@@D@B@BA@@BABCBABA@A@A@G@@@@@@@@B@@BB@@B@BBB@B@B@@AB@@AB@BB@@BBD@BB@@@@@BBB@@@@@AB@@AB@@@B@@BB@@@BDB@@DB@@BB@@@@@BAB@@AB@BA@@B@@@B@@@B@BBB@D@FAB@@@BA@@B@B@D@@BD@B@B@@A@A@@@@@CBA@@@@@CAA@@@A@@AA@@BA@@D@BAB@BAB@B@@@B@B@BABB@@B@@@@@@@B@@ABAB@@ABABAB@@@DA@AB@B@D@@AB@@@@@@@@@DB@@B@BB@@BB@@B@D@B@BA@@B@@B@@@B@BA@ABABA@@@A@@@BBB@DBD@BB@@BB@@@BA@AAAB@@A@@AAAA@G@@@ABA@@@C@CA@@A@AB@@@BBB@BB@FB@@B@@B@@@B@B@@@@DB@@B@BAB@B@B@@@B@BA@@DADAB@B@B@@@@BB@DB@@@@@BB@@BB@@BHBB@@B@@AB@@C@@B@@@@@@B@DAB@@@@@@B@@@BD@@@@@@@@BABAB@BA@AB@@@BB@@@@B@@CD@@@@@D@@B@@BB@BDBB@@BBA@@BC@@@C@AB@@@@@B@D@B@@@@BBBBBBD@B@@@B@@B@@@B@@D@F@B@DBBB@ABA@A@A@A@@@A@@BA@@A@@A@@@A@@@AAC@@B@B@@A@@@@BA@@@@BA@@@@@@BA@@B@@@@AB@@AB@@A@@@@D@B@BCB@@AB@@@A@@@C@@@A@@@@A@@@A@A@@@A@@@@@@@A@@@@@A@@@@B@@@@@@@@A@B@AB@@@@@@A@@B@@@B@@A@@BAB@@@@@@@B@DB@@@B@@@@@@A@A@@@@BB@B@@BDAB@DAB@B@@BBB@B@@@@A@@@AB@@A@AA@@A@A@@B@@BBFD@BB@@BB@@@BAB@@@B@BA@@@@@@@@B@@@B@@@BAB@A@B@@@B@@@@@@AB@@@@AB@@@@AB@B@DBB@@@B@B@B@BB@@@B@@AB@@@@B@@@D@@@@@@A@@@ABA@@B@@A@AB@B@@@@@@@BA@@B@@@BADA@AHAB@B@F@B@DBBBB@B@@BB@@@B@@B@@@@B@@@BB@@B@@@BBB@B@@B@@B@B@@BBB@@B@B@@@B@@BD@BB@@B@B@B@@BB@B@B@@@@@BB@@@BB@@@BBB@BB@B@@B@@B@BA@BB@@BB@@B@@@BB@@@@C@@BA@CF@BAD@B@@B@@@@@DAFGBA@@@@BBB@BB@A@@@ABAB@@AB@@@B@@@@@AD@B@@B@B@B@@BB@@BB@B@B@@@@@@BAD@@@B@@B@@@DAB@@@BA@@B@@BB@@B@@@B@@@BB@BFBD@@@B@@@@D@B@B@@B@@@B@@AB@@AB@@@BB@B@FBDBBBB@B@@@DAB@@ABAB@F@BAB@AA@ACCCCA@AAAAA@@A@@@A@@BA@ABAB@DAD@B@D@BBJDB@@@@@B@@AB@AA@A@AAAAAAACC@@@@@ABA@@@@BAD@DBB@FBHBBBDB@@BBBA@@B@DC@@BA@A@E@A@AAAA@CACAG@AA@@@@@AAABA@CBE@ABA@CB@@ABA@AB@@@B@@@B@@BDB@DDD@B@@B@FBB@@@D@B@@ADADCBA@A@@@A@AACCCCACCCAA@A@@A@@AA@@@A@AB@BADAFADAD@BADBB@B@BAB@@A@A@@BA@A@@@ADEDG@@B@@@BCAA@@AACAE@AAAAA@AA@@@@@ABC@@BABABABAB@@@B@B@B@D@BBBBB@H@DBB@BAHC@A@@BA@@AA@A@@@AB@@@@AB@B@@@@A@AA@@@A@C@A@AAA@CA@@ECC@@AA@AAAAA@@@@A@@B@BA@ABA@@A@A@@@@A@@@A@@A@AAA@@@A@@@@ACA@@@AAA@AB@@A@@BAB@DAB@BABA@@B@BBD@D@DBB@DBB@B@BABC@A@@@A@A@@AACAC@C@A@A@CB@@A@@@A@@A@@@@@A@@BA@@DABABAB@BAB@@@@A@@AC@A@@@A@AB@@@B@@@B@FBB@@AB@@CBA@A@@@@@AA@AA@@@A@@@@@AB@DAD@FA@@@A@AB@BAB@B@D@D@B@@@BAB@@@B@@@@@@@@BB@BB@@BA@@BC@@BA@@BA@@@A@@EACA@@@@AC@A@@BA@@B@B@B@FBB@B@BBJFB@B@BAB@BADCDCBC@A@@BAA@@A@AAAAAA@A@E@C@@@A@@A@@@AD@HCB@BABA@A@@CAGGGIGO@@AMAS@S@EBM@CDMJOJQ@ABIAICGQSOO@@AI@I@A@CDEBEFIDM@K@KISAAAM@A@E@E@EBEBEBIBCFEFCB@LCFCDEHM@@DG@ECECEGGEIAI@KBEBCHKBAJEBAFADA@@JELEDCD@HCJADAHA@@H@D@B@B@BAD@HEFCNELG@@NS@@DIDG@ABGBEDADEFGFEFGDGHIBAHEDGFEAC@C@ABADAB@BAHIPQ@@HSJQ@S@@BGFIDCBAHCDCFEJEdMbKHANC@@FAFCJCJERMFCFEHI@EAE@@GIGGC@EAEAMAEAGAYCQI@@GK@@@G@C@ABEBAEA@@AAAA@@AA@@AA@@@AA@AA@@A@C@ABC@@B@@@@@@@B@@@@A@@@@@A@A@A@ABA@@@A@@BA@@@B@@B@B@@BB@@A@AB@@A@@AAA@@AA@@AAAC@@A@@@A@@@@BAB@BA@@BA@A@@B@B@@@@A@@B@@A@AD@B@@@B@B@@@@@@@BB@@D@@@B@@A@E@A@@@A@CAA@@@A@A@@@C@@A@@A@A@@@@@AB@@AB@@C@C@A@A@A@@@A@@@@AB@@@@@@@@@A@BAA@@@@@@A@@@A@@@@@AB@@A@@@A@ABA@@@@@A@@@@@A@@AA@@B@@@@@@AAAA@@@@A@@A@@A@@@A@C@A@@@AA@ABA@ABC@EDA@@@A@@BA@@BA@@@@B@@AB@@@@@@@B@@A@@B@@BBA@@@BB@@@B@@@@@B@@@@@B@@A@@@B@@@@@@B@@@@@B@@@@@@BB@@B@@B@@@@@@B@AB@@A@@@A@@AA@@AA@@@@AAA@AA@A@A@A@@@A@ABA@@@@@@@@A@@@@AAA@@@A@@@BA@@AAA@@@@@ABA@@@A@@@A@A@AAA@AB@@A@@@A@@@@@@ABA@@A@AAAA@@A@ABA@AB@@ABA@@@@AAABCAA@A@@@@C@A@A@@@AA@A@@AAA@A@@@A@AB@@A@AA@@@B@@@@@B@@BBA@ABA@@@CBABA@A@AB@@A@@B@@ADA@@B@@@@A@@@A@A@@@ABA@C@A@@@@B@B@@@BA@@@@D@D@BAB@B@@@@A@@AAE@@AA@@@@AB@@@BAB@BAB@B@@A@@BA@A@CDA@@B@@AB@@@B@@AA@@@@@A@@@A"],"encodeOffsets":[[113207,38633]]}}],"UTF8Encoding":true});}));
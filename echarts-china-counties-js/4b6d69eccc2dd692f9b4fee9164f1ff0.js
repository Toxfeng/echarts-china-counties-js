(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('驿城区', {"type":"FeatureCollection","features":[{"type":"Feature","id":"411702","properties":{"name":"驿城区","cp":[113.993914,32.973054],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@B@DB@@BCBADBBCD@@C@A@@A@BABA@@DB@E@ACA@ID@@@@A@@@@AA@@A@A@A@@@@@AA@AAAA@@@A@@BA@@@@@CA@@@BA@@@AAHIKA@BA@@@ABA@@@A@@@@@@AA@@@@@@@ABA@@@A@@@AAA@AA@@@@A@C@@@ABAB@@A@@@A@A@@@CBAB@@CA@@@@A@A@C@C@@B@@ABA@@@CAAAA@@@BA@@@@@A@@AAA@A@@@A@C@AAAAAA@@C@A@CAKCKACAABA@AB@@@B@BA@AB@@A@@AAA@@A@C@@@ABABCDEJABAFCFADABABABA@A@EE@AACEACACAACCC@@EFEDIBIAC@E@GBEBGEGC@@EAEAQCK@S@O@IBMAQ@O@MCABADEDA@ADEDCBC@E@CAA@AAACEGCCCCECCACAE@E@AAC@A@E@EBA@A@A@CAAAAAECEAC@C@ABA@GBA@Q@OBKD@@C@QBGCI@EBEFCBA@G@EDCA@@A@E@CAC@G@C@@@AACAACCCC@IBCAE@CBCFCDCBEB@@CACAA@@@CBA@@@AA@@@@AD@BEJ@B@H@@E@@B@@A@@@@A@@AAAA@C@ABC@@C@@@C@EB@@GA@B@@C@GCEGA@@@@A@@@@A@A@B@@@AB@BBBDBBB@DBB@BA@A@A@A@C@A@C@A@A@@@ABCBA@CBAAA@GBC@C@ABGBA@A@@AAC@AAAA@@AAA@@@AAAAAAAAA@AAA@@A@EBABA@C@E@C@C@@@@BM\\AXUTE@QDKBGDMDUDM@CDGAKBA@KEGI@AQBGCONBHCBfvBJHVATEPE@QEEBCCIIE@BFGDIBC@ECO@ODCLNN@@ZGZBTLIBS@DRCJ@BCL@@LHKNEHEHFFBAJGRKD[DIJBXEFBALAF@JJ@D@LAPBDLBJ@B@NDDLNAVCHAD@LBBDDBDNH@DI\\DA@B@VA@KBMC@FAT@JDJNDBNBDLLFPH^DD@@B@@@BB@BB@D@@@B@@BBA@A@A@C@AB@DB@@D@B@@A@A@@BA@@BA@C@A@ABA@@@@@A@@BA@@B@B@B@@A@@@A@@DBB@@AB@@@B@@A@@BBBB@@D@@@B@DBBBBBB@B@@@B@B@@ABABC@@D@B@DGB@B@F@B@BB@@@B@@@@ABADAB@@@BB@BBB@@@@ABEBA@@BAAA@@@AB@@@B@@@@@@@@B@@@BBA@@@@D@B@@@@AC@@@@AB@@@BA@@A@@@@A@@D@@@BA@@B@@@@A@CBACAA@@@@CBA@BD@@C@@AAB@@A@A@@HE@A@@@CBABC@@@@@A@CB@@A@A@@AA@A@ABA@@@A@A@@BC@A@@BA@A@@@@@A@@B@@CBA@@ACBA@ABADABABCDCBA@@BCBA@@@ABA@A@A@@BABA@ABA@@D@@@@@@AB@@@BAA@BA@A@AFADCB@@@D@B@@@@@FEBAB@DAB@@ABAB@B@@@@A@AC@@@@E@@B@@A@@B@@GBC@A@C@ABC@CBA@@B@@A@@@@B@@@BB@@H@@@BMD@B@@@@@@A@A@A@AB@@A@@BA@A@@AC@@CA@@@ABA@@BAD@J@D@B@B@BA@@@@HGBA@@B@B@D@DBFBB@BBDDFFFF@B@@B@DAD@B@@ADAA@CA@A@@@@@A@@@A@@EAAAAAA@@A@AA@B@B@B@@@BB@C@C@@@DBB@@D@@@@CD@@CD@@AB@B@@@H@@DD@@CFA@GD@@BB@DB@@BB@@@B@@B@@@@A@AB@D@@@DB@@D@D@@FB@@FB@@@@D@@BB@@A@@B@@N@@@B@D@@@@@@B@DBF@D@F@DBB@BDHHJ@@@B@@@BABA@C@I@CBABAF@D@D@B@DD@@@B@F@FABAHBNB@@D@HDDDBB@D@F@F@DAF@B@@@BBBDBJ@@BB@FDBBBD@D@B@F@B@HBDDDFBDDBBBB@@BBD@DDB@B@@AB@B@B@@@DBFBD@D@DBB@@@@BBBABAB@B@B@@@BB@B@D@BB@B@B@@ADABBB@BDBBB@BDB@@B@B@D@@@@ABA@G@E@CBA@CDADAF@FBF@JBB@F@B@B@DA@@@A@@AE@E@ABCBC@AAC@@BA@@@AGCCAAAAA@A@@BA@@@@AA@A@@@ABAB@@A@@@A@ABC@@BE@E@A@ABABABAFCJGBAFGDCDCBAB@@@BBJFPJ@BBBBD@H@@@D@B@BDJDHDD@BFJHHBDBBFLDHBHDH@BBF@D@B@BBB@@B@HBF@B@D@B@F@B@@@DADABAFCBCBA@@@KBC@E@@@ADCD@FAFAHAB@D@H@J@H@D@H@B@@@@@@@B@T@J@T@FE@GDABCAC@C@C@A@@FAFALGJBHAF@@EBA@@@A@@B@@@B@@@B@B@@E@@AC@C@@C@B@A@@A@A@@C@@AB@D@@@@A@A@ABC@@@@H@@@@A@AB@B@B@@@@C@@D@@@@EB@L@@@@B@B@BB@B@BB@@D@H@@@@@@G@@B@@@@CB@BA@@@E@A@@D@@AB@@@@AAA@@@A@@BA@@B@D@@@@@BFB@B@JB@@H@B@LBHB@@F@D@@@@@BC@@@@A@@@@C@@B@B@AI@@@@C@@@@A@A@@CA@A@@@A@A@@D@@AC@@@F@F@J@F@B@F@B@BB@BDBFFFBFBPBHBHBLAF@D@HGBCNSDCBC@@BIBA@C@A@@@CCGACAA@C@AAABC@@@C@@@@@A@@A@A@@@@A@@B@B@CA@@@ABBB@@B@@@A@@@AB@@B@@B@D@D@B@A@B@@AAA@AAAAA@@BA@@B@@@B@@@@@AA@@B@@A@@@@@A@A@@A@@@@A@@@@AA@@@@@AB@BADCAA@@KIECACACAE@EA@BGA@A@A@@CA@AA@@CAECECEA@@CBABEB@B@@CFAB@BCBA@E@G@EAG@AAA@CAAAA@C@ABCBABA@C@A@AAAACGAAA@AAA@A@C@EDEDABEDA@A@AA@@ECCCAACA@CAEAI@ICOBA@@@@@@@CB@@D@@@CB@BCB@@@@CBGB@B@B@@@@G@@DD@@BGC@A@A@BABA@ABAEC@BADAA@CAAA@AL@@GA@CD@@AD@ACB@@@@ACCA@@F@@A@A@@@@FA@@A@AC@@@@AB@@CC@@@BG"],"encodeOffsets":[[116876,33669]]}}],"UTF8Encoding":true});}));
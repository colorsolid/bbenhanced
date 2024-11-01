// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "クリア時間_通し\u0000クリア時間_1プレイ\u0000ボス_撃破\u0000PC情報_ボス撃破_教区長\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000PC情報_ボス撃破_ガスコイン\u0000\u0000PC情報_聖堂街B到達時\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000"
// @linked    [174]
// @version    3.4.2
// ==/EMEVD==

// コンストラクタ
$Event(0, Default, function() {
    InitializeEvent(15, 7000, 2410950, 2411950, 9401, 12417800);
    InitializeEvent(16, 7000, 2410951, 2411951, 999, 12417820);
    InitializeEvent(17, 7000, 2410952, 2411952, 12411700, 12417840);
    InitializeEvent(18, 7000, 2410953, 2411953, 12411800, 12417860);
    InitializeEvent(0, 12411010, 0);
    InitializeEvent(15, 7100, 72410200, 2411950);
    InitializeEvent(16, 7100, 72410201, 2411951);
    InitializeEvent(17, 7100, 72410202, 2411952);
    InitializeEvent(18, 7100, 72410203, 2411953);
    InitializeEvent(15, 7200, 72410100, 2411950, 2102950);
    InitializeEvent(16, 7200, 72410101, 2411951, 2102950);
    InitializeEvent(17, 7200, 72410102, 2411952, 2102950);
    InitializeEvent(18, 7200, 72410103, 2411953, 2102950);
    InitializeEvent(15, 7300, 72102410, 2411950);
    InitializeEvent(16, 7300, 72102411, 2411951);
    InitializeEvent(17, 7300, 72102412, 2411952);
    InitializeEvent(18, 7300, 72102413, 2411953);
    InitializeEvent(3, 9200, 2413900);
    InitializeEvent(3, 9220, 2410750, 12414220, 12414221, 2410, 280);
    InitializeEvent(3, 9240, 2410750, 12414220, 12414221, 12414222, 280);
    InitializeEvent(3, 9260, 2410750, 12414220, 12414221, 12414222, 280);
    InitializeEvent(3, 9280, 2410750, 12414220, 12414221, 2410, 12414223, 280);
    InitializeEvent(0, 12411899, 0);
    InitializeEvent(0, 12410310, 0);
    CreateObjectfollowingSFX(2411000, 200, 900130);
    CreateObjectfollowingSFX(2411001, 200, 900130);
    CreateObjectfollowingSFX(2411004, 200, 900130);
    DeleteMapSFX(2413230, false);
    DeleteMapSFX(2413233, false);
    InitializeEvent(0, 12414400, 12414440, 2413230, 12414420, 12414430, 12411700, 6001);
    InitializeEvent(0, 12414401, 12414441, 2413233, 12414421, 12414431, 12411700, 6001);
    InitializeEvent(0, 12414410, 7, 2410158, 2412920, 12414420, 12414430, 12414440, 12411700, 10575);
    InitializeEvent(1, 12414410, 0, 2410740, 2412921, 12414421, 12414431, 12414441, 12411700, 10576);
    InitializeEvent(0, 12414450, 2410158, 2412710, 12414420, 12414430, 12414700);
    InitializeEvent(1, 12414450, 2410740, 2412711, 12414421, 12414431, 12414700);
    InitializeEvent(0, 12414460, 2410158, 2412710, 2412800, 2412801, 7014, 12414450, 2412801);
    InitializeEvent(1, 12414460, 2410740, 2412711, 2412800, 2412801, 101130, 12414451, 2412801);
    InitializeEvent(0, 12414470, 0);
    InitializeEvent(0, 12414480, 0);
    InitializeEvent(0, 12414490, 0);
    if (EventFlag(12410999)) {
        SetEventFlag(9400, ON);
        SetEventFlag(9401, ON);
        SetSpEffect(2410015, 5591, false);
    }
L0:
    if (EventFlag(12410999)) {
        InitializeEvent(0, 12410286, 12410400, 12410401, 2411204, 2411316);
        InitializeEvent(0, 12410820, 0);
    }
L1:
    StartTimeMeasurement(2410000, 0, Disabled);
    StartTimeMeasurement(2410001, 18, Enabled);
    InitializeEvent(0, 12410990, 0);
    InitializeEvent(0, 12410900, 0);
    InitializeEvent(0, 12415060, 2410112, 2412000, 2412001, 1082130432);
    InitializeEvent(1, 12415060, 2410113, 2412000, 2412001, 1082130432);
    InitializeEvent(2, 12415060, 2410114, 2412000, 2412001, 1082130432);
    InitializeEvent(3, 12415060, 2410115, 2412000, 2412001, 1082130432);
    InitializeEvent(4, 12415060, 2410116, 2412000, 2412001, 1082130432);
    InitializeEvent(10, 12415060, 2410121, 2412120, 0, 1082130432);
    InitializeEvent(11, 12415060, 2410125, 2412120, 0, 1082130432);
    InitializeEvent(12, 12415060, 2410126, 2412120, 0, 1082130432);
    InitializeEvent(13, 12415060, 2410127, 2412120, 0, 1082130432);
    InitializeEvent(15, 12415060, 2410161, 2412120, 0, 1082130432);
    InitializeEvent(3, 12415080, 2410178, 7010, 7011, 2412154, 263496, 263431, 1073741824);
    InitializeEvent(0, 12415460, 2410019, 7020, 7021, 2412251, 1065353216, 2412010, 2411219);
    InitializeEvent(0, 12415461, 2411219, 0, 1);
    InitializeEvent(2, 12410160, 2412032, 2412037, 0, 20011002);
    InitializeEvent(4, 12410160, 2412122, 2412035, 0, 20011001);
    InitializeEvent(5, 12410160, 2412033, 2412038, 1, 500007600);
    InitializeEvent(0, 12415010, 2412039, 0, 20011001, 1133903872);
    InitializeEvent(0, 12415700, 0);
    InitializeEvent(12, 12415435, 2410172, 2412122);
    InitializeEvent(13, 12415435, 2410173, 2412122);
    InitializeEvent(17, 12415435, 2410186, 2412122);
    InitializeEvent(18, 12415435, 2410187, 2412122);
    InitializeEvent(19, 12415435, 2410188, 2412122);
    InitializeEvent(20, 12415435, 2410189, 2412122);
    InitializeEvent(22, 12415435, 2410191, 2412122);
    InitializeEvent(23, 12415435, 2410192, 2412122);
    InitializeEvent(0, 12415475, 2410194, 7012, 7013, 2412050);
    InitializeEvent(0, 12415476, 2410194, 7013);
    InitializeEvent(0, 12415478, 2410194);
    InitializeEvent(0, 12415477, 2410113);
    InitializeEvent(0, 12415479, 2410194);
    InitializeEvent(0, 12415420, 2410272, 2412262, 12410379);
    InitializeEvent(1, 12415420, 2410278, 2412260, 0);
    InitializeEvent(2, 12415420, 2410275, 2412261, 0);
    InitializeEvent(3, 12415420, 2410277, 2412263, 0);
    InitializeEvent(4, 12415420, 2410271, 2412264, 12410378);
    InitializeEvent(5, 12415420, 2410279, 2412265, 0);
    InitializeEvent(0, 12415225, 2410015, 3004, 1112014848);
    InitializeEvent(1, 12415225, 2410102, 3027, 1112014848);
    InitializeEvent(0, 12415228, 2410016, 3028, 1086324736);
    InitializeEvent(0, 12415232, 2410178, 2412086);
    InitializeEvent(0, 12415233, 2412122, 2410196, 2412136);
    InitializeEvent(1, 12415250, 2410182, 7001, 1084227584, 1092616192, 2412075);
    InitializeEvent(1, 12415255, 2410183);
    InitializeEvent(2, 12415255, 2410182);
    InitializeEvent(4, 12415255, 2410181);
    InitializeEvent(0, 12415295, 2410183, 2412120, 1073741824, 2412074);
    InitializeEvent(1, 12415295, 2410182, 2412120, 1073741824, 2412075);
    InitializeEvent(0, 12415300, 12415295, 2410183, 2412074, 2412121, 1073741824);
    InitializeEvent(1, 12415300, 12415296, 2410182, 2412075, 2412121, 1073741824);
    InitializeEvent(0, 12415305, 12415300, 2410183, 2412121, 2412122, 1073741824, 2412084);
    InitializeEvent(1, 12415305, 12415301, 2410182, 2412121, 2412122, 1073741824, 2412085);
    InitializeEvent(0, 12415310, 12415305, 2410183, 2412084, 2412122, 1073741824, 2413500);
    InitializeEvent(1, 12415310, 12415306, 2410182, 2412085, 2412122, 1073741824, 2413500);
    InitializeEvent(0, 12415315, 2410210, 2412120, 1073741824, 2412130);
    InitializeEvent(1, 12415315, 2410211, 2412120, 1073741824, 2412132);
    InitializeEvent(0, 12415320, 12415315, 2410210, 2412130, 2412122, 2413505);
    InitializeEvent(1, 12415320, 12415316, 2410211, 2412132, 2412122, 2413505);
    InitializeEvent(0, 12415325, 12415320, 2410210, 2412122, 2413502);
    InitializeEvent(1, 12415325, 12415321, 2410211, 2412122, 2413501);
    InitializeEvent(0, 12415330, 2410213, 2412124, 2412123, 1073741824, 2412125);
    InitializeEvent(0, 12415335, 12415330, 2410213, 2412134, 2412122, 2413503);
    InitializeEvent(0, 12415340, 2410018, 2412120, 1073741824, 2412096);
    InitializeEvent(2, 12415340, 2410181, 2412121, 1073741824, 2412083);
    InitializeEvent(0, 12415345, 12415340, 2410018, 2412096, 0, 1073741824, 0, -1);
    InitializeEvent(2, 12415345, 12415342, 2410181, 2412083, 2412122, 1073741824, 1, 2413500);
    InitializeEvent(0, 12410450, 2410400, 52410990);
    InitializeEvent(1, 12410450, 2410401, 52410980);
    InitializeEvent(2, 12410450, 2410402, 52410970);
    InitializeEvent(3, 12410450, 2410403, 52410960);
    InitializeEvent(4, 12410450, 2410404, 52410950);
    RegisterLadder(12410402, 12410403, 2411210);
    RegisterLadder(12410404, 12410405, 2411211);
    RegisterLadder(12410406, 12410407, 2411212);
    RegisterLadder(12410408, 12410409, 2411213);
    RegisterLadder(12410410, 12410411, 2411214);
    RegisterLadder(12410412, 12410413, 2411215);
    RegisterLadder(12410414, 12410415, 2411216);
    RegisterLadder(12410416, 12410417, 2411217);
    RegisterLadder(12410418, 12410419, 2411218);
    RegisterLadder(12410420, 12410421, 2411225);
    RegisterLadder(12410422, 12410423, 2411226);
    RegisterLadder(12410424, 12410425, 2411227);
    InitializeEvent(0, 12410290, 0);
    CreateDamagingObject(12410430, 2411205, 100, 6110, DamageTargetType.Character, 1.5, 0, 1);
    CreateDamagingObject(12410431, 2411206, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12410432, 2411207, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    CreateDamagingObject(12410433, 2411208, 100, 6110, DamageTargetType.Character, 0.6, 0, 1);
    InitializeEvent(0, 12410200, 2411300, 2411310, 12410200);
    InitializeEvent(2, 12410200, 2411302, 2411312, 12410202);
    InitializeEvent(3, 12410200, 2411303, 2411313, 12410203);
    InitializeEvent(5, 12410200, 2411305, 2411315, 12410205);
    InitializeEvent(0, 12415020, 7000, 2411305, 12410205, 10010171);
    InitializeEvent(2, 12415020, 2410021, 2411300, 12410200, 10010160);
    InitializeEvent(3, 12415020, 2410021, 2411302, 12410202, 10010160);
    InitializeEvent(4, 12415020, 2410021, 2411303, 12410203, 10010160);
    InitializeEvent(1, 12410100, 2410011, 2410701, 12410112, 10010161);
    InitializeEvent(2, 12410100, 2410050, 2411301, 12410117, 10010161);
    InitializeEvent(2, 12410110, 2410701, 12411301, 2, 2410010);
    InitializeEvent(3, 12410110, 2411308, 12411302, 2, 2410010);
    InitializeEvent(4, 12410110, 2411306, 12411304, 1, 2410030);
    InitializeEvent(5, 12410110, 2411304, 12411307, 1, 2410080);
    InitializeEvent(6, 12410110, 2411309, 12411308, 1, 2410010);
    InitializeEvent(7, 12410110, 2411301, 12411309, 1, 2410090);
    InitializeEvent(0, 12410120, 0);
    InitializeEvent(0, 12410130, 12411306);
    InitializeEvent(0, 12410151, 0);
    InitializeEvent(0, 12410140, 0);
    InitializeEvent(30, 7600, 2411999, 2413999);
    InitializeEvent(31, 7600, 2411998, 2413998);
    InitializeEvent(32, 7600, 2411997, 2413997);
    InitializeEvent(0, 12415390, 2410202);
    InitializeEvent(0, 12414732, 0);
    InitializeEvent(0, 12414733, 0);
    InitializeEvent(0, 12411700, 0);
    InitializeEvent(0, 12411701, 0);
    InitializeEvent(0, 12411702, 0);
    InitializeEvent(0, 12414730, 0);
    InitializeEvent(0, 12414731, 0);
    InitializeEvent(0, 12414702, 0);
    InitializeEvent(0, 12414703, 0);
    InitializeEvent(0, 12414704, 0);
    InitializeEvent(0, 12414705, 0);
    InitializeEvent(0, 12411703, 0);
    InitializeEvent(0, 12414707, 0);
    InitializeEvent(0, 12414708, 0);
    InitializeEvent(0, 12414710, 2410, 2410, 1, 20, 480, 490, 8020);
    InitializeEvent(1, 12414710, 2411, 2411, 2, 120, 481, 491, 8000);
    InitializeEvent(2, 12414710, 2412, 2412, 3, 300, 482, 492, 8010);
    InitializeEvent(3, 12414710, 2413, 2413, 4, 200, 483, 493, 8030);
    InitializeEvent(4, 12414710, 2414, 2414, 5, 200, 484, 494, 8040);
    InitializeEvent(0, 12414720, 480, 490, 2565);
    InitializeEvent(1, 12414720, 481, 491, 2822);
    InitializeEvent(2, 12414720, 482, 492, 3079);
    InitializeEvent(3, 12414720, 483, 493, 3336);
    InitializeEvent(4, 12414720, 484, 494, 3593);
    if (!EventFlag(12410999)) {
        InitializeEvent(0, 12410000, 0);
        InitializeEvent(0, 12410285, 12410400, 12410401, 2411204, 2411316);
        InitializeEvent(0, 12410995, 0);
    }
L2:
    InitializeEvent(0, 12410170, 0);
    InitializeEvent(0, 12415150, 2410100, 7010, 7011, 1086324736, 263499, 263450);
    InitializeEvent(1, 12415150, 2410101, 7014, 7015, 1088421888, 263499, 263440);
    InitializeEvent(2, 12415150, 2410103, 7010, 7011, 1082130432, 263499, 263450);
    InitializeEvent(1, 12410160, 2412031, 2412036, 0, 240002600);
    InitializeEvent(0, 12415160, 2410130, 9002, 3001);
    InitializeEvent(1, 12415160, 2410131, 9000, 3001);
    InitializeEvent(2, 12415160, 2410132, 9000, 0);
    InitializeEvent(3, 12415160, 2410133, 9001, 0);
    InitializeEvent(4, 12415160, 2410134, 9002, 3001);
    InitializeEvent(5, 12415160, 2410136, 9001, 0);
    InitializeEvent(6, 12415160, 2410137, 9001, 3001);
    InitializeEvent(7, 12415160, 2410138, 9001, 0);
    InitializeEvent(8, 12415160, 2410139, 9001, 0);
    InitializeEvent(0, 12415130, 2410140, 9000, 9061, 52410270, 112499, 112400, 1);
    InitializeEvent(1, 12415130, 2410141, 9000, 9061, 52410270, 112499, 112400, 0);
    InitializeEvent(3, 12415130, 2410143, 9000, 9061, 52410270, 112499, 112400, 0);
    InitializeEvent(4, 12415130, 2410144, 9000, 9061, 52410270, 112499, 112400, 1);
    InitializeEvent(6, 12415130, 2410146, 9000, 9061, 52410270, 112499, 112400, 0);
    InitializeEvent(7, 12415130, 2410147, 9000, 9061, 52410270, 112499, 112400, 0);
    InitializeEvent(8, 12415130, 2410148, 9000, 9061, 52410270, 112499, 112400, 1);
    InitializeEvent(9, 12415130, 2410149, 9000, 9061, 52410270, 112499, 112400, 1);
    InitializeEvent(10, 12415130, 2410150, 9000, 9061, 52410270, 112499, 112400, 0);
    InitializeEvent(14, 12415130, 2410154, 9000, 9061, 52410270, 112499, 112400, 1);
    InitializeEvent(0, 12410155, 2410157, 2412020, 2412021, 2412022);
    InitializeEvent(0, 12410156, 2410040, 2410500, 2410501);
    InitializeEvent(0, 12410340, 2410220, 2412230, 10, 2412220);
    InitializeEvent(1, 12410340, 2410221, 2412231, 10, 2412220);
    InitializeEvent(2, 12410340, 2410222, 2412232, 10, 2412220);
    InitializeEvent(3, 12410340, 2410223, 2412233, 10, 2412220);
    InitializeEvent(4, 12410340, 2410224, 2412234, 10, 2412220);
    InitializeEvent(5, 12410340, 2410225, 2412235, 10, 2412220);
    InitializeEvent(6, 12410340, 2410226, 2412236, 10, 2412220);
    InitializeEvent(7, 12410340, 2410227, 2412237, 10, 2412220);
    InitializeEvent(8, 12410340, 2410228, 2412238, 10, 2412220);
    InitializeEvent(0, 12410378, 2410271, 3021, 2411270, 2412046);
    InitializeEvent(1, 12410378, 2410272, 3021, 2411271, 2412045);
    InitializeEvent(0, 12410380, 2410275, 3020);
    InitializeEvent(1, 12410380, 2410277, 3020);
    InitializeEvent(2, 12410380, 2410278, 3020);
    InitializeEvent(3, 12410380, 2410279, 3020);
    InitializeEvent(0, 12410370, 0);
    InitializeEvent(0, 12415372, 2410023);
    InitializeEvent(1, 12415372, 2410024);
    InitializeEvent(2, 12415372, 2410025);
    InitializeEvent(3, 12415372, 2410026);
    InitializeEvent(4, 12415372, 2410027);
    InitializeEvent(0, 12410321, 12415350, 12410350, 12410351, 12410330, 2411320, 2411317, 2411318);
    InitializeEvent(0, 12410325, 12415350, 12410350, 12410351, 12410330);
    InitializeEvent(0, 12410322, 12415350, 12410350, 12410351, 12410330, 2412322, 12410320);
    InitializeEvent(0, 12410323, 12415350, 12410350, 12410351, 12410330, 2412321, 12410321);
    InitializeEvent(0, 12410324, 12415350, 12410350, 12410330, 2411317, 2411318);
    InitializeEvent(0, 12410330, 12410330, 2412323, 2411317, 2411318);
    InitializeEvent(0, 12410490, 2411510, 2411500, 12410490);
    InitializeEvent(1, 12410490, 2411511, 2411501, 12410491);
    InitializeEvent(0, 12410010, 0);
    InitializeEvent(0, 12410011, 0);
    InitializeEvent(0, 12410012, 0);
    InitializeEvent(1, 12410600, 12411202, 2411102, 9942);
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6630)) {
            SetEventFlag(12411999, ON);
        }
    }
    if (!EventFlag(12411999)) {
        DeactivateObject(2411100, Enabled);
        DeactivateObject(2411103, Disabled);
        SetObjactState(2411100, 9942, Enabled);
        SetObjactState(2411103, 9942, Disabled);
        InitializeEvent(2, 12410600, 12411200, 2411100, 9942);
    } else {
        DeactivateObject(2411100, Disabled);
        DeactivateObject(2411103, Enabled);
        SetObjactState(2411100, 9942, Disabled);
        SetObjactState(2411103, 9942, Enabled);
        InitializeEvent(3, 12410600, 12411203, 2411103, 9942);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6640)) {
            SetEventFlag(12411998, ON);
        }
    }
    if (!EventFlag(12411998)) {
        DeactivateObject(2411450, Enabled);
        DeactivateObject(2411451, Disabled);
        SetObjectTreasureState(2411450, Enabled);
        SetObjectTreasureState(2411451, Disabled);
    } else {
        DeactivateObject(2411450, Disabled);
        DeactivateObject(2411451, Enabled);
        SetObjectTreasureState(2411450, Disabled);
        SetObjectTreasureState(2411451, Enabled);
    }
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(6312)) {
            SetEventFlag(12411997, ON);
        }
    }
    if (!EventFlag(12411997)) {
        DeactivateObject(2411102, Enabled);
        DeactivateObject(2411104, Disabled);
        SetObjactState(2411102, 9942, Enabled);
        SetObjactState(2411104, 9942, Disabled);
        InitializeEvent(4, 12410600, 12411202, 2411102, 9942);
    } else {
        DeactivateObject(2411102, Disabled);
        DeactivateObject(2411104, Enabled);
        SetObjactState(2411102, 9942, Disabled);
        SetObjactState(2411104, 9942, Enabled);
        InitializeEvent(5, 12410600, 12411204, 2411104, 9942);
    }
    InitializeEvent(0, 12414812, 0);
    InitializeEvent(0, 12414813, 0);
    InitializeEvent(0, 12411800, 0);
    InitializeEvent(0, 12411801, 0);
    InitializeEvent(0, 12411802, 0);
    InitializeEvent(0, 12414810, 0);
    InitializeEvent(0, 12414811, 0);
    InitializeEvent(0, 12414802, 0);
    InitializeEvent(0, 12414803, 0);
    InitializeEvent(0, 12414804, 0);
    InitializeEvent(0, 12414805, 0);
    InitializeEvent(0, 12414807, 0);
    InitializeEvent(0, 12414808, 0);
    InitializeEvent(0, 12414809, 0);
    InitializeEvent(0, 12411803, 0);
    InitializeEvent(0, 12415238, 2412820, 2410810, 2412821, 2412824, 2412822);
    InitializeEvent(1, 12415238, 2412820, 2410811, 2412821, 2412824, 2412822);
    InitializeEvent(0, 12410850, 70000050, 6030, 2410870);
    InitializeEvent(1, 12410850, 70000051, 6030, 2410871);
    InitializeEvent(2, 12410850, 70000070, 6030, 2410872);
    InitializeEvent(3, 12410850, 70000071, 6030, 2410873);
    InitializeEvent(0, 12410860, 2410770, 103089);
    InitializeEvent(0, 12410870, 2410770, 103082, 153);
    InitializeEvent(0, 12410880, 2410770, 103086);
    InitializeEvent(0, 12410702, 0);
    InitializeEvent(0, 12410704, 0);
    InitializeEvent(0, 12410705, 0);
    InitializeEvent(0, 12410706, 0);
    InitializeEvent(0, 12410710, 0);
    InitializeEvent(0, 12410713, 0);
    InitializeEvent(0, 12410715, 0);
    InitializeEvent(0, 12410716, 0);
    InitializeEvent(0, 12410703, 0);
    SetEventFlag(72410330, OFF);
    SetEventFlag(72410335, OFF);
    SetEventFlag(72410323, OFF);
    InitializeEvent(0, 12410650, 0);
    InitializeEvent(0, 12410651, 0);
    InitializeEvent(0, 12410652, 0);
    InitializeEvent(0, 12410653, 0);
    InitializeEvent(0, 12410654, 0);
    InitializeEvent(0, 12410655, 0);
    InitializeEvent(0, 12410656, 0);
    InitializeEvent(0, 12410657, 0);
    InitializeEvent(0, 12410658, 0);
    InitializeEvent(0, 12410659, 0);
    InitializeEvent(0, 12410661, 0);
    InitializeEvent(0, 12410662, 1163, 72410331, 72410338);
    InitializeEvent(1, 12410662, 1204, 72410331, 72410339);
    InitializeEvent(2, 12410662, 1268, 72410332, 72410340);
    InitializeEvent(3, 12410662, 1190, 72410332, 72410341);
    InitializeEvent(4, 12410662, 1223, 72410332, 72410342);
    InitializeEvent(5, 12410662, 1309, 72410332, 72410343);
    InitializeEvent(0, 12410668, 0);
    InitializeEvent(0, 12410669, 2410290, 1124, 0);
    InitializeEvent(1, 12410669, 2410291, 1163, 0);
    InitializeEvent(2, 12410669, 2410292, 1204, 7001);
    InitializeEvent(3, 12410669, 2410293, 1268, 0);
    InitializeEvent(4, 12410669, 2410294, 1190, 0);
    InitializeEvent(5, 12410669, 2410295, 1223, 7000);
    InitializeEvent(6, 12410669, 2410296, 1309, 7002);
    InitializeEvent(0, 12410676, 0);
    InitializeEvent(0, 12410677, 0);
    InitializeEvent(0, 12410680, 2410290);
    InitializeEvent(1, 12410680, 2410291);
    InitializeEvent(2, 12410680, 2410292);
    InitializeEvent(3, 12410680, 2410293);
    InitializeEvent(4, 12410680, 2410294);
    InitializeEvent(5, 12410680, 2410295);
    InitializeEvent(6, 12410680, 2410296);
    InitializeEvent(0, 12410687, 12410687, 72410347);
    InitializeEvent(1, 12410687, 12410688, 72410348);
    InitializeEvent(2, 12410687, 12410689, 72410349);
    InitializeEvent(3, 12410687, 12410690, 72410350);
    InitializeEvent(4, 12410687, 12410691, 72410351);
    InitializeEvent(5, 12410687, 12410692, 72410352);
    InitializeEvent(0, 12410693, 12410693, 72410353);
    InitializeEvent(1, 12410693, 12410694, 72410354);
    InitializeEvent(2, 12410693, 12410695, 72410355);
    InitializeEvent(3, 12410693, 12410696, 72410356);
    InitializeEvent(4, 12410693, 12410697, 72410357);
    InitializeEvent(5, 12410693, 12410698, 72410358);
    InitializeEvent(0, 12410700, 0);
    InitializeEvent(0, 12410721, 0);
    InitializeEvent(0, 12410730, 0);
    InitializeEvent(0, 12410731, 0);
    InitializeEvent(0, 12410732, 0);
    InitializeEvent(0, 12410733, 0);
    InitializeEvent(0, 12410734, 0);
    InitializeEvent(0, 12410736, 0);
    InitializeEvent(0, 12410737, 0);
    InitializeEvent(0, 12410738, 0);
    InitializeEvent(0, 12410739, 0);
    InitializeEvent(0, 12410785, 0);
    InitializeEvent(0, 12410786, 0);
    InitializeEvent(0, 12410787, 0);
    InitializeEvent(0, 12410740, 0);
    InitializeEvent(0, 12410741, 0);
    InitializeEvent(0, 12410742, 0);
    InitializeEvent(0, 12410743, 0);
    InitializeEvent(0, 12410746, 0);
    InitializeEvent(0, 12410747, 0);
    InitializeEvent(0, 12410748, 0);
    InitializeEvent(0, 12410749, 0);
    InitializeEvent(0, 12410750, 72410392, 6030, 2410732);
    InitializeEvent(0, 12410760, 0);
    InitializeEvent(0, 12410761, 0);
    InitializeEvent(0, 12410763, 0);
    InitializeEvent(0, 12410770, 2410290);
    InitializeEvent(1, 12410770, 2410291);
    InitializeEvent(2, 12410770, 2410292);
    InitializeEvent(3, 12410770, 2410293);
    InitializeEvent(4, 12410770, 2410294);
    InitializeEvent(5, 12410770, 2410295);
    InitializeEvent(6, 12410770, 2410296);
    InitializeEvent(0, 12410809, 0);
    InitializeEvent(0, 12410810, 0);
    InitializeEvent(0, 12410811, 0);
    InitializeEvent(0, 12410831, 0);
    InitializeEvent(0, 12410833, 0);
    InitializeEvent(0, 12410834, 0);
    InitializeEvent(0, 12410835, 0);
    InitializeEvent(0, 12410812, 0);
    InitializeEvent(0, 12410813, 0);
    InitializeEvent(0, 12410814, 0);
    InitializeEvent(0, 12410510, 0);
    InitializeEvent(0, 12415750, 2413710, 1439, 70000050, 9801);
    InitializeEvent(1, 12415750, 2413711, 1439, 70000051, 9801);
    InitializeEvent(2, 12415750, 2413712, 1439, 70000070, 9802);
    InitializeEvent(3, 12415750, 2413713, 1439, 70000071, 9802);
    InitializeEvent(0, 12415759, 2413714, 1439, 70000140, 9802);
    InitializeEvent(0, 12415770, 2411250, 9802, 924110);
    InitializeEvent(1, 12415770, 2411251, 9802, 924113);
    InitializeEvent(2, 12415770, 2411252, 9802, 924110);
    InitializeEvent(3, 12415770, 2411253, 9802, 924113);
    InitializeEvent(0, 12415779, 2411254);
    InitializeEvent(0, 12414100, 2411000, 7400, 10012000);
    InitializeEvent(1, 12414100, 2411001, 7401, 10012001);
    InitializeEvent(4, 12414100, 2411004, 7404, 10012004);
});

// プリコンストラクタ
$Event(50, Default, function() {
    if (!EventFlag(12410000)) {
        SetEventFlag(9180, ON);
        SetMapSoundState(2413900, Disabled);
    }
    if (EventFlag(12410998)) {
        SetEventFlag(12410999, ON);
    }
    InitializeEvent(0, 12410005, 12410999);
    SetCharacterAnimationState(2413950, Disabled);
    SetCharacterGravity(2413950, Disabled);
    SetCharacterMaphits(2413950, true);
    SetCharacterAnimationState(2413951, Disabled);
    SetCharacterGravity(2413951, Disabled);
    SetCharacterMaphits(2413951, true);
    SetCharacterAnimationState(2413952, Disabled);
    SetCharacterGravity(2413952, Disabled);
    SetCharacterMaphits(2413952, true);
    InitializeEvent(0, 12410744, 0);
    InitializeEvent(0, 12410745, 0);
    InitializeEvent(0, 12410762, 0);
    InitializeEvent(0, 12410800, 0);
    InitializeEvent(0, 12410645, 0);
    InitializeEvent(0, 12410729, 0);
    InitializeEvent(0, 12410830, 0);
    InitializeEvent(0, 12410701, 0);
    InitializeEvent(0, 12410780, 0);
    if (EventFlag(12411000)) {
        SetCharacterBackreadState(2410901, true);
        SetCharacterBackreadState(2410740, true);
        SetCharacterBackreadState(2410710, true);
        SetCharacterBackreadState(2410290, true);
        SetCharacterBackreadState(2410291, true);
        SetCharacterBackreadState(2410292, true);
        SetCharacterBackreadState(2410293, true);
        SetCharacterBackreadState(2410294, true);
        SetCharacterBackreadState(2410295, true);
        SetCharacterBackreadState(2410296, true);
        SetCharacterBackreadState(2410781, true);
    }
});

// キャラメイク後のカットシーン
$Event(12410000, Default, function() {
    EndIf(ThisEvent());
    EndIf(!PlayerInMap(24, 1));
    if (!PlayerGender(Gender.Female)) {
        PlayCutsceneToPlayer(24010005, CutscenePlayMode.SkippableWithFadeOut, 10000);
    } else {
        PlayCutsceneToPlayer(24011005, CutscenePlayMode.SkippableWithFadeOut, 10000);
    }
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    SetPlayerRespawnPoint(2412959);
});

// 聖堂街B_ひとつめのワープOBJ起動状態操作
$Event(12411010, Default, function() {
    if (!ThisEvent()) {
        WaitFor(EventFlag(7015));
    }
L0:
    SetEventFlag(12417810, ON);
});

// SAN値で狂気の悪霊出現_聖堂街B_XX
$Event(12414000, Restart, function(X0_4, X4_1, X8_4) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(
        PlayerInsightAmount() >= X4_1
            && CharacterType(10000, TargetType.Alive)
            && EntityInRadiusOfEntity(10000, X0_4, X8_4));
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 6200, false, true, false);
});

// SAN値で狂気の悪霊消滅_聖堂街B_XX
$Event(12414010, Restart, function(X0_4, X4_1, X8_4) {
    if (!ThisEventSlot()) {
        WaitFor(EventFlag(X8_4) && PlayerInsightAmount() <= X4_1);
    }
L0:
    ForceCharacterDeath(X0_4, false);
});

// 紙片_聖堂街B_XX
$Event(12414100, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(X4_4, X0_4));
    DisplayGenericDialog(X8_4, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// イベント版配置
$Event(12410005, Default, function(X0_4) {
    if (!EventFlag(X0_4)) {
        ActivateMapPart(2414220, Disabled);
        DeactivateObject(2411700, Disabled);
        DeactivateObject(2411701, Disabled);
        DeactivateObject(2411702, Disabled);
        DeactivateObject(2411703, Disabled);
        DeactivateObject(2411704, Disabled);
        DeactivateObject(2411705, Disabled);
        DeactivateObject(2411706, Disabled);
        DeactivateObject(2411707, Disabled);
        DeactivateObject(2411708, Disabled);
        DeactivateObject(2411709, Disabled);
        DeactivateObject(2411710, Disabled);
        DeactivateObject(2411711, Disabled);
        EndEvent();
    }
L0:
    ActivateMapPart(2414220, Enabled);
    DeactivateObject(2411316, Disabled);
    ChangeCharacterEnableState(2410951, Disabled);
    ChangeCharacterEnableState(2410195, Disabled);
    DeactivateObject(2411700, Enabled);
    DeactivateObject(2411701, Enabled);
    DeactivateObject(2411702, Enabled);
    DeactivateObject(2411703, Enabled);
    DeactivateObject(2411704, Enabled);
    DeactivateObject(2411705, Enabled);
    DeactivateObject(2411706, Enabled);
    DeactivateObject(2411707, Enabled);
    DeactivateObject(2411708, Enabled);
    DeactivateObject(2411709, Enabled);
    DeactivateObject(2411710, Enabled);
    DeactivateObject(2411711, Enabled);
    SetCharacterBackreadState(2410260, true);
    SetCharacterBackreadState(2410261, true);
    SetCharacterBackreadState(2410300, true);
    SetCharacterBackreadState(2410301, true);
    SetCharacterBackreadState(2410302, true);
    SetCharacterBackreadState(2410303, true);
    SetCharacterBackreadState(2410304, true);
    SetCharacterBackreadState(2410305, true);
    SetCharacterBackreadState(2410306, true);
    SetCharacterBackreadState(2410307, true);
    SetCharacterBackreadState(2410308, true);
    SetCharacterBackreadState(2410271, true);
    SetCharacterBackreadState(2410272, true);
    SetCharacterBackreadState(2410275, true);
    SetCharacterBackreadState(2410277, true);
    SetCharacterBackreadState(2410278, true);
    SetCharacterBackreadState(2410279, true);
});

// ロジック起動_領域
$Event(12415060, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, X4_4)
                || InArea(10000, X8_4)
                || EntityInRadiusOfEntity(10000, X0_4, X12_4)))
            || HasDamageType(X0_4, 10000, DamageType.Unspecified));
    SetCharacterAIState(X0_4, Enabled);
});

// 特殊待機_領域で解除
$Event(12415080, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    if (ThisEventSlot()) {
        SetCharacterAIId(X0_4, X20_4);
        EndEvent();
    }
L0:
    ForceAnimationPlayback(X0_4, X4_4, true, false, true);
    SetCharacterAIId(X0_4, X16_4);
    SetCharacterGravity(X0_4, Disabled);
    chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
        && (InArea(10000, X12_4) || EntityInRadiusOfEntity(10000, X0_4, X24_4));
    chr = CharacterAIState(X0_4, AIStateType.Combat);
    dmg = HasDamageType(X0_4, 10000, DamageType.Unspecified);
    WaitFor(chrArea || chr || dmg);
    SetCharacterGravity(X0_4, Enabled);
    if (!dmg.Passed) {
        WaitRandomTimeFrames(20, 100);
        if (HPRatio(X0_4) >= 1) {
            ForceAnimationPlayback(X0_4, X8_4, false, true, false);
        }
    }
L1:
    SetCharacterAIId(X0_4, X20_4);
});

// 開けない扉Msg表示
$Event(12415020, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(X0_4, X4_4) || EventFlag(X8_4));
    EndIf(EventFlag(X8_4));
    DisplayGenericDialog(X12_4, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
    RestartEvent();
});

// 門とレバー_XX
$Event(12410200, Default, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 1);
        WaitFixedTimeSeconds(1);
        SetObjactState(X4_4, 2410000, Disabled);
        SetObjactState(X4_4, 2410001, Disabled);
        WaitFor(ActionButtonInArea(7100, X4_4));
        DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
        RestartEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X8_4));
    ForceAnimationPlayback(X0_4, 1, false, false, false);
    SetNetworkSyncState(Disabled);
    if (X4_4 == 2411314) {
        DisplayGenericDialog(10010850, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
    }
    RestartEvent();
});

// 一方通行扉を調べた時のMsg_XX
$Event(12410100, Default, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X8_4));
    act = ActionButtonInArea(X0_4, X4_4);
    flag = EventFlag(X8_4);
    WaitFor(act || flag);
    if (!flag.Passed) {
        DisplayGenericDialog(X12_4, PromptType.OKCANCEL, NumberofOptions.OneButton, X4_4, 3);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// 扉開放処理_XX
$Event(12410110, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, X8_4);
        SetObjactState(X0_4, X12_4, Disabled);
        NotifySoundDampeningOfDoorEvent(X0_4, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    WaitFixedTimeSeconds(0);
});

// 一方通行扉を開く
$Event(12410120, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(InArea(10000, 2412300) || (InArea(10000, 2412301) && EventFlag(12410130)));
    SetSpEffect(10000, 4150, false);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

// 扉開放時Mｓｇ_XX
$Event(12410130, Default, function(X0_4) {
    SetNetworkSyncState(Disabled);
    EndIf(ThisEventSlot());
    WaitFor(ObjActEventFlag(X0_4));
    EndEvent();
});

// ガスコイン部屋奥の扉開放時Msg
$Event(12410150, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(ThisEvent());
    WaitFor(ObjActEventFlag(12411307));
    DisplayGenericDialog(10010850, PromptType.YESNO, NumberofOptions.OneButton, 2411304, 3);
});

// ガスコイン部屋奥の扉開放時Msg_PlayGo
$Event(12410151, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(12411800));
    EndIf(EventFlag(12410150));
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    EndIf(!EventFlag(12411000));
    SetObjactState(2411304, 2410080, Disabled);
    WaitFor(ActionButtonInArea(7002, 2411304));
    if (HasPlayGoState(PlayGoState.Downloaded1stChunk)) {
        DisplayGenericDialog(10010180, PromptType.YESNO, NumberofOptions.OneButton, 2411304, 3);
        RestartEvent();
    }
L0:
    DisplayGenericDialog(10010181, PromptType.YESNO, NumberofOptions.OneButton, 2411304, 3);
    RestartEvent();
});

// SE再生_XX
$Event(12410160, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, X0_4));
    PlaySE(X4_4, X8_4, X12_4);
});

// 診療所の扉を閉める
$Event(12410140, Restart, function() {
    if (!AnyBatchEventFlags(1140, 1144)) {
        if (!EventFlag(70000240)) {
            WaitFor(ObjActEventFlag(12411300));
            SetEventFlag(70000240, ON);
            EndEvent();
        }
L1:
        ReproduceObjectAnimation(2411307, 2);
        SetObjactState(2411307, 2410010, Disabled);
        NotifySoundDampeningOfDoorEvent(2411307, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(9401) || EventFlag(9800));
    ReproduceObjectAnimation(2411307, 0);
    SetObjactState(2411307, 2410010, Enabled);
    NotifySoundDampeningOfDoorEvent(2411307, DoorState.DoorClosing);
    SetEventFlag(62411300, OFF);
    SetEventFlag(72410329, OFF);
    SetEventFlag(72410344, OFF);
    SetEventFlag(72410345, OFF);
    SetEventFlag(72410346, OFF);
});

// ナビメッシュノードバンク登録
$Event(12410337, Default, function(X0_4) {
    WaitFor(ObjActEventFlag(12411303));
    ModifyNavimeshConnectionBitflag(X0_4, NavimeshType.Solid, BitopType.Add);
});

// 狂犬_檻の中で死亡時アニメ指定
$Event(12415420, Restart, function(X0_4, X4_4, X8_4) {
    if (X8_4 != 0) {
        EndIf(EventFlag(X8_4));
    }
    WaitFor(CharacterBackreadStatus(X0_4) && InArea(X0_4, X4_4));
    SetCharacterImmortality(X0_4, Enabled);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified) && InArea(X0_4, X4_4));
    SetSpEffect(X0_4, 5915, false);
    ForceCharacterDeath(X0_4, true);
});

// 群衆Aが時間差で合流
$Event(12415430, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, X4_4);
    dmg = HasDamageType(X4_4, 10000, DamageType.Unspecified);
    WaitFor(area || dmg || EntityInRadiusOfEntity(X0_4, 10000, X12_4));
    if (!dmg.Passed) {
        WaitFixedTimeSeconds(X8_4);
    }
    SetCharacterAIState(X0_4, Enabled);
});

// 敵ロジック無効_領域解除
$Event(12415435, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, X4_4));
    WaitRandomTimeFrames(0, 10);
    SetCharacterAIState(X0_4, Enabled);
});

// 診療所_最初の猟犬_特殊待機
$Event(12415460, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    WaitFixedTimeFrames(10);
    CharacterWarpRequest(X0_4, TargetEntityType.Area, X20_4, -1);
    if (ThisEventSlot()) {
        EndEvent();
    }
L0:
    ForceAnimationPlayback(X0_4, X4_4, true, false, true);
    SetCharacterGravity(X0_4, Disabled);
    chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
        && (InArea(10000, X12_4) || EntityInRadiusOfEntity(10000, X0_4, X16_4));
    chr = CharacterAIState(X0_4, AIStateType.Combat);
    dmg = HasDamageType(X0_4, 10000, DamageType.Unspecified);
    WaitFor(chrArea || chr || dmg);
    SetCharacterGravity(X0_4, Enabled);
    ForceAnimationPlayback(X24_4, 1, false, false, false);
    if (!dmg.Passed) {
        ForceAnimationPlayback(X0_4, X8_4, false, true, false);
    }
L1:
    EndEvent();
});

// 診療所_死体役群衆Ａ_特殊待機
$Event(12415461, Restart, function(X0_4, X4_4, X8_4) {
    GotoIf(L0, EventFlag(12410170));
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    chr = CharacterHasEventMessage(2410019, 10);
    WaitFor(chr || EventFlag(12410170));
    if (!chr.Passed) {
L0:
        ForceAnimationPlayback(X0_4, X8_4, false, false, false);
        EndEvent();
    }
L1:
    RestartEvent();
});

// ガスコイン神父_戦闘開始_イベント版
$Event(12415470, Default, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(12415234));
    SetCharacterAIState(X0_4, Disabled);
    chr = CharacterAIState(2410200, AIStateType.Combat) && CharacterAIState(2410201, AIStateType.Combat);
    WaitFor(
        chr
            || HasDamageType(X0_4, -1, DamageType.Unspecified)
            || ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(X0_4, 10000, 8)));
    if (chr.Passed) {
        WaitFixedTimeSeconds(10);
    }
    SetCharacterAIState(X0_4, Enabled);
    WaitFixedTimeFrames(10);
    SetCharacterHome(X0_4, X4_4);
    RequestCharacterAICommand(X0_4, X8_4, 0);
    RequestCharacterAnimationReset(X0_4, Interpolation.Uninterpolated);
    RequestCharacterAIReplan(X0_4);
    WaitFor(
        InArea(X0_4, X4_4)
            || CharacterAIState(X0_4, AIStateType.Combat)
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Recognition));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// 特殊待機_壁を叩いている群衆B
$Event(12415475, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEvent());
    ForceAnimationPlayback(X0_4, X4_4, true, false, true);
    chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
        && InArea(10000, X12_4);
    dmg = HasDamageType(X0_4, 10000, DamageType.Unspecified);
    flag = EventFlag(12415477);
    WaitFor(chrArea || dmg || flag);
    if (!dmg.Passed) {
        ForceAnimationPlayback(2411202, 0, true, false, false);
    }
    ForceAnimationPlayback(X0_4, X8_4, false, true, false);
    if (!flag.Passed) {
        EndEvent();
    }
    SetCharacterHome(X0_4, 2412051);
});

// 壁を叩いている群衆B_ダメージ受けたら解除
$Event(12415476, Restart, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(2411202, 0, true, false, false);
    ForceAnimationPlayback(X0_4, X4_4, false, true, false);
});

// 狂犬が吠える
$Event(12415477, Restart, function(X0_4) {
    WaitFor(HasMultiplayerState(MultiplayerState.Host));
    SetNetworkUpdateAuthority(X0_4, AuthorityLevel.Forced);
    SetEventFlag(12415477, OFF);
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Combat));
    SetEventFlag(12415477, ON);
    ForceAnimationPlayback(X0_4, 3021, false, true, false);
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal));
    RestartEvent();
});

// 巨大門アニメループ
$Event(12415478, Restart, function(X0_4) {
    chr = !CharacterDead(X0_4) && CharacterHasEventMessage(X0_4, 10);
    flag = EventFlag(12415475);
    WaitFor(chr || flag);
    if (!flag.Passed) {
        DamageShielding(2411202, Enabled);
        ForceAnimationPlayback(2411202, 1, true, false, true);
        RestartEvent();
    }
L0:
    DamageShielding(2411202, Disabled);
    ForceAnimationPlayback(2411202, 0, true, false, false);
    EndEvent();
});

// 群衆Ｂ巣切り替え
$Event(12415479, Restart, function(X0_4) {
    WaitFor(EventFlag(12415475) && EventFlag(12415477));
    SetCharacterHome(X0_4, 2412051);
    WaitFor(!EventFlag(12415477));
    SetCharacterHome(X0_4, 2412240);
    RestartEvent();
});

// 特殊待機_狂犬の近くの群衆
$Event(12415480, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (ThisEventSlot()) {
        SetCharacterAIId(X0_4, X16_4);
        EndEvent();
    }
L0:
    WaitFor(CharacterBackreadStatus(X0_4));
    ForceAnimationPlayback(X0_4, X4_4, true, false, true);
    SetCharacterAIId(X0_4, X12_4);
    SetCharacterGravity(X0_4, Disabled);
    dmg = HasDamageType(X0_4, 10000, DamageType.Unspecified);
    WaitFor(dmg || EventFlag(12415477));
    SetCharacterGravity(X0_4, Enabled);
    if (!dmg.Passed) {
        WaitRandomTimeFrames(20, 100);
        ForceAnimationPlayback(X0_4, X8_4, false, true, false);
    }
    SetCharacterAIId(X0_4, X16_4);
});

// 群衆_仲間呼び
$Event(12415498, Restart, function(X0_4, X4_4) {
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Combat));
    WaitRandomTimeFrames(0, 30);
    ForceAnimationPlayback(X0_4, 3010, false, true, false);
    dmg = HasDamageType(X0_4, 10000, DamageType.Unspecified);
    WaitFor(ElapsedFrames(51) || dmg);
    if (!dmg.Passed) {
        ShootBullet(X0_4, X0_4, 7, X4_4, 90, 0, 0);
        ForceAnimationPlayback(X0_4, 7004, false, true, false);
    }
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal));
    RestartEvent();
});

// 邪神（大）表示
$Event(12410815, Default, function() {
    SetSpEffect(2410600, 5686, false);
    WaitFixedTimeFrames(10);
    WaitFor(EventFlag(9802) || PlayerInsightAmount() >= 20);
    ChangeCharacterDispmask(2410600, 0, ON);
    ChangeCharacterDispmask(2410600, 2, ON);
    ChangeCharacterDispmask(2410600, 10, ON);
    ChangeCharacterEnableState(2410600, Enabled);
    ClearSpEffect(2410600, 5686);
    WaitFor(PlayerInsightAmount() <= 18 && !EventFlag(9802));
    RestartEvent();
});

// 【イベント版】 マップ接続を切る
$Event(12410820, Default, function() {
    ActivateHitBackreadMask(2414400, Disabled);
    ActivateHitBackreadMask(2414401, Disabled);
    ActivateHitBackreadMask(2414402, Disabled);
    ActivateHitBackreadMask(2414410, Disabled);
    ActivateHitBackreadMask(2414420, Disabled);
    ActivateHitBackreadMask(2414421, Disabled);
});

// さまよう狂気_聖堂街B_XX
$Event(12410450, Restart, function(X0_4, X4_4) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(X0_4, Disabled);
        EndEvent();
    }
L0:
    chrFlag &= CharacterType(10000, TargetType.Alive);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        chrFlag &= EventFlag(X4_4);
    }
    WaitFor(chrFlag);
    WaitFixedTimeSeconds(0);
});

// マルチ可否制御_聖堂街B
$Event(12411899, Default, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(12411800) && EventFlag(12411700));
    SetEventFlag(2410, ON);
});

// ボス撃破_教区長
$Event(12411700, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2413802, Disabled);
        SetMapSoundState(2413803, Disabled);
        ChangeCharacterEnableState(2410800, Disabled);
        ForceCharacterDeath(2410800, false);
        DeactivateObject(2411800, Disabled);
        DeleteMapSFX(2413800, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(2410800));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2411800, Disabled);
    DeleteMapSFX(2413800, true);
    SetLockcamSlotNumber(24, 1, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(2410800);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        InitializeEvent(0, 9350, 3);
        AwardAchievement(21);
        if (!EventFlag(6645)) {
            AwardItemLot(50000010);
        }
        SetEventFlag(2411, ON);
        SetEventFlag(9456, ON);
        EndTimeMeasurement(2410000);
        EndTimeMeasurement(2410001);
        EndTimeMeasurement(2410010);
        CreatePlaylog(40);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 52, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 52, PlayLogMultiplayerType.HostOnly);
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// ボス撃破SE再生_教区長
$Event(12411701, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411700));
    flag = EventFlag(12411700);
    WaitFor(flag || (!CharacterBackreadStatus(2410800) && HPRatio(2410800) <= 0));
    EndIf(flag.Passed);
    PlaySE(2412800, SoundType.cCharacterMotion, 500099999);
});

// ホストがボス部屋入場_初戦_教区長
$Event(12411702, Default, function() {
    EndIf(EventFlag(12411700));
    if (ThisEvent()) {
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(2410800, Disabled);
    SetCharacterGravity(2410800, Disabled);
    SetCharacterMaphits(2410800, true);
    WaitFor(
        !EventFlag(12411700)
            && !ThisEvent()
            && CharacterType(10000, TargetType.Alive)
            && InArea(10000, 2412805));
    IssueShortWarpRequest(2410800, TargetEntityType.Area, 2412831, -1);
    SetEventFlag(72410511, ON);
    ChangeCharacterEnableState(2410800, Enabled);
    ForceAnimationPlayback(2410800, 3028, false, false, false);
    WaitFixedTimeFrames(110);
    SetCharacterGravity(2410800, Enabled);
    SetCharacterMaphits(2410800, false);
    SetEventFlag(12414700, ON);
    SetEventFlag(12414223, ON);
    EndIf(EventFlag(9300));
    InitializeEvent(0, 9350, 1);
    SetEventFlag(9300, ON);
});

// 教区長_時間差入場ゲスト用対処処理
$Event(12411703, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12414700));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    ChangeCharacterEnableState(2410800, Enabled);
    SetEventFlag(12414700, ON);
    SetEventFlag(12411702, ON);
});

// ホストがボス部屋入場_再戦_教区長
$Event(12414730, Default, function() {
    EndIf(EventFlag(12411700));
    if (!EventFlag(12411702)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2411800, Disabled);
            DeleteMapSFX(2413800, false);
        }
        WaitFor(!EventFlag(12411700) && EventFlag(12411702));
        DeactivateObject(2411800, Enabled);
        SpawnMapSFX(2413800);
    }
L0:
    flagChrAct = !EventFlag(12411700)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2410040, 2411800);
    flag = EventFlag(12411700);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2412800, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2412801);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12414700, ON);
        SetEventFlag(12414223, ON);
    }
    RestartEvent();
});

// ゲストがボス部屋入場_教区長
$Event(12414731, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411700));
    WaitFor(
        !EventFlag(12411700)
            && EventFlag(12411702)
            && EventFlag(12414700)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2410040, 2411800));
    RotateCharacter(10000, 2412800, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2412801);
    chrTime = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12414701, ON);
    }
    RestartEvent();
});

// 他人の世界で霧壁あたり無効_教区長
$Event(12414732, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2411800, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// 他人の世界で霧壁あたり無効2_教区長
$Event(12414733, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2411800, 4)
            && EntityInRadiusOfEntity(10000, 2411800, 8));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// ボスが動き出す_教区長
$Event(12414702, Default, function() {
    EndIf(EventFlag(12411700));
    SetCharacterAIState(2410800, Disabled);
    SetCharacterHPBarDisplay(2410800, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12414700) || EventFlag(12415400));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            IssueBossRoomEntryNotification(0);
            SetNetworkUpdateAuthority(2410800, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12414700, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2410800, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2410800);
    Goto(L4);
L3:
    SetSpEffect(2410800, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2410800);
    Goto(L4);
L4:
    SetCharacterAIState(2410800, Enabled);
    DisplayBossHealthBar(Enabled, 2410800, 0, 500000);
    CreatePlaylog(80);
    StartTimeMeasurement(2410010, 96, Enabled);
});

// ボスBGM ON_教区長
$Event(12414703, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411700));
    if (!ThisEvent()) {
        SetMapSoundState(2413802, Disabled);
        SetMapSoundState(2413803, Disabled);
        flagArea &= !EventFlag(12411700) && EventFlag(12414702);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12414701);
        }
        flagArea &= InArea(10000, 2412801);
        WaitFor(flagArea);
        EnableBossMapSound(2413802, Enabled);
        chrFlagArea &= CharacterHasEventMessage(2410800, 100);
    }
L0:
    chrFlagArea &= !EventFlag(12411700) && EventFlag(12414702);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea &= EventFlag(12414701);
    }
    chrFlagArea &= InArea(10000, 2412801);
    WaitFor(chrFlagArea);
    EnableBossMapSound(2413802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2413803, Enabled);
});

// ボスカメラ_教区長
$Event(12414704, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411700));
    WaitFor(HPRatio(2410800) > 0 && EntityInRadiusOfEntity(10000, 2410800, 5.5));
    SetLockcamSlotNumber(24, 1, 1);
    WaitFor(HPRatio(2410800) > 0 && !EntityInRadiusOfEntity(10000, 2410800, 6));
    SetLockcamSlotNumber(24, 1, 0);
    RestartEvent();
});

// ボスBGM OFF_教区長
$Event(12414705, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411700));
    WaitFor(EventFlag(12411700));
    EnableBossMapSound(2413802, Disabled);
    EnableBossMapSound(2413803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// ボスヒートアップ_教区長
$Event(12414707, Default, function() {
    EndIf(EventFlag(12411700));
    WaitFor(HPRatio(2410800) < 0.7);
    RequestCharacterAICommand(2410800, 1, 1);
    RequestCharacterAIReplan(2410800);
    WaitFor(CharacterHasEventMessage(2410800, 100));
    RequestCharacterAICommand(2410800, -1, 1);
    RequestCharacterAIReplan(2410800);
});

// ボス部位損傷_クロスしんなり_教区長
$Event(12414708, Default, function() {
    EndIf(EventFlag(12411700));
    if (!ThisEvent()) {
        WaitFor(CharacterHasSpEffect(2410800, 482));
    }
L0:
    ChangeCharactersCloth(2410800, 15, 2);
});

// ボス部位損傷_教区長_XX
$Event(12414710, Restart, function(X0_2, X4_4, X8_2, X12_4, X16_4, X20_4, X24_4) {
    EndIf(EventFlag(12411700));
    CreateNPCPart(2410800, X0_2, X8_2, X12_4, 1, 1, false, false);
    SetNPCPartSEAndSFX(2410800, X4_4, 72, 72);
    hp = NPCPartHP(2410800, X4_4) <= 0;
    hp2 = HPRatio(2410800) <= 0;
    WaitFor(hp || hp2);
    EndIf(hp2.Passed);
    CreateNPCPart(2410800, X0_2, X8_2, 9999999, 1, 1.5, false, false);
    SetNPCPartSEAndSFX(2410800, X4_4, 73, 73);
    ForceAnimationPlayback(2410800, X24_4, false, false, false);
    SetSpEffect(2410800, X16_4, false);
    ClearSpEffect(2410800, X20_4);
    RequestCharacterAIReplan(2410800);
    WaitFixedTimeSeconds(30);
    RequestCharacterAICommand(2410800, 1, 0);
    RequestCharacterAIReplan(2410800);
    WaitFor(CharacterHasEventMessage(2410800, 300));
    SetNPCPartHP(2410800, X4_4, -1, true);
    SetSpEffect(2410800, X20_4, false);
    ClearSpEffect(2410800, X16_4);
    RequestCharacterAICommand(2410800, -1, 0);
    RequestCharacterAIReplan(2410800);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// ボス部位損傷演出_教区長_XX
$Event(12414720, Default, function(X0_4, X4_4, X8_1, X9_1) {
    EndIf(EventFlag(12411700));
    WaitFor(CharacterHasSpEffect(2410800, X0_4) && !CharacterHasSpEffect(2410800, X4_4));
    ChangeCharacterDispmask(2410800, X9_1, OFF);
    ChangeCharacterDispmask(2410800, X8_1, ON);
    WaitFor(!CharacterHasSpEffect(2410800, X0_4) && CharacterHasSpEffect(2410800, X4_4));
    ChangeCharacterDispmask(2410800, X8_1, OFF);
    ChangeCharacterDispmask(2410800, X9_1, ON);
    WaitFixedTimeFrames(10);
    RestartEvent();
});

// ボス撃破_ガスコイン神父
$Event(12411800, Default, function() {
    if (ThisEvent()) {
        SetMapSoundState(2413812, Disabled);
        SetMapSoundState(2413813, Disabled);
        ChangeCharacterEnableState(2410810, Disabled);
        ChangeCharacterEnableState(2410811, Disabled);
        ForceCharacterDeath(2410810, false);
        ForceCharacterDeath(2410811, false);
        DeactivateObject(2411810, Disabled);
        DeleteMapSFX(2413810, false);
        EndEvent();
    }
L0:
    chr = CharacterDead(2410810);
    chr2 = CharacterDead(2410811);
    WaitFor(chr || chr2);
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(2411810, Disabled);
    DeleteMapSFX(2413810, true);
    SetLockcamSlotNumber(24, 1, 0);
    WaitFixedTimeSeconds(3);
    if (!chr2.Passed) {
        HandleBossDefeat(2410810);
    } else {
        HandleBossDefeat(2410811);
    }
    SetNetworkUpdateRate(2410811, true, CharacterUpdateFrequency.Every5Frames);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        InitializeEvent(0, 9350, 2);
        AwardAchievement(14);
        AwardItemLot(31000);
        SetEventFlag(2412, ON);
        SetEventFlag(9457, ON);
        SetEventFlag(5910, ON);
        EndTimeMeasurement(2410000);
        EndTimeMeasurement(2410001);
        EndTimeMeasurement(2410010);
        CreatePlaylog(40);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 114, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 114, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 114, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 114, PlayLogMultiplayerType.HostOnly);
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// ボス撃破SE再生_ガスコイン神父
$Event(12411801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411800));
    flag = EventFlag(12411800);
    WaitFor(
        flag
            || (!CharacterBackreadStatus(2410810) && HPRatio(2410810) <= 0)
            || (!CharacterBackreadStatus(2410811) && HPRatio(2410811) <= 0));
    EndIf(flag.Passed);
    PlaySE(2412810, SoundType.cCharacterMotion, 500099999);
});

// ホストがボス部屋入場_初戦_ガスコイン神父
$Event(12411802, Default, function() {
    EndIf(EventFlag(12411800));
    EndIf(ThisEvent());
    ChangeCharacterEnableState(2410810, Disabled);
    WaitFor(
        !EventFlag(12411800)
            && !ThisEvent()
            && CharacterType(10000, TargetType.Alive)
            && InArea(10000, 2412815));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(12414223, ON);
    EndIf(CharacterType(10000, TargetType.BlackPhantom));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        PlayCutsceneToPlayer(24010010, CutscenePlayMode.Skippable, 10000);
    } else {
        PlayCutsceneToPlayer(24010010, CutscenePlayMode.Unskippable, 10000);
    }
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    IssueShortWarpRequest(2410810, TargetEntityType.Area, 2412830, -1);
    ChangeCharacterEnableState(2410810, Enabled);
    SetEventFlag(12414800, ON);
    EndIf(EventFlag(9336));
    InitializeEvent(0, 9350, 1);
    SetEventFlag(9336, ON);
});

// ガスコイン神父_時間差入場ゲスト用対処処理
$Event(12411803, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(12414800));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    ChangeCharacterEnableState(2410810, Enabled);
    SetEventFlag(12414800, ON);
    SetEventFlag(12411802, ON);
});

// ホストがボス部屋入場_再戦_ガスコイン神父
$Event(12414810, Default, function() {
    EndIf(EventFlag(12411800));
    if (!EventFlag(12411802)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(2411810, Disabled);
            DeleteMapSFX(2413810, false);
        }
        WaitFor(!EventFlag(12411800) && EventFlag(12411802));
        DeactivateObject(2411810, Enabled);
        SpawnMapSFX(2413810);
    }
L0:
    flagChrAct = !EventFlag(12411800)
        && CharacterType(10000, TargetType.Alive)
        && ActionButtonInArea(2410041, 2411810);
    flag = EventFlag(12411800);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 2412810, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 2412811);
    chrTime = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12414800, ON);
    }
    RestartEvent();
});

// ゲストがボス部屋入場_ガスコイン神父
$Event(12414811, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411800));
    WaitFor(
        !EventFlag(12411800)
            && EventFlag(12411802)
            && EventFlag(12414800)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(2410041, 2411810));
    RotateCharacter(10000, 2412810, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 2412811);
    chrTime = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chrTime);
    if (!chrTime.Passed) {
        SetEventFlag(12414801, ON);
    }
    RestartEvent();
});

// 他人の世界で霧壁あたり無効_ガスコイン神父
$Event(12414812, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 2411810, 4));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// 他人の世界で霧壁あたり無効2_ガスコイン神父
$Event(12414813, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 2411810, 4)
            && EntityInRadiusOfEntity(10000, 2411810, 8));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// ボスが動き出す_ガスコイン神父
$Event(12414802, Default, function() {
    EndIf(EventFlag(12411800));
    SetCharacterAIState(2410810, Disabled);
    SetCharacterAIState(2410811, Disabled);
    SetCharacterHPBarDisplay(2410810, Disabled);
    SetCharacterHPBarDisplay(2410811, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(12414800));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!EventFlag(12414223)) {
                IssueBossRoomEntryNotification(0);
            }
            SetNetworkUpdateAuthority(2410810, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(2410811, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(12414223, ON);
    SetEventFlag(12414800, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(2410810, 7500, true);
    SetSpEffect(2410811, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2410810);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2410811);
    Goto(L4);
L3:
    SetSpEffect(2410810, 7501, true);
    SetSpEffect(2410811, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2410810);
    AdaptHpchangingSpEffectToNPCPartOfTarget(2410811);
    Goto(L4);
L4:
    CreateReferredDamagePair(2410810, 2410811);
    if (!EventFlag(12414807)) {
        SetCharacterAIState(2410810, Enabled);
        DisplayBossHealthBar(Enabled, 2410810, 0, 271000);
    } else {
L5:
        SetCharacterAIState(2410811, Enabled);
        DisplayBossHealthBar(Enabled, 2410811, 0, 272000);
    }
L6:
    CreatePlaylog(80);
    StartTimeMeasurement(2410010, 96, Enabled);
});

// ボスBGM ON_ガスコイン神父
$Event(12414803, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411800));
    if (!ThisEvent()) {
        SetMapSoundState(2413812, Disabled);
        SetMapSoundState(2413813, Disabled);
        flagArea &= !EventFlag(12411800) && EventFlag(12414802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(12414801);
        }
        flagArea &= InArea(10000, 2412812);
        WaitFor(flagArea);
        EnableBossMapSound(2413812, Enabled);
        flagArea2 &= EventFlag(12414807);
    }
L0:
    flagArea2 &= !EventFlag(12411800) && EventFlag(12414802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(12414801);
    }
    flagArea2 &= InArea(10000, 2412812);
    WaitFor(flagArea2);
    EnableBossMapSound(2413812, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(2413813, Enabled);
});

// ボスカメラ_ガスコイン神父
$Event(12414804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411800));
    if (!EventFlag(12414807)) {
        WaitFor(HPRatio(2410810) > 0 && EntityInRadiusOfEntity(10000, 2410810, 5.5));
        SetLockcamSlotNumber(24, 1, 1);
        WaitFor(HPRatio(2410810) > 0 && !EntityInRadiusOfEntity(10000, 2410810, 6));
        SetLockcamSlotNumber(24, 1, 0);
        RestartEvent();
    }
L0:
    WaitFor(HPRatio(2410811) > 0 && EntityInRadiusOfEntity(10000, 2410811, 5.5));
    SetLockcamSlotNumber(24, 1, 1);
    WaitFor(HPRatio(2410811) > 0 && !EntityInRadiusOfEntity(10000, 2410811, 6));
    SetLockcamSlotNumber(24, 1, 0);
    RestartEvent();
});

// ボスBGM OFF_ガスコイン神父
$Event(12414805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(12411800));
    WaitFor(EventFlag(12411800));
    EnableBossMapSound(2413812, Disabled);
    EnableBossMapSound(2413813, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// ボス変身_ガスコイン神父
$Event(12414807, Default, function() {
    EndIf(EventFlag(12411800));
    if (ThisEvent()) {
        ChangeCharacterEnableState(2410810, Disabled);
        EndEvent();
    }
L0:
    SetCharacterGravity(2410811, Disabled);
    hp = HPRatio(2410810) < 0.34;
    chr = CharacterHasEventMessage(2410810, 30);
    WaitFor(hp || chr);
    RequestCharacterAICommand(2410810, 40, 0);
    if (!chr.Passed) {
        WaitFor(CharacterHasEventMessage(2410810, 30));
    }
    WaitFixedTimeFrames(5);
    ChangeCharacterEnableState(2410810, Disabled);
    SetCharacterGravity(2410811, Enabled);
    SetNetworkUpdateRate(2410811, true, CharacterUpdateFrequency.AlwaysUpdate);
    WarpCharacterAndCopyFloor(2410811, TargetEntityType.Character, 2410810, 203, 2410810);
    ForceAnimationPlayback(2410811, 3030, false, true, false);
    SetCharacterAIState(2410811, Enabled);
    DisplayBossHealthBar(Enabled, 2410811, 0, 272000);
    EndIf(EventFlag(9337));
    InitializeEvent(0, 9350, 1);
    SetEventFlag(9337, ON);
});

// ガスコイン（ボス部屋）オルゴールで特殊アニメ再生
$Event(12414808, Default, function() {
    WaitFor(CharacterHasSpEffect(2410810, 4640) && HPRatio(2410810) >= 0.34);
    RequestCharacterAICommand(2410810, 60, 0);
    RequestCharacterAIReplan(2410810);
    WaitFor(CharacterHasEventMessage(2410810, 10));
    RequestCharacterAICommand(2410810, -1, 0);
    RequestCharacterAIReplan(2410810);
    WaitFixedTimeSeconds(10);
    WaitFor(CharacterHasSpEffect(2410810, 4640) && HPRatio(2410810) >= 0.34);
    RequestCharacterAICommand(2410810, 60, 0);
    RequestCharacterAIReplan(2410810);
    WaitFor(CharacterHasEventMessage(2410810, 10));
    RequestCharacterAICommand(2410810, -1, 0);
    RequestCharacterAIReplan(2410810);
    WaitFixedTimeSeconds(10);
    WaitFor(CharacterHasSpEffect(2410810, 4640) && HPRatio(2410810) >= 0.34);
    RequestCharacterAICommand(2410810, 60, 0);
    RequestCharacterAIReplan(2410810);
    WaitFor(CharacterHasEventMessage(2410810, 10));
    RequestCharacterAICommand(2410810, 40, 0);
    RequestCharacterAIReplan(2410810);
});

// ガスコイン（変身後）オルゴールで特殊アニメ再生
$Event(12414809, Default, function() {
    WaitFor(EventFlag(12414807));
    WaitFixedTimeSeconds(3);
    WaitFor(CharacterHasSpEffect(2410811, 4640));
    RequestCharacterAICommand(2410811, 50, 0);
    RequestCharacterAIReplan(2410811);
    WaitFor(CharacterHasEventMessage(2410811, 20));
    RequestCharacterAICommand(2410811, -1, 0);
    RequestCharacterAIReplan(2410811);
});

// アニメ再生_ターゲット判定
$Event(12415225, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    areaChr = EntityInRadiusOfEntity(X0_4, 10000, X8_4)
        && (CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Combat));
    dmg = HasDamageType(X0_4, 10000, DamageType.Unspecified);
    WaitFor(areaChr || dmg);
    EndIf(dmg.Passed);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
});

// アニメ再生_ターゲット判定_ロジック停止版
$Event(12415228, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    area = EntityInRadiusOfEntity(X0_4, 10000, X8_4);
    dmg = HasDamageType(X0_4, 10000, DamageType.Unspecified);
    WaitFor(area || dmg);
    SetCharacterAIState(X0_4, Enabled);
    EndIf(dmg.Passed);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
});

// キャラの巣変更_ターゲット
$Event(12415232, Restart, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        WaitFor(
            CharacterAIState(X0_4, AIStateType.Recognition)
                || CharacterAIState(X0_4, AIStateType.Combat));
    }
L0:
    SetCharacterHome(X0_4, X4_4);
});

// キャラの巣変更_領域
$Event(12415233, Restart, function(X0_4, X4_4, X8_4) {
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, X0_4));
    }
L0:
    SetCharacterHome(X4_4, X8_4);
});

// ガスコインに加勢_イベント版
$Event(12415234, Default, function(X0_4, X4_4, X8_4) {
    chrArea |= CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    area = EntityInRadiusOfEntity(X8_4, 10000, 10);
    chrArea |= area || !EntityInRadiusOfEntity(X8_4, 10000, 10);
    WaitFor(
        chrArea && CharacterDead(X0_4) && CharacterDead(X4_4) && !CharacterDead(X8_4) && chrArea);
    EndIf(area.Passed);
    WaitFor(EntityInRadiusOfEntity(10000, 0, 0));
    WaitFixedTimeFrames(10);
});

// ガスコインと共闘_イベント版
$Event(12415236, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (EventFlag(12415236) && HasMultiplayerState(MultiplayerState.Client)) {
        ChangeCharacterEnableState(X8_4, Disabled);
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(X12_4, Disabled);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && EventFlag(X0_4)
            && EventFlag(12415234)
            && !CharacterDead(X8_4)
            && AllPlayersInArea(2412143)
            && (HPRatio(X4_4) <= 0.5 || ElapsedSeconds(40)));
    EndIf(EventFlag(12411700));
    SetEventFlag(12415236, ON);
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Enabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(X12_4, AuthorityLevel.Forced);
    }
    WaitFixedTimeSeconds(1);
    SetCharacterHome(X12_4, X16_4);
    RequestCharacterAICommand(X12_4, 10, 0);
    RequestCharacterAIReplan(X12_4);
    SetCharacterGravity(X12_4, Disabled);
    SetCharacterMaphits(X12_4, true);
    SetCharacterAnimationState(X12_4, Disabled);
    WaitFor(EntityInRadiusOfEntity(X12_4, 2410800, 3) || InArea(X12_4, 2412801));
    RequestCharacterAICommand(X12_4, -1, 0);
    ClearCharactersAITarget(X12_4);
    RequestCharacterAIReplan(X12_4);
    SetCharacterMaphits(X12_4, false);
    SetCharacterAnimationState(X12_4, Enabled);
    SetCharacterGravity(X12_4, Enabled);
});

// ガスコイン_巣を屋根の上に切り替え
$Event(12415238, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    WaitFor(InArea(X4_4, X8_4) && AllPlayersInArea(X0_4));
    SetCharacterHome(X4_4, X12_4);
    RequestCharacterAICommand(X4_4, 10, 0);
    RequestCharacterAIReplan(X4_4);
    WaitFor(InArea(X4_4, X16_4) || HasDamageType(X4_4, 10000, DamageType.Unspecified));
    RequestCharacterAICommand(X4_4, -1, 0);
    RequestCharacterAIReplan(X4_4);
    RestartEvent();
});

// 待機イベント_大通り群衆小隊
$Event(12415250, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    WaitFor(InArea(X0_4, X16_4));
    WaitRandomTimeSeconds(X8_4, X12_4);
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal));
    ForceAnimationPlayback(X0_4, X4_4, false, true, false);
    RestartEvent();
});

// 移動イベント_大通り群衆小隊_ロジック対応
$Event(12415255, Restart, function(X0_4) {
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Alert)
            || CharacterAIState(X0_4, AIStateType.Combat));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    dmg = HasDamageType(X0_4, -1, DamageType.Unspecified);
    WaitFor(dmg || CharacterAIState(X0_4, AIStateType.Normal));
    RestartIf(dmg.Passed);
    RequestCharacterAICommand(X0_4, 20, 0);
    RequestCharacterAIReplan(X0_4);
    RestartEvent();
});

// 移動イベント_大通り群衆小隊
$Event(12415260, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    if (ThisEventSlot()) {
        SetCharacterHome(X0_4, X24_4);
        ChangeCharacterPatrolBehavior(X0_4, 2413500);
        EndEvent();
    }
L0:
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, X4_4) || EntityInRadiusOfEntity(10000, X0_4, X8_4)));
    SetCharacterHome(X0_4, X12_4);
    RequestCharacterAICommand(X0_4, 20, 0);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    cond |= InArea(10000, X16_4) || EntityInRadiusOfEntity(10000, X0_4, X8_4);
    areaChr = InArea(X0_4, X12_4) && chr && cond;
    WaitFor(areaChr);
    if (!areaChr.Passed) {
        RequestCharacterAICommand(X0_4, -1, 0);
        cond |= CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
        WaitFor(
            cond
                && (InArea(10000, X16_4)
                    || InArea(10000, X20_4)
                    || EntityInRadiusOfEntity(10000, X0_4, X8_4)));
        WaitRandomTimeFrames(0, 300);
    }
L1:
    SetCharacterHome(X0_4, X24_4);
    RequestCharacterAICommand(X0_4, 20, 0);
    area = InArea(X0_4, X24_4);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, X20_4) || EntityInRadiusOfEntity(10000, X0_4, X8_4)));
    RequestCharacterAICommand(X0_4, -1, 0);
    ChangeCharacterPatrolBehavior(X0_4, 2413500);
});

// 移動イベント_大通り群衆小隊_XX_第1フェーズ
$Event(12415295, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        SetCharacterHome(X0_4, X12_4);
        EndEvent();
    }
L0:
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, X4_4) || EntityInRadiusOfEntity(10000, X0_4, X8_4)));
    SetCharacterHome(X0_4, X12_4);
    RequestCharacterAICommand(X0_4, 20, 0);
    RequestCharacterAIReplan(X0_4);
});

// 移動イベント_大通り群衆小隊_XX_第2フェーズ
$Event(12415300, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    WaitFor(
        EventFlag(X0_4)
            && (InArea(X4_4, X8_4)
                || ((CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom))
                    && (InArea(10000, X12_4) || EntityInRadiusOfEntity(10000, X4_4, X16_4)))));
    RequestCharacterAICommand(X4_4, -1, 0);
    RequestCharacterAIReplan(X4_4);
});

// 移動イベント_大通り群衆小隊_XX_第3フェーズ
$Event(12415305, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (ThisEventSlot()) {
        SetCharacterHome(X4_4, X20_4);
        EndEvent();
    }
L0:
    WaitFor(
        EventFlag(X0_4)
            && ((CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && (InArea(10000, X8_4)
                    || InArea(10000, X12_4)
                    || EntityInRadiusOfEntity(10000, X4_4, X16_4))));
    WaitRandomTimeFrames(0, 30);
L1:
    SetCharacterHome(X4_4, X20_4);
    RequestCharacterAICommand(X4_4, 20, 0);
    RequestCharacterAIReplan(X4_4);
});

// 移動イベント_大通り群衆小隊_XX_第4フェーズ
$Event(12415310, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(ThisEventSlot());
    WaitFor(
        EventFlag(X0_4)
            && (InArea(X4_4, X8_4)
                || ((CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom))
                    && (InArea(10000, X12_4) || EntityInRadiusOfEntity(10000, X4_4, X16_4)))));
    ChangeCharacterPatrolBehavior(X4_4, X20_4);
    RequestCharacterAICommand(X4_4, -1, 0);
    RequestCharacterAIReplan(X4_4);
});

// 大通り群衆にぎやかし小隊_巡回開始XX_第1フェーズ
$Event(12415315, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        SetCharacterHome(X0_4, X12_4);
        EndEvent();
    }
L0:
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, X4_4) || EntityInRadiusOfEntity(10000, X0_4, X8_4)));
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterHome(X0_4, X12_4);
});

// 大通り群衆にぎやかし小隊_巡回開始XX_第2フェーズ
$Event(12415320, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (!ThisEventSlot()) {
        WaitFor(
            EventFlag(X0_4)
                && (InArea(X4_4, X8_4)
                    || ((CharacterType(10000, TargetType.Alive)
                        || CharacterType(10000, TargetType.WhitePhantom))
                        && InArea(10000, X12_4))));
    }
L0:
    ChangeCharacterPatrolBehavior(X4_4, X16_4);
});

// 大通り群衆にぎやかし小隊_巡回開始XX_第3フェーズ
$Event(12415325, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (!ThisEventSlot()) {
        WaitFor(
            EventFlag(X0_4)
                && ((CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom))
                    && InArea(10000, X8_4)));
    }
L0:
    ChangeCharacterPatrolBehavior(X4_4, X12_4);
});

// 大通り群衆にぎやかし小隊_巡回開始XX_鐘なし版_前半
$Event(12415330, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, X4_4);
    area2 = InArea(10000, X8_4);
    area3 = InArea(10000, X16_4);
    area4 = EntityInRadiusOfEntity(10000, X0_4, X12_4);
    WaitFor(chr && (area || area2 || area3 || area4));
    if (!area.Passed) {
        if (!area3.Passed) {
            if (!area4.Passed) {
                WaitFixedTimeSeconds(10);
            }
        }
    }
L1:
    SetCharacterAIState(X0_4, Enabled);
});

// 大通り群衆にぎやかし小隊_巡回開始XX_鐘なし版_後半
$Event(12415335, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (!ThisEventSlot()) {
        WaitFor(
            EventFlag(X0_4)
                && (InArea(X4_4, X8_4)
                    || ((CharacterType(10000, TargetType.Alive)
                        || CharacterType(10000, TargetType.WhitePhantom))
                        && InArea(10000, X12_4))));
    }
L0:
    ChangeCharacterPatrolBehavior(X4_4, X16_4);
});

// 敵の巡回開始_前半_XX
$Event(12415340, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        SetCharacterHome(X0_4, X12_4);
        EndEvent();
    }
L0:
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, X4_4);
    area2 = EntityInRadiusOfEntity(10000, X0_4, X8_4);
    chrArea = chr && (area || area2);
    dmg = HasDamageType(X0_4, -1, DamageType.Unspecified);
    WaitFor(chrArea || dmg);
    if (!area2.Passed) {
        if (!dmg.Passed) {
            RequestCharacterAICommand(X0_4, 20, 0);
        }
    }
L1:
    WaitFixedTimeFrames(10);
    SetCharacterHome(X0_4, X12_4);
});

// 敵の巡回開始_後半_XX
$Event(12415345, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    if (!ThisEventSlot()) {
        WaitFor(
            EventFlag(X0_4)
                && (InArea(X4_4, X8_4)
                    || HasDamageType(X4_4, -1, DamageType.Unspecified)
                    || ((CharacterType(10000, TargetType.Alive)
                        || CharacterType(10000, TargetType.WhitePhantom))
                        && (InArea(10000, X12_4) || EntityInRadiusOfEntity(10000, X4_4, X16_4)))));
        RequestCharacterAICommand(X4_4, -1, 0);
        RequestCharacterAIReplan(X4_4);
    }
L0:
    EndIf(X20_4 == 0);
    ChangeCharacterPatrolBehavior(X4_4, X24_4);
});

// 梯子とレバー_開始地点梯子_イベント版
$Event(12410286, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X8_4, 2);
        WaitFixedTimeSeconds(1);
        RegisterLadder(X0_4, X4_4, X8_4);
        SetObjactState(X12_4, 2410000, Disabled);
        EndEvent();
    }
L0:
    SetObjactState(X12_4, 2410000, Disabled);
    ForceAnimationPlayback(X8_4, 2, false, false, false);
    RegisterLadder(X0_4, X4_4, X8_4);
});

// 橋の上の風が吹く
$Event(12410290, Default, function() {
    DeleteMapSFX(2413110, false);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 2412150));
    SpawnMapSFX(2413110);
});

// 鴉が飛び立つ
$Event(12415360, Default, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, X0_4));
    ForceAnimationPlayback(X4_4, X8_4, false, false, false);
});

// イベント版_ボス部屋前の群衆Ｂ_巣切り替え
$Event(12415390, Default, function(X0_4) {
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Combat));
    SetCharacterHome(X0_4, 2412242);
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal));
    SetCharacterHome(X0_4, 2412241);
    RestartEvent();
});

// 焚き火広場の狂犬_巡回開始
$Event(12415700, Restart, function() {
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && EntityInRadiusOfEntity(2410270, 10000, 8));
    }
L0:
    ChangeCharacterPatrolBehavior(2410270, 2413510);
    RequestCharacterAIReplan(2410270);
});

// 汎用住人SE再生
$Event(12415750, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetMapSoundState(X0_4, Disabled);
    EndIf(EventFlag(X12_4));
    WaitFor(!EventFlag(X4_4) && !EventFlag(X8_4));
    SetMapSoundState(X0_4, Enabled);
    WaitFor(EventFlag(X4_4) || EventFlag(X8_4));
    SetMapSoundState(X0_4, Disabled);
    RestartEvent();
});

// 重病人_SE再生
$Event(12415759, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetMapSoundState(X0_4, Disabled);
    EndIf(EventFlag(1245));
    EndIf(EventFlag(1246));
    EndIf(EventFlag(X12_4));
    WaitFor(!EventFlag(X4_4) && !EventFlag(X8_4));
    SetMapSoundState(X0_4, Enabled);
    WaitFor(EventFlag(X4_4) || EventFlag(X8_4));
    SetMapSoundState(X0_4, Disabled);
    RestartEvent();
});

// 汎用住人_SFX制御
$Event(12415770, Restart, function(X0_4, X4_4, X8_4) {
    DeleteObjectfollowingSFX(X0_4, true);
    EndIf(EventFlag(X4_4));
    CreateObjectfollowingSFX(X0_4, 200, X8_4);
});

// 孤独な老婆_SFX制御
$Event(12415779, Restart, function(X0_4) {
    CreateObjectfollowingSFX(X0_4, 200, 924113);
    WaitFor(EventFlag(1180) && EventFlag(1193) && EventFlag(1194));
    DeleteObjectfollowingSFX(X0_4, true);
});

// はしごの上到達
$Event(12410900, Default, function() {
    EndIf(ThisEvent());
    WaitFor(CharacterType(10000, TargetType.Alive) && InArea(10000, 2412911));
    SetEventFlag(9403, ON);
});

// 時間帯変化_聖堂街B
$Event(12410310, Default, function() {
    GotoIf(L2, EventFlag(9802));
    GotoIf(L1, EventFlag(9801));
    GotoIf(L0, EventFlag(9800));
    ActivateMapPart(2414010, Enabled);
    ActivateMapPart(2414011, Disabled);
    ActivateMapPart(2414012, Disabled);
    ActivateMapPart(2414013, Disabled);
    ActivateMapPart(2414070, Disabled);
    ActivateMapPart(2414071, Disabled);
    DeleteMapSFX(2413350, false);
    DeleteMapSFX(2413380, false);
    Goto(L3);
L0:
    ActivateMapPart(2414010, Disabled);
    ActivateMapPart(2414011, Enabled);
    ActivateMapPart(2414012, Disabled);
    ActivateMapPart(2414013, Disabled);
    ActivateMapPart(2414070, Disabled);
    ActivateMapPart(2414071, Disabled);
    DeleteMapSFX(2413350, false);
    DeleteMapSFX(2413380, false);
    Goto(L3);
L1:
    ActivateMapPart(2414010, Disabled);
    ActivateMapPart(2414011, Disabled);
    ActivateMapPart(2414012, Enabled);
    ActivateMapPart(2414013, Disabled);
    ActivateMapPart(2414050, Disabled);
    ActivateMapPart(2414051, Disabled);
    DeleteMapSFX(2413300, false);
    DeleteMapSFX(2413301, false);
    DeleteMapSFX(2413302, false);
    DeleteMapSFX(2413303, false);
    DeleteMapSFX(2413304, false);
    DeleteMapSFX(2413305, false);
    DeleteMapSFX(2413380, false);
    Goto(L3);
L2:
    ActivateMapPart(2414010, Disabled);
    ActivateMapPart(2414011, Disabled);
    ActivateMapPart(2414012, Disabled);
    ActivateMapPart(2414013, Enabled);
    ActivateMapPart(2414050, Disabled);
    ActivateMapPart(2414051, Disabled);
    DeleteMapSFX(2413350, false);
L3:
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9801)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 9802));
    RestartEvent();
});

// チュートリアル_メッセンジャーが見えるようになる
$Event(12410010, Default, function() {
    EndIf(EventFlag(9401));
    SetVisibilityOfMessage(2413601, Disabled);
    SetVisibilityOfMessage(2413604, Disabled);
});

// チュートリアル_メッセンジャーが見えるようになる_2
$Event(12410011, Default, function() {
    EndEvent();
    EndIf(ThisEvent());
    SetVisibilityOfMessage(2413603, Disabled);
    chrFlag &= CharacterType(10000, TargetType.Alive);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        chrFlag &= EventFlag(52410120);
    }
    WaitFor(chrFlag);
    SetVisibilityOfMessage(2413603, Enabled);
});

// チュートリアル_メッセンジャーが見えるようになる_3
$Event(12410012, Default, function() {
    EndIf(ThisEvent());
    SetVisibilityOfMessage(2413610, Disabled);
    SetVisibilityOfMessage(2413611, Disabled);
    WaitFor(EventFlag(9401));
    SetVisibilityOfMessage(2413610, Enabled);
    SetVisibilityOfMessage(2413611, Enabled);
});

// チュートリアル_手負いの猟犬
$Event(12410170, Restart, function() {
    if (ThisEvent()) {
        SetCharacterBackreadState(2410019, true);
        EndEvent();
    }
L0:
    SetCharacterHPBarDisplay(2410019, Disabled);
    SetSpEffect(2410019, 5617, false);
    SetSpEffect(2410019, 5708, false);
    WaitFixedTimeSeconds(3);
    SetCharacterHPBarDisplay(2410019, Enabled);
    WaitFor(CharacterDead(2410019));
    EndEvent();
});

// チュートリアル_寝てる敵が起きる_XX
$Event(12415100, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7000, false, false, false);
    SetCharacterGravity(X0_4, Disabled);
    chr = CharacterAIState(2410019, AIStateType.Recognition)
        || CharacterAIState(2410019, AIStateType.Combat);
    dmg = HasDamageType(X0_4, -1, DamageType.Unspecified);
    WaitFor(chr || dmg);
    if (!dmg.Passed) {
        WaitRandomTimeSeconds(1, 3);
        ForceAnimationPlayback(X0_4, 7002, false, false, false);
    }
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterGravity(X0_4, Enabled);
});

// 診療所に古城への招待状出現
$Event(12410510, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(ThisEvent());
    if (!EventFlag(12410511)) {
        WaitFor(InArea(10000, 2412350));
        SetEventFlag(12410511, ON);
    }
L0:
    CreateObjectfollowingSFX(2411200, 200, 900201);
    WaitFor(ActionButtonInArea(2410060, 2411200));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    AwardItemLot(2410990);
    DeleteObjectfollowingSFX(2411200, true);
});

// 特殊待機_狂犬が吠えたら解除
$Event(12410030, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    ForceAnimationPlayback(X0_4, X4_4, true, false, true);
    SetCharacterAIId(X0_4, X16_4);
    SetCharacterGravity(X0_4, Disabled);
    chr = CharacterAIState(X12_4, AIStateType.Recognition) || CharacterAIState(X12_4, AIStateType.Combat);
    chr2 = CharacterAIState(X0_4, AIStateType.Recognition) || CharacterAIState(X0_4, AIStateType.Combat);
    dmg = HasDamageType(X0_4, -1, DamageType.Unspecified);
    WaitFor(chr || chr2 || dmg);
    SetCharacterGravity(X0_4, Enabled);
    if (!dmg.Passed) {
        ForceAnimationPlayback(X12_4, 3021, false, false, false);
        WaitRandomTimeFrames(20, 70);
    }
L0:
    SetCharacterAIId(X0_4, X20_4);
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false);
});

// 仲間呼び_阻止可能
$Event(12410040, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    SetCharacterAIId(X0_4, X4_4);
    chr = CharacterAIState(X16_4, AIStateType.Recognition) || CharacterAIState(X16_4, AIStateType.Combat);
    chr2 = CharacterAIState(X0_4, AIStateType.Recognition) || CharacterAIState(X0_4, AIStateType.Combat);
    WaitFor(chr || chr2);
    if (!chr2.Passed) {
        ForceAnimationPlayback(X16_4, X20_4, false, true, false);
        hp = HPRatio(X16_4) == 1;
        hp2 = HPRatio(X16_4) < 1;
        WaitFor(hp || hp2);
        if (!hp2.Passed) {
            SetCharacterAIId(X0_4, X8_4);
            WaitFixedTimeFrames(100);
        }
    }
L0:
    SetCharacterAIId(X0_4, X12_4);
});

// 仲間呼び_阻止不可能
$Event(12410050, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    SetCharacterAIId(X0_4, X4_4);
    WaitFor(
        CharacterAIState(X16_4, AIStateType.Recognition)
            || CharacterAIState(X16_4, AIStateType.Combat));
    ForceAnimationPlayback(X16_4, X20_4, false, false, false);
    SetCharacterAIId(X0_4, X8_4);
    WaitFixedTimeSeconds(300);
    SetCharacterAIId(X0_4, X12_4);
});

// 屍肉烏が動き出す_XX
$Event(12415160, Restart, function(X0_4, X4_4, X8_4) {
    WaitRandomTimeFrames(0, 50);
    ForceAnimationPlayback(X0_4, X4_4, true, false, true);
    SetCharacterGravity(X0_4, Disabled);
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Combat));
    SetCharacterGravity(X0_4, Enabled);
    WaitRandomTimeFrames(0, 30);
    ForceAnimationPlayback(X0_4, X8_4, false, true, false);
});

// 宝箱_開放
$Event(12410600, Restart, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X4_4, 0);
        SetObjactState(X4_4, X8_4, Disabled);
        SetObjectTreasureState(X4_4, Enabled);
        EndEvent();
    }
    WaitFor(ObjActEventFlag(X0_4));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(X4_4, Enabled);
});

// 診療所_月使者殺害時アイテム取得
$Event(12410630, Restart, function(X0_4, X4_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(ThisEventSlot());
    WaitFor(CharacterDead(X0_4));
    AwardItemLot(X4_4);
});

// ニセ女医_初期化
$Event(12410645, Restart, function() {
    SetCharacterImmortality(2410703, Enabled);
    SetCharacterHPBarDisplay(2410703, Disabled);
    if (EventFlag(1140)) {
        SetCharacterBackreadState(2410703, true);
    }
L9:
    if (EventFlag(1141)) {
        SetCharacterBackreadState(2410710, false);
        SetCharacterBackreadState(2410711, true);
        SetCharacterAnimationState(2410710, Disabled);
    }
L0:
    if (EventFlag(1142)) {
        SetCharacterBackreadState(2410710, false);
        SetCharacterBackreadState(2410711, true);
        SetCharacterAnimationState(2410710, Disabled);
    }
L7:
    if (EventFlag(1143)) {
        SetCharacterBackreadState(2410710, false);
        SetCharacterBackreadState(2410711, true);
    }
L8:
    if (EventFlag(1144)) {
        SetCharacterBackreadState(2410710, false);
        SetCharacterBackreadState(2410711, true);
        SetCharacterAnimationState(2410710, Disabled);
    }
L1:
    if (EventFlag(1145)) {
        SetCharacterBackreadState(2410703, true);
        SetCharacterBackreadState(2410710, false);
        SetCharacterBackreadState(2410711, true);
        WarpCharacterAndSetFloor(2410710, TargetEntityType.Area, 2412172, -1, 0);
        SetCharacterHome(2410710, 2412172);
        SetCharacterTeamType(2410710, TeamType.Enemy1);
    }
L2:
    if (EventFlag(1146)) {
        SetCharacterBackreadState(2410703, true);
        SetCharacterBackreadState(2410710, true);
        SetCharacterBackreadState(2410711, false);
        ForceAnimationPlayback(2410711, 103000, false, false, false);
    }
L3:
    if (EventFlag(1147)) {
        SetCharacterBackreadState(2410703, true);
        SetCharacterBackreadState(2410710, true);
        SetCharacterBackreadState(2410711, true);
        SetCharacterBackreadState(2410703, true);
    }
L4:
    if (EventFlag(1148)) {
        SetCharacterBackreadState(2410703, true);
        SetCharacterBackreadState(2410710, true);
        SetCharacterBackreadState(2410711, true);
        WarpCharacterAndSetFloor(2410710, TargetEntityType.Area, 2412172, -1, 0);
        WaitFixedTimeFrames(1);
        ForceCharacterTreasure(2410710);
    }
L5:
    EndIf(!EventFlag(1149));
    SetCharacterBackreadState(2410703, true);
    SetCharacterBackreadState(2410710, true);
    SetCharacterBackreadState(2410711, false);
    EzstateInstructionRequest(2410711, 0, 1);
    ForceCharacterTreasure(2410711);
});

// ニセ女医_まだいない
$Event(12410650, Restart, function() {
L0:
    WaitFor(!AnyBatchEventFlags(1141, 1159));
    SetCharacterBackreadState(2410710, true);
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1140, ON);
});

// ニセ女医_通常
$Event(12410651, Restart, function() {
    EndIf(EventFlag(1148));
    EndIf(EventFlag(1149));
    EndIf(EventFlag(1141));
    EndIf(ThisEvent());
    WaitFor(EventFlag(9800));
    SetCharacterBackreadState(2410703, false);
    SetCharacterBackreadState(2410710, false);
    SetCharacterAnimationState(2410710, Disabled);
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1141, ON);
});

// ニセ女医_受付中
$Event(12410652, Restart, function() {
    EndIf(EventFlag(1148));
    EndIf(EventFlag(1149));
    EndIf(ThisEvent());
    WaitFor(EventFlag(72410320) && EventFlag(1141));
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1142, ON);
});

// ニセ女医_共犯（診療所）
$Event(12410653, Restart, function() {
    EndIf(EventFlag(1148));
    EndIf(EventFlag(1149));
    EndIf(EventFlag(1145));
    EndIf(EventFlag(1146));
    WaitFor(
        InArea(10000, 2412170)
            && !EventFlag(1140)
            && !EventFlag(1145)
            && !EventFlag(1146)
            && !EventFlag(1147)
            && !EventFlag(1148)
            && !EventFlag(1149)
            && !CharacterDead(2410710));
    SetDistanceLimitForConversationStateProcessing(2410710, 40.5);
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1143, ON);
    RestartEvent();
});

// ニセ女医_共犯（外）
$Event(12410654, Restart, function() {
    EndIf(EventFlag(1148));
    EndIf(EventFlag(1149));
    EndIf(EventFlag(1145));
    EndIf(EventFlag(1146));
    WaitFor(EventFlag(1143) && InArea(10000, 2412171));
    SetDistanceLimitForConversationStateProcessing(2410710, 17);
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1144, ON);
    RestartEvent();
});

// ニセ女医_敵対
$Event(12410655, Restart, function() {
    EndIf(EventFlag(1148));
    EndIf(EventFlag(1149));
L0:
    SetCharacterAIState(2410710, Disabled);
    WaitFor(
        InArea(10000, 2412190)
            && !EventFlag(1140)
            && !EventFlag(1146)
            && !EventFlag(1147)
            && !EventFlag(1148)
            && !EventFlag(1149));
    SetCharacterAIState(2410710, Enabled);
    SetCharacterTeamType(2410710, TeamType.Enemy1);
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1145, ON);
    SaveRequest(0);
});

// ニセ女医_狂った
$Event(12410656, Restart, function() {
    EndIf(EventFlag(1148));
    EndIf(EventFlag(1149));
    WaitFor(EventFlag(9802) && !CharacterDead(2410710));
    SetCharacterBackreadState(2410703, true);
    SetCharacterBackreadState(2410710, true);
    SetCharacterBackreadState(2410711, false);
    ForceAnimationPlayback(2410711, 103000, false, false, false);
    SetCharacterAnimationState(2410711, Enabled);
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1146, ON);
});

// ニセ女医_どこにもいない
$Event(12410657, Restart, function() {
    EndIf(EventFlag(1148));
    EndIf(EventFlag(1149));
    EndIf(EventFlag(1147));
    WaitFor(EventFlag(72410326));
    SetCharacterBackreadState(2410703, true);
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1147, ON);
    SaveRequest(0);
});

// ニセ女医_死亡
$Event(12410658, Restart, function() {
    EndIf(EventFlag(1149));
    WaitFor(HPRatio(2410710) <= 0 && EventFlag(1145));
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1148, ON);
    SaveRequest(0);
});

// ニセ女医_配置位置ワープ
$Event(12410659, Restart, function() {
    areaFlag = InArea(10000, 2412170) && EventFlag(1143);
    areaFlag2 = InArea(10000, 2412171) && !EventFlag(62411300) && EventFlag(1144);
    areaFlag3 = InArea(10000, 2412171) && EventFlag(1147);
    WaitFor(areaFlag || areaFlag2 || areaFlag3);
    GotoIf(L0, areaFlag2.Passed);
    GotoIf(L1, areaFlag3.Passed);
    WarpCharacterAndSetFloor(2410710, TargetEntityType.Area, 2412172, -1, 0);
    SetCharacterHome(2410710, 2412172);
    SetEventFlag(72410337, ON);
    SetCharacterAnimationState(2410710, Enabled);
    SetCharacterBackreadState(2410703, true);
    RestartEvent();
L0:
    WarpCharacterAndSetFloor(2410710, TargetEntityType.Area, 2412173, -1, 0);
    SetCharacterHome(2410710, 2412173);
    SetEventFlag(72410337, OFF);
    SetCharacterAnimationState(2410710, Disabled);
    SetCharacterBackreadState(2410703, false);
    RestartEvent();
L1:
    SetCharacterBackreadState(2410710, true);
});

// ニセ女医_受入数カウント
$Event(12410661, Restart, function() {
    WaitFor(EventValue(12410646, 4) >= 4);
    SetEventFlag(72410328, ON);
});

// ニセ女医_住人を保護した
$Event(12410662, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    flag = EventFlag(X0_4) && EventFlag(1142);
    WaitFor(flag || (EventFlag(X0_4) && EventFlag(1144)));
    if (flag.Passed) {
        IncrementEventValue(12410646, 4, 10);
        SetEventFlag(X8_4, ON);
        BatchSetEventFlags(72410331, 72410332, OFF);
        SetEventFlag(X4_4, ON);
        EndEvent();
    }
L0:
    IncrementEventValue(12410646, 4, 10);
    SetEventFlag(X8_4, ON);
    BatchSetEventFlags(72410331, 72410332, OFF);
    SetEventFlag(72410334, ON);
});

// ニセ女医_全員保護した
$Event(12410668, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(
        EventFlag(1163)
            && EventFlag(1204)
            && EventFlag(1268)
            && EventFlag(1190)
            && EventFlag(1223)
            && EventFlag(1309)
            && EventFlag(72410336));
    BatchSetEventFlags(72410331, 72410332, OFF);
    SetEventFlag(72410333, ON);
});

// ニセ女医_月の使者生成_XX
$Event(12410669, Restart, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(X0_4, Enabled);
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(X0_4, X8_4, true, false, false);
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(EventFlag(X4_4));
    ChangeCharacterEnableState(X0_4, Enabled);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(X0_4, X8_4, true, false, false);
});

// ニセ女医_PCが扉を攻撃する
$Event(12410676, Restart, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && HasDamageType(2410703, 10000, DamageType.Unspecified)
            && (EventFlag(1141) || EventFlag(1142) || EventFlag(1144)));
    if (!AllBatchEventFlags(72410344, 72410346)) {
        if (EventFlag(72410320)) {
            if (EventFlag(72410344)) {
                if (EventFlag(72410345)) {
                    SetEventFlag(72410346, ON);
                }
L1:
                SetEventFlag(72410345, ON);
            }
L2:
            SetEventFlag(72410344, ON);
        }
L3:
        SetEventFlag(72410329, ON);
        WaitFor(!EventFlag(72410329));
        RestartEvent();
    }
L0:
    SetEventFlag(72410329, ON);
    SaveRequest(0);
});

// ニセ女医_強制死亡
$Event(12410677, Default, function() {
    EndIf(EventFlag(1148));
    EndIf(EventFlag(1149));
    WaitFor(EventFlag(1146) && CharacterDamagedBy(2410711, 10000));
    ForceAnimationPlayback(2410711, 103001, false, false, false);
    ForceCharacterDeath(2410711, true);
    BatchSetEventFlags(1140, 1159, OFF);
    SetEventFlag(1149, ON);
    SaveRequest(0);
});

// ニセ女医_月からの使者のロジックを無効化
$Event(12410680, Default, function(X0_4) {
    WaitFor(CharacterDamagedBy(X0_4, 10000));
    SetCharacterAIId(X0_4, 250000);
});

// ニセ女医_アイテム入手でSAN値UP（通常）
$Event(12410687, Default, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X4_4));
    InitializeEvent(0, 9350, 1);
});

// ニセ女医_アイテム入手でSAN値UP（共犯）
$Event(12410693, Default, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(EventFlag(X4_4));
    InitializeEvent(0, 9350, 2);
});

// ニセ女医_警告
$Event(12410700, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && !InArea(10000, 2412174));
    SetEventFlag(12410700, OFF);
    WaitFor(CharacterType(10000, TargetType.Alive) && InArea(10000, 2412174));
    RestartEvent();
});

// 少女_状態遷移
$Event(12410701, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(1261) && EventFlag(9800)) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1262, ON);
    }
L8:
    if (EventFlag(1260) && EventFlag(9801)) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1270, ON);
    }
L0:
    if ((EventFlag(1260) || EventFlag(1261) || EventFlag(1262)) && EventFlag(9801)) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1263, ON);
    }
L9:
    if (EventFlag(1263) && (EventFlag(9802) || EventFlag(72410407))) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1269, ON);
    }
L1:
    if (EventFlag(1264)) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1267, ON);
    }
L2:
    if (EventFlag(1265)) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1267, ON);
    }
L3:
    if (EventFlag(1266)) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1268, ON);
    }
L4:
    if (EventFlag(1270) && (EventFlag(9802) || EventFlag(72410415))) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1269, ON);
    }
L7:
    if (EventFlag(9802) && EventFlag(1267)) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1271, ON);
    }
L5:
    if (EventFlag(1272)) {
        BatchSetEventFlags(1260, 1279, OFF);
        SetEventFlag(1273, ON);
    }
L6:
    NoOp();
});

// 少女_初期化
$Event(12410702, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        SetEventFlag(72410414, OFF);
    }
L0:
    DeactivateObject(2410761, Disabled);
    SetCharacterHPBarDisplay(2410762, Disabled);
    SetCharacterImmortality(2410762, Enabled);
    if (!EventFlag(1273)) {
        DeactivateObject(2410851, Disabled);
        SetObjectTreasureState(2410851, Disabled);
        EndEvent();
    }
L1:
    DeactivateObject(2410851, Enabled);
    SetObjectTreasureState(2410851, Enabled);
    ReproduceObjectDestruction(2410852, 1);
    EndEvent();
});

// 少女_母を探している序盤へ
$Event(12410703, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(12411802) && EventFlag(1260) && EventFlag(72410413));
    BatchSetEventFlags(1260, 1279, OFF);
    SetEventFlag(1261, ON);
});

// 少女_母が死んだので自暴自棄
$Event(12410704, Default, function() {
    WaitFor(EventFlag(72410403));
    SetEventFlag(72410403, OFF);
    BatchSetEventFlags(1260, 1279, OFF);
    SetEventFlag(1264, ON);
});

// 少女_避難所へ向かう
$Event(12410705, Default, function() {
    WaitFor(EventFlag(72410404));
    SetEventFlag(72410404, OFF);
    BatchSetEventFlags(1260, 1279, OFF);
    SetEventFlag(1265, ON);
});

// 少女_診療所へ向かう
$Event(12410706, Default, function() {
    WaitFor(EventFlag(72410405));
    SetEventFlag(72410405, OFF);
    BatchSetEventFlags(1260, 1279, OFF);
    SetEventFlag(1266, ON);
});

// 少女_PCが扉を攻撃する
$Event(12410710, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(72410406, OFF);
    SetCharacterHPBarDisplay(2410762, Disabled);
    WaitFor(CharacterDamagedBy(2410762, 10000));
    SetEventFlag(72410406, ON);
    WaitFixedTimeSeconds(2);
    RestartEvent();
});

// 少女_吸血豚が血塗れのリボンを落とす
$Event(12410713, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(72410410, ON);
    WaitFor(EventFlag(1271) || EventFlag(1267));
    WaitFor(!PlayerHasItem(ItemType.Goods, 4904));
    SetEventFlag(72410410, OFF);
});

// 少女_オルゴール制御
$Event(12410715, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(1269)) {
        SetMapSoundState(2413100, Disabled);
        EndEvent();
    }
L0:
    if (EventFlag(72410402)) {
        SetMapSoundState(2413100, Disabled);
        EndEvent();
    }
L1:
    SetMapSoundState(2413100, Enabled);
    SetEventFlag(72410412, OFF);
    WaitFor(!EventFlag(1270) && EventFlag(72410412));
    SetMapSoundState(2413100, Disabled);
});

// 少女_少女の姉_窓の光制御
$Event(12410716, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(1267)) {
        if (!EventFlag(1268)) {
            if (!EventFlag(1269)) {
                if (!EventFlag(1273)) {
                    EndEvent();
                }
            }
        }
    }
L1:
    DeleteMapSFX(2413701, false);
});

// 少女の姉_リボンを渡す
$Event(12410721, Default, function() {
    WaitFor(EventFlag(72410421));
    SetEventFlag(72410421, OFF);
    BatchSetEventFlags(1260, 1279, OFF);
    SetEventFlag(1272, ON);
});

// 診療所の女医_初期化
$Event(12410729, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetCharacterImmortality(2410702, Enabled);
    SetCharacterHPBarDisplay(2410702, Disabled);
    if (EventFlag(1120)) {
        SetCharacterBackreadState(2410702, true);
        ChangeCharacterEnableState(2410700, Disabled);
    }
L0:
    if (EventFlag(1121)) {
        SetCharacterBackreadState(2410702, false);
    }
L1:
    if (EventFlag(1122)) {
        SetCharacterBackreadState(2410702, false);
    }
L2:
    if (EventFlag(1123)) {
        SetCharacterBackreadState(2410702, true);
        SetCharacterBackreadState(2410700, true);
    }
L3:
    EndIf(!EventFlag(1124));
    SetCharacterBackreadState(2410702, true);
    SetCharacterBackreadState(2410700, true);
});

// 診療所の女医_存在するようになる
$Event(12410730, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(9401) && EventFlag(1120));
    SetCharacterBackreadState(2410702, false);
    BatchSetEventFlags(1120, 1124, OFF);
    SetEventFlag(1121, ON);
});

// 診療所の女医_好感度が上がった
$Event(12410731, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    flag = EventFlag(72410305) && EventFlag(1121);
    WaitFor(flag || EventFlag(1123) || EventFlag(1124));
    EndIf(!flag.Passed);
    BatchSetEventFlags(1120, 1124, OFF);
    SetEventFlag(1122, ON);
});

// 診療所の女医_扉を殴られ続けてうんざり
$Event(12410732, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    flag = EventFlag(72410309) && (EventFlag(1121) || EventFlag(1122));
    WaitFor(flag || EventFlag(1123) || EventFlag(1124));
    EndIf(!flag.Passed);
    SetCharacterBackreadState(2410702, true);
    BatchSetEventFlags(1120, 1124, OFF);
    SetEventFlag(1123, ON);
});

// 診療所の女医_どこにもいない
$Event(12410733, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(9800));
    BatchSetEventFlags(1120, 1124, OFF);
    SetEventFlag(1124, ON);
    ChangeCharacterEnableState(2410700, Disabled);
    SetCharacterBackreadState(2410702, true);
});

// 診療所の女医_PCが扉を攻撃する
$Event(12410734, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterDamagedBy(2410702, 10000));
    SetEventFlag(72410306, ON);
    WaitFixedTimeSeconds(2);
    RestartEvent();
});

// 診療所の女医_ロードを挟んだのでアイテム取得直後フラグをOFF
$Event(12410736, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    flag = EventFlag(72410301);
    flag2 = !EventFlag(72410301);
    WaitFor(flag || flag2);
    EndIf(flag2.Passed);
    SetEventFlag(72410301, OFF);
});

// 診療所の女医_モデルの表示
$Event(12410737, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    ChangeCharacterEnableState(2410700, Disabled);
    WaitFor(EventFlag(1121) || EventFlag(1122) || EventFlag(1123));
    ChangeCharacterEnableState(2410700, Enabled);
    SetCharacterAnimationState(2410700, Disabled);
});

// 診療所の女医_アイテムを渡せない旨の会話をしたフラグをOFFにする
$Event(12410738, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(72410311)) {
        WaitFor(!CharacterBackreadStatus(2410700) && EventFlag(72410311));
    }
L0:
    SetEventFlag(72410311, OFF);
    RestartEvent();
});

// 診療所の女医_月使者モデルの切り替え
$Event(12410739, Default, function() {
    areaFlagChr = InArea(10000, 2412170)
        && (EventFlag(1143) || AnyBatchEventFlags(1145, 1149))
        && EventFlag(9800)
        && !CharacterBackreadStatus(2410290);
    WaitFor(
        areaFlagChr
            || (InArea(10000, 2412171)
                && !EventFlag(62411300)
                && EventFlag(1144)
                && EventFlag(9800)
                && CharacterBackreadStatus(2410290))
            || ((EventFlag(1141) || EventFlag(1142)) && CharacterBackreadStatus(2410290)));
    if (areaFlagChr.Passed) {
        SetCharacterBackreadState(2410290, false);
        RestartEvent();
    }
L0:
    SetCharacterBackreadState(2410290, true);
    RestartEvent();
});

// 孤独な老婆_初期化
$Event(12410740, Default, function() {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    if (!EventFlag(1180)) {
        EndEvent();
    }
L1:
    NoOp();
});

// 孤独な老婆_死亡
$Event(12410741, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(1180) && EventFlag(9802));
    BatchSetEventFlags(1180, 1199, OFF);
    SetEventFlag(1195, ON);
    SaveRequest(0);
});

// 孤独な老婆_避難所へ移動中へ
$Event(12410742, Default, function() {
    WaitFor(EventFlag(72410390));
    SetEventFlag(72410390, OFF);
    BatchSetEventFlags(1180, 1199, OFF);
    SetEventFlag(1193, ON);
});

// 孤独な老婆_診療所へ移動中へ
$Event(12410743, Default, function() {
    WaitFor(EventFlag(72410391));
    SetEventFlag(72410391, OFF);
    BatchSetEventFlags(1180, 1199, OFF);
    SetEventFlag(1194, ON);
});

// 孤独な老婆_避難所へ
$Event(12410744, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(1193)) {
        EndEvent();
    }
L0:
    BatchSetEventFlags(1180, 1199, OFF);
    SetEventFlag(1181, ON);
});

// 孤独な老婆_診療所へ
$Event(12410745, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(1194)) {
        EndEvent();
    }
L0:
    BatchSetEventFlags(1180, 1199, OFF);
    SetEventFlag(1190, ON);
});

// 孤独な老婆_自宅に吠える犬_初期化
$Event(12410746, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(72410382)) {
        if (!EventFlag(9802)) {
            SetCharacterAIState(2410111, Disabled);
            EndEvent();
        }
    }
L0:
    SetCharacterBackreadState(2410111, true);
});

// 孤独な老婆_自宅に吠える犬_ロジックon
$Event(12410747, Default, function() {
    WaitFor(
        EntityInRadiusOfEntity(10000, 2410111, 3)
            || HasDamageType(2410111, -1, DamageType.Unspecified));
    SetCharacterAIState(2410111, Enabled);
});

// 孤独な老婆_自宅に吠える犬_呼びかけ会話キック
$Event(12410748, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(72410393, OFF);
    WaitFor(InArea(10000, 2412280) && CharacterDead(2410111));
    WaitFixedTimeFrames(30);
    SetEventFlag(72410393, ON);
    WaitFor(!InArea(10000, 2412280));
    SetEventFlag(72410393, OFF);
    RestartEvent();
});

// 孤独な老婆_自宅に吠える犬_アニメ制御
$Event(12410749, Default, function() {
    WaitFor(CharacterBackreadStatus(2410111));
    if (CharacterAIState(2410111, AIStateType.Recognition)
        || CharacterAIState(2410111, AIStateType.Alert)
        || CharacterAIState(2410111, AIStateType.Combat)) {
        EndEvent();
    }
L0:
    ForceAnimationPlayback(2410111, 3023, false, true, false);
    WaitFor(RandomElapsedFrames(30, 60));
    RestartEvent();
});

// 孤独な老婆_ノック
$Event(12410750, Default, function(X0_4, X4_4, X8_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(72410382));
    SetEventFlag(X0_4, OFF);
    WaitFor(!EventFlag(X0_4) && ActionButtonInArea(X4_4, X8_4));
    IssueShortWarpRequest(10000, TargetEntityType.Object, X8_4, 210);
    ForceAnimationPlayback(10000, 101320, false, false, false);
    WaitFixedTimeFrames(25);
    WaitFixedTimeFrames(20);
    SetEventFlag(X0_4, ON);
    WaitFor(!EventFlag(X0_4));
    RestartEvent();
});

// 重病人_初期化
$Event(12410760, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        SetEventFlag(72410513, OFF);
        SetEventFlag(72410514, OFF);
        SetEventFlag(72410515, OFF);
        SetEventFlag(72410516, OFF);
    }
L0:
    SetCharacterHPBarDisplay(2410782, Disabled);
    SetCharacterImmortality(2410782, Enabled);
    GotoIf(L1, EventFlag(1240));
    GotoIf(L1, EventFlag(1241));
    GotoIf(L1, EventFlag(1242));
    GotoIf(L1, EventFlag(1243));
    GotoIf(L1, EventFlag(1244));
    GotoIf(L2, EventFlag(1246));
    GotoIf(L3, EventFlag(1245));
    SetCharacterBackreadState(2410781, true);
    DeleteMapSFX(2413700, false);
    EndEvent();
L1:
    SetCharacterBackreadState(2410781, true);
    EndEvent();
L2:
    SetCharacterBackreadState(2410781, false);
    RequestObjectDestruction(2410784, 1);
    DeleteMapSFX(2413700, false);
    EndEvent();
L3:
    ChangeCharacterEnableState(2410781, Disabled);
    RequestObjectDestruction(2410784, 1);
    DeleteMapSFX(2413700, false);
    ForceCharacterTreasure(2410781);
    EndEvent();
});

// 重病人_死亡
$Event(12410761, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterDead(2410781));
    BatchSetEventFlags(1240, 1259, OFF);
    SetEventFlag(1245, ON);
    SaveRequest(0);
});

// 重病人_病状悪化
$Event(12410762, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1245));
    GotoIf(L0, (EventFlag(9800) || EventFlag(9801) || EventFlag(9802)) && EventFlag(1240));
    Goto(L1);
L0:
    BatchSetEventFlags(1240, 1259, OFF);
    SetEventFlag(1241, ON);
L1:
    GotoIf(L2, (EventFlag(9801) || EventFlag(9802)) && EventFlag(1241));
    Goto(L3);
L2:
    BatchSetEventFlags(1240, 1259, OFF);
    SetEventFlag(1242, ON);
L3:
    GotoIf(L4, (EventFlag(1242) && EventFlag(72410504)) || EventFlag(9802));
    Goto(L5);
L4:
    BatchSetEventFlags(1240, 1259, OFF);
    SetEventFlag(1243, ON);
L5:
    if (!(EventFlag(9802) && EventFlag(1243))) {
        EndEvent();
    }
L6:
    BatchSetEventFlags(1240, 1259, OFF);
    SetEventFlag(1246, ON);
});

// 重病人_扉を叩かれた
$Event(12410763, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(
        HasDamageType(2410782, -1, DamageType.Unspecified)
            && (EventFlag(1240) || EventFlag(1241) || EventFlag(1242)));
    if (!AllBatchEventFlags(72410515, 72410516)) {
        if (EventFlag(72410500)) {
            if (EventFlag(72410515)) {
                SetEventFlag(72410516, ON);
            }
L1:
            SetEventFlag(72410515, ON);
        }
L2:
        SetEventFlag(72410513, ON);
        WaitFor(EventFlag(72410514));
        WaitFor(!EventFlag(72410514));
        RestartEvent();
    }
L0:
    SetEventFlag(72410513, ON);
    BatchSetEventFlags(1240, 1259, OFF);
    SetEventFlag(1244, ON);
    SaveRequest(0);
});

// 月からの使者リスポン禁止_XX
$Event(12410770, Default, function(X0_4) {
    if (ThisEventSlot()) {
        ChangeCharacterEnableState(X0_4, Disabled);
        ForceCharacterTreasure(X0_4);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(X0_4));
    WaitFixedTimeFrames(1);
});

// ガスコイン（ボス部屋）_初期化
$Event(12410780, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1293));
    if (!EventFlag(12410785)) {
        BatchSetEventFlags(1280, 1299, OFF);
        SetEventFlag(1290, ON);
    } else {
L0:
        BatchSetEventFlags(1280, 1299, OFF);
        SetEventFlag(1291, ON);
        Goto(L9);
    }
L9:
    SetDistanceLimitForConversationStateProcessing(2410810, 80);
    EndEvent();
});

// ガスコイン（ボス部屋）_面識有
$Event(12410785, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1293));
    WaitFor(EventFlag(1290) && EventFlag(72410530));
    BatchSetEventFlags(1280, 1299, OFF);
    SetEventFlag(1291, ON);
});

// ガスコイン（ボス部屋）_獣化
$Event(12410786, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1293));
    WaitFor(EventFlag(12414807) && (EventFlag(1290) || EventFlag(1291)));
    BatchSetEventFlags(1290, 1299, OFF);
    SetEventFlag(1292, ON);
});

// ガスコイン（ボス部屋）_死亡
$Event(12410787, Restart, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(12411800));
    BatchSetEventFlags(1290, 1299, OFF);
    SetEventFlag(1293, ON);
    SetDistanceLimitForConversationStateProcessing(2410810, 17);
    SaveRequest(0);
});

// 復讐者_初期化（聖堂街B）
$Event(12410800, Default, function() {
    GotoIf(L0, AnyBatchEventFlags(1370, 1375));
    GotoIf(L1, EventFlag(1369));
    GotoIf(L2, EventFlag(1368));
    GotoIf(L3, EventFlag(1367));
    GotoIf(L4, EventFlag(1366));
    GotoIf(L5, EventFlag(1365));
    GotoIf(L6, EventFlag(1364));
    GotoIf(L7, AnyBatchEventFlags(1362, 1363));
    GotoIf(L8, AnyBatchEventFlags(1360, 1361));
L0:
    SetCharacterBackreadState(2410900, true);
    Goto(L9);
L1:
    GotoIf(S0, !EventFlag(1705));
    SetCharacterBackreadState(2410900, true);
    Goto(L9);
S0:
    GotoIf(S1, !EventFlag(1704));
    SetCharacterBackreadState(2410900, true);
    Goto(L9);
S1:
    GotoIf(S2, !EventFlag(1701));
    SetCharacterBackreadState(2410900, true);
    Goto(L9);
S2:
    GotoIf(S3, !EventFlag(1703));
    WarpCharacterAndSetFloor(2410900, TargetEntityType.Area, 2412334, -1, 2414124);
    SetCharacterHome(2410900, 2412334);
    SetCharacterTeamType(2410900, TeamType.HostileNPC);
    Goto(L9);
S3:
    GotoIf(S4, !EventFlag(1702));
    WarpCharacterAndSetFloor(2410900, TargetEntityType.Area, 2412332, -1, 2414122);
    SetCharacterHome(2410900, 2412332);
    SetCharacterTeamType(2410900, TeamType.HostileNPC);
    Goto(L9);
S4:
    SetCharacterHome(2410900, 2412332);
    SetCharacterTeamType(2410900, TeamType.HostileNPC);
    Goto(L9);
L2:
    GotoIf(S5, !EventFlag(1705));
    SetCharacterBackreadState(2410900, true);
    Goto(L9);
S5:
    GotoIf(S6, !EventFlag(1704));
    SetCharacterBackreadState(2410900, true);
    Goto(L9);
S6:
    GotoIf(S7, !EventFlag(1701));
    SetCharacterBackreadState(2410900, true);
    Goto(L9);
S7:
    GotoIf(S8, !EventFlag(1703));
    SetCharacterBackreadState(2410900, true);
    ChangeCharacterEnableState(2410900, Disabled);
    WarpCharacterAndSetFloor(2410900, TargetEntityType.Area, 2412334, -1, 2414124);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(2410900);
    Goto(L9);
S8:
    GotoIf(S9, !EventFlag(1702));
    SetCharacterBackreadState(2410900, true);
    ChangeCharacterEnableState(2410900, Disabled);
    WarpCharacterAndSetFloor(2410900, TargetEntityType.Area, 2412332, -1, 2414122);
    WaitFixedTimeFrames(1);
    ForceCharacterTreasure(2410900);
    Goto(L9);
S9:
    SetCharacterBackreadState(2410900, true);
    ChangeCharacterEnableState(2410900, Disabled);
    ForceCharacterTreasure(2410900);
    Goto(L9);
L3:
    WarpCharacterAndSetFloor(2410900, TargetEntityType.Area, 2412332, -1, 2414122);
    SetCharacterHome(2410900, 2412332);
    SetEventFlag(72410546, OFF);
    Goto(L9);
L4:
    WarpCharacterAndSetFloor(2410900, TargetEntityType.Area, 2412334, -1, 2414124);
    SetCharacterHome(2410900, 2412334);
    SetEventFlag(72410546, OFF);
    Goto(L9);
L5:
    WarpCharacterAndSetFloor(2410900, TargetEntityType.Area, 2412332, -1, 2414122);
    SetCharacterHome(2410900, 2412332);
    SetCharacterTeamType(2410900, TeamType.CoopNPC);
    SetEventFlag(72410546, ON);
    WaitFixedTimeFrames(2);
    SetSpEffect(2410900, 7608, false);
    Goto(L9);
L6:
    ChangeCharacterEnableState(2410900, Disabled);
    Goto(L9);
L7:
    SetCharacterBackreadState(2410900, true);
    Goto(L9);
L8:
    ForceAnimationPlayback(2410900, 103030, false, false, false);
    Goto(L9);
L9:
    InitializeEvent(0, 12410801, 0);
    InitializeEvent(0, 12410803, 0);
    InitializeEvent(0, 12410804, 0);
    InitializeEvent(0, 12410805, 0);
    InitializeEvent(0, 12410806, 0);
    InitializeEvent(0, 12410807, 0);
    InitializeEvent(0, 12410808, 0);
});

// 復讐者_面識有（聖堂街B）
$Event(12410801, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(1360) && EventFlag(72410540));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1361, ON);
});

// 復讐者_ヘンリック単独撃破
$Event(12410803, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(1363) && CharacterDead(2410901));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1366, ON);
});

// 復讐者_ヘンリック共闘撃破
$Event(12410804, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor((EventFlag(1364) || EventFlag(1365)) && CharacterDead(2410901));
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1367, ON);
});

// 復讐者_死亡
$Event(12410805, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterDead(2410900));
    if (!EventFlag(1369)) {
        BatchSetEventFlags(1700, 1705, OFF);
        if (AnyBatchEventFlags(1360, 1361)) {
            SetEventFlag(1700, ON);
        }
        if (EventFlag(1365)) {
            SetEventFlag(1702, ON);
        }
        if (EventFlag(1366)) {
            SetEventFlag(1703, ON);
        }
        if (EventFlag(1367)) {
            SetEventFlag(1702, ON);
        }
    }
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1368, ON);
    SaveRequest(0);
});

// 復讐者_敵対
$Event(12410806, Default, function() {
    EndIf(ThisEvent());
    WaitFor(!CharacterDead(2410900) && EventFlag(72410544));
    BatchSetEventFlags(1700, 1705, OFF);
    if (AnyBatchEventFlags(1360, 1361)) {
        SetEventFlag(1700, ON);
    }
    if (EventFlag(1365)) {
        SetEventFlag(1702, ON);
    }
    if (EventFlag(1366)) {
        SetEventFlag(1703, ON);
    }
    if (EventFlag(1367)) {
        SetEventFlag(1702, ON);
    }
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1369, ON);
    SetCharacterTeamType(2410900, TeamType.HostileNPC);
    SaveRequest(0);
});

// 復讐者_攻撃回数カウント
$Event(12410807, Default, function() {
    EndIf(ThisEvent());
    WaitFor((!EventFlag(1364) || !EventFlag(1365)) && CharacterDamagedBy(2410900, 10000));
    WaitFixedTimeFrames(1);
    WaitFor((!EventFlag(1364) || !EventFlag(1365)) && CharacterDamagedBy(2410900, 10000));
    WaitFixedTimeFrames(1);
    WaitFor((!EventFlag(1364) || !EventFlag(1365)) && CharacterDamagedBy(2410900, 10000));
    WaitFixedTimeFrames(1);
});

// 復讐者_会話中
$Event(12410808, Restart, function() {
    WaitFor(EventFlag(72410545));
    RequestCharacterAIReplan(2410900);
    RequestCharacterAICommand(2410900, 30, 0);
    WaitFor(
        !EventFlag(72410545)
            || CharacterAIState(2410900, AIStateType.Combat)
            || !EntityInRadiusOfEntity(2410900, 10000, 5));
    RequestCharacterAIReplan(2410900);
    RequestCharacterAICommand(2410900, -1, 0);
    SetEventFlag(72410545, OFF);
    RestartEvent();
});

// 復讐者_ヘンリック出現
$Event(12410809, Default, function() {
    SetCharacterBackreadState(2410901, true);
    EndIf(EventFlag(12410810));
    EndIf(EventFlag(1366));
    EndIf(EventFlag(1367));
    EndIf(EventFlag(9467));
    EndIf(EventFlag(9802));
    WaitFor(
        EventFlag(1363)
            || EventFlag(1364)
            || EventFlag(1365)
            || ((EventFlag(1701) || EventFlag(1702)) && (EventFlag(1368) || EventFlag(1369))));
    SetCharacterBackreadState(2410901, false);
});

// 復讐者_ヘンリック撃破
$Event(12410810, Default, function() {
    if (ThisEvent()) {
        SetCharacterBackreadState(2410901, true);
        ChangeCharacterEnableState(2410901, Disabled);
        ForceCharacterTreasure(2410901);
        EndEvent();
    }
L0:
    WaitFor(HPRatio(2410901) == 0);
    SetCharacterAIId(2410900, 6163);
    RequestCharacterAICommand(2410900, 11, 0);
    ClearCharactersAITarget(2410900);
    RequestCharacterAIReplan(2410900);
    WaitFor(CharacterDead(2410901));
    SetEventFlag(5912, ON);
    SetCharacterTeamType(2410900, TeamType.FriendlyNPC);
    SetEventFlag(72410546, OFF);
    SaveRequest(0);
});

// 復讐者_共闘
$Event(12410811, Restart, function() {
    EndIf(ThisEvent());
    WaitFor((EventFlag(1363) || EventFlag(1364)) && CharacterAIState(2410901, AIStateType.Combat));
    SetCharacterBackreadState(2410900, false);
    WarpCharacterAndCopyFloor(2410900, TargetEntityType.Area, 2412333, -1, 2414123);
    SetCharacterHome(2410900, 2412334);
    SetCharacterTeamType(2410900, TeamType.CoopNPC);
    WaitFixedTimeFrames(2);
    ForceAnimationPlayback(2410900, 101290, false, false, false);
    SetSpEffect(2410900, 7608, false);
    SetCharacterAIId(2410900, 6162);
    RequestCharacterAICommand(2410900, 10, 0);
    RequestCharacterAIReplan(2410900);
    BatchSetEventFlags(1360, 1379, OFF);
    SetEventFlag(1365, ON);
    WaitFor(InArea(2410900, 2412334));
    RequestCharacterAICommand(2410900, -1, 0);
    RequestCharacterAIReplan(2410900);
});

// 偏屈な老人_初期化
$Event(12410812, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(1169)) {
        BatchSetEventFlags(1160, 1179, OFF);
        SetEventFlag(1163, ON);
    }
L0:
    EndEvent();
});

// 囚われた尼僧_初期化
$Event(12410813, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(1314)) {
        BatchSetEventFlags(1300, 1319, OFF);
        SetEventFlag(1309, ON);
    }
L0:
    EndEvent();
});

// 感染者の乞食
$Event(12410814, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(1209)) {
        BatchSetEventFlags(1200, 1219, OFF);
        SetEventFlag(1204, ON);
    }
L0:
    EndEvent();
});

// 娼婦_初期化
$Event(12410830, Default, function() {
    if (CharacterType(10000, TargetType.Alive)) {
        if (EventFlag(1233)) {
            BatchSetEventFlags(1220, 1239, OFF);
            SetEventFlag(1223, ON);
        }
L2:
        if (EventFlag(1228) && EventFlag(72400486)) {
            BatchSetEventFlags(1220, 1239, OFF);
            SetEventFlag(1229, ON);
        }
L3:
        NoOp();
    }
L0:
    SetCharacterGravity(2410770, Disabled);
    SetCharacterMaphits(2410770, true);
    GotoIf(L0, EventFlag(1228));
    GotoIf(L0, EventFlag(1229));
    GotoIf(L1, EventFlag(1235));
    GotoIf(L2, EventFlag(1236));
    ChangeCharacterEnableState(2410770, Disabled);
    SetCharacterBackreadState(2410771, true);
    DeactivateObject(2411280, Disabled);
    DeactivateObject(2411281, Enabled);
    EndEvent();
L0:
    SetCharacterBackreadState(2410770, false);
    SetCharacterBackreadState(2410771, false);
    DeactivateObject(2411280, Enabled);
    DeactivateObject(2411281, Disabled);
    SetCharacterAIState(2410771, Disabled);
    ForceAnimationPlayback(2410770, 103082, false, false, false);
    ForceAnimationPlayback(2410771, 7010, true, false, false);
    IssueShortWarpRequest(2410770, TargetEntityType.Area, 2412281, -1);
    EndEvent();
L1:
    SetCharacterBackreadState(2410770, false);
    SetCharacterBackreadState(2410771, false);
    DeactivateObject(2411280, Enabled);
    DeactivateObject(2411281, Disabled);
    EzstateInstructionRequest(2410770, 5, 1);
    IssueShortWarpRequest(2410770, TargetEntityType.Area, 2412281, -1);
    ForceCharacterTreasure(2410770);
    ForceCharacterTreasure(2410771);
    EndEvent();
L2:
    SetCharacterBackreadState(2410770, false);
    SetCharacterBackreadState(2410771, false);
    DeactivateObject(2411280, Enabled);
    DeactivateObject(2411281, Disabled);
    EzstateInstructionRequest(2410770, 4, 1);
    IssueShortWarpRequest(2410770, TargetEntityType.Area, 2412281, -1);
    ForceCharacterTreasure(2410770);
    ForceCharacterTreasure(2410771);
    EndEvent();
});

// 娼婦_死亡
$Event(12410831, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1235));
    EndIf(EventFlag(1236));
    WaitFor(CharacterDead(2410770));
    BatchSetEventFlags(1220, 1239, OFF);
    SetEventFlag(1235, ON);
    SaveRequest(0);
});

// 娼婦_月の幼生が死亡したら死亡させる
$Event(12410833, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1235));
    EndIf(EventFlag(1236));
    WaitFor(HPRatio(2410771) == 0 && HPRatio(2410770) != 0);
    BatchSetEventFlags(1220, 1239, OFF);
    SetEventFlag(1236, ON);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(2410770, 103083, false, false, false);
    SaveRequest(0);
});

// 娼婦_娼婦が産んだ月の幼生を見たのでSAN値UP
$Event(12410834, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFixedTimeFrames(10);
    WaitFor((EventFlag(1228) || EventFlag(1229)) && InArea(10000, 2412302));
    InitializeEvent(0, 9350, 3);
    SetEventFlag(72400956, ON);
});

// 娼婦_リアルタイム初期化
$Event(12410835, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterBackreadStatus(2410770) && EventFlag(1228));
    ChangeCharacterEnableState(2410770, Enabled);
    SetCharacterBackreadState(2410771, false);
    DeactivateObject(2411280, Enabled);
    DeactivateObject(2411281, Disabled);
    SetCharacterAIState(2410771, Disabled);
    ForceAnimationPlayback(2410770, 103082, false, false, false);
    ForceAnimationPlayback(2410771, 7010, true, false, false);
    IssueShortWarpRequest(2410770, TargetEntityType.Area, 2412281, -1);
    EndEvent();
});

// NPC汎用_扉をノックする_XX
$Event(12410850, Default, function(X0_4, X4_4, X8_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(X0_4, OFF);
    WaitFor(!EventFlag(X0_4) && ActionButtonInArea(X4_4, X8_4));
    IssueShortWarpRequest(10000, TargetEntityType.Object, X8_4, 210);
    ForceAnimationPlayback(10000, 101320, false, false, false);
    WaitFixedTimeFrames(25);
    WaitFixedTimeFrames(20);
    SetEventFlag(X0_4, ON);
    WaitFor(!EventFlag(X0_4));
    RestartEvent();
});

// NPC汎用_アニメ制御_被ダメージ_XX
$Event(12410860, Default, function(X0_4, X4_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(X0_4) != 0 && HasDamageType(X0_4, -1, DamageType.Unspecified));
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    RestartEvent();
});

// NPC汎用_アニメ制御_被ダメージから待機へ_XX
$Event(12410870, Default, function(X0_4, X4_4, X8_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterHasSpEffect(X0_4, X8_4) && HPRatio(X0_4) != 0);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
    WaitFixedTimeFrames(5);
    RestartEvent();
});

// NPC汎用_アニメ制御_死亡_XX
$Event(12410880, Default, function(X0_4, X4_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HPRatio(X0_4) == 0);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
});

// 水死体ビーストが起き上がる_XX
$Event(12415130, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(ThisEventSlot());
    ForceAnimationPlayback(X0_4, X4_4, true, false, true);
    SetCharacterAIId(X0_4, X16_4);
    chrFlag |= CharacterAIState(X0_4, AIStateType.Alert)
        || CharacterAIState(X0_4, AIStateType.Recognition)
        || CharacterAIState(X0_4, AIStateType.Combat);
    if (0 != X24_4) {
        chrFlag |= EventFlag(X12_4);
    }
    WaitFor(chrFlag);
    WaitRandomTimeFrames(0, 60);
    ForceAnimationPlayback(X0_4, X8_4, false, true, false);
    SetCharacterAIId(X0_4, X20_4);
});

// 敵の特殊待機_XX
$Event(12415150, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(X0_4, X4_4, true, false, true);
        SetCharacterAIId(X0_4, X16_4);
        SetCharacterGravity(X0_4, Disabled);
        WaitFor(
            CharacterAIState(X0_4, AIStateType.Recognition)
                || CharacterAIState(X0_4, AIStateType.Combat)
                || ((CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.WhitePhantom))
                    && EntityInRadiusOfEntity(X0_4, 10000, X12_4)));
        ForceAnimationPlayback(X0_4, X8_4, false, false, false);
    }
L0:
    SetCharacterAIId(X0_4, X20_4);
    SetCharacterGravity(X0_4, Enabled);
});

// 恐ろしい群衆と鉢合わせ_造船廠
$Event(12410155, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(InArea(10000, X4_4) || InArea(10000, X8_4) || InArea(10000, X12_4));
    SetCharacterAIState(X0_4, Enabled);
});

// 恐ろしい群衆と銃群衆_造船廠
$Event(12410156, Restart, function(X0_4, X4_4, X8_4) {
    chr = CharacterAIState(X0_4, AIStateType.Recognition)
        || CharacterAIState(X0_4, AIStateType.Alert)
        || CharacterAIState(X0_4, AIStateType.Combat);
    chr2 = CharacterAIState(X4_4, AIStateType.Recognition)
        || CharacterAIState(X4_4, AIStateType.Alert)
        || CharacterAIState(X4_4, AIStateType.Combat);
    chr3 = CharacterAIState(X8_4, AIStateType.Recognition)
        || CharacterAIState(X8_4, AIStateType.Alert)
        || CharacterAIState(X8_4, AIStateType.Combat);
    WaitFor(chr || chr2 || chr3);
    GotoIf(L0, chr.Passed);
    GotoIf(L1, chr2.Passed);
    GotoIf(L2, chr3.Passed);
L0:
    EndEvent();
L1:
    SetCharacterHome(X0_4, 2412225);
    RequestCharacterAICommand(X0_4, 10, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(InArea(X0_4, 2412225) || CharacterAIState(X0_4, AIStateType.Combat));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    EndEvent();
L2:
    SetCharacterHome(X0_4, 2412226);
    RequestCharacterAICommand(X0_4, 10, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(InArea(X0_4, 2412226) || CharacterAIState(X0_4, AIStateType.Combat));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    EndEvent();
});

// エレベーター初期化_聖堂街B
$Event(12410321, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(EventFlag(X0_4));
    if (!EventFlag(X12_4)) {
        SetEventFlag(X4_4, OFF);
        SetEventFlag(X8_4, OFF);
        ReproduceObjectAnimation(X16_4, 2);
        SetObjactState(X20_4, 100, Disabled);
        SetObjactState(X24_4, 100, Disabled);
        EndEvent();
    }
L0:
    if (!EventFlag(X4_4)) {
        SetEventFlag(X8_4, OFF);
        ReproduceObjectAnimation(X16_4, 2);
        SetObjactState(X20_4, 100, Enabled);
        SetObjactState(X24_4, 100, Disabled);
        EndEvent();
    }
L1:
    SetEventFlag(X8_4, ON);
    ReproduceObjectAnimation(X16_4, 0);
    SetObjactState(X20_4, 100, Disabled);
    SetObjactState(X24_4, 100, Enabled);
});

// エレベーターホスト状態管理_聖堂街B
$Event(12410325, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(X12_4) && EventFlag(X0_4));
    if (!EventFlag(X4_4)) {
        SetEventFlag(X8_4, OFF);
    } else {
        SetEventFlag(X8_4, ON);
    }
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(X12_4) && !EventFlag(X0_4));
    RestartEvent();
});

// エレベーター上がる_聖堂街B
$Event(12410322, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (EventFlag(X0_4) && EventFlag(X4_4)) {
        ReproduceObjectAnimation(2411320, 3);
    } else {
L0:
        WaitFor(
            EventFlag(X12_4)
                && !EventFlag(X0_4)
                && !EventFlag(X4_4)
                && (InArea(10000, X16_4)
                    || ObjActEventFlag(X20_4)
                    || (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X8_4) && EventFlag(X8_4))));
        SetEventFlag(X0_4, ON);
        SetEventFlag(X4_4, ON);
        ForceAnimationPlayback(2411320, 6, false, true, false);
        ForceAnimationPlayback(2411320, 3, false, true, false);
    }
L1:
    WaitFor(!AllPlayersInArea(2412321));
    ForceAnimationPlayback(2411320, 7, false, true, false);
    SetObjactState(2411317, 100, Disabled);
    SetObjactState(2411318, 100, Enabled);
    SetEventFlag(X0_4, OFF);
    RestartEvent();
});

// エレベーター下がる_聖堂街B
$Event(12410323, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (EventFlag(X0_4) && !EventFlag(X4_4)) {
        ReproduceObjectAnimation(2411320, 1);
    } else {
L0:
        WaitFor(
            EventFlag(X12_4)
                && !EventFlag(X0_4)
                && EventFlag(X4_4)
                && (InArea(10000, X16_4)
                    || ObjActEventFlag(X20_4)
                    || (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, X8_4)
                        && !EventFlag(X8_4))));
        SetEventFlag(X0_4, ON);
        SetEventFlag(X4_4, OFF);
        ForceAnimationPlayback(2411320, 4, false, true, false);
        ForceAnimationPlayback(2411320, 1, false, true, false);
    }
L1:
    WaitFor(!AllPlayersInArea(2412322));
    ForceAnimationPlayback(2411320, 5, false, true, false);
    SetObjactState(2411317, 100, Enabled);
    SetObjactState(2411318, 100, Disabled);
    SetEventFlag(X0_4, OFF);
    RestartEvent();
});

// エレベーター呼び出しレバー操作不能_聖堂街B
$Event(12410324, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(X8_4) && ActionButtonInArea(7100, X12_4))
            || (!EventFlag(X8_4) && ActionButtonInArea(7100, X16_4))
            || (EventFlag(X0_4) && ActionButtonInArea(7100, X12_4))
            || (EventFlag(X0_4) && ActionButtonInArea(7100, X16_4))
            || (EventFlag(X4_4) && ActionButtonInArea(7100, X12_4))
            || (!EventFlag(X4_4) && ActionButtonInArea(7100, X16_4)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// エレベーター初回起動_聖堂街B
$Event(12410330, Default, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X0_4));
    WaitFor(InArea(10000, X4_4));
    SetObjactState(X8_4, 100, Enabled);
    SetObjactState(X12_4, 100, Disabled);
L0:
    SetEventFlag(X0_4, ON);
});

// 特殊待機_敵対連動解除
$Event(12410460, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    ForceAnimationPlayback(X0_4, X4_4, true, false, true);
    SetCharacterAIId(X0_4, X12_4);
    SetCharacterGravity(X0_4, Disabled);
    chr = CharacterAIState(X20_4, AIStateType.Combat);
    dmg = HasDamageType(X0_4, 10000, DamageType.Unspecified);
    WaitFor(chr || dmg);
    SetCharacterGravity(X0_4, Enabled);
    if (!dmg.Passed) {
        WaitRandomTimeFrames(20, 100);
        ForceAnimationPlayback(X0_4, X8_4, false, true, false);
    }
    SetCharacterAIId(X0_4, X16_4);
});

// ★聖堂街B_新NPC召喚_ボス部屋を目指す_XX
$Event(12414450, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventPoint(X0_4, X4_4, 1);
    WaitFor(EventFlag(X8_4) && !EventFlag(X12_4) && EventFlag(X16_4));
    RequestCharacterAICommand(X0_4, 990, 0);
    RequestCharacterAIReplan(X0_4);
});

// ★聖堂街B_新NPC召喚_強制帰還_ガスコイン神父
$Event(12414470, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(
            EventFlag(12414420)
                && !EventFlag(12414430)
                && (InArea(2410158, 2412705)
                    || InArea(2410158, 2412706)
                    || InArea(2410158, 2412707)
                    || InArea(2410158, 2412708)
                    || InArea(2410158, 2412709)));
    }
L0:
    RequestCharacterAICommand(2410158, 992, 0);
    RequestCharacterAIReplan(2410158);
});

// ★聖堂街B_新NPC召喚_強制帰還_ガスコイン神父2
$Event(12414480, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(CharacterHasEventMessage(2410158, 1000));
    }
L0:
    SetCharacterAIState(2410158, Disabled);
    SendNPCSummonHome(2410158);
});

// ★聖堂街B_新NPC召喚_ボス戦中投げ無効_アルフレート
$Event(12414490, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && EventFlag(12414421)
            && !EventFlag(12414431)
            && EventFlag(12414700));
    SetSpEffectAndUnknown200455(2410740, 35, false);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

// ★聖堂街B_新NPC召喚_召喚可否判定_ガスコイン神父
$Event(12414400, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!EventFlag(X0_4)) {
        SetEventFlag(X0_4, OFF);
        DeleteMapSFX(X4_4, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && !EventFlag(12411802)
                && !EventFlag(X20_4)
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(X0_4, ON);
    SpawnMapSFX(X4_4);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && !EventFlag(12411802)
                && !EventFlag(X20_4)));
    SetEventFlag(X0_4, OFF);
    DeleteMapSFX(X4_4, true);
    RestartEvent();
});

// ★聖堂街B_新NPC召喚_召喚可否判定_アルフレート
$Event(12414401, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!EventFlag(X0_4)) {
        SetEventFlag(X0_4, OFF);
        DeleteMapSFX(X4_4, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && EventFlag(72400461)
                && AnyBatchEventFlags(1340, 1341)
                && !EventFlag(X20_4)
                && HasMultiplayerState(MultiplayerState.Host));
    }
L0:
    SetEventFlag(X0_4, ON);
    SpawnMapSFX(X4_4);
    WaitFor(
        HasMultiplayerState(MultiplayerState.Host)
            && !(PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && EventFlag(72400461)
                && AnyBatchEventFlags(1340, 1341)
                && !EventFlag(X20_4)));
    SetEventFlag(X0_4, OFF);
    DeleteMapSFX(X4_4, true);
    RestartEvent();
});

// ★聖堂街B_新NPC召喚_参加_XX
$Event(12414410, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (!EventFlag(X12_4)) {
        ChangeCharacterEnableState(X4_4, Disabled);
    }
    GotoIf(S0, EventFlag(X16_4));
    GotoIf(S1, HasMultiplayerState(MultiplayerState.Client) && EventFlag(X12_4));
S0:
    ChangeCharacterEnableState(X4_4, Disabled);
S1:
    EndIf(EventFlag(X24_4));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(X4_4, AuthorityLevel.Forced);
    }
    WaitFor(
        PlayerHasItem(ItemType.Goods, 4312)
            && !EventFlag(X12_4)
            && !EventFlag(X16_4)
            && EventFlag(X20_4)
            && !EventFlag(X24_4)
            && ActionButtonInArea(X28_4, X4_4));
    ForceAnimationPlayback(10000, 100111, false, false, false);
    SetSpEffect(10000, 4682, false);
    SummonNPC(X0_4, X4_4, X8_4, X12_4, X16_4);
    ClearSpEffect(10000, 9005);
    ClearSpEffect(10000, 9025);
    WaitFixedTimeSeconds(5);
    DisplayMessage(100051, 0);
});

// ★聖堂街B_新NPC召喚_ボス部屋に入る_XX
$Event(12414460, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(EventFlag(X20_4) && InArea(X0_4, X4_4));
    RequestCharacterAnimationReset(X0_4, Interpolation.Interpolated);
    RotateCharacter(X0_4, X8_4, X16_4, true);
    RestartIf(!InArea(X0_4, X12_4));
    SetEventPoint(X0_4, X8_4, 1);
    RequestCharacterAICommand(X0_4, 990, 0);
    RequestCharacterAIReplan(X0_4);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphits(X0_4, true);
    WaitFor(InArea(X0_4, X24_4));
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphits(X0_4, false);
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// 共闘血族狩り_いんちきNPC召喚_協力_参加
$Event(12414500, Restart, function() {
    if (ThisEvent()) {
        SetCharacterDefaultBackreadState(2410740, Enabled);
        SetSpEffect(2410740, 9006, false);
        ChangeCharacterEnableState(2410740, Enabled);
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(2410740, Disabled);
    SetCharacterAIState(2410740, Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        SetNetworkUpdateAuthority(2410740, AuthorityLevel.Forced);
    }
    area = InArea(10000, 2412722);
    area2 = InArea(10000, 2412723);
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && EventFlag(12414608)
            && (area || area2)
            && !EventFlag(12411700)
            && EventFlag(72400461)
            && AnyBatchEventFlags(1340, 1341));
    if (!area2.Passed) {
        WarpCharacterAndSetFloor(2410740, TargetEntityType.Area, 2412720, -1, 0);
    } else {
L1:
        WarpCharacterAndSetFloor(2410740, TargetEntityType.Area, 2412721, -1, 2414021);
    }
L2:
    WaitFixedTimeSeconds(5);
    SetEventFlag(12414506, ON);
    PlaySE(10000, SoundType.fMenuSE, 100000009);
    WaitFixedTimeSeconds(5);
    PlaySE(10000, SoundType.fMenuSE, 100000020);
    SetCharacterDefaultBackreadState(2410740, Enabled);
    SetSpEffect(2410740, 9006, false);
    ChangeCharacterEnableState(2410740, Enabled);
    ForceAnimationPlayback(2410740, 101201, false, true, false);
    SetCharacterAIState(2410740, Enabled);
    ActivateHit(2414200, Disabled);
});

// 共闘血族狩り_いんちきNPC召喚_協力_帰還
$Event(12414501, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(12411700));
    EndIf(ThisEvent());
    WaitFor(EventFlag(12414502));
L0:
    ChangeCharacterEnableState(2410740, Disabled);
    SetCharacterDefaultBackreadState(2410740, Disabled);
});

// 共闘血族狩り_いんちきNPC召喚_協力_成功
$Event(12414502, Restart, function() {
    EndIf(EventFlag(12411700));
    EndIf(EventFlag(12414501));
    EndIf(ThisEvent());
    WaitFor(EventFlag(12414500) && !EventFlag(12414501) && EventFlag(12411700));
L0:
    RequestCharacterAICommand(2410740, 991, 0);
    RequestCharacterAIReplan(2410740);
    WaitFixedTimeSeconds(1);
    SetSpEffect(2410740, 5560, false);
    SpawnOneshotSFX(TargetEntityType.Character, 2410740, 236, 121);
    WaitFixedTimeSeconds(2);
    ChangeCharacterEnableState(2410740, Disabled);
});

// 共闘血族狩り_いんちきNPC召喚_協力_ボス部屋を目指す
$Event(12414503, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(12411700));
    EndIf(EventFlag(12414501));
    EndIf(EventFlag(12414505));
    EndIf(ThisEvent());
    WaitFor(
        !EventFlag(12411700)
            && EventFlag(12414500)
            && !EventFlag(12414501)
            && EventFlag(12411702)
            && EventFlag(12414700)
            && !InArea(2410740, 2412801));
L0:
    SetEventPoint(2410740, 2412710, 1);
    RequestCharacterAICommand(2410740, 990, 0);
    RequestCharacterAIReplan(2410740);
});

// 共闘血族狩り_いんちきNPC召喚_協力_ボス部屋に入る
$Event(12414504, Restart, function() {
    EndIf(EventFlag(12411700));
    EndIf(EventFlag(12414501));
    EndIf(ThisEvent());
    WaitFor(EventFlag(12414503) && InArea(2410740, 2412710));
    RequestCharacterAnimationReset(2410740, Interpolation.Interpolated);
    RotateCharacter(2410740, 2412800, 101130, true);
    RequestCharacterAICommand(2410740, -1, 0);
    RequestCharacterAIReplan(2410740);
});

// 共闘血族狩り_メッセンジャー
$Event(12414505, Restart, function() {
    SetVisibilityOfMessage(2413221, Disabled);
    SetVisibilityOfMessage(2413223, Disabled);
    DeleteMapSFX(2413231, false);
    DeleteMapSFX(2413233, false);
    EndIf(ThisEvent());
    WaitFor(
        PlayerHasItem(ItemType.Goods, 200)
            && CharacterType(10000, TargetType.Alive)
            && !EventFlag(12411700)
            && EventFlag(72400461)
            && AnyBatchEventFlags(1340, 1341));
    SetVisibilityOfMessage(2413221, Enabled);
    SetVisibilityOfMessage(2413223, Enabled);
    SpawnMapSFX(2413231);
    SpawnMapSFX(2413233);
    WaitFor(EventFlag(12414506) || EventFlag(12411700));
    SetVisibilityOfMessage(2413221, Disabled);
    SetVisibilityOfMessage(2413223, Disabled);
    DeleteMapSFX(2413231, true);
    DeleteMapSFX(2413233, true);
});

// いんちきNPC召喚_協力_参加
$Event(12414600, Restart, function() {
    if (ThisEvent()) {
        SetCharacterDefaultBackreadState(2410158, Enabled);
        SetSpEffect(2410158, 9006, false);
        ChangeCharacterEnableState(2410158, Enabled);
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(2410158, Disabled);
    SetCharacterAIState(2410158, Disabled);
    if (CharacterType(10000, TargetType.Alive)) {
        SetNetworkUpdateAuthority(2410158, AuthorityLevel.Forced);
    }
    area = InArea(10000, 2412700);
    area2 = InArea(10000, 2412701);
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && EventFlag(12414608)
            && (area || area2)
            && !EventFlag(12411700)
            && !EventFlag(12411802));
    if (!area2.Passed) {
        WarpCharacterAndSetFloor(2410158, TargetEntityType.Area, 2412702, -1, 2414020);
    } else {
L1:
        WarpCharacterAndSetFloor(2410158, TargetEntityType.Area, 2412703, -1, 2414021);
    }
L2:
    WaitFixedTimeSeconds(5);
    SetEventFlag(12414609, ON);
    PlaySE(10000, SoundType.fMenuSE, 100000009);
    WaitFixedTimeSeconds(5);
    PlaySE(10000, SoundType.fMenuSE, 100000020);
    SetCharacterDefaultBackreadState(2410158, Enabled);
    SetSpEffect(2410158, 9006, false);
    ChangeCharacterEnableState(2410158, Enabled);
    ForceAnimationPlayback(2410158, 7010, false, true, false);
    SetCharacterAIState(2410158, Enabled);
    ActivateHit(2414200, Disabled);
});

// いんちきNPC召喚_協力_帰還
$Event(12414601, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(CharacterHasEventMessage(2410158, 1000));
    }
L0:
    ChangeCharacterEnableState(2410158, Disabled);
    SetCharacterDefaultBackreadState(2410158, Disabled);
    ActivateHit(2414200, Enabled);
});

// いんちきNPC召喚_協力_帰還_成功
$Event(12414602, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!ThisEvent()) {
        WaitFor(
            EventFlag(12414600)
                && !EventFlag(12414601)
                && !EventFlag(12411700)
                && !EventFlag(12411802)
                && CharacterDead(2410800));
    }
L0:
    RequestCharacterAICommand(2410158, 991, 0);
    RequestCharacterAIReplan(2410158);
});

// いんちきNPC召喚_協力_帰還_別れの空砲
$Event(12414603, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!ThisEvent()) {
        WaitFor(
            EventFlag(12414600)
                && !EventFlag(12414601)
                && (InArea(2410158, 2412705)
                    || InArea(2410158, 2412706)
                    || InArea(2410158, 2412707)
                    || InArea(2410158, 2412708)
                    || InArea(2410158, 2412709)));
    }
L0:
    RequestCharacterAICommand(2410158, 992, 0);
    RequestCharacterAIReplan(2410158);
});

// いんちきNPC召喚_協力_ボス部屋を目指す
$Event(12414604, Restart, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(ThisEvent());
    WaitFor(EventFlag(12411702) && EventFlag(12414700) && !InArea(2410158, 2412801));
    SetEventPoint(2410158, 2412710, 1);
    RequestCharacterAICommand(2410158, 990, 0);
    RequestCharacterAIReplan(2410158);
});

// いんちきNPC召喚_協力_ボス部屋に入る
$Event(12414605, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(12414604) && InArea(2410158, 2412710));
    RequestCharacterAnimationReset(2410158, Interpolation.Interpolated);
    RotateCharacter(2410158, 2412800, 7014, true);
    RequestCharacterAICommand(2410158, -1, 0);
    RequestCharacterAIReplan(2410158);
});

// いんちきNPC召喚_メッセンジャー
$Event(12414606, Restart, function() {
    SetVisibilityOfMessage(2413220, Disabled);
    SetVisibilityOfMessage(2413222, Disabled);
    DeleteMapSFX(2413230, false);
    DeleteMapSFX(2413232, false);
    EndIf(ThisEvent());
    WaitFor(
        PlayerHasItem(ItemType.Goods, 200)
            && CharacterType(10000, TargetType.Alive)
            && !EventFlag(12411700)
            && !EventFlag(12411802));
    SetVisibilityOfMessage(2413220, Enabled);
    SetVisibilityOfMessage(2413222, Enabled);
    SpawnMapSFX(2413230);
    SpawnMapSFX(2413232);
    WaitFor(EventFlag(12414609) || EventFlag(12411700) || EventFlag(12411802));
    SetVisibilityOfMessage(2413220, Disabled);
    SetVisibilityOfMessage(2413222, Disabled);
    DeleteMapSFX(2413230, true);
    DeleteMapSFX(2413232, true);
});

// いんちきNPC召喚_鐘を鳴らした瞬間判定
$Event(12414607, Restart, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && CharacterHasSpEffect(10000, 9000));
    SetEventFlag(12414608, ON);
    WaitFixedTimeFrames(1);
    SetEventFlag(12414608, OFF);
    WaitFor(CharacterType(10000, TargetType.Alive) && !CharacterHasSpEffect(10000, 9000));
    RestartEvent();
});

// いんちきNPC召喚_オルゴールに反応
$Event(12414610, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(
        EventFlag(12414600)
            && !EventFlag(12414601)
            && HPRatio(2410158) > 0
            && CharacterHasSpEffect(2410158, 4640));
    WaitFixedTimeSeconds(2);
    EndIf(!(EventFlag(12414600) && !EventFlag(12414601) && HPRatio(2410158) > 0));
    PlaySE(2410158, SoundType.vVoice, 242100402);
});

// ロジック制御_距離
$Event(12410220, Default, function(X0_4, X4_4) {
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(
        EntityInRadiusOfEntity(X0_4, 10000, X4_4)
            || HasDamageType(X0_4, 10000, DamageType.Unspecified));
    SetCharacterAIState(X0_4, Enabled);
});

// ガスコイン死亡フラグ
$Event(12410234, Default, function() {
    WaitFor(CharacterDead(2410158));
    EndEvent();
});

// ガスコインと共闘
$Event(12410237, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    ChangeCharacterEnableState(X12_4, Disabled);
    WaitFor(EventFlag(X0_4));
    WaitFor(
        EventFlag(12410235) && !CharacterDead(X8_4) && (HPRatio(X4_4) <= 0.5 || ElapsedSeconds(40)));
    EndIf(EventFlag(12411800));
    ChangeCharacterEnableState(X8_4, Disabled);
    ChangeCharacterEnableState(X12_4, Enabled);
    WaitFixedTimeSeconds(1);
    SetCharacterHome(X12_4, X16_4);
    RequestCharacterAICommand(X12_4, 10, 0);
    RequestCharacterAIReplan(X12_4);
    SetCharacterGravity(X12_4, Disabled);
    SetCharacterMaphits(X12_4, true);
    SetCharacterAnimationState(X12_4, Disabled);
    WaitFor(EntityInRadiusOfEntity(X12_4, 2410810, 3) || InArea(X12_4, 2412811));
    RequestCharacterAICommand(X12_4, -1, 0);
    ClearCharactersAITarget(X12_4);
    RequestCharacterAIReplan(X12_4);
    SetCharacterMaphits(X12_4, false);
    SetCharacterAnimationState(X12_4, Enabled);
    SetCharacterGravity(X12_4, Enabled);
});

// ガスコイン大橋から居なくなる
$Event(12410238, Default, function() {
    WaitFor(EventFlag(12410234) || EventFlag(12411802));
    WaitFixedTimeFrames(10);
    ChangeCharacterEnableState(2410158, Disabled);
});

// ガスコインと敵対
$Event(12410239, Default, function(X0_4) {
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && HasDamageType(X0_4, 10000, DamageType.Unspecified));
        WaitFixedTimeFrames(5);
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && HasDamageType(X0_4, 10000, DamageType.Unspecified));
        WaitFixedTimeFrames(5);
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && HasDamageType(X0_4, 10000, DamageType.Unspecified));
        WaitFixedTimeFrames(5);
        WaitFor(
            (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom))
                && HasDamageType(X0_4, 10000, DamageType.Unspecified));
        WaitFixedTimeFrames(5);
    }
L0:
    SetEventState(12415234, 0, EventEndType.End);
    SetEventFlag(12415234, OFF);
    ClearSpEffect(X0_4, 5590);
    SetCharacterTeamType(X0_4, TeamType.Indiscriminate);
});

// イベントアニメ再生
$Event(12410240, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitRandomTimeSeconds(X8_4, X12_4);
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal));
    ForceAnimationPlayback(X0_4, X4_4, false, true, false);
    RestartEvent();
});

// 梯子とレバー_開始地点梯子
$Event(12410285, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X8_4, 2);
        WaitFixedTimeSeconds(1);
        RegisterLadder(X0_4, X4_4, X8_4);
        SetObjactState(X12_4, 2410000, Disabled);
        WaitFor(ActionButtonInArea(7100, X12_4));
        DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
        RestartEvent();
    }
    WaitFor(ObjActEventFlag(12410206));
    ForceAnimationPlayback(X8_4, 1, false, false, false);
    WaitFixedTimeFrames(40);
    ForceAnimationPlayback(X8_4, 2, false, false, false);
    RegisterLadder(X0_4, X4_4, X8_4);
    RestartEvent();
});

// チェックポイントランタン制御
$Event(12410287, Default, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        CreateObjectfollowingSFX(X0_4, 100, 8028);
        EndEvent();
    }
    CreateObjectfollowingSFX(X0_4, 100, 8029);
    WaitFor(InArea(10000, X4_4));
    ForceAnimationPlayback(X0_4, 1000000, false, false, false);
    WaitFixedTimeFrames(30);
    DeleteObjectfollowingSFX(X0_4, true);
    CreateObjectfollowingSFX(X0_4, 100, 8028);
    PlaySE(X0_4, SoundType.aEnvironmentalSound, 600000000);
    CreatePlaylog(X8_4);
});

// 移動イベント2
$Event(12410340, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(InArea(10000, X12_4));
    SetCharacterHome(X0_4, X4_4);
    RequestCharacterAICommand(X0_4, X8_4, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(
        InArea(X0_4, X4_4)
            || CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Combat));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// 藁玉ゴロゴロ
$Event(12410370, Restart, function() {
    GotoIf(L0, CharacterDead(2410028) || CharacterDead(2410030));
    GotoIf(L0, ObjectDestroyed(2411221));
    Goto(L1);
L0:
    DeactivateObject(2411220, Disabled);
    ReproduceObjectDestruction(2411221, 1);
    EndEvent();
L1:
    DeactivateObject(2411221, Disabled);
    ForceAnimationPlayback(2411220, 0, false, false, false);
    area = InArea(10000, 2412210);
    area2 = InArea(10000, 2412211);
    flag = EventFlag(12415371);
    WaitFor(area || area2 || flag);
    SetEventFlag(12415371, ON);
    if (!flag.Passed) {
        WaitFor(
            EntityInRadiusOfEntity(2411220, 10000, 10)
                || RandomElapsedSeconds(4, 12)
                || CharacterDamagedBy(2410028, 10000)
                || CharacterDamagedBy(2410030, 10000));
    }
L2:
    ForceAnimationPlayback(2410028, 3008, false, false, false);
    ForceAnimationPlayback(2410030, 3009, false, false, false);
    WaitFixedTimeFrames(40);
    SetCharacterInvincibility(2410028, Enabled);
    SetCharacterInvincibility(2410030, Enabled);
    CreateObjectfollowingSFX(2411220, 100, 900260);
    CreateDamagingObject(12410376, 2411220, 100, 6111, DamageTargetType.Character, 1.6, 9999, 0);
    ForceAnimationPlayback(2411220, 1, false, false, false);
    WaitFixedTimeFrames(6);
    SetCharacterInvincibility(2410028, Disabled);
    SetCharacterInvincibility(2410030, Disabled);
    WaitFixedTimeFrames(206);
    DeleteObjectEvent(12410376);
    DeleteObjectfollowingSFX(2411220, true);
    DeactivateObject(2411221, Enabled);
    DeactivateObject(2411220, Disabled);
    RequestObjectDestruction(2411221, 1);
});

// 藁玉イベント前の群衆走る
$Event(12415372, Restart, function(X0_4) {
    WaitFor(EventFlag(12415371));
    SetEventFlag(12415371, ON);
    SetCharacterHome(X0_4, 2412212);
    RequestCharacterAICommand(X0_4, 10, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(
        InArea(X0_4, 2412212)
            || CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Combat));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
});

// 檻の中の犬が飛び出してくる
$Event(12410378, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X8_4, 2);
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, X12_4, -1);
        EndEvent();
    }
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(
        InArea(10000, 2412031)
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)));
    WaitRandomTimeFrames(50, 70);
    WaitFor(CharacterHPValue(X0_4) <= 2);
    ForceAnimationPlayback(X0_4, X4_4, true, true, true);
    WaitFixedTimeFrames(76);
    WaitFor(CharacterHPValue(X0_4) <= 2);
    ForceAnimationPlayback(X0_4, X4_4, true, true, true);
    WaitRandomTimeFrames(76, 100);
    WaitFor(CharacterHPValue(X0_4) <= 2);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphits(X0_4, true);
    SetCharacterInvincibility(X0_4, Enabled);
    SetCharacterImmortality(X0_4, Disabled);
    ClearSpEffect(X0_4, 5915);
    ForceAnimationPlayback(X8_4, 1, false, false, false);
    ForceAnimationPlayback(X0_4, 3001, false, false, false);
    WaitFixedTimeFrames(16);
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphits(X0_4, false);
    SetCharacterInvincibility(X0_4, Disabled);
});

// 檻の中の犬
$Event(12410380, Restart, function(X0_4, X4_4) {
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(
        InArea(10000, 2412031)
            && (CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.WhitePhantom)));
    WaitRandomTimeFrames(55, 200);
    if (CharacterHPValue(X0_4) < 1) {
        ForceAnimationPlayback(X0_4, X4_4, true, true, true);
        RestartEvent();
    }
    EndEvent();
});

// 檻の中の犬_一撃死
$Event(12410384, Restart, function(X0_4) {
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    ForceCharacterDeath(X0_4, true);
});

// 吊るし宝死体_XX
$Event(12410490, Default, function(X0_4, X4_4, X8_4) {
    if (EventFlag(100)) {
        SetEventFlag(100, OFF);
        SetEventFlag(X8_4, OFF);
    }
    if (ThisEventSlot()) {
        ReproduceObjectDestruction(X0_4, 1);
        ForceAnimationPlayback(X4_4, 2, false, false, false);
        SetObjectTreasureState(X4_4, Enabled);
        EndEvent();
    }
L0:
    CreateObjectfollowingSFX(X4_4, 90, 900201);
    ForceAnimationPlayback(X4_4, 0, false, false, false);
    WaitFor(ObjectDestroyed(X0_4));
    ForceAnimationPlayback(X4_4, 1, false, true, false);
    DeleteObjectfollowingSFX(X4_4, true);
    SetObjectTreasureState(X4_4, Enabled);
    SetEventFlag(X8_4, ON);
    WaitFor(EventFlag(100));
    RequestObjectRestoration(X0_4);
    ForceAnimationPlayback(X4_4, 0, false, false, false);
    SetObjectTreasureState(X4_4, Disabled);
    RestartEvent();
});

// マップ初回入場_プレイログ
$Event(12410990, Default, function() {
    EndIf(ThisEvent());
    WaitFor(PlayerStandingOnHit(2413500));
    ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 148, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 148, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Weapon, 148, PlayLogMultiplayerType.HostOnly);
    ParameterOutput(PlayerPlayLogParameter.Armor, 148, PlayLogMultiplayerType.HostOnly);
});

// 診療所に入った時にSAN値を上げる
$Event(12410995, Default, function() {
    EndIf(ThisEvent());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    WaitFor(PlayerStandingOnHit(2414110) && !InArea(10000, 2412900));
    InitializeEvent(0, 9350, 1);
});

// 定期的に鐘の音が聞こえる
$Event(12415010, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    SetNetworkSyncState(Disabled);
    WaitFixedTimeSeconds(X12_4);
    PlaySE(X0_4, X4_4, X8_4);
    WaitFixedTimeFrames(440);
    if (!(!EventFlag(9801) && !EventFlag(9802))) {
        PlaySE(X0_4, X4_4, X8_4);
    }
    RestartEvent();
});



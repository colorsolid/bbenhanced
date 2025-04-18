// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "ボス_撃破\u0000PC情報_ボス撃破_ラスボス\u0000ボス_戦闘開始\u0000ボス戦_撃破時間\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [76]
// @version    3.4.2
// ==/EMEVD==

const area_id = 36;
const block_id = 0;

const hamlet_lamp_offset = 65;
const hamlet_lamp_id = 3601950;
const hamlet_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10);

const lighthouse_lamp_offset = 66;
const lighthouse_lamp_id = 3601951;
const lighthouse_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 2;

const orphan_lamp_offset = 67;
const orphan_offset = 21;
const orphan_defeat = 13601800;
const orphan_return = 3601899;
const orphan_lamp_id = 3601952;
const orphan_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 4;
const orphan_region = 3602802;
const orphan_id = 3600800;
const orphan_id2 = 3600801;

// ladder
// 2nd lamp door
// elevator

// constructor
$Event(0, Default, function() {
    
    SetEventFlag(8900+orphan_offset, OFF);
    
    InitializeEvent(36, 7900, 10000000+orphan_return, orphan_return, area_id, block_id, 8500+hamlet_lamp_offset);
    InitializeEvent(37, 7900, 10000000+orphan_return-1, orphan_return, area_id, block_id, 8500+lighthouse_lamp_offset);
    
    InitializeEvent(hamlet_lamp_offset, 8500, 8500+hamlet_lamp_offset, hamlet_lamp_id, 72114141);
    InitializeEvent(lighthouse_lamp_offset, 8500, 8500+lighthouse_lamp_offset, lighthouse_lamp_id, 72114242);
    InitializeEvent(orphan_lamp_offset, 8500, 8500+orphan_lamp_offset, orphan_lamp_id, 72114343);
    
    InitializeEvent(hamlet_lamp_offset, 8100, 8100+hamlet_lamp_offset, hamlet_lamp_kindle);
    InitializeEvent(lighthouse_lamp_offset, 8100, 8100+lighthouse_lamp_offset, lighthouse_lamp_kindle);
    InitializeEvent(orphan_lamp_offset, 8100, 8100+orphan_lamp_offset, orphan_lamp_kindle);
    
    InitializeEvent(hamlet_lamp_offset, 8300, hamlet_lamp_id+2000, -1, hamlet_lamp_kindle, hamlet_lamp_id+6000, hamlet_lamp_id+3000);
    InitializeEvent(lighthouse_lamp_offset, 8300, lighthouse_lamp_id+2000, -1, lighthouse_lamp_kindle, lighthouse_lamp_id+6000, lighthouse_lamp_id+3000);
    
    SetEventFlag(orphan_defeat+15, OFF);
    if (EventFlag(orphan_defeat+14)) {
        SetEventFlag(orphan_defeat+14, OFF);
        SetEventFlag(orphan_defeat+15, ON);
    }
    
    // post rematch clean up
    if(EventFlag(orphan_defeat+13) && !EventFlag(orphan_defeat-1)) {
        if (EventFlag(orphan_defeat-2)) {
            SetEventFlag(orphan_defeat-2, OFF);
            InitializeEvent(orphan_offset, 7500, orphan_region, orphan_lamp_id+4000);
        }
        SetEventFlag(orphan_defeat+13, OFF);
        SetEventFlag(orphan_defeat, ON);
        InitializeEvent(orphan_lamp_offset, 8300, orphan_lamp_id+2000, 999, orphan_lamp_kindle, orphan_lamp_id+6000, orphan_lamp_id+3000);
        DummyPlayCutsceneAndWarpPlayer(orphan_lamp_id+4000, area_id, block_id);
    } // rematch has started
    else if (EventFlag(orphan_defeat+12) || EventFlag(orphan_defeat-1)) {
        if (EventFlag(orphan_defeat-2)) {
            SetEventFlag(orphan_defeat-2, OFF);
            InitializeEvent(orphan_offset, 7500, orphan_region, orphan_lamp_id+5000);
        }
        SetEventFlag(orphan_defeat, OFF);
        SetEventFlag(orphan_defeat+1, OFF);
        SetEventFlag(orphan_defeat+3011, OFF);
        SetEventFlag(orphan_defeat+12, OFF);
        SetEventFlag(orphan_defeat+13, ON);
        SetEventFlag(orphan_defeat-1, OFF);
        SetEventFlag(8900+orphan_offset, ON);
        InitializeEvent(orphan_lamp_offset, 8300, orphan_lamp_id+2000, -1, orphan_lamp_kindle, orphan_lamp_id+6000, orphan_lamp_id+3000);
    }
    else {
        InitializeEvent(orphan_lamp_offset, 8300, orphan_lamp_id+2000, -1, orphan_lamp_kindle, orphan_lamp_id+6000, orphan_lamp_id+3000);
    }
    
    InitializeEvent(orphan_offset, 12102070, orphan_defeat+13, 0, 7506, orphan_id, orphan_id2);
    
    InitializeEvent(orphan_offset, 8900, orphan_defeat-1, orphan_lamp_id+1000, orphan_defeat-2, orphan_defeat+15, orphan_defeat+14, orphan_lamp_id+5000, area_id, block_id);
    InitializeEvent(orphan_offset, 7700, orphan_defeat+11, orphan_defeat+12, orphan_lamp_id+1000, 836000);
    
    InitializeEvent(4100, 12107000, 72114100, 3601950, 2412950);
    InitializeEvent(4101, 12107000, 72114101, 3601950, 2412951);
    InitializeEvent(4102, 12107000, 72114102, 3601950, 2412952);
    InitializeEvent(4103, 12107000, 72114103, 3601950, 2412953);
    InitializeEvent(4104, 12107000, 72114104, 3601950, 2402950);
    InitializeEvent(4105, 12107000, 72114105, 3601950, 2402951);
    InitializeEvent(4106, 12107000, 72114106, 3601950, 2422950);
    InitializeEvent(4107, 12107000, 72114107, 3601950, 2422952);
    InitializeEvent(4108, 12107000, 72114108, 3601950, 2422951);
    InitializeEvent(4109, 12107000, 72114109, 3601950, 2302950);
    InitializeEvent(4110, 12107000, 72114110, 3601950, 2302951);
    InitializeEvent(4111, 12107000, 72114111, 3601950, 2302952);
    InitializeEvent(4112, 12107000, 72114112, 3601950, 2202950);
    InitializeEvent(4113, 12107000, 72114113, 3601950, 2202951);
    InitializeEvent(4114, 12107000, 72114114, 3601950, 2702950);
    InitializeEvent(4115, 12107000, 72114115, 3601950, 2702951);
    InitializeEvent(4116, 12107000, 72114116, 3601950, 3202950);
    InitializeEvent(4117, 12107000, 72114117, 3601950, 3202952);
    InitializeEvent(4118, 12107000, 72114118, 3601950, 2802950);
    InitializeEvent(4119, 12107000, 72114119, 3601950, 2802953);
    InitializeEvent(4120, 12107000, 72114120, 3601950, 2802951);
    InitializeEvent(4121, 12107000, 72114121, 3601950, 2802952);
    InitializeEvent(4122, 12107000, 72114122, 3601950, 2502950);
    InitializeEvent(4123, 12107000, 72114123, 3601950, 2502952);
    InitializeEvent(4124, 12107000, 72114124, 3601950, 2502951);
    InitializeEvent(4125, 12107000, 72114125, 3601950, 2112950);
    InitializeEvent(4126, 12107000, 72114126, 3601950, 3202951);
    InitializeEvent(4127, 12107000, 72114127, 3601950, 3202953);
    InitializeEvent(4128, 12107000, 72114128, 3601950, 3302950);
    InitializeEvent(4129, 12107000, 72114129, 3601950, 3302951);
    InitializeEvent(4130, 12107000, 72114130, 3601950, 2602950);
    InitializeEvent(4131, 12107000, 72114131, 3601950, 2602953);
    InitializeEvent(4132, 12107000, 72114132, 3601950, 2602952);
    InitializeEvent(4133, 12107000, 72114133, 3601950, 2602951);
    InitializeEvent(4134, 12107000, 72114134, 3601950, 3402950);
    InitializeEvent(4135, 12107000, 72114135, 3601950, 3402951);
    InitializeEvent(4136, 12107000, 72114136, 3601950, 3402953);
    InitializeEvent(4137, 12107000, 72114137, 3601950, 3402952);
    InitializeEvent(4138, 12107000, 72114138, 3601950, 3502950);
    InitializeEvent(4139, 12107000, 72114139, 3601950, 3502951);
    InitializeEvent(4140, 12107000, 72114140, 3601950, 3502952);
    InitializeEvent(4141, 12107000, 72114141, 3601950, 3602950);
    InitializeEvent(4142, 12107000, 72114142, 3601950, 3602951);
    InitializeEvent(4143, 12107000, 72114143, 3601950, 3602952);
    InitializeEvent(4144, 12107000, 72114144, 3601950, 2902950);
    InitializeEvent(4145, 12107000, 72114145, 3601950, 2902951);
    InitializeEvent(4146, 12107000, 72114146, 3601950, 2902952);
    InitializeEvent(4147, 12107000, 72114147, 3601950, 2902953);
    InitializeEvent(4148, 12107000, 72114148, 3601950, 2902954);
    InitializeEvent(4149, 12107000, 72114149, 3601950, 2902955);
    InitializeEvent(4150, 12107000, 72114150, 3601950, 2902956);
    InitializeEvent(4151, 12107000, 72114151, 3601950, 2902957);
    InitializeEvent(4152, 12107000, 72114152, 3601950, 2902958);
    InitializeEvent(4153, 12107000, 72114153, 3601950, 2902959);

    InitializeEvent(4200, 12107000, 72114200, 3601951, 2412950);
    InitializeEvent(4201, 12107000, 72114201, 3601951, 2412951);
    InitializeEvent(4202, 12107000, 72114202, 3601951, 2412952);
    InitializeEvent(4203, 12107000, 72114203, 3601951, 2412953);
    InitializeEvent(4204, 12107000, 72114204, 3601951, 2402950);
    InitializeEvent(4205, 12107000, 72114205, 3601951, 2402951);
    InitializeEvent(4206, 12107000, 72114206, 3601951, 2422950);
    InitializeEvent(4207, 12107000, 72114207, 3601951, 2422952);
    InitializeEvent(4208, 12107000, 72114208, 3601951, 2422951);
    InitializeEvent(4209, 12107000, 72114209, 3601951, 2302950);
    InitializeEvent(4210, 12107000, 72114210, 3601951, 2302951);
    InitializeEvent(4211, 12107000, 72114211, 3601951, 2302952);
    InitializeEvent(4212, 12107000, 72114212, 3601951, 2202950);
    InitializeEvent(4213, 12107000, 72114213, 3601951, 2202951);
    InitializeEvent(4214, 12107000, 72114214, 3601951, 2702950);
    InitializeEvent(4215, 12107000, 72114215, 3601951, 2702951);
    InitializeEvent(4216, 12107000, 72114216, 3601951, 3202950);
    InitializeEvent(4217, 12107000, 72114217, 3601951, 3202952);
    InitializeEvent(4218, 12107000, 72114218, 3601951, 2802950);
    InitializeEvent(4219, 12107000, 72114219, 3601951, 2802953);
    InitializeEvent(4220, 12107000, 72114220, 3601951, 2802951);
    InitializeEvent(4221, 12107000, 72114221, 3601951, 2802952);
    InitializeEvent(4222, 12107000, 72114222, 3601951, 2502950);
    InitializeEvent(4223, 12107000, 72114223, 3601951, 2502952);
    InitializeEvent(4224, 12107000, 72114224, 3601951, 2502951);
    InitializeEvent(4225, 12107000, 72114225, 3601951, 2112950);
    InitializeEvent(4226, 12107000, 72114226, 3601951, 3202951);
    InitializeEvent(4227, 12107000, 72114227, 3601951, 3202953);
    InitializeEvent(4228, 12107000, 72114228, 3601951, 3302950);
    InitializeEvent(4229, 12107000, 72114229, 3601951, 3302951);
    InitializeEvent(4230, 12107000, 72114230, 3601951, 2602950);
    InitializeEvent(4231, 12107000, 72114231, 3601951, 2602953);
    InitializeEvent(4232, 12107000, 72114232, 3601951, 2602952);
    InitializeEvent(4233, 12107000, 72114233, 3601951, 2602951);
    InitializeEvent(4234, 12107000, 72114234, 3601951, 3402950);
    InitializeEvent(4235, 12107000, 72114235, 3601951, 3402951);
    InitializeEvent(4236, 12107000, 72114236, 3601951, 3402953);
    InitializeEvent(4237, 12107000, 72114237, 3601951, 3402952);
    InitializeEvent(4238, 12107000, 72114238, 3601951, 3502950);
    InitializeEvent(4239, 12107000, 72114239, 3601951, 3502951);
    InitializeEvent(4240, 12107000, 72114240, 3601951, 3502952);
    InitializeEvent(4241, 12107000, 72114241, 3601951, 3602950);
    InitializeEvent(4242, 12107000, 72114242, 3601951, 3602951);
    InitializeEvent(4243, 12107000, 72114243, 3601951, 3602952);
    InitializeEvent(4244, 12107000, 72114244, 3601951, 2902950);
    InitializeEvent(4245, 12107000, 72114245, 3601951, 2902951);
    InitializeEvent(4246, 12107000, 72114246, 3601951, 2902952);
    InitializeEvent(4247, 12107000, 72114247, 3601951, 2902953);
    InitializeEvent(4248, 12107000, 72114248, 3601951, 2902954);
    InitializeEvent(4249, 12107000, 72114249, 3601951, 2902955);
    InitializeEvent(4250, 12107000, 72114250, 3601951, 2902956);
    InitializeEvent(4251, 12107000, 72114251, 3601951, 2902957);
    InitializeEvent(4252, 12107000, 72114252, 3601951, 2902958);
    InitializeEvent(4253, 12107000, 72114253, 3601951, 2902959);

    InitializeEvent(4300, 12107000, 72114300, 3601952, 2412950);
    InitializeEvent(4301, 12107000, 72114301, 3601952, 2412951);
    InitializeEvent(4302, 12107000, 72114302, 3601952, 2412952);
    InitializeEvent(4303, 12107000, 72114303, 3601952, 2412953);
    InitializeEvent(4304, 12107000, 72114304, 3601952, 2402950);
    InitializeEvent(4305, 12107000, 72114305, 3601952, 2402951);
    InitializeEvent(4306, 12107000, 72114306, 3601952, 2422950);
    InitializeEvent(4307, 12107000, 72114307, 3601952, 2422952);
    InitializeEvent(4308, 12107000, 72114308, 3601952, 2422951);
    InitializeEvent(4309, 12107000, 72114309, 3601952, 2302950);
    InitializeEvent(4310, 12107000, 72114310, 3601952, 2302951);
    InitializeEvent(4311, 12107000, 72114311, 3601952, 2302952);
    InitializeEvent(4312, 12107000, 72114312, 3601952, 2202950);
    InitializeEvent(4313, 12107000, 72114313, 3601952, 2202951);
    InitializeEvent(4314, 12107000, 72114314, 3601952, 2702950);
    InitializeEvent(4315, 12107000, 72114315, 3601952, 2702951);
    InitializeEvent(4316, 12107000, 72114316, 3601952, 3202950);
    InitializeEvent(4317, 12107000, 72114317, 3601952, 3202952);
    InitializeEvent(4318, 12107000, 72114318, 3601952, 2802950);
    InitializeEvent(4319, 12107000, 72114319, 3601952, 2802953);
    InitializeEvent(4320, 12107000, 72114320, 3601952, 2802951);
    InitializeEvent(4321, 12107000, 72114321, 3601952, 2802952);
    InitializeEvent(4322, 12107000, 72114322, 3601952, 2502950);
    InitializeEvent(4323, 12107000, 72114323, 3601952, 2502952);
    InitializeEvent(4324, 12107000, 72114324, 3601952, 2502951);
    InitializeEvent(4325, 12107000, 72114325, 3601952, 2112950);
    InitializeEvent(4326, 12107000, 72114326, 3601952, 3202951);
    InitializeEvent(4327, 12107000, 72114327, 3601952, 3202953);
    InitializeEvent(4328, 12107000, 72114328, 3601952, 3302950);
    InitializeEvent(4329, 12107000, 72114329, 3601952, 3302951);
    InitializeEvent(4330, 12107000, 72114330, 3601952, 2602950);
    InitializeEvent(4331, 12107000, 72114331, 3601952, 2602953);
    InitializeEvent(4332, 12107000, 72114332, 3601952, 2602952);
    InitializeEvent(4333, 12107000, 72114333, 3601952, 2602951);
    InitializeEvent(4334, 12107000, 72114334, 3601952, 3402950);
    InitializeEvent(4335, 12107000, 72114335, 3601952, 3402951);
    InitializeEvent(4336, 12107000, 72114336, 3601952, 3402953);
    InitializeEvent(4337, 12107000, 72114337, 3601952, 3402952);
    InitializeEvent(4338, 12107000, 72114338, 3601952, 3502950);
    InitializeEvent(4339, 12107000, 72114339, 3601952, 3502951);
    InitializeEvent(4340, 12107000, 72114340, 3601952, 3502952);
    InitializeEvent(4341, 12107000, 72114341, 3601952, 3602950);
    InitializeEvent(4342, 12107000, 72114342, 3601952, 3602951);
    InitializeEvent(4343, 12107000, 72114343, 3601952, 3602952);
    InitializeEvent(4344, 12107000, 72114344, 3601952, 2902950);
    InitializeEvent(4345, 12107000, 72114345, 3601952, 2902951);
    InitializeEvent(4346, 12107000, 72114346, 3601952, 2902952);
    InitializeEvent(4347, 12107000, 72114347, 3601952, 2902953);
    InitializeEvent(4348, 12107000, 72114348, 3601952, 2902954);
    InitializeEvent(4349, 12107000, 72114349, 3601952, 2902955);
    InitializeEvent(4350, 12107000, 72114350, 3601952, 2902956);
    InitializeEvent(4351, 12107000, 72114351, 3601952, 2902957);
    InitializeEvent(4352, 12107000, 72114352, 3601952, 2902958);
    InitializeEvent(4353, 12107000, 72114353, 3601952, 2902959);

    SetEventFlag(72110041, OFF);
    SetEventFlag(72110141, OFF);
    SetEventFlag(72110241, OFF);
    SetEventFlag(72110341, OFF);
    SetEventFlag(72110441, OFF);
    SetEventFlag(72110541, OFF);
    SetEventFlag(72110641, OFF);
    SetEventFlag(72110741, OFF);
    SetEventFlag(72110841, OFF);
    SetEventFlag(72110941, OFF);
    SetEventFlag(72111041, OFF);
    SetEventFlag(72111141, OFF);
    SetEventFlag(72111241, OFF);
    SetEventFlag(72111341, OFF);
    SetEventFlag(72111441, OFF);
    SetEventFlag(72111541, OFF);
    SetEventFlag(72111641, OFF);
    SetEventFlag(72111741, OFF);
    SetEventFlag(72111841, OFF);
    SetEventFlag(72111941, OFF);
    SetEventFlag(72112041, OFF);
    SetEventFlag(72112141, OFF);
    SetEventFlag(72112241, OFF);
    SetEventFlag(72112341, OFF);
    SetEventFlag(72112441, OFF);
    SetEventFlag(72112541, OFF);
    SetEventFlag(72112641, OFF);
    SetEventFlag(72112741, OFF);
    SetEventFlag(72112841, OFF);
    SetEventFlag(72112941, OFF);
    SetEventFlag(72113041, OFF);
    SetEventFlag(72113141, OFF);
    SetEventFlag(72113241, OFF);
    SetEventFlag(72113341, OFF);
    SetEventFlag(72113441, OFF);
    SetEventFlag(72113541, OFF);
    SetEventFlag(72113641, OFF);
    SetEventFlag(72113741, OFF);
    SetEventFlag(72113841, OFF);
    SetEventFlag(72113941, OFF);
    SetEventFlag(72114041, OFF);
    SetEventFlag(72114141, OFF);
    SetEventFlag(72114241, OFF);
    SetEventFlag(72114341, OFF);
    SetEventFlag(72114441, OFF);
    SetEventFlag(72114541, OFF);
    SetEventFlag(72114641, OFF);
    SetEventFlag(72114741, OFF);
    SetEventFlag(72114841, OFF);
    SetEventFlag(72114941, OFF);
    SetEventFlag(72115041, OFF);
    SetEventFlag(72115141, OFF);
    SetEventFlag(72115241, OFF);
    SetEventFlag(72115341, OFF);

    SetEventFlag(72110042, OFF);
    SetEventFlag(72110142, OFF);
    SetEventFlag(72110242, OFF);
    SetEventFlag(72110342, OFF);
    SetEventFlag(72110442, OFF);
    SetEventFlag(72110542, OFF);
    SetEventFlag(72110642, OFF);
    SetEventFlag(72110742, OFF);
    SetEventFlag(72110842, OFF);
    SetEventFlag(72110942, OFF);
    SetEventFlag(72111042, OFF);
    SetEventFlag(72111142, OFF);
    SetEventFlag(72111242, OFF);
    SetEventFlag(72111342, OFF);
    SetEventFlag(72111442, OFF);
    SetEventFlag(72111542, OFF);
    SetEventFlag(72111642, OFF);
    SetEventFlag(72111742, OFF);
    SetEventFlag(72111842, OFF);
    SetEventFlag(72111942, OFF);
    SetEventFlag(72112042, OFF);
    SetEventFlag(72112142, OFF);
    SetEventFlag(72112242, OFF);
    SetEventFlag(72112342, OFF);
    SetEventFlag(72112442, OFF);
    SetEventFlag(72112542, OFF);
    SetEventFlag(72112642, OFF);
    SetEventFlag(72112742, OFF);
    SetEventFlag(72112842, OFF);
    SetEventFlag(72112942, OFF);
    SetEventFlag(72113042, OFF);
    SetEventFlag(72113142, OFF);
    SetEventFlag(72113242, OFF);
    SetEventFlag(72113342, OFF);
    SetEventFlag(72113442, OFF);
    SetEventFlag(72113542, OFF);
    SetEventFlag(72113642, OFF);
    SetEventFlag(72113742, OFF);
    SetEventFlag(72113842, OFF);
    SetEventFlag(72113942, OFF);
    SetEventFlag(72114042, OFF);
    SetEventFlag(72114142, OFF);
    SetEventFlag(72114242, OFF);
    SetEventFlag(72114342, OFF);
    SetEventFlag(72114442, OFF);
    SetEventFlag(72114542, OFF);
    SetEventFlag(72114642, OFF);
    SetEventFlag(72114742, OFF);
    SetEventFlag(72114842, OFF);
    SetEventFlag(72114942, OFF);
    SetEventFlag(72115042, OFF);
    SetEventFlag(72115142, OFF);
    SetEventFlag(72115242, OFF);
    SetEventFlag(72115342, OFF);

    SetEventFlag(72110043, OFF);
    SetEventFlag(72110143, OFF);
    SetEventFlag(72110243, OFF);
    SetEventFlag(72110343, OFF);
    SetEventFlag(72110443, OFF);
    SetEventFlag(72110543, OFF);
    SetEventFlag(72110643, OFF);
    SetEventFlag(72110743, OFF);
    SetEventFlag(72110843, OFF);
    SetEventFlag(72110943, OFF);
    SetEventFlag(72111043, OFF);
    SetEventFlag(72111143, OFF);
    SetEventFlag(72111243, OFF);
    SetEventFlag(72111343, OFF);
    SetEventFlag(72111443, OFF);
    SetEventFlag(72111543, OFF);
    SetEventFlag(72111643, OFF);
    SetEventFlag(72111743, OFF);
    SetEventFlag(72111843, OFF);
    SetEventFlag(72111943, OFF);
    SetEventFlag(72112043, OFF);
    SetEventFlag(72112143, OFF);
    SetEventFlag(72112243, OFF);
    SetEventFlag(72112343, OFF);
    SetEventFlag(72112443, OFF);
    SetEventFlag(72112543, OFF);
    SetEventFlag(72112643, OFF);
    SetEventFlag(72112743, OFF);
    SetEventFlag(72112843, OFF);
    SetEventFlag(72112943, OFF);
    SetEventFlag(72113043, OFF);
    SetEventFlag(72113143, OFF);
    SetEventFlag(72113243, OFF);
    SetEventFlag(72113343, OFF);
    SetEventFlag(72113443, OFF);
    SetEventFlag(72113543, OFF);
    SetEventFlag(72113643, OFF);
    SetEventFlag(72113743, OFF);
    SetEventFlag(72113843, OFF);
    SetEventFlag(72113943, OFF);
    SetEventFlag(72114043, OFF);
    SetEventFlag(72114143, OFF);
    SetEventFlag(72114243, OFF);
    SetEventFlag(72114343, OFF);
    SetEventFlag(72114443, OFF);
    SetEventFlag(72114543, OFF);
    SetEventFlag(72114643, OFF);
    SetEventFlag(72114743, OFF);
    SetEventFlag(72114843, OFF);
    SetEventFlag(72114943, OFF);
    SetEventFlag(72115043, OFF);
    SetEventFlag(72115143, OFF);
    SetEventFlag(72115243, OFF);
    SetEventFlag(72115343, OFF);

    InitializeEvent(0, 12107100, 72100421, 3601950, 9021);
    InitializeEvent(1, 12107100, 72100422, 3601950, 9022);
    InitializeEvent(2, 12107100, 72100423, 3601950, 9023);
    InitializeEvent(3, 12107100, 72100424, 3601950, 9024);
    InitializeEvent(4, 12107100, 72100425, 3601950, 9025);
    InitializeEvent(5, 12107100, 72100426, 3601950, 9026);

    InitializeEvent(6, 12107100, 72100427, 3601951, 9021);
    InitializeEvent(7, 12107100, 72100428, 3601951, 9022);
    InitializeEvent(8, 12107100, 72100429, 3601951, 9023);
    InitializeEvent(9, 12107100, 72100430, 3601951, 9024);
    InitializeEvent(10, 12107100, 72100431, 3601951, 9025);
    InitializeEvent(11, 12107100, 72100432, 3601951, 9026);

    InitializeEvent(12, 12107100, 72100433, 3601952, 9021);
    InitializeEvent(13, 12107100, 72100434, 3601952, 9022);
    InitializeEvent(14, 12107100, 72100435, 3601952, 9023);
    InitializeEvent(15, 12107100, 72100436, 3601952, 9024);
    InitializeEvent(16, 12107100, 72100437, 3601952, 9025);
    InitializeEvent(17, 12107100, 72100438, 3601952, 9026);

    InitializeEvent(0, 12107200, 72100300, 2902950, 9001, 2901950);
    InitializeEvent(1, 12107200, 72100301, 2902951, 9002, 2901950);
    InitializeEvent(2, 12107200, 72100302, 2902952, 9003, 2901950);
    InitializeEvent(3, 12107200, 72100303, 2902953, 9004, 2901950);
    InitializeEvent(4, 12107200, 72100304, 2902954, 9005, 2901950);
    InitializeEvent(5, 12107200, 72100305, 2902955, 9006, 2901950);
    InitializeEvent(6, 12107200, 72100306, 2902956, 9007, 2901950);
    InitializeEvent(7, 12107200, 72100307, 2902957, 9008, 2901950);
    InitializeEvent(8, 12107200, 72100308, 2902958, 9009, 2901950);
    InitializeEvent(9, 12107200, 72100309, 2902959, 9010, 2901950);

    InitializeEvent(10, 12107200, 72100310, 2902950, 9001, 2901951);
    InitializeEvent(11, 12107200, 72100311, 2902951, 9002, 2901951);
    InitializeEvent(12, 12107200, 72100312, 2902952, 9003, 2901951);
    InitializeEvent(13, 12107200, 72100313, 2902953, 9004, 2901951);
    InitializeEvent(14, 12107200, 72100314, 2902954, 9005, 2901951);
    InitializeEvent(15, 12107200, 72100315, 2902955, 9006, 2901951);
    InitializeEvent(16, 12107200, 72100316, 2902956, 9007, 2901951);
    InitializeEvent(17, 12107200, 72100317, 2902957, 9008, 2901951);
    InitializeEvent(18, 12107200, 72100318, 2902958, 9009, 2901951);
    InitializeEvent(19, 12107200, 72100319, 2902959, 9010, 2901951);

    InitializeEvent(20, 12107200, 72100320, 2902950, 9001, 2901952);
    InitializeEvent(21, 12107200, 72100321, 2902951, 9002, 2901952);
    InitializeEvent(22, 12107200, 72100322, 2902952, 9003, 2901952);
    InitializeEvent(23, 12107200, 72100323, 2902953, 9004, 2901952);
    InitializeEvent(24, 12107200, 72100324, 2902954, 9005, 2901952);
    InitializeEvent(25, 12107200, 72100325, 2902955, 9006, 2901952);
    InitializeEvent(26, 12107200, 72100326, 2902956, 9007, 2901952);
    InitializeEvent(27, 12107200, 72100327, 2902957, 9008, 2901952);
    InitializeEvent(28, 12107200, 72100328, 2902958, 9009, 2901952);
    InitializeEvent(29, 12107200, 72100329, 2902959, 9010, 2901952);
    
    InitializeEvent(65, 7000, 3600950, 3601950, 999, 13607800, -1);
    InitializeEvent(66, 7000, 3600951, 3601951, 999, 13607820, -1);
    
    InitializeEvent(67, 7000, 3600952, 3601952, 13601800, 13607840, orphan_defeat+13);
    InitializeEvent(orphan_offset, 8800, orphan_defeat+13, orphan_lamp_id-1000, orphan_lamp_id, orphan_lamp_id+3000);
    
    InitializeEvent(65, 7100, 73600200, 3601950);
    InitializeEvent(66, 7100, 73600201, 3601951);
    InitializeEvent(67, 7100, 73600202, 3601952);
    InitializeEvent(65, 7200, 73600100, 3601950, 2102953);
    InitializeEvent(66, 7200, 73600101, 3601951, 2102953);
    InitializeEvent(67, 7200, 73600102, 3601952, 2102953);
    InitializeEvent(65, 7300, 72103600, 3601950);
    InitializeEvent(66, 7300, 72103601, 3601951);
    InitializeEvent(67, 7300, 72103602, 3601952);
    InitializeEvent(65, 12102220, 3601950, 3600950);
    InitializeEvent(66, 12102220, 3601951, 3600951);
    InitializeEvent(67, 12102220, 3601952, 3600952);
    InitializeEvent(0, 13604700, 3600790, 13604701, 13604711, 3600, 999);
    InitializeEvent(5, 13604700, 3600791, 13604702, 13604712, 3600, 999);
    InitializeEvent(0, 13604710, 3600790, 13604701, 13604711, 13604721);
    InitializeEvent(5, 13604710, 3600791, 13604702, 13604712, 13604722);
    InitializeEvent(0, 13604720, 3600790, 13604701, 13604711, 13604721);
    InitializeEvent(5, 13604720, 3600791, 13604702, 13604712, 13604722);
    InitializeEvent(0, 13604730, 3600790, 13604701, 13604711, 3600, 13604810, 999, 999, 13604712);
    InitializeEvent(5, 13604730, 3600791, 13604702, 13604712, 3600, 13604810, 999, 999, 13604711);
    InitializeEvent(0, 13604740, 0);
    InitializeEvent(0, 13604742, 0);
    InitializeEvent(0, 13600000, 0);
    InitializeEvent(0, 13600010, 0);
    InitializeEvent(0, 13601090, 0);
    InitializeEvent(0, 13601100, 0);
    InitializeEvent(0, 13601101, 0);
    InitializeEvent(0, 13601102, 0);
    InitializeEvent(0, 13601103, 0);
    InitializeEvent(0, 13601104, 0);
    InitializeEvent(0, 13601105, 0);
    InitializeEvent(0, 13601200, 3601200, 13604200, 1, 10);
    InitializeEvent(1, 13601200, 3601201, 13604201, 1, 10);
    InitializeEvent(0, 13601210, 7030, 3601200, 13601200);
    InitializeEvent(1, 13601210, 7030, 3601201, 13601201);
    RegisterLadder(13601300, 13601301, 3601300);
    RegisterLadder(13601302, 13601303, 3601301);
    RegisterLadder(13601304, 13601305, 3601302);
    RegisterLadder(13601306, 13601307, 3601303);
    RegisterLadder(13601308, 13601309, 3601304);
    InitializeEvent(0, 13601312, 0);
    InitializeEvent(0, 13601140, 3601110, 3604110);
    InitializeEvent(1, 13601140, 3601111, 3604111);
    InitializeEvent(2, 13601140, 3601112, 3604112);
    InitializeEvent(3, 13601140, 3601113, 3604113);
    InitializeEvent(0, 13601400, 0);
    InitializeEvent(0, 13604400, 3601400);
    InitializeEvent(1, 13604400, 3601401);
    InitializeEvent(2, 13604400, 3601402);
    InitializeEvent(3, 13604400, 3601403);
    InitializeEvent(4, 13604400, 3601404);
    InitializeEvent(5, 13604400, 3601405);
    InitializeEvent(6, 13604400, 3601406);
    InitializeEvent(7, 13604400, 3601407);
    InitializeEvent(8, 13604400, 3601408);
    InitializeEvent(9, 13604400, 3601409);
    InitializeEvent(10, 13604400, 3601410);
    InitializeEvent(11, 13604400, 3601411);
    InitializeEvent(12, 13604400, 3601412);
    InitializeEvent(13, 13604400, 3601413);
    InitializeEvent(20, 13604400, 3601420);
    InitializeEvent(21, 13604400, 3601421);
    InitializeEvent(22, 13604400, 3601422);
    InitializeEvent(23, 13604400, 3601423);
    InitializeEvent(24, 13604400, 3601424);
    InitializeEvent(25, 13604400, 3601425);
    InitializeEvent(26, 13604400, 3601426);
    InitializeEvent(27, 13604400, 3601427);
    InitializeEvent(28, 13604400, 3601428);
    InitializeEvent(29, 13604400, 3601429);
    InitializeEvent(30, 13604400, 3601430);
    InitializeEvent(31, 13604400, 3601431);
    InitializeEvent(40, 13604400, 3601440);
    InitializeEvent(41, 13604400, 3601441);
    InitializeEvent(42, 13604400, 3601442);
    InitializeEvent(43, 13604400, 3601443);
    InitializeEvent(44, 13604400, 3601444);
    InitializeEvent(45, 13604400, 3601445);
    InitializeEvent(46, 13604400, 3601446);
    InitializeEvent(47, 13604400, 3601447);
    InitializeEvent(50, 13604400, 3601450);
    InitializeEvent(51, 13604400, 3601451);
    InitializeEvent(52, 13604400, 3601452);
    InitializeEvent(53, 13604400, 3601453);
    InitializeEvent(54, 13604400, 3601454);
    InitializeEvent(55, 13604400, 3601455);
    InitializeEvent(56, 13604400, 3601456);
    InitializeEvent(57, 13604400, 3601457);
    InitializeEvent(60, 13604400, 3601460);
    InitializeEvent(61, 13604400, 3601461);
    InitializeEvent(62, 13604400, 3601462);
    InitializeEvent(63, 13604400, 3601463);
    InitializeEvent(64, 13604400, 3601464);
    InitializeEvent(65, 13604400, 3601465);
    InitializeEvent(66, 13604400, 3601466);
    InitializeEvent(67, 13604400, 3601467);
    InitializeEvent(0, 13601800, 0);
    InitializeEvent(0, 13604811, 0);
    InitializeEvent(0, 13601801, 0);
    InitializeEvent(0, 13604800, 0);
    InitializeEvent(0, 13604801, 0);
    InitializeEvent(0, 13604802, 0);
    InitializeEvent(0, 13604803, 0);
    InitializeEvent(0, 13604805, 0);
    InitializeEvent(0, 13604806, 0);
    InitializeEvent(0, 13604807, 0);
    InitializeEvent(0, 13604820, 0);
    InitializeEvent(0, 13604830, 0);
    InitializeEvent(0, 13604840, 0);
    InitializeEvent(0, 13604850, 0);
    InitializeEvent(0, 13601802, 0);
    InitializeEvent(0, 13601803, 0);
    InitializeEvent(0, 13601804, 0);
    InitializeEvent(0, 13605200, 3600200, 3602200, 0, 3603200, 0, 0);
    InitializeEvent(1, 13605200, 3600202, 3602202, 0, 3603202, 0, 0);
    InitializeEvent(2, 13605200, 3600203, 3602202, 3602203, 3603203, 0, 0);
    InitializeEvent(3, 13605200, 3600204, 3602202, 3602203, 3603204, 0, 0);
    InitializeEvent(4, 13605200, 3600208, 3602208, 0, 3603208, 0, 0);
    InitializeEvent(5, 13605200, 3600209, 3602208, 0, 3603209, 0, 0);
    InitializeEvent(6, 13605200, 3600210, 3602210, 0, 3603210, 0, 0);
    InitializeEvent(7, 13605200, 3600300, 3602300, 0, 3603300, 0, 0);
    InitializeEvent(8, 13605200, 3600213, 3602213, 0, 3603213, 0, 0);
    InitializeEvent(9, 13605200, 3600214, 3602213, 0, 3603214, 0, 0);
    InitializeEvent(10, 13605200, 3600217, 3602215, 0, 3603217, 0, 0);
    InitializeEvent(11, 13605200, 3600229, 3602229, 0, 3603229, 0, 0);
    InitializeEvent(12, 13605200, 3600231, 3602231, 3602232, 3603231, 0, 0);
    InitializeEvent(13, 13605200, 3600232, 3602231, 3602232, 3603232, 0, 0);
    InitializeEvent(14, 13605200, 3600233, 3602231, 3602232, 3603233, 0, 0);
    InitializeEvent(15, 13605200, 3600610, 3602610, 0, 3603610, 0, 0);
    InitializeEvent(16, 13605200, 3600611, 3602231, 3602232, 3603611, 0, 0);
    InitializeEvent(17, 13605200, 3600301, 3602301, 0, 3603301, 0, 1);
    InitializeEvent(18, 13605200, 3600310, 3602310, 0, 3603310, 0, 1);
    InitializeEvent(19, 13605200, 3600700, 3602700, 0, 3603700, 0, 0);
    InitializeEvent(20, 13605200, 3600710, 3602710, 0, 3603710, 0, 0);
    InitializeEvent(21, 13605200, 3600251, 3602251, 0, 3603251, 0, 0);
    InitializeEvent(23, 13605200, 3600253, 3602252, 0, 3603253, 0, 0);
    InitializeEvent(25, 13605200, 3600314, 3602314, 0, 3603314, 0, 0);
    InitializeEvent(26, 13605200, 3600455, 3602455, 0, 3603455, 0, 0);
    InitializeEvent(27, 13605200, 3600456, 3602455, 0, 3603456, 1065353216, 1);
    InitializeEvent(28, 13605200, 3600474, 3602474, 0, 3603474, 0, 0);
    InitializeEvent(29, 13605200, 3600475, 3602474, 0, 3603475, 1065353216, 1);
    InitializeEvent(30, 13605200, 3600302, 3602302, 0, 3603302, 0, 0);
    InitializeEvent(31, 13605200, 3600312, 3602312, 0, 3603312, 0, 0);
    InitializeEvent(32, 13605200, 3600470, 3602470, 0, 3603470, 0, 1);
    InitializeEvent(33, 13605200, 3600500, 3602470, 0, 3603500, 0, 0);
    InitializeEvent(34, 13605200, 3600501, 3602501, 0, 3603501, 0, 0);
    InitializeEvent(35, 13605200, 3600920, 3602940, 0, 3603920, 0, 0);
    InitializeEvent(0, 13605400, 3600206, 7004, 404002, 7005, 404002, 3602206, 0, 0);
    InitializeEvent(1, 13605400, 3600211, 7012, 404000, 7013, 404000, 3602211, 0, 0);
    InitializeEvent(2, 13605400, 3600218, 0, 404011, 3005, 404010, 3602218, 0, 0);
    InitializeEvent(3, 13605400, 3600222, 7016, 404031, 7017, 404030, 3602222, 0, 0);
    InitializeEvent(4, 13605400, 3600230, 7004, 404000, 7005, 404000, 3602230, 0, 0);
    InitializeEvent(5, 13605400, 3600239, 7012, 404008, 7013, 404008, 3602240, 1061158912, 1061158912);
    InitializeEvent(6, 13605400, 3600240, 7012, 404004, 7013, 404004, 3602240, 1048576000, 1048576000);
    InitializeEvent(7, 13605400, 3600241, 7012, 404008, 7013, 404008, 3602240, 0, 0);
    InitializeEvent(8, 13605400, 3600242, 7012, 404004, 7013, 404004, 3602240, 1056964608, 1056964608);
    InitializeEvent(9, 13605400, 3600244, 7014, 404014, 7015, 404014, 3602244, 0, 0);
    InitializeEvent(10, 13605400, 3600245, 0, 404035, 3026, 404034, 3602245, 0, 0);
    InitializeEvent(11, 13605400, 3600246, 7018, 404034, 7019, 404034, 3602246, 0, 0);
    InitializeEvent(12, 13605400, 3600247, 7018, 404014, 7019, 404014, 3602246, 1056964608, 1056964608);
    InitializeEvent(13, 13605400, 3600260, 7012, 404018, 7013, 404019, 3602260, 0, 0);
    InitializeEvent(14, 13605400, 3600261, 7012, 404018, 7013, 404019, 3602261, 0, 0);
    InitializeEvent(15, 13605400, 3600262, 7012, 404018, 7013, 404019, 3602262, 0, 0);
    InitializeEvent(16, 13605400, 3600265, 7012, 404018, 7013, 404019, 3602265, 0, 0);
    InitializeEvent(17, 13605400, 3600400, 7010, 407022, 3001, 407020, 3602400, 0, 1065353216);
    InitializeEvent(18, 13605400, 3600401, 7010, 407012, 7001, 407010, 3602400, 0, 1065353216);
    InitializeEvent(19, 13605400, 3600402, 7010, 407012, 7001, 407010, 3602400, 0, 1065353216);
    InitializeEvent(20, 13605400, 3600403, 7010, 407012, 7001, 407010, 3602400, 0, 1065353216);
    InitializeEvent(21, 13605400, 3600404, 7010, 407022, 3001, 407020, 3602400, 0, 1065353216);
    InitializeEvent(22, 13605400, 3600405, 7010, 407012, 7001, 407010, 3602400, 0, 1065353216);
    InitializeEvent(25, 13605400, 3600408, 7010, 407022, 3001, 407020, 3602408, 0, 1065353216);
    InitializeEvent(26, 13605400, 3600409, 7010, 407012, 7001, 407010, 3602408, 0, 1065353216);
    InitializeEvent(27, 13605400, 3600410, 7010, 407022, 3001, 407020, 3602408, 0, 1065353216);
    InitializeEvent(28, 13605400, 3600411, 7010, 407012, 7001, 407010, 3602408, 0, 1065353216);
    InitializeEvent(29, 13605400, 3600412, 7010, 407012, 7001, 407010, 3602412, 0, 0);
    InitializeEvent(30, 13605400, 3600413, 7010, 407012, 7001, 407010, 3602412, 1065353216, 1065353216);
    InitializeEvent(33, 13605400, 3600416, 7010, 407022, 3001, 407020, 3602416, 0, 0);
    InitializeEvent(34, 13605400, 3600417, 7010, 407012, 7001, 407010, 3602416, 1065353216, 1065353216);
    InitializeEvent(35, 13605400, 3600418, 7010, 407012, 7001, 407010, 3602416, 1056964608, 1056964608);
    InitializeEvent(36, 13605400, 3600419, 7010, 407012, 7001, 407010, 3602419, 0, 0);
    InitializeEvent(37, 13605400, 3600424, 7010, 407022, 3001, 407020, 3602424, 1056964608, 1056964608);
    InitializeEvent(38, 13605400, 3600425, 7010, 407012, 7001, 407010, 3602424, 0, 0);
    InitializeEvent(39, 13605400, 3600426, 7010, 407012, 7001, 407010, 3602424, 1065353216, 1065353216);
    InitializeEvent(40, 13605400, 3600440, 7010, 407022, 7001, 407020, 3602440, 0, 0);
    InitializeEvent(41, 13605400, 3600441, 7010, 407022, 3001, 407020, 3602440, 0, 0);
    InitializeEvent(0, 13605480, 3600223, 7008, 404032, 7009, 404030, 3602223, 0, 33);
    InitializeEvent(1, 13605480, 3600476, 7012, 407000, 7013, 407000, 3602476, 0, 30);
    InitializeEvent(2, 13605480, 3600477, 7014, 407000, 7015, 407000, 3602476, 1056964608, 30);
    InitializeEvent(3, 13605480, 3600478, 7016, 407000, 7017, 407000, 3602478, 0, 30);
    InitializeEvent(0, 13605490, 3600313, 9000, 405003, 9060, 405003, 3600314, 0, 0);
    InitializeEvent(1, 13605490, 3600266, 7012, 404018, 7013, 404019, 3600314, 1056964608, 1056964608);
    InitializeEvent(2, 13605490, 3600267, 7014, 404018, 7015, 404019, 3600314, 1065353216, 1065353216);
    InitializeEvent(3, 13605490, 3600263, 7012, 404018, 7013, 404019, 3600265, 1056964608, 1056964608);
    InitializeEvent(4, 13605490, 3600264, 7012, 404018, 7013, 404019, 3600265, 1065353216, 1065353216);
    InitializeEvent(1, 13605500, 3600207, 7006, 404002, 7007, 404002, 3602206, 1082130432, 1082130432);
    InitializeEvent(2, 13605500, 3600212, 7006, 404016, 7007, 404010, 3602211, 0, 0);
    InitializeEvent(3, 13605500, 3600216, 7006, 404003, 7007, 404000, 3602215, 0, 0);
    InitializeEvent(1, 13605520, 3600310, 3602310, 405001, 405000);
    InitializeEvent(0, 13605540, 3600210, 0, 1090519040, 404040, 404000);
    InitializeEvent(1, 13605540, 3600300, 0, 1090519040, 406001, 406000);
    InitializeEvent(2, 13605540, 3600500, 3602470, 1082130432, 256901, 256900);
    InitializeEvent(3, 13605540, 3600501, 3602470, 1082130432, 256901, 256900);
    InitializeEvent(4, 13605540, 3600218, 0, 1065353216, 404011, 404010);
    InitializeEvent(5, 13605540, 3600220, 0, 1082130432, 404011, 404010);
    InitializeEvent(6, 13605540, 3600221, 0, 1082130432, 404011, 404010);
    InitializeEvent(0, 13605560, 3600331, 3602331, 1082130432);
    InitializeEvent(0, 13605600, 3600500, 3600510);
    InitializeEvent(1, 13605600, 3600501, 3600511);
    InitializeEvent(0, 13605605, 0);
    InitializeEvent(0, 13605606, 0);
    InitializeEvent(0, 13605799, 0);
    InitializeEvent(0, 13605720, 3600206);
    InitializeEvent(1, 13605720, 3600314);
    InitializeEvent(0, 13605740, 3600215, 3602215, 3600720, 1073741824);
    InitializeEvent(1, 13605740, 3600219, 3602218, 3600721, 1073741824);
    InitializeEvent(2, 13605740, 3600250, 3602250, 3600722, 1073741824);
    InitializeEvent(0, 13605750, 0);
    InitializeEvent(0, 13605751, 0);
    InitializeEvent(0, 13605752, 0);
    InitializeEvent(0, 13605760, 0);
    InitializeEvent(0, 13605761, 0);
    InitializeEvent(0, 13605900, 13605950, 13605960, 13605970, 3602900, 0, 13600995);
    InitializeEvent(1, 13605900, 13605951, 13605961, 13605971, 3602910, 3602911, 6001);
    InitializeEvent(2, 13605900, 13605952, 13605962, 13605972, 3602920, 0, 6001);
    InitializeEvent(0, 13605910, 13605950, 13605960, 13605970, 3602902, 0);
    InitializeEvent(1, 13605910, 13605951, 13605961, 13605971, 3602912, 3602913);
    InitializeEvent(2, 13605910, 13605952, 13605962, 13605972, 3602922, 0);
    InitializeEvent(0, 13605920, 3600900, 13605960, 13605970, 3602904, 3602905, 13605950, 13605980, 3602906);
    InitializeEvent(0, 13605921, 3600901, 13605961, 13605971, 3602914, 3602915, 13605951, 13605981, 3602916);
    InitializeEvent(2, 13605920, 3600902, 13605962, 13605972, 3602924, 0, 13605952, 13605982, 3602926);
    InitializeEvent(0, 13605930, 3600900, 13605960, 13605970, 3602908, 3602909, 13605980);
    InitializeEvent(1, 13605930, 3600901, 13605961, 13605971, 3602918, 3602909, 13605981);
    InitializeEvent(2, 13605930, 3600902, 13605962, 13605972, 3602928, 0, 13605982);
    InitializeEvent(0, 13605940, 3600900, 13605960, 13605970, 43730, 3600910);
    InitializeEvent(1, 13605940, 3600901, 13605961, 13605971, 43740, 3600911);
    InitializeEvent(2, 13605940, 3600902, 13605962, 13605972, 43720, 3600912);
    InitializeEvent(0, 13600995, 0);
    InitializeEvent(0, 13600942, 1086324736, 1092616192);
    InitializeEvent(0, 13600943, 73600300, 43600);
    InitializeEvent(0, 13600944, 0);
    InitializeEvent(0, 13600951, 3600905, 73600520, 1723);
    InitializeEvent(0, 13600952, 3600905, 1723, 73600530);
    InitializeEvent(0, 13600953, 3600905);
    InitializeEvent(0, 13600955, 0);
    InitializeEvent(0, 13600956, 3600905, 1723, 73600521);
    InitializeEvent(1, 13600900, 3600905, 1710, 1729, 1719, 1713);
    InitializeEvent(0, 13600954, 1713, 73600530, 43220);
});

// preconstructor
$Event(50, Default, function() {
    InitializeEvent(0, 13600940, 3600920);
    InitializeEvent(0, 13600950, 3600905);
    SetCharacterGravity(3600201, Disabled);
    SetCharacterMaphits(3600201, true);
    SetCharacterGravity(3600207, Disabled);
    SetCharacterMaphits(3600207, true);
    SetCharacterGravity(3600212, Disabled);
    SetCharacterMaphits(3600212, true);
    SetCharacterGravity(3600216, Disabled);
    SetCharacterMaphits(3600216, true);
    SetCharacterHPBarDisplay(3600330, Disabled);
    SetCharacterHPBarDisplay(3600331, Disabled);
    SetCharacterHPBarDisplay(3600332, Disabled);
});

// Fishing Village_Appearance Widow_Appearance_XX
$Event(13604700, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (EventFlag(X8_4)) {
        SetCharacterAIState(X0_4, Disabled);
        ForceAnimationPlayback(X0_4, 7010, false, false, false);
        EndEvent();
    }
L0:
    EndIf(EventFlag(X4_4));
    SetCharacterAIState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7010, true, false, false);
    onlineFlagMapChrSp &= IsOnline() && !EventFlag(X8_4) && !EventFlag(X12_4) && PlayerInMap(36, 0);
    chrOnline &= CharacterType(10000, TargetType.Alive) && PlayersSoulLevel() >= 30;
    if (EventFlag(X16_4)) {
        chrOnline &= NumberOfClientsOfType(ClientType.Coop) >= 1;
    }
    onlineFlagMapChrSp &= chrOnline || CharacterHasSpEffect(10000, 9025);
    WaitFor(onlineFlagMapChrSp);
    WaitFor(RandomElapsedSeconds(10, 10));
    if (EventFlag(X16_4)) {
        DisplayMessage(109000, 0);
    }
    ForceAnimationPlayback(X0_4, 7011, false, false, false);
    WaitFixedTimeFrames(59);
    SetCharacterAIState(X0_4, Enabled);
    SetEventFlag(X4_4, ON);
});

// Fishing Village_Appearing Widow_Ringing the Bell_XX
$Event(13604710, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X8_4));
    WaitFor(
        EventFlag(X4_4)
            && !EventFlag(X12_4)
            && !EventFlag(X8_4)
            && PlayerInMap(36, 0)
            && NumberOfClientsOfType(ClientType.Invader) == 0);
    WaitFor(CharacterType(10000, TargetType.Alive) && RandomElapsedSeconds(10, 10));
    SetSpEffect(10000, 9020, false);
    SetSpEffect(X0_4, 9100, false);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X12_4, ON);
    DisplayMessage(100002, 0);
    RestartEvent();
});

// Fishing Village_Appearing Widow_Stopping the Bell_XX
$Event(13604720, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X8_4));
    WaitFor(
        EventFlag(X4_4)
            && EventFlag(X12_4)
            && (EventFlag(X8_4) || NumberOfClientsOfType(ClientType.Invader) >= 1 || !PlayerInMap(36, 0)));
    WaitFor(CharacterType(10000, TargetType.Alive));
    ClearSpEffect(10000, 9020);
    ClearSpEffect(X0_4, 9100);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X12_4, OFF);
    RestartEvent();
});

// Fishing Village_Appearance Widow_Disappearance_XX
$Event(13604730, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(EventFlag(X8_4) || EventFlag(X12_4) || EventFlag(X16_4));
    hp = HPRatio(X0_4) == 0;
    flag = EventFlag(X16_4) || EventFlag(X28_4);
    WaitFor(EventFlag(X4_4) && EventFlag(X24_4) && (hp || flag));
    SetEventFlag(X8_4, ON);
    if (!flag.Passed) {
        SetEventFlag(X20_4, ON);
        WaitFixedTimeSeconds(5);
        DisplayMessage(109001, 0);
        EndEvent();
    }
L0:
    SetCharacterAIState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7012, false, false, false);
    WaitFixedTimeFrames(88);
    ForceAnimationPlayback(X0_4, 7010, false, false, false);
});

// Fishing village_Appearing widow_Same area determination_First half
$Event(13604740, Restart, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && (PlayerStandingOnHit(3604000)
                || PlayerStandingOnHit(3604001)
                || PlayerStandingOnHit(3604002)
                || PlayerStandingOnHit(3604003)
                || PlayerStandingOnHit(3604004)
                || PlayerStandingOnHit(3604005)
                || PlayerStandingOnHit(3604006)
                || PlayerStandingOnHit(3604007)
                || PlayerStandingOnHit(3604008)
                || PlayerStandingOnHit(3604009)
                || PlayerStandingOnHit(3604010)
                || PlayerStandingOnHit(3604011)
                || PlayerStandingOnHit(3604012)
                || PlayerStandingOnHit(3604013)));
    SetEventFlag(13604741, ON);
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !(PlayerStandingOnHit(3604000)
                || PlayerStandingOnHit(3604001)
                || PlayerStandingOnHit(3604002)
                || PlayerStandingOnHit(3604003)
                || PlayerStandingOnHit(3604004)
                || PlayerStandingOnHit(3604005)
                || PlayerStandingOnHit(3604006)
                || PlayerStandingOnHit(3604007)
                || PlayerStandingOnHit(3604008)
                || PlayerStandingOnHit(3604009)
                || PlayerStandingOnHit(3604010)
                || PlayerStandingOnHit(3604011)
                || PlayerStandingOnHit(3604012)
                || PlayerStandingOnHit(3604013)));
    SetEventFlag(13604741, OFF);
    RestartEvent();
});

// Fishing village_Appearing widow_Same area determination_Second half
$Event(13604742, Restart, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && (PlayerStandingOnHit(3604020)
                || PlayerStandingOnHit(3604021)
                || PlayerStandingOnHit(3604022)
                || PlayerStandingOnHit(3604023)
                || PlayerStandingOnHit(3604024)
                || PlayerStandingOnHit(3604025)
                || PlayerStandingOnHit(3604026)
                || PlayerStandingOnHit(3604027)
                || PlayerStandingOnHit(3604028)
                || PlayerStandingOnHit(3604029)
                || PlayerStandingOnHit(3604030)
                || PlayerStandingOnHit(3604031)
                || PlayerStandingOnHit(3604032)
                || PlayerStandingOnHit(3604033)
                || PlayerStandingOnHit(3604034)
                || PlayerStandingOnHit(3604035)
                || PlayerStandingOnHit(3604110)
                || PlayerStandingOnHit(3604111)
                || PlayerStandingOnHit(3604112)
                || PlayerStandingOnHit(3604113)));
    SetEventFlag(13604743, ON);
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !(PlayerStandingOnHit(3604020)
                || PlayerStandingOnHit(3604021)
                || PlayerStandingOnHit(3604022)
                || PlayerStandingOnHit(3604023)
                || PlayerStandingOnHit(3604024)
                || PlayerStandingOnHit(3604025)
                || PlayerStandingOnHit(3604026)
                || PlayerStandingOnHit(3604027)
                || PlayerStandingOnHit(3604028)
                || PlayerStandingOnHit(3604029)
                || PlayerStandingOnHit(3604030)
                || PlayerStandingOnHit(3604031)
                || PlayerStandingOnHit(3604032)
                || PlayerStandingOnHit(3604033)
                || PlayerStandingOnHit(3604034)
                || PlayerStandingOnHit(3604035)
                || PlayerStandingOnHit(3604110)
                || PlayerStandingOnHit(3604111)
                || PlayerStandingOnHit(3604112)
                || PlayerStandingOnHit(3604113)));
    SetEventFlag(13604743, OFF);
    RestartEvent();
});

// Fishing village_Enlightenment acquisition
$Event(13600000, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(PlayerStandingOnHit(3604002));
    InitializeEvent(0, 9350, 4);
});

// Fishing village_Rain sound
$Event(13600010, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13601803));
    SetMapSoundState(3603001, Disabled);
    WaitFor(
        PlayerStandingOnHit(3604005)
            || PlayerStandingOnHit(3604007)
            || PlayerStandingOnHit(3604012)
            || PlayerStandingOnHit(3604021)
            || PlayerStandingOnHit(3604023)
            || PlayerStandingOnHit(3604026)
            || PlayerStandingOnHit(3604027)
            || PlayerStandingOnHit(3604028)
            || PlayerStandingOnHit(3604029)
            || PlayerStandingOnHit(3604030)
            || PlayerStandingOnHit(3604031)
            || PlayerStandingOnHit(3604032)
            || PlayerStandingOnHit(3604033)
            || PlayerStandingOnHit(3604034)
            || PlayerStandingOnHit(3604035)
            || PlayerStandingOnHit(3604060));
    SetMapSoundState(3603001, Enabled);
    WaitFor(
        !(PlayerStandingOnHit(3604005)
            || PlayerStandingOnHit(3604007)
            || PlayerStandingOnHit(3604012)
            || PlayerStandingOnHit(3604021)
            || PlayerStandingOnHit(3604023)
            || PlayerStandingOnHit(3604026)
            || PlayerStandingOnHit(3604027)
            || PlayerStandingOnHit(3604028)
            || PlayerStandingOnHit(3604029)
            || PlayerStandingOnHit(3604030)
            || PlayerStandingOnHit(3604031)
            || PlayerStandingOnHit(3604032)
            || PlayerStandingOnHit(3604033)
            || PlayerStandingOnHit(3604034)
            || PlayerStandingOnHit(3604035)
            || PlayerStandingOnHit(3604060)));
    RestartEvent();
});

// Fishing village_clock face control
$Event(13601090, Default, function() {
    EndIf(EventFlag(9468));
    DeactivateObject(3601090, Disabled);
    WaitFor(EventFlag(9468));
    DeactivateObject(3601090, Enabled);
});

// Fishing village_SC elevator 0_Initialization
$Event(13601100, Default, function() {
    EndIf(EventFlag(13604100));
    GotoIf(L0, EventFlag(13601108));
    SetEventFlag(13601106, ON);
    SetEventFlag(13601107, ON);
    ReproduceObjectAnimation(3601100, 0);
    SetObjactState(3601101, 100, Disabled);
    SetObjactState(3601102, 100, Disabled);
    Goto(L2);
L0:
    if (!EventFlag(13601106)) {
        SetEventFlag(13601107, OFF);
        ReproduceObjectAnimation(3601100, 4);
        SetObjactState(3601101, 100, Enabled);
        SetObjactState(3601102, 100, Disabled);
        EndEvent();
    }
L1:
    SetEventFlag(13601107, ON);
    ReproduceObjectAnimation(3601100, 0);
    SetObjactState(3601101, 100, Disabled);
    SetObjactState(3601102, 100, Enabled);
});

// Fishing village_SC elevator 0_Host state management
$Event(13601101, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13601108) && EventFlag(13604100));
    if (!EventFlag(13601106)) {
        SetEventFlag(13601107, OFF);
    } else {
        SetEventFlag(13601107, ON);
    }
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13601108) && !EventFlag(13604100));
    RestartEvent();
});

// Fishing Village_SC Elevator 0_Go up
$Event(13601102, Default, function() {
    if (EventFlag(13604100) && EventFlag(13601106)) {
        SetObjactState(3601101, 100, Disabled);
        SetObjactState(3601102, 100, Disabled);
        ReproduceObjectAnimation(3601100, 6);
    } else {
L0:
        WaitFor(
            EventFlag(13601108)
                && !EventFlag(13604100)
                && !EventFlag(13601106)
                && (InArea(10000, 3602102)
                    || ObjActEventFlag(13604101)
                    || (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 13601107) && EventFlag(13601107))));
        SetEventFlag(13604100, ON);
        SetEventFlag(13601106, ON);
        SetObjactState(3601101, 100, Disabled);
        SetObjactState(3601102, 100, Disabled);
        ForceAnimationPlayback(3601100, 5, false, true, false);
        ForceAnimationPlayback(3601100, 6, false, true, false);
    }
L1:
    WaitFor(!AllPlayersInArea(3602101));
    ForceAnimationPlayback(3601100, 7, false, true, false);
    SetEventFlag(13604100, OFF);
    SetObjactState(3601101, 100, Disabled);
    SetObjactState(3601102, 100, Enabled);
    RestartEvent();
});

// Fishing village_SC elevator 0_goes down
$Event(13601103, Default, function() {
    if (EventFlag(13604100) && !EventFlag(13601106)) {
        SetObjactState(3601101, 100, Disabled);
        SetObjactState(3601102, 100, Disabled);
        ReproduceObjectAnimation(3601100, 2);
    } else {
L0:
        WaitFor(
            EventFlag(13601108)
                && !EventFlag(13604100)
                && EventFlag(13601106)
                && (InArea(10000, 3602101)
                    || ObjActEventFlag(13604102)
                    || (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 13601107) && !EventFlag(13601107))));
        SetEventFlag(13604100, ON);
        SetEventFlag(13601106, OFF);
        SetObjactState(3601101, 100, Disabled);
        SetObjactState(3601102, 100, Disabled);
        ForceAnimationPlayback(3601100, 1, false, true, false);
        ForceAnimationPlayback(3601100, 2, false, true, false);
    }
L1:
    WaitFor(!AllPlayersInArea(3602102));
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(3601100, 3, false, true, false);
    SetEventFlag(13604100, OFF);
    SetObjactState(3601101, 100, Enabled);
    SetObjactState(3601102, 100, Disabled);
    RestartEvent();
});

// Fishing village_SC elevator 0_Call lever cannot be operated
$Event(13601104, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(13601108) && ActionButtonInArea(7100, 3601101))
            || (!EventFlag(13601108) && ActionButtonInArea(7100, 3601102))
            || (EventFlag(13604100) && ActionButtonInArea(7100, 3601101))
            || (EventFlag(13604100) && ActionButtonInArea(7100, 3601102))
            || (EventFlag(13601106) && ActionButtonInArea(7100, 3601101))
            || (!EventFlag(13601106) && ActionButtonInArea(7100, 3601102)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// Fishing village_SC elevator 0_first activation
$Event(13601105, Default, function() {
    EndIf(EventFlag(13601108));
    WaitFor(InArea(10000, 3602100));
    SetObjactState(3601101, 100, Disabled);
    SetObjactState(3601102, 100, Enabled);
    SetEventFlag(13601108, ON);
});

// Fishing village_Bridge shakes_XX
$Event(13601140, Default, function(X0_4, X4_4) {
    WaitFor(PlayerMovingOnHit(X4_4));
    ForceAnimationPlayback(X0_4, 0, false, true, false);
    RestartEvent();
});

// Fishing village_Open the door_XX
$Event(13601200, Default, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, X8_4);
        SetObjactState(X0_4, X12_4, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    WaitFixedTimeSeconds(0);
});

// Fishing village_SC ladder
$Event(13601312, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(3601305, 1);
        WaitFixedTimeFrames(1);
        RegisterLadder(13601310, 13601311, 3601305);
        EndEvent();
    }
L0:
    WaitFor(ActionButtonInArea(3600000, 3601305));
    IssueShortWarpRequest(10000, TargetEntityType.Object, 3601305, 192);
    ForceAnimationPlayback(10000, 101330, false, false, false);
    ForceAnimationPlayback(3601305, 1, false, true, false);
    RegisterLadder(13601310, 13601311, 3601305);
});

// Msg_XX when examining the fishing village_door
$Event(13601210, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(X8_4));
    act = ActionButtonInArea(X0_4, X4_4);
    flag = EventFlag(X8_4);
    WaitFor(act || flag);
    EndIf(flag.Passed);
    DisplayGenericDialog(10010161, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// Fishing village_clock tower light shaft deleted
$Event(13601400, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(PlayerInMap(36, 0));
    DeleteMapSFX(3503120, true);
});

// Fishing village_Slug flame pot_XX
$Event(13604400, Restart, function(X0_4) {
    EndIf(ThisEventSlot());
    RequestObjectRestoration(X0_4);
    dmg = HasDamageType(X0_4, -1, DamageType.Fire) || HasDamageType(X0_4, -1, DamageType.None);
    WaitFor(
        dmg
            || ((HasDamageType(X0_4, -1, DamageType.Magic)
                || HasDamageType(X0_4, -1, DamageType.Lightning)
                || HasDamageType(X0_4, -1, DamageType.Blunt)
                || HasDamageType(X0_4, -1, DamageType.Slash)
                || HasDamageType(X0_4, -1, DamageType.Thrust))
                && ObjectHP(X0_4) <= 999));
    if (!dmg.Passed) {
        ShootBullet(3600799, X0_4, -1, 6310, 0, 0, 0);
        RequestObjectDestruction(X0_4, 1);
        PlaySE(X0_4, SoundType.oObject, 299961000);
        EndEvent();
    }
L0:
    ShootBullet(3600799, X0_4, -1, 6310, 0, 0, 0);
    ShootBullet(3600799, X0_4, -1, 6320, 0, 0, 0);
    RequestObjectDestruction(X0_4, 1);
    PlaySE(X0_4, SoundType.oObject, 299961000);
});

// Last boss_defeat the boss
$Event(13601800, Default, function() {
    if (ThisEvent()) {
        ChangeCharacterEnableState(3600800, Disabled);
        ChangeCharacterEnableState(3600801, Disabled);
        ForceCharacterDeath(3600800, false);
        ForceCharacterDeath(3600801, false);
        DeactivateObject(3601800, Disabled);
        DeleteMapSFX(3603800, true);
        EndEvent();
    }
L0:
    chr = CharacterDead(3600800);
    chr2 = CharacterDead(3600801);
    if (EventFlag(orphan_defeat+15)) {
        WaitFor(chr && chr2);
    }
    else {
        WaitFor(chr || chr2);
    }
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(3601800, Disabled);
    DeactivateObject(3601801, Disabled);
    DeleteMapSFX(3603800, true);
    DeleteMapSFX(3603801, true);
    SetLockcamSlotNumber(36, 0, 0);
    WaitFixedTimeSeconds(3);
    if (EventFlag(orphan_defeat+15)) {
        AwardItemLot(17030);
    }
    else if (EventFlag(orphan_defeat+13)) {
        AwardItemLot(17020);
    }
    if (!chr2.Passed) {
        HandleBossDefeat(3600800);
    } else {
        HandleBossDefeat(3600801);
    }
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        AwardAchievement(35);
        InitializeEvent(0, 9350, 5);
        if (!EventFlag(orphan_defeat+13)) {
            AwardItemLot(3601800);
        }
        SetEventFlag(3600, ON);
        EndTimeMeasurement(9360000);
        EndTimeMeasurement(9360001);
        EndTimeMeasurement(9360010);
        CreatePlaylog(0);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 12, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 12, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 12, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 12, PlayLogMultiplayerType.HostOnly);
        if (EventFlag(orphan_defeat+13)) {
            InitializeEvent(orphan_offset, 7800, orphan_lamp_id+1000, 836000);
        }
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// Last boss_Host enters boss room_First battle
$Event(13604811, Default, function() {
    EndIf(EventFlag(13601800));
    EndIf(EventFlag(13601801));
    ChangeCharacterEnableState(3600800, Disabled);
    WaitFor(
        !EventFlag(13601800) && !EventFlag(13601801) && CharacterType(10000, TargetType.Alive) && InArea(10000, 3602805));
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        IssueBossRoomEntryNotification(0);
    }
    SetEventFlag(13604810, ON);
    EndIf(CharacterType(10000, TargetType.BlackPhantom));
    DeleteMapSFX(3603860, true);
    SetEventFlag(9180, ON);
});

// Last boss_Host enters boss room_First battle_Second half
$Event(13601801, Default, function() {
    EndIf(EventFlag(13601800));
    EndIf(ThisEvent());
    if (!CharacterType(10000, TargetType.BlackPhantom)) {
        WaitFor(
            !EventFlag(13601800)
                && !ThisEvent()
                && EventFlag(13604811)
                && CharacterType(10000, TargetType.Alive)
                && InArea(10000, 3602805));
        if (!EventFlag(orphan_defeat+13) || EventFlag(12100866)) {
            if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
                PlayCutsceneToPlayer(36000000, CutscenePlayMode.Skippable, 10000);
            } else {
                PlayCutsceneToPlayer(36000000, CutscenePlayMode.Unskippable, 10000);
            }
        }
        WaitFixedTimeFrames(1);
        SetEventFlag(9180, OFF);
        SpawnMapSFX(3603860);
        SetEventFlag(13604808, ON);
        ChangeCharacterEnableState(3600800, Enabled);
        EndIf(EventFlag(9347));
        InitializeEvent(0, 9350, 5);
        SetEventFlag(9347, ON);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(6001));
    WaitFixedTimeSeconds(0);
});

// Last boss_Black Nyoro_appears
$Event(13601802, Default, function() {
    SetCharacterAIState(3600802, Disabled);
    SetCharacterHPBarDisplay(3600802, Disabled);
    SetCharacterGravity(3600802, Disabled);
    WaitFor(CharacterBackreadStatus(3600802));
    IssueShortWarpRequest(3600802, TargetEntityType.Object, 3601802, 100);
    ForceAnimationPlayback(3600802, 7000, true, false, false);
    EndIf(EventFlag(13601803));
    if (ThisEvent()) {
        ForceAnimationPlayback(3600802, 0, true, false, false);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(13601800));
    ForceAnimationPlayback(3600802, 7001, false, false, false);
});

// Last boss_Kuronyoro_murder
$Event(13601803, Default, function() {
    if (EventFlag(12100856)) {
        BatchSetEventFlags(13605000, 13605001, OFF);
        RandomlySetEventFlagInRange(13605000, 13605001, ON);
        WaitFixedTimeFrames(1);
    }
    if (!ThisEvent()) {
        if (EventFlag(12100956)) {
            DeactivateObject(3601811, Disabled);
        }
        else {
            if (EventFlag(13605000)) {
                DeactivateObject(3601811, Disabled);
            }
            else {
                DeactivateObject(3601810, Disabled);
                DeactivateObject(3601811, Enabled);
            }
        }
        WaitFor(CharacterDead(3600802));
        DisplayBanner(TextBannerType.StadiumDraw);
        WaitFixedTimeSeconds(5);
        EndIf(!CharacterType(10000, TargetType.Alive));
    }
L0:
    SetMapSoundState(3603000, Disabled);
    SetMapSoundState(3603001, Disabled);
    DeleteMapSFX(3603810, true);
    DeleteMapSFX(3603811, true);
    DeleteMapSFX(3603812, true);
    DeleteMapSFX(3603813, true);
    DeleteMapSFX(3603814, true);
    DeleteMapSFX(3603815, true);
    DeleteMapSFX(3603816, true);
    DeleteMapSFX(3603817, true);
    DeleteMapSFX(3603818, true);
    DeleteMapSFX(3603819, true);
    DeleteMapSFX(3603820, true);
    DeleteMapSFX(3603821, true);
    DeleteMapSFX(3603822, true);
    DeleteMapSFX(3603823, true);
    DeleteMapSFX(3603824, true);
    DeleteMapSFX(3603825, true);
    DeleteMapSFX(3603826, true);
    DeleteMapSFX(3603827, true);
    DeleteMapSFX(3603828, true);
    DeleteMapSFX(3603829, true);
    DeleteMapSFX(3603830, true);
    DeleteMapSFX(3603831, true);
    DeleteMapSFX(3603832, true);
    DeleteMapSFX(3603840, true);
    DeleteMapSFX(3603841, true);
    DeleteMapSFX(3603842, true);
    DeleteMapSFX(3603843, true);
    DeleteMapSFX(3603844, true);
    DeleteMapSFX(3603845, true);
    DeleteMapSFX(3603846, true);
    DeleteMapSFX(3603847, true);
    DeleteMapSFX(3603848, true);
    DeleteMapSFX(3603849, true);
    DeleteMapSFX(3603850, true);
    DeleteMapSFX(3603851, true);
    DeleteMapSFX(3603852, true);
    DeleteMapSFX(3603860, true);
    DeleteMapSFX(3603870, true);
    DeleteMapSFX(3603871, true);
    DeleteMapSFX(3603872, true);
    DeleteMapSFX(3603873, true);
    DeleteMapSFX(3603874, true);
    if (EventFlag(12100956)) {
        if (ThisEvent()) {
            DeactivateObject(3601810, Disabled);
            DeactivateObject(3601811, Enabled);
        }
    }
    else {
        if (EventFlag(13605000)) {
            DeactivateObject(3601811, Disabled);
        }
        else {
            DeactivateObject(3601810, Disabled);
            DeactivateObject(3601811, Enabled);
        }
    }
    EndIf(ThisEvent());
    SetEventFlag(9180, ON);
    PlayCutsceneToPlayer(36000010, CutscenePlayMode.Skippable, 10000);
    WaitFixedTimeFrames(1);
    if (EventFlag(12100956)) {
        DeactivateObject(3601810, Disabled);
        DeactivateObject(3601811, Enabled);
    }
    SetEventFlag(9180, OFF);
    SetEventFlag(9469, ON);
    InitializeEvent(0, 9350, 3);
});

// Last boss __ Countermeasures for guests entering at different times
$Event(13601804, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13604808));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    ChangeCharacterEnableState(3600800, Enabled);
    SetEventFlag(13604808, ON);
    SetEventFlag(13601801, ON);
});

// Last boss_Host enters boss room_Rematch
$Event(13604800, Default, function() {
    EndIf(EventFlag(13601800));
    if (!EventFlag(13601801)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(3601800, Disabled);
            DeleteMapSFX(3603800, false);
        }
        WaitFor(!EventFlag(13601800) && EventFlag(13601801));
        DeactivateObject(3601800, Enabled);
        DeactivateObject(3601801, Enabled);
        SpawnMapSFX(3603800);
        SpawnMapSFX(3603801);
    }
L0:
    flagChrAct = !EventFlag(13601800) && CharacterType(10000, TargetType.Alive) && ActionButtonInArea(3600800, 3601800);
    flag = EventFlag(13601800);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 3602800, 101130, true);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 3602801);
    chr = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(13604808, ON);
    }
    RestartEvent();
});

// Last boss_Guest enters boss room
$Event(13604801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13601800));
    WaitFor(
        !EventFlag(13601800)
            && EventFlag(13601801)
            && EventFlag(13604808)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(3600800, 3601800));
    RotateCharacter(10000, 3602800, 101130, true);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 3602801);
    cond = ElapsedSeconds(2);
    WaitFor(chrArea || cond);
    if (!cond.Passed) {
        SetEventFlag(13604809, ON);
    }
    RestartEvent();
});

// Last boss_The boss starts moving
$Event(13604802, Default, function() {
    EndIf(EventFlag(13601800));
    SetCharacterAIState(3600800, Disabled);
    SetCharacterAIState(3600801, Disabled);
    SetCharacterHPBarDisplay(3600800, Disabled);
    SetCharacterHPBarDisplay(3600801, Disabled);
    if (!EventFlag(orphan_defeat+15)) {
        CreateReferredDamagePair(3600800, 3600801);
    }
    if (!ThisEvent()) {
        WaitFor(EventFlag(13604808) || EventFlag(orphan_defeat+13));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!EventFlag(13604810)) {
                IssueBossRoomEntryNotification(0);
            }
            SetNetworkUpdateAuthority(3600800, AuthorityLevel.Forced);
            SetNetworkUpdateAuthority(3600801, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(13604810, ON);
    SetEventFlag(13604808, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(3600800, 7500, true);
    SetSpEffect(3600801, 7500, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3600800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3600801);
    Goto(L4);
L3:
    SetSpEffect(3600800, 7501, true);
    SetSpEffect(3600801, 7501, true);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3600800);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3600801);
    Goto(L4);
L4:
    if (EventFlag(orphan_defeat+13)) {
        WaitFixedTimeSeconds(2);
    }
    if (EventFlag(orphan_defeat+15)) {
        DisplayBossHealthBar(Enabled, 3600800, 1, 453000);
        DisplayBossHealthBar(Enabled, 3600801, 0, 454000);
    }
    else {
        DisplayBossHealthBar(Enabled, 3600801, 0, 453000);
    }
    SetEventFlag(13604812, ON);
    if (!ThisEvent()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                && (EntityInRadiusOfEntity(10000, 3600800, 24) || HasDamageType(3600800, -1, DamageType.Unspecified)));
    }
L5:
    if (EventFlag(orphan_defeat+15)) {
        SetCharacterAIState(3600800, Enabled);
        SetNetworkUpdateRate(3600800, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetNetworkUpdateRate(3600801, true, CharacterUpdateFrequency.AlwaysUpdate);
        SetCharacterGravity(3600801, Enabled);
        WarpCharacterAndCopyFloor(3600801, TargetEntityType.Character, 3600800, 203, 3600800);
        ClearSpEffect(3600801, 5300);
        SetSpEffect(3600801, 5333, false);
        SetCharacterAIState(3600801, Enabled);
    }
    else {
        if (!EventFlag(13604820)) {
            SetCharacterAIState(3600800, Enabled);
            SetNetworkUpdateRate(3600800, true, CharacterUpdateFrequency.AlwaysUpdate);
            SetNetworkUpdateRate(3600801, true, CharacterUpdateFrequency.AlwaysUpdate);
        } else {
            SetCharacterAIState(3600801, Enabled);
            SetNetworkUpdateRate(3600800, true, CharacterUpdateFrequency.NoUpdate);
            SetNetworkUpdateRate(3600801, true, CharacterUpdateFrequency.AlwaysUpdate);
        }
    }
    CreatePlaylog(42);
    StartTimeMeasurement(3600010, 58, Enabled);
});

// Last boss_Boss BGM_ON
$Event(13604803, Default, function() {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(3603802, Disabled);
    SetMapSoundState(3603803, Disabled);
    EndIf(EventFlag(13601800));
    if (!ThisEvent()) {
        flagArea &= !EventFlag(13601800) && EventFlag(13604812);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(13604809);
        }
        flagArea &= InArea(10000, 3602802);
        WaitFor(flagArea);
        EnableBossMapSound(3603802, Enabled);
        flagArea2 &= EventFlag(13604820);
    }
L0:
    flagArea2 &= !EventFlag(13601800) && EventFlag(13604812);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(13604809);
    }
    flagArea2 &= InArea(10000, 3602802);
    WaitFor(flagArea2);
    EnableBossMapSound(3603802, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(3603803, Enabled);
});

// Last boss_Boss camera
$Event(13604804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13601800));
    if (!EventFlag(13604820)) {
        WaitFor(!CharacterDead(3600800) && EntityInRadiusOfEntity(10000, 3600800, 12));
        SetLockcamSlotNumber(34, 0, 1);
        WaitFor(!CharacterDead(3600800) && !EntityInRadiusOfEntity(10000, 3600800, 12.5));
        SetLockcamSlotNumber(36, 0, 0);
        RestartEvent();
    }
L0:
    WaitFor(!CharacterDead(3600800) && EntityInRadiusOfEntity(10000, 3600801, 12));
    SetLockcamSlotNumber(34, 0, 1);
    WaitFor(!CharacterDead(3600800) && !EntityInRadiusOfEntity(10000, 3600801, 12.5));
    SetLockcamSlotNumber(36, 0, 0);
    RestartEvent();
});

// Last boss_Boss BGM_OFF
$Event(13604805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13601800));
    WaitFor(EventFlag(13601800));
    EnableBossMapSound(3603802, Disabled);
    EnableBossMapSound(3603803, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Last boss_Disabled around fog wall in other people's world
$Event(13604806, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 3601800, 6));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Last boss_Invalidity due to fog wall in other people's world 2
$Event(13604807, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 3601800, 6)
            && EntityInRadiusOfEntity(10000, 3601800, 12));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Last boss_Heat up
$Event(13604820, Default, function() {
    EndIf(EventFlag(13601800) || EventFlag(orphan_defeat+15));
    if (ThisEvent()) {
        ChangeCharacterEnableState(3600800, Disabled);
        EndEvent();
    }
L0:
    SetCharacterGravity(3600801, Disabled);
    WaitFor(HPRatio(3600800) < 0.5);
    RequestCharacterAICommand(3600800, 100, 0);
    RequestCharacterAIReplan(3600800);
    WaitFor(CharacterHasEventMessage(3600800, 100));
    ChangeCharacterEnableState(3600800, Disabled);
    SetNetworkUpdateRate(3600800, true, CharacterUpdateFrequency.NoUpdate);
    SetNetworkUpdateRate(3600801, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterGravity(3600801, Enabled);
    WarpCharacterAndCopyFloor(3600801, TargetEntityType.Character, 3600800, 203, 3600800);
    ForceAnimationPlayback(3600801, 3031, false, false, false);
    WaitFor(CharacterHasEventMessage(3600801, 50));
    ClearSpEffect(3600801, 5300);
    SetSpEffect(3600801, 5333, false);
    SetCharacterAIState(3600801, Enabled);
});

// Last boss_funnel launch
$Event(13604830, Default, function() {
    EndIf(EventFlag(13601800));
    WaitFor(CharacterHasEventMessage(3600801, 100));
    RequestCharacterAICommand(3600803, 10, 0);
    RequestCharacterAIReplan(3600803);
    WaitFor(CharacterHasSpEffect(3600803, 5020));
    RequestCharacterAICommand(3600803, 20, 0);
    RequestCharacterAIReplan(3600803);
    WaitFor(CharacterHasEventMessage(3600803, 10));
    RequestCharacterAICommand(3600803, -1, 0);
    ClearSpEffect(3600803, 5020);
    RequestCharacterAIReplan(3600803);
    RestartEvent();
});

// Last boss_grip
$Event(13604840, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13601800));
    WaitFor(CharacterHasEventMessage(3600800, 30) && CharacterHasSpEffect(10000, 8055));
    SetSpEffect(10000, 8054, false);
    WaitFor(
        CharacterHasEventMessage(3600800, 40) || ElapsedSeconds(4.5) || !EntityInRadiusOfEntity(3600800, 10000, 20));
    ClearSpEffect(10000, 8054);
    RestartEvent();
});

// Last boss_camera switch when jumping
$Event(13604850, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13601800));
    WaitFor(CharacterHasSpEffect(3600801, 5036));
    SetLockcamSlotNumber(36, 0, 1);
    WaitFor(!CharacterHasSpEffect(3600801, 5036));
    SetLockcamSlotNumber(36, 0, 0);
    RestartEvent();
});

// Fishing village_Enemy patrol begins_XX
$Event(13605200, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!ThisEventSlot()) {
        WaitFor(
            (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                && (InArea(10000, X4_4) || InArea(10000, X8_4)));
        WaitFixedTimeSeconds(X16_4);
    }
L0:
    if (X20_4 != 0) {
        SetSpEffect(X0_4, 5000, false);
    }
    ChangeCharacterPatrolBehavior(X0_4, X12_4);
    RequestCharacterAIReplan(X0_4);
});

// Fishing village_Enemy special standby_XX
$Event(13605400, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(X0_4, X4_4, true, false, false);
        SetCharacterAIId(X0_4, X8_4);
        WaitFor(
            CharacterAIState(X0_4, AIStateType.Recognition)
                || CharacterAIState(X0_4, AIStateType.Combat)
                || ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                    && InArea(10000, X20_4)));
        WaitRandomTimeSeconds(X24_4, X28_4);
        RotateCharacter(X0_4, 10000, X12_4, false);
    }
L0:
    SetCharacterAIId(X0_4, X16_4);
});

// Fishing village_Enemy special standby_Logic invalid_XX
$Event(13605480, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (!ThisEventSlot()) {
        SetCharacterAIState(X0_4, Disabled);
        ForceAnimationPlayback(X0_4, X4_4, true, false, false);
        SetCharacterAIId(X0_4, X8_4);
        WaitFor(
            CharacterAIState(X0_4, AIStateType.Recognition)
                || CharacterAIState(X0_4, AIStateType.Combat)
                || ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                    && InArea(10000, X20_4)));
        WaitFixedTimeSeconds(X24_4);
        RotateCharacter(X0_4, 10000, X12_4, false);
        WaitFixedTimeFrames(X28_4);
    }
L0:
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterAIId(X0_4, X16_4);
});

// Fishing village_Enemy special standby_Group_XX
$Event(13605490, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(X0_4, X4_4, true, false, false);
        SetCharacterAIId(X0_4, X8_4);
        WaitFor(
            CharacterAIState(X0_4, AIStateType.Recognition)
                || CharacterAIState(X0_4, AIStateType.Combat)
                || CharacterAIState(X20_4, AIStateType.Recognition)
                || CharacterAIState(X20_4, AIStateType.Combat)
                || ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                    && EntityInRadiusOfEntity(10000, X0_4, 4)));
        WaitRandomTimeSeconds(X24_4, X28_4);
        RotateCharacter(X0_4, 10000, X12_4, false);
    }
L0:
    SetCharacterAIId(X0_4, X16_4);
});

// Fishing village_Enemy special standby_Disabled per map_XX
$Event(13605500, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    if (!ThisEventSlot()) {
        SetCharacterGravity(X0_4, Disabled);
        SetCharacterMaphits(X0_4, true);
        ForceAnimationPlayback(X0_4, X4_4, true, false, false);
        SetCharacterAIId(X0_4, X8_4);
        WaitFor(
            CharacterAIState(X0_4, AIStateType.Recognition)
                || CharacterAIState(X0_4, AIStateType.Combat)
                || ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                    && InArea(10000, X20_4)));
        WaitRandomTimeSeconds(X24_4, X28_4);
        RotateCharacter(X0_4, 10000, X12_4, false);
        SetCharacterGravity(X0_4, Enabled);
        SetCharacterMaphits(X0_4, false);
    }
L0:
    SetCharacterAIId(X0_4, X16_4);
});

// Fishing village_Enemy thought ID switching_XX
$Event(13605520, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(AllPlayersInArea(X4_4));
    SetCharacterAIId(X0_4, X8_4);
    WaitFor(!AllPlayersInArea(X4_4));
    SetCharacterAIId(X0_4, X12_4);
    RestartEvent();
});

// Fishing Village_Enemy Thought ID Switch_Area or Distance_XX
$Event(13605540, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (!ThisEventSlot()) {
        SetCharacterAIId(X0_4, X12_4);
        WaitFor(
            InArea(X0_4, X4_4)
                || ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                    && EntityInRadiusOfEntity(10000, X0_4, X8_4)));
    }
L0:
    SetCharacterAIId(X0_4, X16_4);
});

// Fishing Village_Enemy Logic ON_XX
$Event(13605560, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && (InArea(10000, X4_4) || EntityInRadiusOfEntity(10000, X0_4, X8_4)))
            || HasDamageType(X0_4, -1, DamageType.Unspecified));
    SetCharacterAIState(X0_4, Enabled);
});

// Fishing village_Hoozuki_Bullet dummy character connection_XX
$Event(13605600, Restart, function(X0_4, X4_4) {
    SetCharacterGravity(X4_4, Disabled);
    if (!ThisEventSlot()) {
        WaitFor(CharacterBackreadStatus(X0_4));
        WaitFixedTimeSeconds(1);
    }
    if (HPRatio(X0_4) <= 0) {
        SetCharacterBackreadState(X4_4, true);
        EndEvent();
    }
    WarpCharacterAndSetFloor(X4_4, TargetEntityType.Character, X0_4, 100, X0_4);
    RestartEvent();
});

// Fishing Village_Hozuki_Bullet Damage 1
$Event(13605605, Restart, function() {
    SetNetworkSyncState(Disabled);
    if (!CharacterHasSpEffect(10000, 4691)) {
        WaitFor(CharacterHasSpEffect(10000, 4690));
        WaitFixedTimeSeconds(2);
        sp = CharacterHasSpEffect(10000, 4690);
        sp2 = !CharacterHasSpEffect(10000, 4690);
        WaitFor(sp || sp2);
        RestartIf(sp2.Passed);
    }
L0:
    SetSpEffectAndUnknown200455(10000, 4691, false);
    RestartEvent();
});

// Fishing Village_Hozuki_Bullet Damage 2
$Event(13605606, Restart, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(!CharacterHasSpEffect(10000, 4690) && CharacterHasSpEffect(10000, 4691));
    ClearSpEffect(10000, 4691);
    RestartEvent();
});

// Fishing Village_Order_XX
$Event(13605700, Restart, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(X8_4)) {
        SetEventFlag(X8_4, OFF);
        WaitFor(CharacterAIState(X0_4, AIStateType.Recognition) || CharacterAIState(X0_4, AIStateType.Combat));
        SetEventFlag(X8_4, ON);
        RotateCharacter(X0_4, 10000, X4_4, true);
    }
L0:
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal));
    RestartEvent();
});

// Fishing village_order_AI sound_XX
$Event(13605720, Restart, function(X0_4) {
    WaitFor(CharacterHasEventMessage(X0_4, 100));
    WarpObjectToCharacter(3601799, 10000, -1);
    WaitFixedTimeFrames(1);
    ShootBullet(3600799, 3601799, 200, 6300, 0, 0, 0);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Fishing village_Water surface landing_AI sound_XX
$Event(13605730, Restart, function() {
    SetNetworkSyncState(Disabled);
    EndIf(CharacterType(10000, TargetType.BlackPhantom));
    WaitFor(InArea(10000, 3602798));
    WarpObjectToCharacter(3601798, 10000, -1);
    WaitFixedTimeFrames(1);
    ShootBullet(3600799, 3601798, 200, 6330, 0, 0, 0);
    WaitFor(!InArea(10000, 3602798));
    RestartEvent();
});

// Fishing Village_Fishman A sets fire to the slug flame jar_XX
$Event(13605740, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEvent());
    SetCharacterAIState(X0_4, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, X4_4);
    area2 = EntityInRadiusOfEntity(10000, X0_4, X12_4);
    WaitFor(chr && (area || area2));
    if (!area2.Passed) {
        SetCharacterEventTarget(X0_4, X8_4);
        RequestCharacterAICommand(X0_4, 100, 0);
    }
    SetCharacterAIState(X0_4, Enabled);
    WaitFixedTimeFrames(60);
    RequestCharacterAICommand(X0_4, -1, 0);
});

// Fishing Village_First Fishman A
$Event(13605750, Restart, function() {
    if (!ThisEventSlot()) {
        SetCharacterGravity(3600201, Disabled);
        SetCharacterMaphits(3600201, true);
        ForceAnimationPlayback(3600201, 7006, true, false, false);
        SetCharacterAIId(3600201, 404003);
        chrArea |= CharacterAIState(3600201, AIStateType.Recognition) || CharacterAIState(3600201, AIStateType.Combat);
        chrArea2 &= CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
        if (!EventFlag(53600100)) {
            chrArea2 &= EntityInRadiusOfEntity(10000, 3600201, 12);
        } else {
            chrArea2 &= InArea(10000, 3602201);
        }
        chrArea |= chrArea2;
        WaitFor(chrArea);
        RotateCharacter(3600201, 10000, 7007, false);
        SetCharacterGravity(3600201, Enabled);
        SetCharacterMaphits(3600201, false);
    }
L0:
    SetCharacterAIId(3600201, 404000);
});

// Fishing Village_Fishman A turns around with Sokushinbutsu Vengeful Bullet
$Event(13605751, Restart, function() {
    WaitFor(CharacterHasEventMessage(3600330, 100));
    SetCharacterAIId(3600208, 404002);
    SetCharacterAIId(3600209, 404002);
    WarpObjectToCharacter(3601799, 10000, -1);
    WaitFixedTimeFrames(1);
    ShootBullet(3600799, 3601799, 200, 6300, 0, 0, 0);
});

// Fishing village_Fishman B escapes
$Event(13605752, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 3602315))
            || HasDamageType(3600315, -1, DamageType.Unspecified));
    SetCharacterHome(3600315, 3602316);
    RequestCharacterAICommand(3600315, 10, 0);
    RequestCharacterAIReplan(3600315);
    WaitFor(InArea(3600315, 3602316));
    RequestCharacterAICommand(3600315, -1, 0);
    RequestCharacterAIReplan(3600315);
});

// Fishing Village_Big Fishman Brothers_The younger brother runs away
$Event(13605760, Restart, function() {
    EndIf(ThisEvent());
    WaitFor(HPRatio(3600302) < 0.5);
    SetCharacterHome(3600302, 3602303);
    RequestCharacterAICommand(3600302, 10, 0);
    RequestCharacterAIReplan(3600302);
    WaitFor(InArea(3600302, 3602303));
    RequestCharacterAICommand(3600302, -1, 0);
    RequestCharacterAIReplan(3600302);
});

// Fishing Village_Big Fishman Brother_Brother appears
$Event(13605761, Restart, function() {
    EndIf(ThisEvent());
    SetCharacterAIState(3600303, Disabled);
    ForceAnimationPlayback(3600303, 7004, true, false, false);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 3602304)
            && HPRatio(3600302) < 0.5)
            || HPRatio(3600302) < 0.4
            || HasDamageType(3600303, -1, DamageType.Unspecified));
    ForceAnimationPlayback(3600303, 7005, false, false, false);
    SetCharacterAIState(3600303, Enabled);
});

// Fishing Village_Fishman Brothers_Defeated
$Event(13605762, Restart, function() {
    EndIf(EventFlag(53600800));
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(CharacterDead(3600302) && CharacterDead(3600303));
    AwardItemsIncludingClients(3601100);
});

// Fishing Village_Hermit Crab Falling_XX
$Event(13605770, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphits(X0_4, true);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, X4_4))
            || HasDamageType(X0_4, -1, DamageType.Unspecified));
    WaitRandomTimeSeconds(X8_4, X12_4);
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterGravity(X0_4, Enabled);
    SetCharacterMaphits(X0_4, false);
});

// Fishing village_Bullet owner created
$Event(13605799, Restart, function() {
    CreateBulletOwner(3600799);
});

// NPC assassin_start of omen_XX
$Event(13605900, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(1730));
    EndIf(EventFlag(X8_4));
    EndIf(EventFlag(X4_4));
    WaitFor(
        !EventFlag(1730)
            && !EventFlag(X4_4)
            && !EventFlag(X8_4)
            && !EventFlag(X20_4)
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, X12_4) || InArea(10000, X16_4)));
    SetEventFlag(X0_4, ON);
});

// NPC killer_Omen continued_XX
$Event(13605910, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(1730));
    EndIf(EventFlag(X8_4));
    EndIf(EventFlag(X4_4));
    WaitFor(
        !EventFlag(1730)
            && !EventFlag(X4_4)
            && !EventFlag(X8_4)
            && EventFlag(X0_4)
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, X12_4) || InArea(10000, X16_4)));
    PlaySE(10000, SoundType.sSFX, 10306);
    WaitRandomTimeSeconds(2, 4);
    RestartEvent();
});

// NPC killer_appearance_XX
$Event(13605920, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    RequestCharacterAICommand(X0_4, 30, 0);
    RequestCharacterAIReplan(X0_4);
    SetCharacterInvincibility(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetSpEffect(X0_4, 5560, false);
    EndIf(EventFlag(1730));
    EndIf(EventFlag(X8_4));
    if (!EventFlag(X4_4)) {
        WaitFor(
            !EventFlag(1730)
                && EventFlag(X20_4)
                && !EventFlag(X8_4)
                && CharacterType(10000, TargetType.Alive)
                && (InArea(10000, X12_4) || InArea(10000, X16_4)));
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, X28_4, -1);
        RequestCharacterAICommand(X0_4, -1, 0);
        RequestCharacterAIReplan(X0_4);
        SetCharacterInvincibility(X0_4, Disabled);
        SetCharacterAnimationState(X0_4, Enabled);
        ClearSpEffect(X0_4, 5560);
        SetSpEffect(X0_4, 8060, false);
        PlaySE(10000, SoundType.sSFX, 777777777);
        ForceAnimationPlayback(X0_4, 101203, false, false, false);
    }
L0:
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetCharacterInvincibility(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Enabled);
    ClearSpEffect(X0_4, 5560);
    SetEventFlag(X4_4, ON);
    SetEventFlag(X24_4, OFF);
    WaitFor(EventFlag(X24_4));
    RestartEvent();
});

// NPC assassin_appearance_01
$Event(13605921, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    RequestCharacterAICommand(X0_4, 30, 0);
    RequestCharacterAIReplan(X0_4);
    SetCharacterInvincibility(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetSpEffect(X0_4, 5560, false);
    EndIf(EventFlag(1730));
    EndIf(EventFlag(X8_4));
    if (!EventFlag(X4_4)) {
        area = InArea(10000, X12_4);
        area2 = InArea(10000, X16_4);
        WaitFor(
            !EventFlag(1730)
                && EventFlag(X20_4)
                && !EventFlag(X8_4)
                && CharacterType(10000, TargetType.Alive)
                && (area || area2));
        if (!area2.Passed) {
            WarpCharacterAndSetFloor(X0_4, TargetEntityType.Area, X28_4, -1, 3604027);
        } else {
            WarpCharacterAndSetFloor(X0_4, TargetEntityType.Area, 3602917, -1, 3604027);
        }
        RequestCharacterAICommand(X0_4, -1, 0);
        RequestCharacterAIReplan(X0_4);
        SetCharacterInvincibility(X0_4, Disabled);
        SetCharacterAnimationState(X0_4, Enabled);
        ClearSpEffect(X0_4, 5560);
        SetSpEffect(X0_4, 8060, false);
        PlaySE(10000, SoundType.sSFX, 777777777);
        ForceAnimationPlayback(X0_4, 101203, false, false, false);
    }
L0:
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetCharacterInvincibility(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Enabled);
    ClearSpEffect(X0_4, 5560);
    SetEventFlag(X4_4, ON);
    SetEventFlag(X24_4, OFF);
    WaitFor(EventFlag(X24_4));
    RestartEvent();
});

// NPC killer_forced return_XX
$Event(13605930, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(1730));
    EndIf(EventFlag(X8_4));
    WaitFor(
        EventFlag(X4_4)
            && HPRatio(X0_4) > 0
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, X12_4) || InArea(10000, X16_4)));
    RequestCharacterAICommand(X0_4, 30, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeSeconds(2);
    SetCharacterInvincibility(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetSpEffect(X0_4, 5560, false);
    ClearSpEffect(X0_4, 8060);
    ClearSpEffect(X0_4, 1130);
    ClearSpEffect(X0_4, 1150);
    PlaySE(10000, SoundType.sSFX, 122);
    WaitFixedTimeSeconds(4);
    SetEventFlag(X20_4, ON);
    SetEventFlag(X4_4, OFF);
    WaitFor(EventFlag(X4_4));
    RestartEvent();
});

// NPC killer_repulse_XX
$Event(13605940, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    SetCharacterBackreadState(X16_4, true);
    if (EventFlag(1730)) {
        ForceCharacterTreasure(X16_4);
        EndEvent();
    }
L0:
    EndIf(EventFlag(X8_4));
    WaitFor(EventFlag(X4_4) && CharacterDead(X0_4));
    ClearSpEffect(X0_4, 8060);
    ClearSpEffect(X0_4, 1130);
    ClearSpEffect(X0_4, 1150);
    PlaySE(10000, SoundType.sSFX, 122);
    SetEventFlag(X8_4, ON);
    if (CharacterType(10000, TargetType.Alive)) {
        AwardItemsIncludingClients(X12_4);
    }
});

// Conversation NPC general death judgment_XX
$Event(13600900, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(AnyBatchEventFlags(X4_4, X12_4));
    WaitFor(CharacterDead(X0_4));
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X16_4, ON);
    SaveRequest(0);
});

// Fishing Village Priest_Initialization
$Event(13600940, Default, function(X0_4) {
    if (CharacterType(10000, TargetType.Alive)) {
        BatchSetEventFlags(1770, 1789, OFF);
        SetEventFlag(1780, ON);
    }
L0:
    GotoIf(L0, EventFlag(1770));
    GotoIf(L1, EventFlag(1780));
    SetCharacterBackreadState(X0_4, true);
    ChangeCharacterEnableState(X0_4, Disabled);
    EndEvent();
L0:
L1:
    SetEventFlag(73600310, OFF);
    SetEventFlag(73600314, OFF);
    SetCharacterBackreadState(X0_4, false);
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterImmortality(X0_4, Enabled);
    SetDistanceLimitForConversationStateProcessing(X0_4, 35);
    EndEvent();
});

// Fishing village priest_Item acquisition_Fishing villager's exposed head
$Event(13600943, Default, function(X0_4, X4_4) {
    EndIf(EventFlag(X0_4));
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(X0_4));
    AwardItemLot(X4_4);
});

// Fishing Village Priest_Stop
$Event(13600941, Default, function(X0_4, X4_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(!EventFlag(X0_4) || EventFlag(X4_4));
    WaitFor(EventFlag(X0_4) && !EventFlag(X4_4));
    RestartEvent();
});

// Fishing Village Priest_Soliloquy Loop
$Event(13600942, Default, function(X0_4, X4_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(73600310));
    WaitRandomTimeSeconds(X0_4, X4_4);
    if (EventFlag(73600313)) {
        WaitFor(!EventFlag(73600314));
        SetEventFlag(73600313, OFF);
        RestartEvent();
    }
    SetEventFlag(73600310, OFF);
    RestartEvent();
});

// Automatic conversation control of the fishing village priest
$Event(13600944, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(73600318, OFF);
    WaitFor(InArea(10000, 3602941));
    SetEventFlag(73600318, ON);
    WaitFor(!InArea(10000, 3602941));
    RestartEvent();
});

// Secret Seeker_Initialization
$Event(13600950, Default, function(X0_4) {
    if (CharacterType(10000, TargetType.Alive)) {
        if (!AnyBatchEventFlags(1710, 1729)) {
            BatchSetEventFlags(1710, 1729, OFF);
            SetEventFlag(1720, ON);
        }
L0:
        if (AnyBatchEventFlags(1720, 1722) && EventFlag(73400403) && EventFlag(1650)) {
            BatchSetEventFlags(1710, 1729, OFF);
            SetEventFlag(1723, ON);
        }
L1:
        if (EventFlag(1722) && (EventFlag(1660) || EventFlag(1651)) && EventFlag(73500602)) {
            BatchSetEventFlags(1710, 1729, OFF);
            SetEventFlag(1723, ON);
        }
L2:
        if (EventFlag(1723) && EventFlag(73600501)) {
            BatchSetEventFlags(1710, 1729, OFF);
            SetEventFlag(1713, ON);
        }
L3:
        GotoIf(L4, AnyBatchEventFlags(1710, 1712));
        GotoIf(L4, EventFlag(1720));
        DeactivateObject(3600906, Disabled);
        SetObjectTreasureState(3600906, Disabled);
        Goto(L9);
L4:
        DeactivateObject(3600906, Enabled);
        SetObjectTreasureState(3600906, Enabled);
    } else {
L8:
        SetObjectTreasureState(3600906, Disabled);
        GotoIf(L5, AnyBatchEventFlags(1710, 1712));
        GotoIf(L5, EventFlag(1720));
        DeactivateObject(3600906, Disabled);
        Goto(L9);
L5:
        DeactivateObject(3600906, Enabled);
    }
L9:
    GotoIf(L0, EventFlag(1723));
    GotoIf(L1, EventFlag(1713));
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
L0:
    SetCharacterTeamType(X0_4, TeamType.Ally);
    ForceAnimationPlayback(X0_4, 103151, false, false, false);
    SetCharacterImmortality(X0_4, Enabled);
    EndEvent();
L1:
    SetCharacterAnimationState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 103157, false, false, true);
    EndEvent();
});

// Secret seeker_play animation during conversation
$Event(13600951, Default, function(X0_4, X4_4, X8_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(X4_4, OFF);
    WaitFor(EventFlag(X8_4) && EventFlag(X4_4) && HPRatio(X0_4) != 0);
    ForceAnimationPlayback(X0_4, 103152, false, false, false);
    WaitFor(EventFlag(X8_4) && !EventFlag(X4_4) && HPRatio(X0_4) != 0);
    ForceAnimationPlayback(X0_4, 103151, false, false, false);
    RestartEvent();
});

// Secret seeker_Death animation playback
$Event(13600952, Default, function(X0_4, X4_4, X8_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(X4_4) && HasDamageType(X0_4, 10000, DamageType.Unspecified));
    ForceAnimationPlayback(X0_4, 103153, false, false, false);
    ForceCharacterDeath(X0_4, true);
    SetEventFlag(X8_4, ON);
});

// Secret Seeker_Real-time initialization
$Event(13600953, Default, function(X0_4) {
    EndIf(!(EventFlag(1724) || AnyBatchEventFlags(1720, 1722)));
    WaitFor(EventFlag(1723));
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterBackreadState(X0_4, false);
    ForceAnimationPlayback(X0_4, 103151, false, false, false);
    SetCharacterImmortality(X0_4, Enabled);
    DeactivateObject(3600906, Disabled);
    SetObjectTreasureState(3600906, Disabled);
});

// Secret seeker_obtaining items upon death_fishing village_XX
$Event(13600954, Default, function(X0_4, X4_4, X8_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(X0_4)) {
        if (EventFlag(X4_4)) {
            EndEvent();
        }
L1:
        SetEventFlag(X4_4, ON);
    }
L0:
    WaitFor(EventFlag(X4_4) && CharacterDead(3600905));
    AwardItemLot(X8_4);
});

// Exploring secrets_Automatic conversation
$Event(13600955, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(1723) && !EventFlag(73600502));
    SetEventFlag(73600500, ON);
    WaitFor(InArea(10000, 3602850));
    SetEventFlag(73600500, OFF);
    SetEventFlag(73600502, ON);
});

// Secret seeker_Conversation Death
$Event(13600956, Default, function(X0_4, X4_4, X8_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(X8_4, OFF);
    WaitFor(EventFlag(X4_4) && EventFlag(X8_4));
    SetEventFlag(X8_4, OFF);
    ForceCharacterDeath(X0_4, false);
    SetEventFlag(73600530, ON);
    ForceAnimationPlayback(X0_4, 103156, false, true, true);
    ForceAnimationPlayback(X0_4, 103157, false, false, true);
});

// NPC assassin_move
$Event(13600995, Default, function() {
    EndIf(ThisEvent());
    WaitFor(EventFlag(13605952));
    SetEventFlag(13605940, OFF);
});

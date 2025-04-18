// ==EMEVD==
// @docs    bb-common.emedf.json
// @compress    DCX_DFLT_10000_44_9
// @game    Bloodborne
// @string    "ボス撃破_女性ハンター\u0000PC情報_ボス撃破_女性ハンター\u0000ボス_戦闘開始\u0000ボス_撃破時間\u0000ボス撃破_患者B\u0000PC情報_ボス撃破_患者B\u0000ボス戦闘開始_患者B\u0000ボス撃破時間_患者B\u0000N:\\SPRJ\\data\\Param\\event\\common.emevd\u0000"
// @linked    [180]
// @version    3.4.2
// ==/EMEVD==

const area_id = 35;
const block_id = 0;

const research_hall_lamp_offset = 60;
const research_hall_lamp_id = 3501950;
const research_hall_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10);

const living_failures_lamp_offset = 61;
const living_failures_offset = 19;
const living_failures_defeat = 13501850;
const living_failures_return = 3501859;
const living_failures_lamp_id = 3501951;
const living_failures_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 2;
const living_failures_region = 3502812;
const living_failures_id = 3500850;
    
const maria_lamp_offset = 62;
const maria_offset = 20;
const maria_defeat = 13501800;
const maria_lamp_id = 3501952;
const maria_lamp_kindle = 12110000 + (area_id * 100) + (block_id * 10) + 4;
const maria_region = 3502802;
const maria_id = 3500800;

// two elevators
// main thing?

// constructor
$Event(0, Default, function() {
    
    SetEventFlag(8900+living_failures_offset, OFF);
    SetEventFlag(8900+maria_offset, OFF);
    
    InitializeEvent(35, 7900, 10000000+living_failures_return, living_failures_return, area_id, block_id, 8500+research_hall_lamp_offset);
    
    InitializeEvent(research_hall_lamp_offset, 8500, 8500+research_hall_lamp_offset, research_hall_lamp_id, 72113838);
    InitializeEvent(living_failures_lamp_offset, 8500, 8500+living_failures_lamp_offset, living_failures_lamp_id, 72113939);
    InitializeEvent(maria_lamp_offset, 8500, 8500+maria_lamp_offset, maria_lamp_id, 72114040);
    
    InitializeEvent(research_hall_lamp_offset, 8100, 8100+research_hall_lamp_offset, research_hall_lamp_kindle);
    InitializeEvent(living_failures_lamp_offset, 8100, 8100+living_failures_lamp_offset, living_failures_lamp_kindle);
    InitializeEvent(maria_lamp_offset, 8100, 8100+maria_lamp_offset, maria_lamp_kindle);
    
    InitializeEvent(research_hall_lamp_offset, 8300, research_hall_lamp_id+2000, -1, research_hall_lamp_kindle, research_hall_lamp_id+6000, research_hall_lamp_id+3000);
    
    if(EventFlag(living_failures_defeat+13) && !EventFlag(living_failures_defeat-1)) {
        if (EventFlag(living_failures_defeat-2)) {
            SetEventFlag(living_failures_defeat-2, OFF);
            MoveBloodstainAndDroppedItems(living_failures_region, living_failures_lamp_id+4000);
        }
        SetEventFlag(living_failures_defeat+13, OFF);
        SetEventFlag(living_failures_defeat, ON);
        InitializeEvent(living_failures_lamp_offset, 8300, living_failures_lamp_id+2000, 999, living_failures_lamp_kindle, living_failures_lamp_id+6000, living_failures_lamp_id+3000);
        DummyPlayCutsceneAndWarpPlayer(living_failures_lamp_id+4000, area_id, block_id);
    }
    else if (EventFlag(living_failures_defeat+12) || EventFlag(living_failures_defeat-1)) {
        if (EventFlag(living_failures_defeat-2)) {
            SetEventFlag(living_failures_defeat-2, OFF);
            MoveBloodstainAndDroppedItems(living_failures_region, living_failures_lamp_id+5000);
        }
        SetEventFlag(living_failures_defeat, OFF);
        SetEventFlag(living_failures_defeat+1, OFF);
        SetEventFlag(living_failures_defeat+12, OFF);
        SetEventFlag(living_failures_defeat+13, ON);
        SetEventFlag(living_failures_defeat-1, OFF);
        SetEventFlag(8900+living_failures_offset, ON);
        InitializeEvent(living_failures_lamp_offset, 8300, living_failures_lamp_id+2000, -1, living_failures_lamp_kindle, living_failures_lamp_id+6000, living_failures_lamp_id+3000);
    }
    else {
        InitializeEvent(living_failures_lamp_offset, 8300, living_failures_lamp_id+2000, -1, living_failures_lamp_kindle, living_failures_lamp_id+6000, living_failures_lamp_id+3000);
    }
    
    if(EventFlag(maria_defeat+13) && !EventFlag(maria_defeat-1)) {
        if (EventFlag(maria_defeat-2)) {
            SetEventFlag(maria_defeat-2, OFF);
            MoveBloodstainAndDroppedItems(maria_region, maria_lamp_id+4000);
        }
        SetEventFlag(maria_defeat+13, OFF);
        SetEventFlag(maria_defeat, ON);
        InitializeEvent(maria_lamp_offset, 8300, maria_lamp_id+2000, 999, maria_lamp_kindle, maria_lamp_id+6000, maria_lamp_id+3000);
        DummyPlayCutsceneAndWarpPlayer(maria_lamp_id+4000, area_id, block_id);
    }
    else if (EventFlag(maria_defeat+12) || EventFlag(maria_defeat-1)) {
        if (EventFlag(maria_defeat-2)) {
            SetEventFlag(maria_defeat-2, OFF);
            MoveBloodstainAndDroppedItems(maria_region, maria_lamp_id+5000);
        }
        SetEventFlag(maria_defeat, OFF);
        SetEventFlag(maria_defeat+1, OFF);
        SetEventFlag(maria_defeat+12, OFF);
        SetEventFlag(maria_defeat+13, ON);
        SetEventFlag(maria_defeat-1, OFF);
        SetEventFlag(8900+maria_offset, ON);
        InitializeEvent(maria_lamp_offset, 8300, maria_lamp_id+2000, -1, maria_lamp_kindle, maria_lamp_id+6000, maria_lamp_id+3000);
    }
    else {
        InitializeEvent(maria_lamp_offset, 8300, maria_lamp_id+2000, -1, maria_lamp_kindle, maria_lamp_id+6000, maria_lamp_id+3000);
    }
    
    InitializeEvent(living_failures_offset, 12102070, living_failures_defeat+13, 0, 7504, living_failures_id);
    InitializeEvent(maria_offset, 12102070, maria_defeat+13, 0, 7505, maria_id);
    
    InitializeEvent(living_failures_offset, 8900, living_failures_defeat-1, living_failures_lamp_id+1000, living_failures_defeat-2, 0, 0, living_failures_lamp_id+5000, area_id, block_id);
    InitializeEvent(maria_offset, 8900, maria_defeat-1, maria_lamp_id+1000, maria_defeat-2, 0, 0, maria_lamp_id+5000, area_id, block_id);
    
    InitializeEvent(living_failures_offset, 7700, living_failures_defeat+11, living_failures_defeat+12, living_failures_lamp_id+1000, 835001);
    InitializeEvent(maria_offset, 7700, maria_defeat+11, maria_defeat+12, maria_lamp_id+1000, 835002);
    
    InitializeEvent(3800, 12107000, 72113800, 3501950, 2412950);
    InitializeEvent(3801, 12107000, 72113801, 3501950, 2412951);
    InitializeEvent(3802, 12107000, 72113802, 3501950, 2412952);
    InitializeEvent(3803, 12107000, 72113803, 3501950, 2412953);
    InitializeEvent(3804, 12107000, 72113804, 3501950, 2402950);
    InitializeEvent(3805, 12107000, 72113805, 3501950, 2402951);
    InitializeEvent(3806, 12107000, 72113806, 3501950, 2422950);
    InitializeEvent(3807, 12107000, 72113807, 3501950, 2422952);
    InitializeEvent(3808, 12107000, 72113808, 3501950, 2422951);
    InitializeEvent(3809, 12107000, 72113809, 3501950, 2302950);
    InitializeEvent(3810, 12107000, 72113810, 3501950, 2302951);
    InitializeEvent(3811, 12107000, 72113811, 3501950, 2302952);
    InitializeEvent(3812, 12107000, 72113812, 3501950, 2202950);
    InitializeEvent(3813, 12107000, 72113813, 3501950, 2202951);
    InitializeEvent(3814, 12107000, 72113814, 3501950, 2702950);
    InitializeEvent(3815, 12107000, 72113815, 3501950, 2702951);
    InitializeEvent(3816, 12107000, 72113816, 3501950, 3202950);
    InitializeEvent(3817, 12107000, 72113817, 3501950, 3202952);
    InitializeEvent(3818, 12107000, 72113818, 3501950, 2802950);
    InitializeEvent(3819, 12107000, 72113819, 3501950, 2802953);
    InitializeEvent(3820, 12107000, 72113820, 3501950, 2802951);
    InitializeEvent(3821, 12107000, 72113821, 3501950, 2802952);
    InitializeEvent(3822, 12107000, 72113822, 3501950, 2502950);
    InitializeEvent(3823, 12107000, 72113823, 3501950, 2502952);
    InitializeEvent(3824, 12107000, 72113824, 3501950, 2502951);
    InitializeEvent(3825, 12107000, 72113825, 3501950, 2112950);
    InitializeEvent(3826, 12107000, 72113826, 3501950, 3202951);
    InitializeEvent(3827, 12107000, 72113827, 3501950, 3202953);
    InitializeEvent(3828, 12107000, 72113828, 3501950, 3302950);
    InitializeEvent(3829, 12107000, 72113829, 3501950, 3302951);
    InitializeEvent(3830, 12107000, 72113830, 3501950, 2602950);
    InitializeEvent(3831, 12107000, 72113831, 3501950, 2602953);
    InitializeEvent(3832, 12107000, 72113832, 3501950, 2602952);
    InitializeEvent(3833, 12107000, 72113833, 3501950, 2602951);
    InitializeEvent(3834, 12107000, 72113834, 3501950, 3402950);
    InitializeEvent(3835, 12107000, 72113835, 3501950, 3402951);
    InitializeEvent(3836, 12107000, 72113836, 3501950, 3402953);
    InitializeEvent(3837, 12107000, 72113837, 3501950, 3402952);
    InitializeEvent(3838, 12107000, 72113838, 3501950, 3502950);
    InitializeEvent(3839, 12107000, 72113839, 3501950, 3502951);
    InitializeEvent(3840, 12107000, 72113840, 3501950, 3502952);
    InitializeEvent(3841, 12107000, 72113841, 3501950, 3602950);
    InitializeEvent(3842, 12107000, 72113842, 3501950, 3602951);
    InitializeEvent(3843, 12107000, 72113843, 3501950, 3602952);
    InitializeEvent(3844, 12107000, 72113844, 3501950, 2902950);
    InitializeEvent(3845, 12107000, 72113845, 3501950, 2902951);
    InitializeEvent(3846, 12107000, 72113846, 3501950, 2902952);
    InitializeEvent(3847, 12107000, 72113847, 3501950, 2902953);
    InitializeEvent(3848, 12107000, 72113848, 3501950, 2902954);
    InitializeEvent(3849, 12107000, 72113849, 3501950, 2902955);
    InitializeEvent(3850, 12107000, 72113850, 3501950, 2902956);
    InitializeEvent(3851, 12107000, 72113851, 3501950, 2902957);
    InitializeEvent(3852, 12107000, 72113852, 3501950, 2902958);
    InitializeEvent(3853, 12107000, 72113853, 3501950, 2902959);

    InitializeEvent(3900, 12107000, 72113900, 3501951, 2412950);
    InitializeEvent(3901, 12107000, 72113901, 3501951, 2412951);
    InitializeEvent(3902, 12107000, 72113902, 3501951, 2412952);
    InitializeEvent(3903, 12107000, 72113903, 3501951, 2412953);
    InitializeEvent(3904, 12107000, 72113904, 3501951, 2402950);
    InitializeEvent(3905, 12107000, 72113905, 3501951, 2402951);
    InitializeEvent(3906, 12107000, 72113906, 3501951, 2422950);
    InitializeEvent(3907, 12107000, 72113907, 3501951, 2422952);
    InitializeEvent(3908, 12107000, 72113908, 3501951, 2422951);
    InitializeEvent(3909, 12107000, 72113909, 3501951, 2302950);
    InitializeEvent(3910, 12107000, 72113910, 3501951, 2302951);
    InitializeEvent(3911, 12107000, 72113911, 3501951, 2302952);
    InitializeEvent(3912, 12107000, 72113912, 3501951, 2202950);
    InitializeEvent(3913, 12107000, 72113913, 3501951, 2202951);
    InitializeEvent(3914, 12107000, 72113914, 3501951, 2702950);
    InitializeEvent(3915, 12107000, 72113915, 3501951, 2702951);
    InitializeEvent(3916, 12107000, 72113916, 3501951, 3202950);
    InitializeEvent(3917, 12107000, 72113917, 3501951, 3202952);
    InitializeEvent(3918, 12107000, 72113918, 3501951, 2802950);
    InitializeEvent(3919, 12107000, 72113919, 3501951, 2802953);
    InitializeEvent(3920, 12107000, 72113920, 3501951, 2802951);
    InitializeEvent(3921, 12107000, 72113921, 3501951, 2802952);
    InitializeEvent(3922, 12107000, 72113922, 3501951, 2502950);
    InitializeEvent(3923, 12107000, 72113923, 3501951, 2502952);
    InitializeEvent(3924, 12107000, 72113924, 3501951, 2502951);
    InitializeEvent(3925, 12107000, 72113925, 3501951, 2112950);
    InitializeEvent(3926, 12107000, 72113926, 3501951, 3202951);
    InitializeEvent(3927, 12107000, 72113927, 3501951, 3202953);
    InitializeEvent(3928, 12107000, 72113928, 3501951, 3302950);
    InitializeEvent(3929, 12107000, 72113929, 3501951, 3302951);
    InitializeEvent(3930, 12107000, 72113930, 3501951, 2602950);
    InitializeEvent(3931, 12107000, 72113931, 3501951, 2602953);
    InitializeEvent(3932, 12107000, 72113932, 3501951, 2602952);
    InitializeEvent(3933, 12107000, 72113933, 3501951, 2602951);
    InitializeEvent(3934, 12107000, 72113934, 3501951, 3402950);
    InitializeEvent(3935, 12107000, 72113935, 3501951, 3402951);
    InitializeEvent(3936, 12107000, 72113936, 3501951, 3402953);
    InitializeEvent(3937, 12107000, 72113937, 3501951, 3402952);
    InitializeEvent(3938, 12107000, 72113938, 3501951, 3502950);
    InitializeEvent(3939, 12107000, 72113939, 3501951, 3502951);
    InitializeEvent(3940, 12107000, 72113940, 3501951, 3502952);
    InitializeEvent(3941, 12107000, 72113941, 3501951, 3602950);
    InitializeEvent(3942, 12107000, 72113942, 3501951, 3602951);
    InitializeEvent(3943, 12107000, 72113943, 3501951, 3602952);
    InitializeEvent(3944, 12107000, 72113944, 3501951, 2902950);
    InitializeEvent(3945, 12107000, 72113945, 3501951, 2902951);
    InitializeEvent(3946, 12107000, 72113946, 3501951, 2902952);
    InitializeEvent(3947, 12107000, 72113947, 3501951, 2902953);
    InitializeEvent(3948, 12107000, 72113948, 3501951, 2902954);
    InitializeEvent(3949, 12107000, 72113949, 3501951, 2902955);
    InitializeEvent(3950, 12107000, 72113950, 3501951, 2902956);
    InitializeEvent(3951, 12107000, 72113951, 3501951, 2902957);
    InitializeEvent(3952, 12107000, 72113952, 3501951, 2902958);
    InitializeEvent(3953, 12107000, 72113953, 3501951, 2902959);

    InitializeEvent(4000, 12107000, 72114000, 3501952, 2412950);
    InitializeEvent(4001, 12107000, 72114001, 3501952, 2412951);
    InitializeEvent(4002, 12107000, 72114002, 3501952, 2412952);
    InitializeEvent(4003, 12107000, 72114003, 3501952, 2412953);
    InitializeEvent(4004, 12107000, 72114004, 3501952, 2402950);
    InitializeEvent(4005, 12107000, 72114005, 3501952, 2402951);
    InitializeEvent(4006, 12107000, 72114006, 3501952, 2422950);
    InitializeEvent(4007, 12107000, 72114007, 3501952, 2422952);
    InitializeEvent(4008, 12107000, 72114008, 3501952, 2422951);
    InitializeEvent(4009, 12107000, 72114009, 3501952, 2302950);
    InitializeEvent(4010, 12107000, 72114010, 3501952, 2302951);
    InitializeEvent(4011, 12107000, 72114011, 3501952, 2302952);
    InitializeEvent(4012, 12107000, 72114012, 3501952, 2202950);
    InitializeEvent(4013, 12107000, 72114013, 3501952, 2202951);
    InitializeEvent(4014, 12107000, 72114014, 3501952, 2702950);
    InitializeEvent(4015, 12107000, 72114015, 3501952, 2702951);
    InitializeEvent(4016, 12107000, 72114016, 3501952, 3202950);
    InitializeEvent(4017, 12107000, 72114017, 3501952, 3202952);
    InitializeEvent(4018, 12107000, 72114018, 3501952, 2802950);
    InitializeEvent(4019, 12107000, 72114019, 3501952, 2802953);
    InitializeEvent(4020, 12107000, 72114020, 3501952, 2802951);
    InitializeEvent(4021, 12107000, 72114021, 3501952, 2802952);
    InitializeEvent(4022, 12107000, 72114022, 3501952, 2502950);
    InitializeEvent(4023, 12107000, 72114023, 3501952, 2502952);
    InitializeEvent(4024, 12107000, 72114024, 3501952, 2502951);
    InitializeEvent(4025, 12107000, 72114025, 3501952, 2112950);
    InitializeEvent(4026, 12107000, 72114026, 3501952, 3202951);
    InitializeEvent(4027, 12107000, 72114027, 3501952, 3202953);
    InitializeEvent(4028, 12107000, 72114028, 3501952, 3302950);
    InitializeEvent(4029, 12107000, 72114029, 3501952, 3302951);
    InitializeEvent(4030, 12107000, 72114030, 3501952, 2602950);
    InitializeEvent(4031, 12107000, 72114031, 3501952, 2602953);
    InitializeEvent(4032, 12107000, 72114032, 3501952, 2602952);
    InitializeEvent(4033, 12107000, 72114033, 3501952, 2602951);
    InitializeEvent(4034, 12107000, 72114034, 3501952, 3402950);
    InitializeEvent(4035, 12107000, 72114035, 3501952, 3402951);
    InitializeEvent(4036, 12107000, 72114036, 3501952, 3402953);
    InitializeEvent(4037, 12107000, 72114037, 3501952, 3402952);
    InitializeEvent(4038, 12107000, 72114038, 3501952, 3502950);
    InitializeEvent(4039, 12107000, 72114039, 3501952, 3502951);
    InitializeEvent(4040, 12107000, 72114040, 3501952, 3502952);
    InitializeEvent(4041, 12107000, 72114041, 3501952, 3602950);
    InitializeEvent(4042, 12107000, 72114042, 3501952, 3602951);
    InitializeEvent(4043, 12107000, 72114043, 3501952, 3602952);
    InitializeEvent(4044, 12107000, 72114044, 3501952, 2902950);
    InitializeEvent(4045, 12107000, 72114045, 3501952, 2902951);
    InitializeEvent(4046, 12107000, 72114046, 3501952, 2902952);
    InitializeEvent(4047, 12107000, 72114047, 3501952, 2902953);
    InitializeEvent(4048, 12107000, 72114048, 3501952, 2902954);
    InitializeEvent(4049, 12107000, 72114049, 3501952, 2902955);
    InitializeEvent(4050, 12107000, 72114050, 3501952, 2902956);
    InitializeEvent(4051, 12107000, 72114051, 3501952, 2902957);
    InitializeEvent(4052, 12107000, 72114052, 3501952, 2902958);
    InitializeEvent(4053, 12107000, 72114053, 3501952, 2902959);

    SetEventFlag(72110038, OFF);
    SetEventFlag(72110138, OFF);
    SetEventFlag(72110238, OFF);
    SetEventFlag(72110338, OFF);
    SetEventFlag(72110438, OFF);
    SetEventFlag(72110538, OFF);
    SetEventFlag(72110638, OFF);
    SetEventFlag(72110738, OFF);
    SetEventFlag(72110838, OFF);
    SetEventFlag(72110938, OFF);
    SetEventFlag(72111038, OFF);
    SetEventFlag(72111138, OFF);
    SetEventFlag(72111238, OFF);
    SetEventFlag(72111338, OFF);
    SetEventFlag(72111438, OFF);
    SetEventFlag(72111538, OFF);
    SetEventFlag(72111638, OFF);
    SetEventFlag(72111738, OFF);
    SetEventFlag(72111838, OFF);
    SetEventFlag(72111938, OFF);
    SetEventFlag(72112038, OFF);
    SetEventFlag(72112138, OFF);
    SetEventFlag(72112238, OFF);
    SetEventFlag(72112338, OFF);
    SetEventFlag(72112438, OFF);
    SetEventFlag(72112538, OFF);
    SetEventFlag(72112638, OFF);
    SetEventFlag(72112738, OFF);
    SetEventFlag(72112838, OFF);
    SetEventFlag(72112938, OFF);
    SetEventFlag(72113038, OFF);
    SetEventFlag(72113138, OFF);
    SetEventFlag(72113238, OFF);
    SetEventFlag(72113338, OFF);
    SetEventFlag(72113438, OFF);
    SetEventFlag(72113538, OFF);
    SetEventFlag(72113638, OFF);
    SetEventFlag(72113738, OFF);
    SetEventFlag(72113838, OFF);
    SetEventFlag(72113938, OFF);
    SetEventFlag(72114038, OFF);
    SetEventFlag(72114138, OFF);
    SetEventFlag(72114238, OFF);
    SetEventFlag(72114338, OFF);
    SetEventFlag(72114438, OFF);
    SetEventFlag(72114538, OFF);
    SetEventFlag(72114638, OFF);
    SetEventFlag(72114738, OFF);
    SetEventFlag(72114838, OFF);
    SetEventFlag(72114938, OFF);
    SetEventFlag(72115038, OFF);
    SetEventFlag(72115138, OFF);
    SetEventFlag(72115238, OFF);
    SetEventFlag(72115338, OFF);

    SetEventFlag(72110039, OFF);
    SetEventFlag(72110139, OFF);
    SetEventFlag(72110239, OFF);
    SetEventFlag(72110339, OFF);
    SetEventFlag(72110439, OFF);
    SetEventFlag(72110539, OFF);
    SetEventFlag(72110639, OFF);
    SetEventFlag(72110739, OFF);
    SetEventFlag(72110839, OFF);
    SetEventFlag(72110939, OFF);
    SetEventFlag(72111039, OFF);
    SetEventFlag(72111139, OFF);
    SetEventFlag(72111239, OFF);
    SetEventFlag(72111339, OFF);
    SetEventFlag(72111439, OFF);
    SetEventFlag(72111539, OFF);
    SetEventFlag(72111639, OFF);
    SetEventFlag(72111739, OFF);
    SetEventFlag(72111839, OFF);
    SetEventFlag(72111939, OFF);
    SetEventFlag(72112039, OFF);
    SetEventFlag(72112139, OFF);
    SetEventFlag(72112239, OFF);
    SetEventFlag(72112339, OFF);
    SetEventFlag(72112439, OFF);
    SetEventFlag(72112539, OFF);
    SetEventFlag(72112639, OFF);
    SetEventFlag(72112739, OFF);
    SetEventFlag(72112839, OFF);
    SetEventFlag(72112939, OFF);
    SetEventFlag(72113039, OFF);
    SetEventFlag(72113139, OFF);
    SetEventFlag(72113239, OFF);
    SetEventFlag(72113339, OFF);
    SetEventFlag(72113439, OFF);
    SetEventFlag(72113539, OFF);
    SetEventFlag(72113639, OFF);
    SetEventFlag(72113739, OFF);
    SetEventFlag(72113839, OFF);
    SetEventFlag(72113939, OFF);
    SetEventFlag(72114039, OFF);
    SetEventFlag(72114139, OFF);
    SetEventFlag(72114239, OFF);
    SetEventFlag(72114339, OFF);
    SetEventFlag(72114439, OFF);
    SetEventFlag(72114539, OFF);
    SetEventFlag(72114639, OFF);
    SetEventFlag(72114739, OFF);
    SetEventFlag(72114839, OFF);
    SetEventFlag(72114939, OFF);
    SetEventFlag(72115039, OFF);
    SetEventFlag(72115139, OFF);
    SetEventFlag(72115239, OFF);
    SetEventFlag(72115339, OFF);

    SetEventFlag(72110040, OFF);
    SetEventFlag(72110140, OFF);
    SetEventFlag(72110240, OFF);
    SetEventFlag(72110340, OFF);
    SetEventFlag(72110440, OFF);
    SetEventFlag(72110540, OFF);
    SetEventFlag(72110640, OFF);
    SetEventFlag(72110740, OFF);
    SetEventFlag(72110840, OFF);
    SetEventFlag(72110940, OFF);
    SetEventFlag(72111040, OFF);
    SetEventFlag(72111140, OFF);
    SetEventFlag(72111240, OFF);
    SetEventFlag(72111340, OFF);
    SetEventFlag(72111440, OFF);
    SetEventFlag(72111540, OFF);
    SetEventFlag(72111640, OFF);
    SetEventFlag(72111740, OFF);
    SetEventFlag(72111840, OFF);
    SetEventFlag(72111940, OFF);
    SetEventFlag(72112040, OFF);
    SetEventFlag(72112140, OFF);
    SetEventFlag(72112240, OFF);
    SetEventFlag(72112340, OFF);
    SetEventFlag(72112440, OFF);
    SetEventFlag(72112540, OFF);
    SetEventFlag(72112640, OFF);
    SetEventFlag(72112740, OFF);
    SetEventFlag(72112840, OFF);
    SetEventFlag(72112940, OFF);
    SetEventFlag(72113040, OFF);
    SetEventFlag(72113140, OFF);
    SetEventFlag(72113240, OFF);
    SetEventFlag(72113340, OFF);
    SetEventFlag(72113440, OFF);
    SetEventFlag(72113540, OFF);
    SetEventFlag(72113640, OFF);
    SetEventFlag(72113740, OFF);
    SetEventFlag(72113840, OFF);
    SetEventFlag(72113940, OFF);
    SetEventFlag(72114040, OFF);
    SetEventFlag(72114140, OFF);
    SetEventFlag(72114240, OFF);
    SetEventFlag(72114340, OFF);
    SetEventFlag(72114440, OFF);
    SetEventFlag(72114540, OFF);
    SetEventFlag(72114640, OFF);
    SetEventFlag(72114740, OFF);
    SetEventFlag(72114840, OFF);
    SetEventFlag(72114940, OFF);
    SetEventFlag(72115040, OFF);
    SetEventFlag(72115140, OFF);
    SetEventFlag(72115240, OFF);
    SetEventFlag(72115340, OFF);

    InitializeEvent(0, 12107100, 72100421, 3501950, 9021);
    InitializeEvent(1, 12107100, 72100422, 3501950, 9022);
    InitializeEvent(2, 12107100, 72100423, 3501950, 9023);
    InitializeEvent(3, 12107100, 72100424, 3501950, 9024);
    InitializeEvent(4, 12107100, 72100425, 3501950, 9025);
    InitializeEvent(5, 12107100, 72100426, 3501950, 9026);

    InitializeEvent(6, 12107100, 72100427, 3501951, 9021);
    InitializeEvent(7, 12107100, 72100428, 3501951, 9022);
    InitializeEvent(8, 12107100, 72100429, 3501951, 9023);
    InitializeEvent(9, 12107100, 72100430, 3501951, 9024);
    InitializeEvent(10, 12107100, 72100431, 3501951, 9025);
    InitializeEvent(11, 12107100, 72100432, 3501951, 9026);

    InitializeEvent(12, 12107100, 72100433, 3501952, 9021);
    InitializeEvent(13, 12107100, 72100434, 3501952, 9022);
    InitializeEvent(14, 12107100, 72100435, 3501952, 9023);
    InitializeEvent(15, 12107100, 72100436, 3501952, 9024);
    InitializeEvent(16, 12107100, 72100437, 3501952, 9025);
    InitializeEvent(17, 12107100, 72100438, 3501952, 9026);

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
    
    InitializeEvent(0, 13501810, 0);
    if (CharacterType(10000, TargetType.Alive)) {
        SetSpEffect(10000, 9920, false);
    }
    GotoIf(S0, HasMultiplayerState(MultiplayerState.Client));
    GotoIf(S0, !EventFlag(13500100));
    SetEventFlag(13500101, ON);
S0:
    InitializeEvent(60, 7000, 3500950, 3501950, 999, 13507800, -1);
    
    InitializeEvent(61, 7000, 3500951, 3501951, 13501850, 13507820, living_failures_defeat+13);
    InitializeEvent(living_failures_offset, 8800, living_failures_defeat+13, living_failures_lamp_id-1000, living_failures_lamp_id, living_failures_lamp_id+3000);
    
    InitializeEvent(62, 7000, 3500952, 3501952, 13501800, 13507840, maria_defeat+13);
    InitializeEvent(maria_offset, 8800, maria_defeat+13, maria_lamp_id-1000, maria_lamp_id, maria_lamp_id+3000);
    
    InitializeEvent(60, 7100, 73500200, 3501950);
    InitializeEvent(61, 7100, 73500201, 3501951);
    InitializeEvent(62, 7100, 73500202, 3501952);
    InitializeEvent(60, 7200, 73500100, 3501950, 2102953);
    InitializeEvent(61, 7200, 73500101, 3501951, 2102953);
    InitializeEvent(62, 7200, 73500102, 3501952, 2102953);
    InitializeEvent(60, 7300, 72103500, 3501950);
    InitializeEvent(61, 7300, 72103501, 3501951);
    InitializeEvent(62, 7300, 72103502, 3501952);
    InitializeEvent(60, 12102220, 3501950, 3500950);
    InitializeEvent(61, 12102220, 3501951, 3500951);
    InitializeEvent(62, 12102220, 3501952, 3500952);
    InitializeEvent(71, 7600, 3501990, 3503990);
    ActivateHit(3504810, Disabled);
    ActivateHit(3504811, Disabled);
    ActivateHit(3504812, Disabled);
    ActivateHitres(3504813, Disabled);
    ActivateHitres(3504814, Disabled);
    SetEventFlag(3510, ON);
    SetEventFlag(3511, ON);
    SetEventFlag(3512, OFF);
    SetEventFlag(3513, OFF);
    SetEventFlag(3515, ON);
    SetEventFlag(3516, ON);
    SetEventFlag(3517, OFF);
    SetEventFlag(3518, OFF);
    ActivateHit(3504812, Disabled);
    ActivateHit(3504813, Disabled);
    ActivateHit(3504814, Enabled);
    if (EventFlag(9470)) {
        SetEventFlag(3510, OFF);
        SetEventFlag(3511, OFF);
        SetEventFlag(3512, OFF);
        SetEventFlag(3513, OFF);
        SetEventFlag(3515, OFF);
        SetEventFlag(3516, OFF);
        SetEventFlag(3517, OFF);
        SetEventFlag(3518, OFF);
        ActivateHit(3504812, Disabled);
        ActivateHit(3504813, Disabled);
        ActivateHit(3504814, Enabled);
    }
    if (EventFlag(13501850)) {
        SetEventFlag(3510, ON);
        SetEventFlag(3511, ON);
        SetEventFlag(3512, ON);
        SetEventFlag(3513, OFF);
        SetEventFlag(3515, OFF);
        SetEventFlag(3516, OFF);
        SetEventFlag(3517, ON);
        SetEventFlag(3518, OFF);
        ActivateHit(3504812, Enabled);
        ActivateHit(3504813, Disabled);
        ActivateHit(3504814, Disabled);
    }
    if (EventFlag(13501801)) {
        SetEventFlag(3510, ON);
        SetEventFlag(3511, ON);
        SetEventFlag(3512, OFF);
        SetEventFlag(3513, OFF);
        SetEventFlag(3515, OFF);
        SetEventFlag(3516, OFF);
        SetEventFlag(3517, OFF);
        SetEventFlag(3518, OFF);
        ActivateHit(3504812, Disabled);
        ActivateHit(3504813, Enabled);
        ActivateHit(3504814, Disabled);
    }
    if (EventFlag(13501800)) {
        SetEventFlag(3510, ON);
        SetEventFlag(3511, ON);
        SetEventFlag(3512, ON);
        SetEventFlag(3513, ON);
        SetEventFlag(3515, OFF);
        SetEventFlag(3516, OFF);
        SetEventFlag(3517, OFF);
        SetEventFlag(3518, OFF);
        ActivateHit(3504812, Disabled);
        ActivateHit(3504813, Enabled);
        ActivateHit(3504814, Disabled);
    }
    RegisterLadder(13501300, 13501301, 3501080);
    RegisterLadder(13501302, 13501303, 3501081);
    RegisterLadder(13501304, 13501305, 3501082);
    RegisterLadder(13501306, 13501307, 3501083);
    RegisterLadder(13501308, 13501309, 3501084);
    InitializeEvent(0, 13504700, 3500790, 13504701, 13504711, 3510, 999);
    InitializeEvent(5, 13504700, 3500791, 13504702, 12604712, 3511, 999);
    InitializeEvent(0, 13504710, 3500790, 13504701, 13504711, 13504721);
    InitializeEvent(5, 13504710, 3500791, 13504702, 13504712, 13504722);
    InitializeEvent(0, 13504720, 3500790, 13504701, 13504711, 13504721);
    InitializeEvent(5, 13504720, 3500791, 13504702, 13504712, 13504722);
    InitializeEvent(0, 13504730, 3500790, 13504701, 13504711, 3510, 13504810, 999, 999, 13504712);
    InitializeEvent(5, 13504730, 3500791, 13504702, 13504712, 3511, 13504860, 999, 999, 13504711);
    InitializeEvent(0, 13504740, 0);
    InitializeEvent(0, 13504742, 0);
    InitializeEvent(0, 13501800, 0);
    InitializeEvent(0, 13501801, 0);
    InitializeEvent(0, 13504800, 0);
    InitializeEvent(0, 13504801, 0);
    InitializeEvent(0, 13504802, 0);
    InitializeEvent(0, 13504803, 0);
    InitializeEvent(0, 13504804, 0);
    InitializeEvent(0, 13504805, 0);
    InitializeEvent(0, 13504806, 0);
    InitializeEvent(0, 13504807, 0);
    InitializeEvent(0, 13501807, 0);
    InitializeEvent(0, 13501802, 0);
    InitializeEvent(0, 13501803, 0);
    InitializeEvent(0, 13501805, 3501906);
    InitializeEvent(1, 13501805, 3501910);
    InitializeEvent(0, 13504822, 0);
    InitializeEvent(0, 13501850, 0);
    InitializeEvent(0, 13501851, 0);
    InitializeEvent(0, 13501852, 0);
    InitializeEvent(0, 13504850, 0);
    InitializeEvent(0, 13504851, 0);
    InitializeEvent(0, 13504852, 0);
    InitializeEvent(0, 13504853, 0);
    InitializeEvent(0, 13504854, 0);
    InitializeEvent(0, 13504855, 0);
    InitializeEvent(0, 13504856, 0);
    InitializeEvent(0, 13504857, 0);
    InitializeEvent(0, 13504880, 0);
    InitializeEvent(0, 13504881, 0);
    InitializeEvent(1, 13504885, 3500852, 13504873);
    InitializeEvent(2, 13504885, 3500853, 13504874);
    InitializeEvent(0, 13504890, 3500851);
    InitializeEvent(1, 13504890, 3500852);
    InitializeEvent(2, 13504890, 3500853);
    InitializeEvent(3, 13504890, 3500854);
    InitializeEvent(0, 13504865, 0);
    InitializeEvent(0, 13505655, 0);
    InitializeEvent(0, 13505656, 3500851);
    InitializeEvent(1, 13505656, 3500852);
    InitializeEvent(2, 13505656, 3500853);
    InitializeEvent(3, 13505656, 3500854);
    InitializeEvent(0, 13505661, 0);
    InitializeEvent(0, 13505662, 0);
    InitializeEvent(0, 13505680, 0);
    InitializeEvent(0, 13504895, 3500851);
    InitializeEvent(1, 13504895, 3500852);
    InitializeEvent(2, 13504895, 3500853);
    InitializeEvent(3, 13504895, 3500854);
    InitializeEvent(0, 13501100, 0);
    InitializeEvent(0, 13501105, 0);
    InitializeEvent(0, 13501104, 0);
    InitializeEvent(0, 13501140, 0);
    InitializeEvent(0, 13501141, 0);
    InitializeEvent(0, 13501142, 0);
    if (EventFlag(13501108)) {
        InitializeEvent(0, 13501101, 0);
        InitializeEvent(0, 13501102, 0);
        InitializeEvent(0, 13501103, 0);
    }
    SetEventFlag(13501118, ON);
    InitializeEvent(0, 13501110, 0);
    InitializeEvent(0, 13501111, 0);
    InitializeEvent(0, 13501112, 0);
    InitializeEvent(0, 13501113, 0);
    InitializeEvent(0, 13501114, 0);
    InitializeEvent(0, 13501115, 0);
    InitializeEvent(0, 13501120, 0);
    InitializeEvent(0, 13501121, 0);
    InitializeEvent(0, 13501122, 0);
    InitializeEvent(0, 13501123, 0);
    InitializeEvent(0, 13501124, 0);
    InitializeEvent(0, 13501125, 0);
    InitializeEvent(0, 13501200, 3501120, 13504220, 1, 3500020, 0, -1);
    InitializeEvent(1, 13501200, 3501130, 13504230, 1, 3500030, 0, -1);
    InitializeEvent(2, 13501200, 3501141, 13504241, 2, 3500040, 0, -1);
    InitializeEvent(3, 13501200, 3501142, 13504242, 2, 3500040, 0, -1);
    InitializeEvent(4, 13501200, 3501145, 13504245, 2, 3500041, 0, -1);
    InitializeEvent(5, 13501200, 3501146, 13504246, 2, 3500040, 0, -1);
    InitializeEvent(6, 13501200, 3501140, 13504242, 2, 3500040, 0, -1);
    InitializeEvent(7, 13501200, 3501161, 13504261, 1, 3500062, 13504271, 3500063);
    InitializeEvent(8, 13501200, 3501162, 13504262, 1, 3500062, 13504272, 3500063);
    InitializeEvent(9, 13501200, 3501163, 13504263, 1, 3500062, 13504273, 3500063);
    InitializeEvent(10, 13501200, 3501164, 13504264, 1, 3500062, 13504274, 3500063);
    InitializeEvent(11, 13501200, 3501165, 13504265, 1, 3500062, 13504275, 3500063);
    InitializeEvent(12, 13501200, 3501166, 13504266, 1, 3500062, 13504276, 3500063);
    InitializeEvent(13, 13501200, 3501170, 13504270, 1, 3500070, 0, -1);
    InitializeEvent(0, 13501250, 0);
    InitializeEvent(0, 13501400, 3501350, 13500020, 9942);
    InitializeEvent(1, 13501400, 3501351, 13500021, 9942);
    InitializeEvent(2, 13501400, 3501352, 13500022, 9942);
    InitializeEvent(0, 13504799, 0);
    InitializeEvent(0, 13500100, 0);
    InitializeEvent(0, 13500105, 0);
    InitializeEvent(0, 13500106, 0);
    InitializeEvent(0, 13500110, 0);
    InitializeEvent(0, 13500111, 0);
    InitializeEvent(0, 13500130, 0);
    InitializeEvent(0, 13500150, 0);
    InitializeEvent(0, 13500410, 3500310, 3500339);
    InitializeEvent(1, 13500410, 3500337, 3500340);
    InitializeEvent(2, 13500410, 3500351, 3500341);
    InitializeEvent(3, 13500410, 3500921, 3500923);
    InitializeEvent(4, 13500410, 3500935, 3500933);
    InitializeEvent(5, 13500410, 3500661, 3500663);
    InitializeEvent(0, 13500420, 3500310, 9000, 40);
    InitializeEvent(1, 13500420, 3500337, 9000, 10);
    InitializeEvent(0, 13500430, 13500420, 3500310, 9060);
    InitializeEvent(1, 13500430, 13500421, 3500337, 9060);
    InitializeEvent(0, 13500450, 3500740, 53501700);
    InitializeEvent(1, 13500450, 3500741, 53501710);
    InitializeEvent(2, 13500450, 3500742, 53501720);
    InitializeEvent(3, 13500450, 3500781, 53508100);
    InitializeEvent(0, 13500460, 3500930, 103170, 13501900);
    InitializeEvent(0, 13500500, 3501500, 3500200, 10010611);
    InitializeEvent(1, 13500500, 3501501, 3500200, 10010611);
    InitializeEvent(2, 13500500, 3501502, 3500200, 10010620);
    InitializeEvent(3, 13500500, 3501503, 3500200, 10010620);
    InitializeEvent(4, 13500500, 3501510, 3500200, 10010616);
    InitializeEvent(5, 13500500, 3501511, 3500200, 10010616);
    InitializeEvent(6, 13500500, 3501512, 3500200, 10010616);
    InitializeEvent(7, 13500500, 3501513, 3500200, 10010616);
    InitializeEvent(8, 13500500, 3501514, 3500200, 10010612);
    InitializeEvent(9, 13500500, 3501515, 3500200, 10010612);
    InitializeEvent(10, 13500500, 3501520, 3500200, 10010617);
    InitializeEvent(11, 13500500, 3501521, 3500200, 10010617);
    InitializeEvent(12, 13500500, 3501522, 3500200, 10010613);
    InitializeEvent(13, 13500500, 3501523, 3500200, 10010613);
    InitializeEvent(14, 13500500, 3501530, 3500200, 10010618);
    InitializeEvent(15, 13500500, 3501531, 3500200, 10010618);
    InitializeEvent(16, 13500500, 3501532, 3500200, 10010618);
    InitializeEvent(17, 13500500, 3501533, 3500200, 10010618);
    InitializeEvent(18, 13500500, 3501534, 3500200, 10010614);
    InitializeEvent(19, 13500500, 3501535, 3500200, 10010614);
    InitializeEvent(20, 13500500, 3501540, 3500200, 10010619);
    InitializeEvent(21, 13500500, 3501541, 3500200, 10010619);
    InitializeEvent(22, 13500500, 3501542, 3500200, 10010615);
    InitializeEvent(23, 13500500, 3501543, 3500200, 10010615);
    InitializeEvent(0, 13505050, 3500451);
    InitializeEvent(0, 13505060, 0);
    InitializeEvent(0, 13505410, 0);
    InitializeEvent(0, 13505110, 3500934, 3502343);
    InitializeEvent(0, 13505300, 3500661);
    InitializeEvent(1, 13505300, 3500921);
    InitializeEvent(2, 13505300, 3500935);
    InitializeEvent(3, 13505300, 3500600);
    InitializeEvent(4, 13505300, 3500301);
    InitializeEvent(5, 13505300, 3500302);
    InitializeEvent(6, 13505300, 3500306);
    InitializeEvent(7, 13505300, 3500308);
    InitializeEvent(8, 13505300, 3500309);
    InitializeEvent(9, 13505300, 3500310);
    InitializeEvent(10, 13505300, 3500311);
    InitializeEvent(11, 13505300, 3500312);
    InitializeEvent(12, 13505300, 3500313);
    InitializeEvent(13, 13505300, 3500314);
    InitializeEvent(14, 13505300, 3500315);
    InitializeEvent(15, 13505300, 3500316);
    InitializeEvent(16, 13505300, 3500321);
    InitializeEvent(17, 13505300, 3500322);
    InitializeEvent(18, 13505300, 3500323);
    InitializeEvent(19, 13505300, 3500324);
    InitializeEvent(20, 13505300, 3500325);
    InitializeEvent(21, 13505300, 3500326);
    InitializeEvent(22, 13505300, 3500327);
    InitializeEvent(23, 13505300, 3500328);
    InitializeEvent(24, 13505300, 3500331);
    InitializeEvent(25, 13505300, 3500334);
    InitializeEvent(26, 13505300, 3500335);
    InitializeEvent(27, 13505300, 3500336);
    InitializeEvent(28, 13505300, 3500337);
    InitializeEvent(29, 13505300, 3500339);
    InitializeEvent(30, 13505300, 3500340);
    InitializeEvent(31, 13505300, 3500341);
    InitializeEvent(32, 13505300, 3500342);
    InitializeEvent(33, 13505300, 3500343);
    InitializeEvent(34, 13505300, 3500344);
    InitializeEvent(35, 13505300, 3500346);
    InitializeEvent(36, 13505300, 3500347);
    InitializeEvent(37, 13505300, 3500348);
    InitializeEvent(38, 13505300, 3500349);
    InitializeEvent(39, 13505300, 3500351);
    InitializeEvent(40, 13505300, 3500353);
    InitializeEvent(41, 13505300, 3500360);
    InitializeEvent(42, 13505300, 3500362);
    InitializeEvent(43, 13505300, 3500364);
    InitializeEvent(44, 13505300, 3500365);
    InitializeEvent(45, 13505300, 3500366);
    InitializeEvent(46, 13505300, 3500371);
    InitializeEvent(47, 13505300, 3500389);
    InitializeEvent(48, 13505300, 3500392);
    InitializeEvent(49, 13505300, 3500393);
    InitializeEvent(50, 13505300, 3500395);
    InitializeEvent(51, 13505300, 3500400);
    InitializeEvent(52, 13505300, 3500401);
    InitializeEvent(53, 13505300, 3500451);
    InitializeEvent(54, 13505300, 3500452);
    InitializeEvent(55, 13505300, 3500500);
    InitializeEvent(56, 13505300, 3500501);
    InitializeEvent(57, 13505300, 3500502);
    InitializeEvent(58, 13505300, 3500771);
    InitializeEvent(59, 13505300, 3500777);
    InitializeEvent(0, 13505400, 3500658, 3502251, 0, 3502255);
    InitializeEvent(0, 13505470, 3500312, 9005, 2004, 402020);
    InitializeEvent(2, 13505470, 3500390, 9001, 2004, 402020);
    InitializeEvent(3, 13505470, 3500396, 9003, 2004, 402020);
    InitializeEvent(4, 13505470, 3500397, 9006, 2004, 402020);
    InitializeEvent(5, 13505470, 3500398, 9002, 2004, 402020);
    InitializeEvent(6, 13505470, 3500502, 7001, 0, 402035);
    InitializeEvent(7, 13505470, 3500503, 7001, 0, 402035);
    InitializeEvent(0, 13505510, 3500350, 3502301, 1073741824, 0);
    InitializeEvent(2, 13505510, 3500360, 3502301, 1073741824, 0);
    InitializeEvent(3, 13505510, 3500361, 3502301, 1073741824, 0);
    InitializeEvent(4, 13505510, 3500363, 3502301, 1073741824, 0);
    InitializeEvent(5, 13505510, 3500364, 3502301, 1073741824, 0);
    InitializeEvent(6, 13505510, 3500366, 3502301, 1073741824, 0);
    InitializeEvent(7, 13505510, 3500301, 3502312, 1073741824, 0);
    InitializeEvent(8, 13505510, 3500302, 3502312, 1073741824, 0);
    InitializeEvent(9, 13505510, 3500303, 3502305, 1073741824, 0);
    InitializeEvent(10, 13505510, 3500409, 3502305, 1073741824, 0);
    InitializeEvent(11, 13505510, 3500450, 3502305, 1073741824, 0);
    InitializeEvent(12, 13505510, 3500346, 3502306, 1073741824, 0);
    InitializeEvent(13, 13505510, 3500347, 3502306, 1073741824, 0);
    InitializeEvent(14, 13505510, 3500348, 3502306, 1073741824, 0);
    InitializeEvent(15, 13505510, 3500349, 3502306, 1073741824, 0);
    InitializeEvent(16, 13505510, 3500371, 3502306, 1073741824, 0);
    InitializeEvent(17, 13505510, 3500750, 3502307, 1073741824, 0);
    InitializeEvent(18, 13505510, 3500760, 3502307, 1073741824, 0);
    InitializeEvent(19, 13505510, 3500313, 3502309, 1073741824, 0);
    InitializeEvent(20, 13505510, 3500314, 3502309, 1073741824, 0);
    InitializeEvent(21, 13505510, 3500313, 3502310, 1073741824, 0);
    InitializeEvent(22, 13505510, 3500314, 3502310, 1073741824, 0);
    InitializeEvent(23, 13505510, 3500452, 3502313, 1084227584, 0);
    InitializeEvent(24, 13505510, 3500356, 3502314, 1073741824, 0);
    InitializeEvent(25, 13505510, 3500357, 3502314, 1073741824, 0);
    InitializeEvent(26, 13505510, 3500359, 3502314, 1073741824, 0);
    InitializeEvent(27, 13505510, 3500933, 3502304, 1073741824, 0);
    InitializeEvent(28, 13505510, 3500935, 3502304, 1073741824, 0);
    InitializeEvent(35, 13505510, 3500315, 3502321, 1073741824, 1065353216);
    InitializeEvent(36, 13505510, 3500316, 3502321, 1073741824, 1065353216);
    InitializeEvent(37, 13505510, 3500353, 3502325, 1065353216, 0);
    InitializeEvent(38, 13505510, 3500770, 3502311, 1084227584, 1065353216);
    InitializeEvent(39, 13505510, 3500772, 3502311, 1084227584, 1065353216);
    InitializeEvent(40, 13505510, 3500311, 3502302, 1073741824, 0);
    InitializeEvent(41, 13505510, 3500773, 3502329, 1077936128, 0);
    InitializeEvent(43, 13505510, 3500776, 3502329, 1077936128, 0);
    InitializeEvent(44, 13505510, 3500335, 3502315, 1073741824, 0);
    InitializeEvent(46, 13505510, 3500334, 3502315, 1073741824, 0);
    InitializeEvent(47, 13505510, 3500601, 3502336, 1073741824, 0);
    InitializeEvent(48, 13505510, 3500607, 3502337, 1073741824, 0);
    InitializeEvent(49, 13505510, 3500610, 3502337, 1073741824, 1065353216);
    InitializeEvent(50, 13505510, 3500606, 3502337, 1073741824, 1065353216);
    InitializeEvent(51, 13505510, 3500613, 3502339, 1077936128, 0);
    InitializeEvent(52, 13505510, 3500614, 3502339, 1077936128, 0);
    InitializeEvent(53, 13505510, 3500400, 3502341, 1073741824, 0);
    InitializeEvent(54, 13505510, 3500401, 3502335, 1073741824, 0);
    InitializeEvent(55, 13505510, 3500600, 3502391, 1073741824, 1065353216);
    InitializeEvent(56, 13505510, 3500329, 3502312, 1073741824, 0);
    InitializeEvent(0, 13505200, 3500301, 3503431);
    InitializeEvent(1, 13505200, 3500302, 3503431);
    InitializeEvent(2, 13505200, 3500313, 3503431);
    InitializeEvent(3, 13505200, 3500314, 3503431);
    InitializeEvent(4, 13505200, 3500364, 3503430);
    InitializeEvent(5, 13505200, 3500366, 3503430);
    InitializeEvent(6, 13505200, 3500452, 3503432);
    InitializeEvent(0, 13505570, 3500310, 3502301, 1073741824, 0, 3502380, 3502306, 3503380);
    InitializeEvent(2, 13505570, 3500362, 3502301, 1073741824, 0, 3502381, 3502321, 3503380);
    InitializeEvent(3, 13505570, 3500365, 3502301, 1073741824, 0, 3502381, 3502321, 3503380);
    InitializeEvent(0, 13505450, 3500781, 3502317, 1073741824, 3001);
    InitializeEvent(0, 13505590, 3500389, 3502303, 1073741824, 9006, 0, 0, 0, 0);
    InitializeEvent(1, 13505590, 3500780, 3502316, 1073741824, 0, 3005, 0, 0, 0);
    InitializeEvent(7, 13505590, 3500360, 3502326, 1073741824, 9000, 9060, 0, 0, 0);
    InitializeEvent(8, 13505590, 3500306, 3502302, 1077936128, 9006, 0, 0, 0, 3502321);
    InitializeEvent(10, 13505590, 3500308, 3502302, 1077936128, 9000, 9060, 0, 0, 3502321);
    InitializeEvent(11, 13505590, 3500309, 3502302, 1077936128, 9002, 0, 0, 0, 3502321);
    InitializeEvent(12, 13505590, 3500337, 3502301, 1077936128, 9002, 0, 0, 0, 0);
    InitializeEvent(13, 13505590, 3500605, 3502337, 0, 7000, 7001, 1065353216, 1073741824, 0);
    InitializeEvent(14, 13505590, 3500609, 3502337, 0, 7000, 7001, 1073741824, 1077936128, 0);
    InitializeEvent(15, 13505590, 3500612, 3502337, 0, 7000, 7001, 1073741824, 1077936128, 0);
    InitializeEvent(16, 13505590, 3500342, 3502319, 1086324736, 9006, 0, 0, 0, 0);
    InitializeEvent(17, 13505590, 3500343, 3502319, 1086324736, 9003, 0, 1077936128, 0, 0);
    InitializeEvent(18, 13505590, 3500344, 3502319, 1086324736, 9005, 0, 1077936128, 0, 0);
    InitializeEvent(19, 13505590, 3500336, 0, 1088421888, 9006, 0, 1073741824, 0, 0);
    InitializeEvent(20, 13505590, 3500351, 3502301, 1088421888, 9006, 0, 0, 0, 0);
    InitializeEvent(22, 13505590, 3500340, 0, 1092616192, 9006, 0, 0, 0, 0);
    InitializeEvent(0, 13505610, 3500659, 3502251, 1073741824, 9001, 9061, 1065353216, 1065353216);
    InitializeEvent(1, 13505610, 3500655, 3502251, 1073741824, 9001, 9061, 1077936128, 1077936128);
    InitializeEvent(2, 13505610, 3500656, 3502251, 1073741824, 9001, 9061, 1073741824, 1073741824);
    InitializeEvent(0, 13505640, 3500550, 9013);
    InitializeEvent(1, 13505640, 3500551, 9014);
    InitializeEvent(3, 13505640, 3500553, 9001);
    InitializeEvent(4, 13505640, 3500554, 9000);
    InitializeEvent(5, 13505640, 3500555, 9011);
    InitializeEvent(6, 13505640, 3500556, 9010);
    InitializeEvent(0, 13505700, 3500400, 3022);
    InitializeEvent(1, 13505700, 3500401, 3022);
    InitializeEvent(4, 13505750, 3500303, 3502312, 0, 3503420, 0, 0);
    InitializeEvent(8, 13505750, 3500380, 3502312, 0, 3503420, 1090519040, 0);
    InitializeEvent(9, 13505750, 3500381, 3502312, 0, 3503420, 1088421888, 0);
    InitializeEvent(1, 13505780, 3500601);
    InitializeEvent(2, 13505780, 3500602);
    InitializeEvent(3, 13505780, 3500603);
    InitializeEvent(4, 13505780, 3500604);
    InitializeEvent(5, 13505780, 3500605);
    InitializeEvent(6, 13505780, 3500606);
    InitializeEvent(7, 13505780, 3500607);
    InitializeEvent(8, 13505780, 3500608);
    InitializeEvent(9, 13505780, 3500609);
    InitializeEvent(10, 13505780, 3500610);
    InitializeEvent(11, 13505780, 3500611);
    InitializeEvent(12, 13505780, 3500612);
    InitializeEvent(13, 13505780, 3500342);
    InitializeEvent(14, 13505780, 3500343);
    InitializeEvent(15, 13505780, 3500344);
    InitializeEvent(16, 13505780, 3500345);
    InitializeEvent(17, 13505780, 3500613);
    InitializeEvent(18, 13505780, 3500614);
    InitializeEvent(0, 13505797, 3501270);
    InitializeEvent(1, 13505797, 3501271);
    InitializeEvent(2, 13505797, 3501272);
    InitializeEvent(0, 13505800, 3502600, 3501600, 0, 3501601, 3500751);
    InitializeEvent(1, 13505800, 3502610, 3501610, 0, 3501611, 0);
    InitializeEvent(2, 13505800, 3502640, 3501640, 0, 3501641, 0);
    InitializeEvent(0, 13505810, 3502630, 3501630, 0, 3501631, 3501621, 3500764);
    InitializeEvent(0, 13505820, 3500321, 9014, 9064, 10, 3503421, 3502431);
    InitializeEvent(1, 13505820, 3500322, 9015, 0, 80, 3503422, 3502432);
    InitializeEvent(2, 13505820, 3500323, 9014, 9064, 5, 3503423, 3502433);
    InitializeEvent(3, 13505820, 3500324, 9015, 0, 45, 3503424, 3502434);
    InitializeEvent(4, 13505820, 3500325, 9014, 9064, 8, 3503425, 3502435);
    InitializeEvent(5, 13505820, 3500326, 9014, 9064, 3, 3503426, 3502436);
    InitializeEvent(6, 13505820, 3500327, 9015, 0, 62, 3503427, 3502437);
    InitializeEvent(7, 13505820, 3500328, 9014, 9064, 12, 3503428, 3502438);
    InitializeEvent(0, 13500942, 10000, 3502902, 73500410);
    InitializeEvent(0, 13500943, 3500901);
    InitializeEvent(0, 13500944, 3500901);
    InitializeEvent(0, 13500941, 0);
    InitializeEvent(0, 13500978, 1730, 73500415, 3500938);
    InitializeEvent(0, 13505900, 13505910, 13505911, 13505912, 3502890, 0, 6001);
    InitializeEvent(0, 13505901, 13505910, 13505911, 13505912, 3502891, 0);
    InitializeEvent(0, 13505902, 3500936, 13505911, 13505912, 3502892, 3502896, 13505910, 13505913, 3502893);
    InitializeEvent(0, 13505903, 3500936, 13505911, 13505912, 3502894, 3502895, 13505913);
    InitializeEvent(0, 13505904, 3500936, 13505911, 13505912, 43710, 3500937);
    InitializeEvent(0, 13501960, 0);
    InitializeEvent(0, 13500963, 3500910, 1750, 1769, 1752, 1750);
    InitializeEvent(1, 13500963, 3500910, 1750, 1769, 1752, 1752);
    InitializeEvent(0, 13500965, 0);
    InitializeEvent(0, 13500966, 0);
    InitializeEvent(0, 13500968, 3500910);
    InitializeEvent(0, 13500998, 0);
    InitializeEvent(0, 13500999, 0);
    InitializeEvent(0, 13500951, 3500900, 73500621, 1722);
    InitializeEvent(0, 13500952, 3500900);
    InitializeEvent(0, 13500946, 3500905, 3501905);
    InitializeEvent(0, 13500948, 3501905);
    InitializeEvent(0, 13500949, 3500905, 73500505);
    SetDistanceLimitForConversationStateProcessing(3500552, 25);
    InitializeEvent(0, 13500980, 73500910, 73500911, 1092616192);
    InitializeEvent(1, 13500980, 73500945, 73500946, 1092616192);
    InitializeEvent(0, 13500990, 3500661, 73500971, 6000);
    InitializeEvent(1, 13500990, 3500662, 73500976, 6000);
    InitializeEvent(2, 13500990, 3500911, 73500327, 1762);
    InitializeEvent(3, 13500990, 3500663, 73500971, 6000);
    InitializeEvent(0, 13500994, 3500661, 3500921, 50002400, 73500974, 6000, 1073741824, 1073741824, 7010);
    InitializeEvent(1, 13500994, 3500662, 3500920, 50002450, 73500979, 6000, 1073741824, 1073741824, 7010);
    InitializeEvent(2, 13500994, 3500911, 3500922, 50002270, 73500339, 1762, 1073741824, 1073741824, 7010);
    InitializeEvent(3, 13500994, 3500663, 3500921, 50002400, 73500974, 6000, 1073741824, 1073741824, 7010);
    SetCharacterImmortality(3500661, Enabled);
    SetCharacterImmortality(3500662, Enabled);
    SetCharacterImmortality(3500911, Enabled);
    SetCharacterImmortality(3500663, Enabled);
    SetEventFlag(73500970, OFF);
    SetEventFlag(73500975, OFF);
    SetEventFlag(73500971, OFF);
    SetEventFlag(73500976, OFF);
    SetEventFlag(73500974, OFF);
    SetEventFlag(73500979, OFF);
    InitializeEvent(0, 13500900, 3500900, 1710, 1729, 1719, 1712);
    InitializeEvent(1, 13500900, 3500905, 1650, 1669, 1659, 1650);
    InitializeEvent(2, 13500900, 3500901, 1730, 1749, 1734, 1730);
    InitializeEvent(0, 13500910, 3500900, 73500620);
    InitializeEvent(0, 13500920, 3500900, 73500620, 1710, 1729, 1727);
    InitializeEvent(0, 13501900, 3500930);
    InitializeEvent(1, 13501900, 3500931);
    InitializeEvent(2, 13501900, 3500932);
    InitializeEvent(3, 13501900, 3500934);
    InitializeEvent(4, 13501900, 3500935);
    InitializeEvent(6, 13501900, 3500550);
    InitializeEvent(7, 13501900, 3500551);
    InitializeEvent(8, 13501900, 3500552);
    InitializeEvent(9, 13501900, 3500553);
    InitializeEvent(10, 13501900, 3500554);
    InitializeEvent(11, 13501900, 3500555);
    InitializeEvent(12, 13501900, 3500556);
    InitializeEvent(0, 13500977, 0);
    InitializeEvent(0, 13501915, 3500933, 13501904);
    InitializeEvent(0, 13500953, 1712, 73500630, 43200);
    InitializeEvent(1, 13501920, 73500321, 43010);
    InitializeEvent(2, 13501920, 73500322, 43020);
    InitializeEvent(3, 13501920, 13501900, 43830);
    InitializeEvent(4, 13501920, 13501903, 43820);
    InitializeEvent(5, 13501920, 13501905, 43710);
    InitializeEvent(0, 13501940, 73500320, 43000);
    DeleteMapSFX(3503910, false);
    InitializeEvent(0, 13504400, 13504440, 3503910, 13504420, 13504430, 13501850, 6001);
    InitializeEvent(0, 13504410, 5, 3500940, 3502920, 13504420, 13504430, 13504440, 13501850, 10564);
    InitializeEvent(0, 13504450, 3500940, 3502930, 13504420, 13504430, 13504858);
    InitializeEvent(0, 13504460, 3500940, 3502930, 3502810, 3502811, 101130, 13504450, 3502813);
    InitializeEvent(0, 13500000, 0);
});

// preconstructor
$Event(50, Default, function() {
    InitializeEvent(0, 13500940, 3500901);
    InitializeEvent(0, 13500950, 3500900);
    InitializeEvent(0, 13500945, 3500905, 3501905, 3501906, 3501907, 3501908, 3501909, 13501801);
    InitializeEvent(0, 13500960, 3500910, 3500911);
    InitializeEvent(0, 13500400, 3500331, 3502354, 3502350);
    InitializeEvent(0, 13505630, 3500771, 3502318, 0, 1084227584);
    InitializeEvent(1, 13505630, 3500777, 3502318, 1077936128, 1084227584);
});

// Yamamura Muteki
$Event(13500000, Default, function() {
    if (!EventFlag(9471)) {
        SetCharacterInvincibility(3500930, Enabled);
        SetCharacterHPBarDisplay(3500930, Disabled);
        WaitFor(EventFlag(9471));
    }
L0:
    SetCharacterInvincibility(3500930, Disabled);
    SetCharacterHPBarDisplay(3500930, Enabled);
});

// Clock Tower_Appearance Widow_Appearance_XX
$Event(13504700, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    if (EventFlag(X8_4)) {
        SetCharacterAIState(X0_4, Disabled);
        ForceAnimationPlayback(X0_4, 7010, false, false, false);
        EndEvent();
    }
L0:
    EndIf(EventFlag(X4_4));
    SetCharacterAIState(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 7010, true, false, false);
    onlineFlagMapChrSp &= IsOnline() && !EventFlag(X8_4) && !EventFlag(X12_4) && PlayerInMap(35, 0);
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

// Clock Tower_Appearance Widow_Ring the Bell_XX
$Event(13504710, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X8_4));
    WaitFor(
        EventFlag(X4_4)
            && !EventFlag(X12_4)
            && !EventFlag(X8_4)
            && PlayerInMap(35, 0)
            && NumberOfClientsOfType(ClientType.Invader) == 0);
    WaitFor(CharacterType(10000, TargetType.Alive) && RandomElapsedSeconds(10, 10));
    SetSpEffect(10000, 9020, false);
    SetSpEffect(X0_4, 9100, false);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X12_4, ON);
    DisplayMessage(100002, 0);
    RestartEvent();
});

// Clock Tower_Apparition Widow_Stop the Bell_XX
$Event(13504720, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(EventFlag(X8_4));
    WaitFor(
        EventFlag(X4_4)
            && EventFlag(X12_4)
            && (EventFlag(X8_4) || NumberOfClientsOfType(ClientType.Invader) >= 1 || !PlayerInMap(35, 0)));
    WaitFor(CharacterType(10000, TargetType.Alive));
    ClearSpEffect(10000, 9020);
    ClearSpEffect(X0_4, 9100);
    RequestCharacterAIReplan(X0_4);
    SetEventFlag(X12_4, OFF);
    RestartEvent();
});

// Clock Tower_Appearance Widow_Disappearance_XX
$Event(13504730, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
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

// Clock tower_same area determination_first half
$Event(13504740, Restart, function() {
    cond = PlayerStandingOnHit(3504000)
        || PlayerStandingOnHit(3504001)
        || PlayerStandingOnHit(3504002)
        || PlayerStandingOnHit(3504003)
        || PlayerStandingOnHit(3504004);
    WaitFor(CharacterType(10000, TargetType.Alive) && cond);
    SetEventFlag(13504741, ON);
    hit = PlayerStandingOnHit(3504000)
        || PlayerStandingOnHit(3504001)
        || PlayerStandingOnHit(3504002)
        || PlayerStandingOnHit(3504003)
        || PlayerStandingOnHit(3504004);
    WaitFor(CharacterType(10000, TargetType.Alive) && !cond);
    SetEventFlag(13504741, OFF);
    RestartEvent();
});

// Clock tower_same area determination_second half
$Event(13504742, Restart, function() {
    cond = PlayerStandingOnHit(3504020)
        || PlayerStandingOnHit(3504021)
        || PlayerStandingOnHit(3504022)
        || PlayerStandingOnHit(3504023)
        || PlayerStandingOnHit(3504024)
        || PlayerStandingOnHit(3504025)
        || PlayerStandingOnHit(3504026)
        || PlayerStandingOnHit(3504027)
        || PlayerStandingOnHit(3504028)
        || PlayerStandingOnHit(3504029)
        || PlayerStandingOnHit(3504030)
        || PlayerStandingOnHit(3504031)
        || PlayerStandingOnHit(3504032)
        || PlayerStandingOnHit(3504033)
        || PlayerStandingOnHit(3504034)
        || PlayerStandingOnHit(3504035)
        || PlayerStandingOnHit(3504036)
        || PlayerStandingOnHit(3504037)
        || PlayerStandingOnHit(3504038)
        || PlayerStandingOnHit(3504039)
        || PlayerStandingOnHit(3504040)
        || PlayerStandingOnHit(3504041);
    WaitFor(CharacterType(10000, TargetType.Alive) && cond);
    SetEventFlag(13504743, ON);
    hit = PlayerStandingOnHit(3504020)
        || PlayerStandingOnHit(3504021)
        || PlayerStandingOnHit(3504022)
        || PlayerStandingOnHit(3504023)
        || PlayerStandingOnHit(3504024)
        || PlayerStandingOnHit(3504025)
        || PlayerStandingOnHit(3504026)
        || PlayerStandingOnHit(3504027)
        || PlayerStandingOnHit(3504028)
        || PlayerStandingOnHit(3504029)
        || PlayerStandingOnHit(3504030)
        || PlayerStandingOnHit(3504031)
        || PlayerStandingOnHit(3504032)
        || PlayerStandingOnHit(3504033)
        || PlayerStandingOnHit(3504034)
        || PlayerStandingOnHit(3504035)
        || PlayerStandingOnHit(3504036)
        || PlayerStandingOnHit(3504037)
        || PlayerStandingOnHit(3504038)
        || PlayerStandingOnHit(3504039)
        || PlayerStandingOnHit(3504040)
        || PlayerStandingOnHit(3504041);
    WaitFor(CharacterType(10000, TargetType.Alive) && !cond);
    SetEventFlag(13504743, OFF);
    RestartEvent();
});

// Female hunter_defeat boss
$Event(13501800, Default, function() {
    if (ThisEvent()) {
        ChangeCharacterEnableState(3500800, Disabled);
        ForceCharacterDeath(3500800, false);
        DeactivateObject(3501800, Disabled);
        DeleteMapSFX(3503800, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(3500800));
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(3501800, Disabled);
    DeleteMapSFX(3503800, true);
    SetLockcamSlotNumber(35, 0, 0);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(3500800);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        AwardAchievement(37);
        InitializeEvent(0, 9350, 3);
        SetEventFlag(6675, ON);
        SetEventFlag(3510, ON);
        SetEventFlag(3511, ON);
        SetEventFlag(3512, ON);
        SetEventFlag(3513, ON);
        SetEventFlag(3515, OFF);
        SetEventFlag(3516, OFF);
        SetEventFlag(3517, OFF);
        SetEventFlag(3518, OFF);
        EndTimeMeasurement(3500000);
        EndTimeMeasurement(3500001);
        EndTimeMeasurement(3500010);
        CreatePlaylog(0);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 24, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 24, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 24, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 24, PlayLogMultiplayerType.HostOnly);
        if (EventFlag(maria_defeat+13)) {
            AwardItemLot(17020);
            InitializeEvent(maria_offset, 7800, maria_lamp_id+1000, 835001);
        }
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// Female Hunter_Host enters boss room_First battle
$Event(13501801, Default, function() {
    if (!(!EventFlag(13501800) && !ThisEvent())) {
        DeleteMapSFX(3503820, false);
        EndEvent();
    }
L5:
    ChangeCharacterEnableState(3500800, Disabled);
    if (!EventFlag(maria_defeat+13)) {
        SetEventFlag(13500947, OFF);
        WaitFor(EventFlag(13500947));
    }
    DeleteObjectfollowingSFX(3501905, false);
    DeleteMapSFX(3503820, false);
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    if (!EventFlag(1651)) {
        if (!EventFlag(maria_defeat+13) || EventFlag(12100866)) {
            PlayCutsceneAndWarpPlayer(35000010, CutscenePlayMode.Skippable, 3502808, 35, 0, 10000);
        }
    } else {
L0:
        if (!EventFlag(maria_defeat+13) || EventFlag(12100866)) {
            PlayCutsceneAndWarpPlayer(35000010, CutscenePlayMode.Skippable, 3502808, 35, 0, 10000);
        }
    }
L1:
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    ChangeCharacterEnableState(3500800, Enabled);
    ChangeCharacterEnableState(3500905, Disabled);
    SetCharacterBackreadState(3500905, true);
    SetObjectInvulnerability(3501906, Disabled);
    DeactivateObject(3501907, Disabled);
    DeactivateObject(3501908, Disabled);
    SetEventFlag(13504808, ON);
    SetEventFlag(3510, ON);
    SetEventFlag(3511, ON);
    SetEventFlag(3512, OFF);
    SetEventFlag(3513, OFF);
    SetEventFlag(3515, OFF);
    SetEventFlag(3516, OFF);
    SetEventFlag(3517, OFF);
    SetEventFlag(3518, OFF);
    EndIf(EventFlag(9346));
    InitializeEvent(0, 9350, 1);
    SetEventFlag(9346, ON);
});

// Female hunter_clock face activation
$Event(13501802, Restart, function() {
    SetMapSoundState(3503204, Disabled);
    if (EventFlag(maria_defeat+13)) {
        EndEvent();
    }
    if (ThisEvent()) {
        ReproduceObjectAnimation(3501200, 3);
        ActivateHit(3504800, Disabled);
        SetObjactState(3501201, 3500100, Disabled);
        EndEvent();
    }
L0:
    WaitFor(PlayerHasItem(ItemType.Goods, 4021) && !InArea(10000, 3502803) && ActionButtonInArea(3500912, 3501802));
    RotateCharacter(10000, 3501802, 101340, false);
    WaitFixedTimeFrames(120);
    PlaySE(10000, SoundType.aEnvironmentalSound, 350000012);
    WaitFixedTimeFrames(60);
    ForceAnimationPlayback(3501200, 2, false, true, false);
    ActivateHit(3504800, Disabled);
    SetEventFlag(9468, ON);
});

// Female Hunter_Obtain the clock face key
$Event(13501803, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(13501800));
    CreateObjectfollowingSFX(3501801, 200, 900201);
    WaitFor(ActionButtonInArea(3500911, 3501801));
    ForceAnimationPlayback(10000, 101140, false, false, false);
    if (!EventFlag(13501800+13)) {
        AwardItemLot(3501800);
    }
    DeleteObjectfollowingSFX(3501801, true);
});

// Female Hunter_Lever Msg after clock face activation
$Event(13501804, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(13501802) && ActionButtonInArea(7100, 3501201));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// Female Hunter_Reproduction of OBJ destruction_XX
$Event(13501805, Default, function(X0_4) {
    if (!(EventFlag(13501800) && ThisEventSlot())) {
        WaitFor(ObjectDestroyed(X0_4));
        EndEvent();
    }
L0:
    DeactivateObject(X0_4, Disabled);
    EndEvent();
});

// Female Hunter_Measures for guests entering at different times
$Event(13501807, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13504808));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    ChangeCharacterEnableState(3500800, Enabled);
    ChangeCharacterEnableState(3500905, Disabled);
    SetCharacterBackreadState(3500905, true);
    SetObjectInvulnerability(3501906, Disabled);
    DeactivateObject(3501907, Disabled);
    DeactivateObject(3501908, Disabled);
    SetEventFlag(13504808, ON);
    SetEventFlag(13501801, ON);
});

// Clock Tower_Enlightenment Obtained
$Event(13501810, Default, function() {
    EndIf(ThisEvent());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(PlayerStandingOnHit(3504020));
    InitializeEvent(0, 9350, 2);
});

// Female Hunter_Host enters boss room_Rematch
$Event(13504800, Default, function() {
    EndIf(EventFlag(13501800));
    if (!EventFlag(13501801)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(3501800, Disabled);
            DeleteMapSFX(3503800, false);
        }
        WaitFor(!EventFlag(13501800) && EventFlag(13501801));
        DeactivateObject(3501800, Enabled);
        SpawnMapSFX(3503800);
    }
L0:
    flagChrAct = !EventFlag(13501800) && CharacterType(10000, TargetType.Alive) && ActionButtonInArea(3500800, 3501800);
    flag = EventFlag(13501800);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 3502800, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 3502801);
    chr = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(13504808, ON);
    }
    RestartEvent();
});

// Female Hunter_Guest enters boss room
$Event(13504801, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13501800));
    WaitFor(
        !EventFlag(13501800)
            && EventFlag(13501801)
            && EventFlag(13504808)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(3500800, 3501800));
    RotateCharacter(10000, 3502800, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 3502801);
    chr = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(13504809, ON);
    }
    RestartEvent();
});

// Female Hunter_Boss begins to move
$Event(13504802, Default, function() {
    EndIf(EventFlag(13501800));
    SetCharacterAIState(3500800, Disabled);
    SetCharacterHPBarDisplay(3500800, Disabled);
    if (!ThisEvent()) {
        WaitFor(EventFlag(13504808) || EventFlag(maria_defeat+13));
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            if (!EventFlag(13504810)) {
                IssueBossRoomEntryNotification(0);
            }
            SetNetworkUpdateAuthority(3500800, AuthorityLevel.Forced);
        }
    }
L0:
    SetEventFlag(13504810, ON);
    SetEventFlag(13504808, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(3500800, 7500, false);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3500800);
    Goto(L4);
L3:
    SetSpEffect(3500800, 7501, false);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3500800);
    Goto(L4);
L4:
    if (EventFlag(maria_defeat+13)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(3500800, Enabled);
    DisplayBossHealthBar(Enabled, 3500800, 0, 452000);
    SetCharacterInvincibility(3500800, Disabled);
    SetCharacterEventTarget(3500800, 3500801);
    CreatePlaylog(58);
    StartTimeMeasurement(3500010, 74, Enabled);
});

// Female Hunter_Boss BGM_ON
$Event(13504803, Default, function() {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(3503802, Disabled);
    SetMapSoundState(3503803, Disabled);
    SetMapSoundState(3503804, Disabled);
    DeleteMapSFX(3503501, false);
    EndIf(EventFlag(13501800));
    if (!ThisEvent()) {
        if (!EventFlag(13504811)) {
            flagArea &= !EventFlag(13501800) && EventFlag(13504802);
            if (!HasMultiplayerState(MultiplayerState.Host)) {
                flagArea &= EventFlag(13504809);
            }
            flagArea &= InArea(10000, 3502802);
            WaitFor(flagArea);
            EnableBossMapSound(3503802, Enabled);
            chrFlagArea &= CharacterHasEventMessage(3500800, 100);
        }
L0:
        chrFlagArea &= !EventFlag(13501800) && EventFlag(13504802);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            chrFlagArea &= EventFlag(13504809);
        }
        chrFlagArea &= InArea(10000, 3502802);
        WaitFor(chrFlagArea);
        EnableBossMapSound(3503802, Disabled);
        WaitFixedTimeFrames(0);
        EnableBossMapSound(3503803, Enabled);
        SpawnMapSFX(3503501);
        DeleteMapSFX(3503500, true);
        SetEventFlag(13504811, ON);
        chrFlagArea2 &= CharacterHasEventMessage(3500800, 300);
    }
L1:
    chrFlagArea2 &= !EventFlag(13501800) && EventFlag(13504802);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        chrFlagArea2 &= EventFlag(13504809);
    }
    chrFlagArea2 &= InArea(10000, 3502802);
    WaitFor(chrFlagArea2);
    EnableBossMapSound(3503803, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(3503804, Enabled);
});

// Female Hunter_Boss Camera
$Event(13504804, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13501800));
    WaitFor(!CharacterDead(3500800) && EntityInRadiusOfEntity(10000, 3500800, 8));
    SetLockcamSlotNumber(35, 0, 1);
    WaitFor(CharacterDead(3500800) || !EntityInRadiusOfEntity(10000, 3500800, 10));
    SetLockcamSlotNumber(35, 0, 0);
    RestartEvent();
});

// Female Hunter_Boss BGM_OFF
$Event(13504805, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13501800));
    WaitFor(CharacterDead(3500800));
    EnableBossMapSound(3503802, Disabled);
    EnableBossMapSound(3503803, Disabled);
    EnableBossMapSound(3503804, Disabled);
    EnableBossMapSound(-1, Disabled);
    SpawnMapSFX(3503500);
    DeleteMapSFX(3503501, true);
});

// Female Hunter_Disabled by fog wall in other people's world
$Event(13504806, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 3501800, 6));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Female Hunter_Invalidity per fog wall in other people's world 2
$Event(13504807, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 3501800, 6)
            && EntityInRadiusOfEntity(10000, 3501800, 12));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Female hunter_reinforcement release
$Event(13504822, Default, function() {
    EndIf(EventFlag(13501800));
    WaitFor(CharacterHasEventMessage(3500800, 20));
    ClearSpEffect(3500800, 5526);
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

// Patient B_Defeat the boss
$Event(13501850, Default, function() {
    if (ThisEvent()) {
        ChangeCharacterEnableState(3500850, Disabled);
        ChangeCharacterEnableState(3500851, Disabled);
        ChangeCharacterEnableState(3500852, Disabled);
        ChangeCharacterEnableState(3500853, Disabled);
        ChangeCharacterEnableState(3500854, Disabled);
        ForceCharacterDeath(3500850, false);
        ForceCharacterDeath(3500851, false);
        ForceCharacterDeath(3500852, false);
        ForceCharacterDeath(3500853, false);
        ForceCharacterDeath(3500854, false);
        DeactivateObject(3501810, Disabled);
        DeleteMapSFX(3503810, true);
        EndEvent();
    }
L0:
    WaitFor(HPRatio(3500850) == 0);
    DisplayBanner(TextBannerType.DemonKilled);
    DeactivateObject(3501810, Disabled);
    DeleteMapSFX(3503810, true);
    SetLockcamSlotNumber(35, 0, 0);
    ActivateHit(3504812, Enabled);
    ActivateHit(3504814, Disabled);
    WaitFixedTimeSeconds(3);
    HandleBossDefeat(3500850);
    SetNetworkSyncState(Disabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        WaitFor(CharacterType(10000, TargetType.Alive));
        AwardAchievement(38);
        InitializeEvent(0, 9350, 2);
        if (!EventFlag(living_failures_defeat+13)) {
            AwardItemLot(3501850);
        }
        SetEventFlag(3510, ON);
        SetEventFlag(3511, ON);
        SetEventFlag(3512, ON);
        SetEventFlag(3513, OFF);
        SetEventFlag(3515, OFF);
        SetEventFlag(3516, OFF);
        SetEventFlag(3517, ON);
        SetEventFlag(3518, OFF);
        EndTimeMeasurement(3500002);
        EndTimeMeasurement(3500003);
        EndTimeMeasurement(3500011);
        CreatePlaylog(90);
        ParameterOutput(PlayerPlayLogParameter.PrimaryParameters, 108, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.TemporaryParameters, 108, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Weapon, 108, PlayLogMultiplayerType.HostOnly);
        ParameterOutput(PlayerPlayLogParameter.Armor, 108, PlayLogMultiplayerType.HostOnly);
        if (EventFlag(living_failures_defeat+13)) {
            AwardItemLot(17020);
            InitializeEvent(living_failures_offset, 7800, living_failures_lamp_id+1000, 835002);
        }
        EndEvent();
    }
L1:
    WaitFor(CharacterType(10000, TargetType.WhitePhantom));
    WaitFixedTimeSeconds(0);
});

// Patient B_Host enters boss room_First battle
$Event(13501851, Default, function() {
    SetMapSoundState(3503211, Disabled);
    SetMapSoundState(3503212, Disabled);
    EndIf(EventFlag(13501850));
    EndIf(ThisEvent());
    ForceAnimationPlayback(3500851, 9000, true, false, false);
    WaitFor(!EventFlag(13501850) && !ThisEvent() && CharacterType(10000, TargetType.Alive) && InArea(10000, 3502815));
    PlaySE(10000, SoundType.aEnvironmentalSound, 350000020);
    ForceAnimationPlayback(3500851, 9060, false, false, false);
    RequestCharacterAIReplan(3500851);
    SetEventFlag(13504858, ON);
    EndIf(EventFlag(9348));
    InitializeEvent(0, 9350, 2);
    SetEventFlag(9348, ON);
});

// Patient B_Treatment process for guests entering at different times
$Event(13501852, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13504858));
    EndIf(HasMultiplayerState(MultiplayerState.Host));
    SetEventFlag(13504858, ON);
    SetEventFlag(13501851, ON);
});

// Patient B_Host enters boss room_Rematch
$Event(13504850, Default, function() {
    EndIf(EventFlag(13501850));
    if (!EventFlag(13501851)) {
        if (!HasMultiplayerState(MultiplayerState.Client)) {
            DeactivateObject(3501810, Disabled);
            DeleteMapSFX(3503810, false);
        }
        WaitFor(!EventFlag(13501850) && EventFlag(13501851));
        DeactivateObject(3501810, Enabled);
        SpawnMapSFX(3503810);
    }
L0:
    flagChrAct = !EventFlag(13501850) && CharacterType(10000, TargetType.Alive) && ActionButtonInArea(3500850, 3501810);
    flag = EventFlag(13501850);
    WaitFor(flagChrAct || flag);
    EndIf(flag.Passed);
    RotateCharacter(10000, 3502810, 101130, false);
    chrArea = CharacterType(10000, TargetType.Alive) && InArea(10000, 3502811);
    chr = CharacterType(10000, TargetType.Alive) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(13504858, ON);
    }
    RestartEvent();
});

// Patient B_guest enters boss room
$Event(13504851, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13501850));
    WaitFor(
        !EventFlag(13501850)
            && EventFlag(13501851)
            && EventFlag(13504858)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(3500850, 3501810));
    RotateCharacter(10000, 3502810, 101130, false);
    chrArea = CharacterType(10000, TargetType.WhitePhantom) && InArea(10000, 3502811);
    chr = CharacterType(10000, TargetType.WhitePhantom) && ElapsedSeconds(2);
    WaitFor(chrArea || chr);
    if (!chr.Passed) {
        SetEventFlag(13504859, ON);
    }
    RestartEvent();
});

// Patient B_Boss starts moving
$Event(13504852, Default, function() {
    EndIf(EventFlag(13501850));
    SetCharacterGravity(3500850, Disabled);
    SetCharacterAIState(3500850, Disabled);
    SetCharacterAIState(3500851, Disabled);
    SetCharacterAIState(3500852, Disabled);
    SetCharacterAIState(3500853, Disabled);
    SetCharacterAIState(3500854, Disabled);
    SetCharacterAIState(3500860, Disabled);
    SetCharacterHPBarDisplay(3500850, Disabled);
    SetCharacterHPBarDisplay(3500851, Disabled);
    SetCharacterHPBarDisplay(3500852, Disabled);
    SetCharacterHPBarDisplay(3500853, Disabled);
    SetCharacterHPBarDisplay(3500854, Disabled);
    CreateReferredDamagePair(3500851, 3500850);
    CreateReferredDamagePair(3500852, 3500850);
    CreateReferredDamagePair(3500853, 3500850);
    CreateReferredDamagePair(3500854, 3500850);
    if (!ThisEvent()) {
        WaitFor(EventFlag(13504858) || EventFlag(living_failures_defeat+13));
        GotoIf(L0, HasMultiplayerState(MultiplayerState.Client));
        GotoIf(S0, EventFlag(13504860));
        IssueBossRoomEntryNotification(0);
    }
S0:
L0:
    SetEventFlag(13504860, ON);
    SetEventFlag(13504858, ON);
    GotoIf(L1, NumberOfCoopClients() == 0);
    GotoIf(L2, NumberOfCoopClients() == 1);
    GotoIf(L3, NumberOfCoopClients() == 2);
L1:
    Goto(L4);
L2:
    SetSpEffect(3500850, 7500, false);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3500850);
    Goto(L4);
L3:
    SetSpEffect(3500850, 7501, false);
    WaitFixedTimeFrames(1);
    AdaptHpchangingSpEffectToNPCPartOfTarget(3500850);
    Goto(L4);
L4:
    if (EventFlag(living_failures_defeat+13)) {
        WaitFixedTimeSeconds(2);
    }
    SetCharacterAIState(3500851, Enabled);
    SetCharacterAIState(3500852, Enabled);
    SetCharacterAIState(3500853, Enabled);
    SetCharacterAIState(3500854, Enabled);
    SetCharacterAIState(3500860, Enabled);
    if (!HasMultiplayerState(MultiplayerState.Client)) {
        SetNetworkUpdateAuthority(3500851, AuthorityLevel.Forced);
        SetNetworkUpdateAuthority(3500852, AuthorityLevel.Forced);
        SetNetworkUpdateAuthority(3500853, AuthorityLevel.Forced);
        SetNetworkUpdateAuthority(3500854, AuthorityLevel.Forced);
        SetNetworkUpdateAuthority(3500860, AuthorityLevel.Forced);
    }
    DisplayBossHealthBar(Enabled, 3500850, 0, 403000);
    CreatePlaylog(136);
    StartTimeMeasurement(3500011, 158, Enabled);
});

// Patient B_Boss BGM_ON
$Event(13504853, Default, function() {
    SetNetworkSyncState(Disabled);
    SetMapSoundState(3503812, Disabled);
    SetMapSoundState(3503813, Disabled);
    SetMapSoundState(3503814, Disabled);
    EndIf(EventFlag(13501800));
    if (!ThisEvent()) {
        flagArea &= !EventFlag(13501850) && EventFlag(13504852);
        if (!HasMultiplayerState(MultiplayerState.Host)) {
            flagArea &= EventFlag(13504859);
        }
        flagArea &= InArea(10000, 3502812);
        WaitFor(flagArea);
        EnableBossMapSound(3503812, Enabled);
        flagArea2 &= EventFlag(13504870);
    }
L0:
    flagArea2 &= !EventFlag(13501850) && EventFlag(13504852);
    if (!HasMultiplayerState(MultiplayerState.Host)) {
        flagArea2 &= EventFlag(13504859);
    }
    flagArea2 &= InArea(10000, 3502812);
    WaitFor(flagArea2);
    EnableBossMapSound(3503812, Disabled);
    WaitFixedTimeFrames(0);
    EnableBossMapSound(3503813, Enabled);
});

// Patient B_Boss camera
$Event(13504854, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13501850));
    WaitFor(
        !CharacterDead(3500850)
            && (EntityInRadiusOfEntity(10000, 3500851, 8)
                || EntityInRadiusOfEntity(10000, 3500852, 8)
                || EntityInRadiusOfEntity(10000, 3500853, 8)
                || EntityInRadiusOfEntity(10000, 3500854, 8)));
    SetLockcamSlotNumber(35, 0, 1);
    WaitFor(
        CharacterDead(3500850)
            || (!EntityInRadiusOfEntity(10000, 3500851, 10)
                && !EntityInRadiusOfEntity(10000, 3500852, 10)
                && !EntityInRadiusOfEntity(10000, 3500853, 10)
                && !EntityInRadiusOfEntity(10000, 3500854, 10)));
    SetLockcamSlotNumber(35, 0, 0);
    RestartEvent();
});

// Patient B_Boss BGM_OFF
$Event(13504855, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13501850));
    WaitFor(CharacterDead(3500850));
    EnableBossMapSound(3503812, Disabled);
    EnableBossMapSound(3503813, Disabled);
    EnableBossMapSound(-1, Disabled);
});

// Patient B_Disabled due to fog wall in other people's world
$Event(13504856, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EntityInRadiusOfEntity(10000, 3501810, 6));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Disabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Patient B_Disabled by fog wall in other people's world 2
$Event(13504857, Default, function() {
    WaitFor(
        CharacterType(10000, TargetType.Alive)
            && !EntityInRadiusOfEntity(10000, 3501810, 6)
            && EntityInRadiusOfEntity(10000, 3501810, 12));
    SetCharacterGravityMaphitStateExcludingOwnWorld(10000, Enabled);
    WaitFixedTimeFrames(6);
    RestartEvent();
});

// Patient B_Great skill charge magic_Effect activated
$Event(13504865, Default, function() {
    WaitFor(
        (CharacterHasEventMessage(3500851, 50)
            || CharacterHasEventMessage(3500852, 50)
            || CharacterHasEventMessage(3500853, 50)
            || CharacterHasEventMessage(3500854, 50))
            && CharacterType(10000, TargetType.Alive));
    SetEventFlag(13504870, ON);
    WaitFor(
        (CharacterHasEventMessage(3500851, 30)
            || CharacterHasEventMessage(3500852, 30)
            || CharacterHasEventMessage(3500853, 30)
            || CharacterHasEventMessage(3500854, 30))
            && CharacterType(10000, TargetType.Alive));
    SetSpEffect(10000, 8035, false);
    SpawnMapSFX(3503854);
    SetEventFlag(13504866, ON);
    WaitFor(!EventFlag(13504866));
L0:
    DeleteMapSFX(3503854, true);
    ClearSpEffect(10000, 8035);
    RestartEvent();
});

// Patient B_Choose who will do the charge magic or the big skill charge magic
$Event(13504880, Default, function() {
    SetNetworkSyncState(Disabled);
    DeleteMapSFX(3503850, false);
    DeleteMapSFX(3503851, false);
    DeleteMapSFX(3503852, false);
    DeleteMapSFX(3503853, false);
    DeleteMapSFX(3503854, false);
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (!EventFlag(13504869)) {
        RandomlySetEventFlagInRange(13504873, 13504874, ON);
    } else {
L0:
        if (!EventFlag(13504868)) {
            RandomlySetEventFlagInRange(13504875, 13504878, ON);
            SetEventFlag(13504868, ON);
        } else {
L1:
            RandomlySetEventFlagInRange(13504873, 13504878, ON);
            Goto(L2);
        }
    }
L2:
    WaitFor(!AnyBatchEventFlags(13504873, 13504878));
    WaitFixedTimeFrames(900);
    RestartEvent();
});

// Patient B_Tame magic cool event
$Event(13504881, Default, function() {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(AnyBatchEventFlags(13504873, 13504878));
    WaitFixedTimeSeconds(5);
    WaitFor(
        !CharacterHasSpEffect(3500851, 8069)
            && !CharacterHasSpEffect(3500852, 8069)
            && !CharacterHasSpEffect(3500853, 8069)
            && !CharacterHasSpEffect(3500854, 8069)
            && !CharacterHasSpEffect(3500851, 8070)
            && !CharacterHasSpEffect(3500852, 8070)
            && !CharacterHasSpEffect(3500853, 8070)
            && !CharacterHasSpEffect(3500854, 8070));
    BatchSetEventFlags(13504873, 13504878, OFF);
    RequestCharacterAIReplan(3500851);
    RequestCharacterAIReplan(3500852);
    RequestCharacterAIReplan(3500853);
    RequestCharacterAIReplan(3500854);
    RestartEvent();
});

// Patient B_Make charge magic_XX
$Event(13504885, Default, function(X0_4, X4_4) {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(X4_4));
    RequestCharacterAICommand(X0_4, 110, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(!EventFlag(X4_4));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    RestartEvent();
});

// Patient B_Do a big trick magic_XX
$Event(13504890, Default, function(X0_4) {
    SetNetworkSyncState(Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(AnyBatchEventFlags(13504875, 13504878));
    if (!(CharacterHasSpEffect(X0_4, 52) || CharacterHasSpEffect(X0_4, 57))) {
        ForceAnimationPlayback(X0_4, 3013, false, false, false);
    }
    RequestCharacterAICommand(X0_4, 120, 0);
    RequestCharacterAIReplan(X0_4);
    WaitFor(!AnyBatchEventFlags(13504875, 13504878));
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    RestartEvent();
});

// Patient B_All dead_XX
$Event(13504895, Default, function(X0_4) {
    SetNetworkSyncState(Disabled);
    EndIf(EventFlag(13501850));
    WaitFor(HPRatio(3500850) == 0);
    ForceCharacterDeath(X0_4, true);
});

// Patient B_Generate control
$Event(13505655, Default, function() {
    SetNetworkSyncState(Disabled);
    if (!EventFlag(13501850)) {
        if (!ThisEvent()) {
            WaitFor(EventFlag(13504852));
            SetEventFlag(13505669, ON);
            WaitFixedTimeSeconds(3);
            WaitFor(ElapsedSeconds(5) || (EventValue(13505690, 3) == 0 && !EventFlag(13505669)));
            if (!EventFlag(13504895)) {
                SetEventFlag(13505668, ON);
                WaitFixedTimeSeconds(1);
                WaitFor(
                    ElapsedSeconds(20)
                        || (ElapsedSeconds(10) && EventValue(13505690, 3) == 1 && !EventFlag(13505669))
                        || (EventValue(13505690, 3) == 0 && !EventFlag(13505669)));
                if (!EventFlag(13504895)) {
                    SetEventFlag(13505668, ON);
                    WaitFixedTimeSeconds(1);
                    WaitFor(
                        ElapsedSeconds(20)
                            || (ElapsedSeconds(10) && EventValue(13505690, 3) == 2 && !EventFlag(13505669))
                            || (ElapsedSeconds(5) && EventValue(13505690, 3) == 1 && !EventFlag(13505669))
                            || (EventValue(13505690, 3) == 0 && !EventFlag(13505669)));
                    if (!EventFlag(13504895)) {
                        SetEventFlag(13505668, ON);
                        WaitFixedTimeSeconds(1);
                        WaitFor(
                            (ElapsedSeconds(15) && EventValue(13505690, 3) == 3 && !EventFlag(13505669))
                                || (ElapsedSeconds(10) && EventValue(13505690, 3) == 2 && !EventFlag(13505669))
                                || (ElapsedSeconds(5) && EventValue(13505690, 3) == 1 && !EventFlag(13505669))
                                || (EventValue(13505690, 3) == 0 && !EventFlag(13505669)));
                        GotoIf(L1, EventFlag(13504895));
                        SetEventFlag(13505668, ON);
                    }
                }
            }
        }
L0:
        WaitFixedTimeSeconds(1);
        WaitFor(
            (ElapsedSeconds(9) && EventValue(13505690, 3) == 3 && !EventFlag(13505669))
                || (ElapsedSeconds(6) && EventValue(13505690, 3) == 2 && !EventFlag(13505669))
                || (ElapsedSeconds(3) && EventValue(13505690, 3) == 1 && !EventFlag(13505669))
                || (EventValue(13505690, 3) == 0 && !EventFlag(13505669)));
        if (!EventFlag(13504895)) {
            SetEventFlag(13505668, ON);
            if (HPRatio(3500850) < 0.6) {
                SetEventFlag(13504869, ON);
            }
            RestartEvent();
        }
    }
L1:
    DeactivateGenerator(3503814, Disabled);
    DeactivateGenerator(3503815, Disabled);
    DeactivateGenerator(3503816, Disabled);
    DeactivateGenerator(3503817, Disabled);
    EndEvent();
});

// Patient B_Body count start_XX
$Event(13505656, Default, function(X0_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(!CharacterDead(X0_4) && CharacterAIState(X0_4, AIStateType.Combat));
    SetEventFlag(13505669, ON);
    WaitFor(CharacterDead(X0_4));
    SetEventFlag(13505669, ON);
    RestartEvent();
});

// Patient B_Body count
$Event(13505661, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(EventFlag(13505669));
    ClearEventValue(13505690, 3);
    if (CharacterAIState(3500851, AIStateType.Combat) && !CharacterDead(3500851)) {
        IncrementEventValue(13505690, 3, 6);
    }
    if (CharacterAIState(3500852, AIStateType.Combat) && !CharacterDead(3500852)) {
        IncrementEventValue(13505690, 3, 6);
    }
    if (CharacterAIState(3500853, AIStateType.Combat) && !CharacterDead(3500853)) {
        IncrementEventValue(13505690, 3, 6);
    }
    if (CharacterAIState(3500854, AIStateType.Combat) && !CharacterDead(3500854)) {
        IncrementEventValue(13505690, 3, 6);
    }
    SetEventFlag(13505669, OFF);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// Patient B_generate execution
$Event(13505662, Default, function() {
    WaitFor(EventFlag(13505668));
    if (!(CharacterType(10000, TargetType.Alive)
        && CharacterAIState(3500852, AIStateType.Combat)
        && !CharacterDead(3500852))) {
        DeactivateGenerator(3503815, Enabled);
    } else {
        if (!(CharacterType(10000, TargetType.Alive)
            && CharacterAIState(3500853, AIStateType.Combat)
            && !CharacterDead(3500853))) {
            DeactivateGenerator(3503816, Enabled);
        } else {
            if (!(CharacterType(10000, TargetType.Alive)
                && CharacterAIState(3500854, AIStateType.Combat)
                && !CharacterDead(3500854))) {
                DeactivateGenerator(3503817, Enabled);
            } else {
                GotoIf(S0, 
                    CharacterType(10000, TargetType.Alive)
                        && CharacterAIState(3500851, AIStateType.Combat)
                        && !CharacterDead(3500851));
                DeactivateGenerator(3503814, Enabled);
                Goto(L0);
            }
        }
    }
S0:
L0:
    WaitFixedTimeSeconds(3);
    DeactivateGenerator(3503814, Disabled);
    DeactivateGenerator(3503815, Disabled);
    DeactivateGenerator(3503816, Disabled);
    DeactivateGenerator(3503817, Disabled);
    SetEventFlag(13505669, ON);
    SetEventFlag(13505668, OFF);
    RestartEvent();
});

// Patient B_Meteorite_Live ammunition_XX
$Event(13505670, Default, function(X0_4, X4_4, X8_4, X12_4) {
    WaitFor(EventFlag(13504866) && !CharacterDead(X12_4));
    WaitFixedTimeFrames(X8_4);
    ShootBullet(X12_4, X0_4, 200, X4_4, 0, 0, 0);
    WaitFixedTimeFrames(180);
    RestartEvent();
});

// Patient B_Meteor_Bullet firing
$Event(13505680, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13504866));
    ClearEventValue(13505694, 3);
    if (CharacterHasSpEffect(3500851, 8070)) {
        IncrementEventValue(13505694, 3, 10);
    }
    if (CharacterHasSpEffect(3500852, 8070)) {
        IncrementEventValue(13505694, 3, 10);
    }
    if (CharacterHasSpEffect(3500853, 8070)) {
        IncrementEventValue(13505694, 3, 10);
    }
    if (CharacterHasSpEffect(3500854, 8070)) {
        IncrementEventValue(13505694, 3, 10);
    }
    if (EventValue(13505694, 3) == 1) {
        RequestCharacterAICommand(3500860, 10, 0);
    }
    if (EventValue(13505694, 3) == 2) {
        RequestCharacterAICommand(3500860, 20, 0);
    }
    if (EventValue(13505694, 3) == 3) {
        RequestCharacterAICommand(3500860, 30, 0);
    }
    if (EventValue(13505694, 3) == 4) {
        RequestCharacterAICommand(3500860, 40, 0);
    }
    RequestCharacterAIReplan(3500860);
    sp = !CharacterHasSpEffect(3500851, 8070)
        && !CharacterHasSpEffect(3500852, 8070)
        && !CharacterHasSpEffect(3500853, 8070)
        && !CharacterHasSpEffect(3500854, 8070);
    WaitFor(
        sp
            || (CharacterHasEventMessage(3500851, 40)
                || CharacterHasEventMessage(3500852, 40)
                || CharacterHasEventMessage(3500853, 40)
                || CharacterHasEventMessage(3500854, 40)));
    if (!sp.Passed) {
        WaitFixedTimeFrames(600);
    }
    RequestCharacterAICommand(3500860, -1, 0);
    RequestCharacterAIReplan(3500860);
    ForceAnimationPlayback(3500860, 0, false, false, false);
    SetEventFlag(13504866, OFF);
    RestartEvent();
});

// Clock Tower_SC Elevator 0_Altar_Initialization
$Event(13501100, Default, function() {
    if (EventFlag(13504100)) {
        ActivateHitres(3504100, Disabled);
        ActivateHitres(3504101, Disabled);
        EndEvent();
    }
    if (!EventFlag(13501108)) {
        SetEventFlag(13501106, OFF);
        SetEventFlag(13501107, OFF);
        ReproduceObjectAnimation(3501100, 0);
        ReproduceObjectAnimation(3501104, 0);
        ReproduceObjectAnimation(3501108, 0);
        SetObjactState(3501101, 100, Disabled);
        SetObjactState(3501102, 100, Disabled);
        SetObjactState(3501103, 100, Disabled);
        ActivateHitres(3504101, Disabled);
        ActivateHit(3504301, Disabled);
        ActivateHit(3504302, Disabled);
        EndEvent();
    }
L0:
    if (!EventFlag(13501106)) {
        SetEventFlag(13501107, OFF);
        ReproduceObjectAnimation(3501100, 0);
        ReproduceObjectAnimation(3501104, 0);
        ReproduceObjectAnimation(3501108, 0);
        SetObjactState(3501101, 100, Enabled);
        SetObjactState(3501102, 100, Disabled);
        SetObjactState(3501103, 100, Disabled);
        ActivateHitres(3504101, Disabled);
        ActivateHit(3504301, Disabled);
        ActivateHit(3504302, Disabled);
        EndEvent();
    }
L1:
    SetEventFlag(13501107, ON);
    ReproduceObjectAnimation(3501100, 2);
    ReproduceObjectAnimation(3501104, 2);
    ReproduceObjectAnimation(3501108, 2);
    SetObjactState(3501101, 100, Disabled);
    SetObjactState(3501102, 100, Enabled);
    SetObjactState(3501103, 100, Enabled);
    ActivateHitres(3504100, Disabled);
    ActivateHit(3504300, Disabled);
    ActivateHit(3504301, Disabled);
});

// Clock Tower_SC Elevator 0_Altar_Host state management
$Event(13501101, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13501108) && EventFlag(13504100));
    if (!EventFlag(13501106)) {
        SetEventFlag(13501107, OFF);
    } else {
        SetEventFlag(13501107, ON);
    }
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13501108) && !EventFlag(13504100));
    RestartEvent();
});

// Clock Tower_SC Elevator 0_Altar_Go up
$Event(13501102, Default, function() {
    if (EventFlag(13504100) && EventFlag(13501106)) {
        SetObjactState(3501101, 100, Disabled);
        SetObjactState(3501102, 100, Disabled);
        SetObjactState(3501103, 100, Disabled);
        ActivateHit(3504301, Enabled);
        ActivateHit(3504302, Enabled);
        ActivateHitres(3504100, Disabled);
        ActivateHitres(3504101, Enabled);
        ActivateHit(3504300, Disabled);
        ActivateHit(3504301, Disabled);
        ReproduceObjectAnimation(3501108, 1);
        ReproduceObjectAnimation(3501104, 1);
        ReproduceObjectAnimation(3501100, 1);
    } else {
L0:
        WaitFor(
            EventFlag(13501108)
                && !EventFlag(13504100)
                && !EventFlag(13501106)
                && (InArea(10000, 3502102)
                    || InArea(10000, 3502103)
                    || ObjActEventFlag(13504101)
                    || (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 13501107) && EventFlag(13501107))));
        SetEventFlag(13504100, ON);
        SetEventFlag(13501106, ON);
        SetObjactState(3501101, 100, Disabled);
        SetObjactState(3501102, 100, Disabled);
        SetObjactState(3501103, 100, Disabled);
        ActivateHit(3504301, Enabled);
        ActivateHit(3504302, Enabled);
        ForceAnimationPlayback(3501108, 1, false, false, false);
        ForceAnimationPlayback(3501104, 1, false, false, false);
        ForceAnimationPlayback(3501100, 1, false, true, false);
        ActivateHitres(3504100, Disabled);
        ActivateHitres(3504101, Enabled);
        ActivateHit(3504300, Disabled);
        ActivateHit(3504301, Disabled);
    }
L1:
    WaitFor(!AllPlayersInArea(3502101) && !AllPlayersInArea(3502102));
    WaitFixedTimeSeconds(1);
    SetEventFlag(13504100, OFF);
    SetObjactState(3501101, 100, Disabled);
    SetObjactState(3501102, 100, Enabled);
    SetObjactState(3501103, 100, Enabled);
    RestartEvent();
});

// Clock Tower_SC Elevator 0_Altar_Down
$Event(13501103, Default, function() {
    if (EventFlag(13504100) && !EventFlag(13501106)) {
        SetObjactState(3501101, 100, Disabled);
        SetObjactState(3501102, 100, Disabled);
        SetObjactState(3501103, 100, Disabled);
        ActivateHit(3504300, Enabled);
        ActivateHit(3504301, Enabled);
        ActivateHitres(3504101, Disabled);
        ActivateHitres(3504100, Enabled);
        ActivateHit(3504301, Disabled);
        ActivateHit(3504302, Disabled);
        ReproduceObjectAnimation(3501108, 3);
        ReproduceObjectAnimation(3501104, 3);
        ReproduceObjectAnimation(3501100, 3);
    } else {
L0:
        WaitFor(
            EventFlag(13501108)
                && !EventFlag(13504100)
                && EventFlag(13501106)
                && (InArea(10000, 3502101)
                    || ObjActEventFlag(13504102)
                    || ObjActEventFlag(13504103)
                    || (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 13501107) && !EventFlag(13501107))));
        SetEventFlag(13504100, ON);
        SetEventFlag(13501106, OFF);
        SetObjactState(3501101, 100, Disabled);
        SetObjactState(3501102, 100, Disabled);
        SetObjactState(3501103, 100, Disabled);
        ActivateHit(3504300, Enabled);
        ActivateHit(3504301, Enabled);
        ForceAnimationPlayback(3501108, 3, false, false, false);
        ForceAnimationPlayback(3501104, 3, false, false, false);
        ForceAnimationPlayback(3501100, 3, false, true, false);
        ActivateHitres(3504101, Disabled);
        ActivateHitres(3504100, Enabled);
        ActivateHit(3504301, Disabled);
        ActivateHit(3504302, Disabled);
    }
L1:
    WaitFor(!AllPlayersInArea(3502102) && !AllPlayersInArea(3502103));
    WaitFixedTimeSeconds(1);
    SetEventFlag(13504100, OFF);
    SetObjactState(3501101, 100, Enabled);
    SetObjactState(3501102, 100, Disabled);
    SetObjactState(3501103, 100, Disabled);
    RestartEvent();
});

// Clock Tower_SC elevator 0_Altar_Call lever cannot be operated
$Event(13501104, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(13501108) && ActionButtonInArea(7100, 3501101))
            || (!EventFlag(13501108) && ActionButtonInArea(7100, 3501102))
            || (!EventFlag(13501108) && ActionButtonInArea(7100, 3501103))
            || (EventFlag(13504100) && ActionButtonInArea(7100, 3501101))
            || (EventFlag(13504100) && ActionButtonInArea(7100, 3501102))
            || (EventFlag(13504100) && ActionButtonInArea(7100, 3501103))
            || (EventFlag(13501106) && ActionButtonInArea(7100, 3501101))
            || (!EventFlag(13501106) && ActionButtonInArea(7100, 3501102))
            || (!EventFlag(13501106) && ActionButtonInArea(7100, 3501103)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// Clock Tower_SC elevator 0_Altar_First activation
$Event(13501105, Default, function() {
    EndIf(EventFlag(13501108));
    WaitFor(PlayerHasItem(ItemType.Goods, 4017) && ActionButtonInArea(3500101, 3501100));
    SetEventFlag(9180, ON);
    WaitFixedTimeFrames(1);
    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
        PlayCutsceneAndWarpPlayer(35000000, CutscenePlayMode.Skippable, 3502104, 35, 0, 10000);
    } else {
        if (CharacterType(10000, TargetType.Alive)) {
            PlayCutsceneAndWarpPlayer(35000000, CutscenePlayMode.Unskippable, 3502104, 35, 0, 10000);
        } else {
            if (!InArea(10000, 3502102)) {
                PlayCutsceneToPlayer(35000000, CutscenePlayMode.Unskippable, 10000);
            } else {
                RandomlySetEventFlagInRange(13505830, 13505833, ON);
                if (EventFlag(13505830)) {
                    PlayCutsceneAndWarpPlayer(35000000, CutscenePlayMode.Unskippable, 3502124, 35, 0, 10000);
                } else {
                    if (EventFlag(13505831)) {
                        PlayCutsceneAndWarpPlayer(35000000, CutscenePlayMode.Unskippable, 3502125, 35, 0, 10000);
                    } else {
                        if (EventFlag(13505832)) {
                            PlayCutsceneAndWarpPlayer(35000000, CutscenePlayMode.Unskippable, 3502126, 35, 0, 10000);
                        } else {
                            GotoIf(S0, !EventFlag(13505833));
                            PlayCutsceneAndWarpPlayer(35000000, CutscenePlayMode.Unskippable, 3502127, 35, 0, 10000);
                            Goto(L0);
                        }
                    }
                }
            }
        }
    }
S0:
L0:
    WaitFixedTimeFrames(1);
    SetEventFlag(9180, OFF);
    ReproduceObjectAnimation(3501100, 2);
    ReproduceObjectAnimation(3501104, 2);
    ReproduceObjectAnimation(3501108, 2);
    SetEventFlag(13501106, ON);
    SetEventFlag(13501107, ON);
    SetObjactState(3501101, 100, Disabled);
    SetObjactState(3501102, 100, Enabled);
    ActivateHitres(3504100, Disabled);
    ActivateHitres(3504101, Enabled);
    ActivateHit(3504300, Disabled);
    ActivateHit(3504302, Enabled);
    SetEventFlag(13501108, ON);
    InitializeEvent(0, 13501101, 0);
    InitializeEvent(0, 13501102, 0);
    InitializeEvent(0, 13501103, 0);
    SetEventState(13501104, 0, EventEndType.Restart);
});

// Clock Tower_SC Elevator 0_Altar_Examine
$Event(13501140, Default, function() {
    EndIf(!chrItemFlagAct);
    chrItemFlagAct = CharacterType(10000, TargetType.Alive)
        && !PlayerHasItem(ItemType.Goods, 4017)
        && !EventFlag(13501105)
        && ActionButtonInArea(3500100, 3501100);
    WaitFor(chrItemFlagAct);
    DisplayGenericDialog(10010601, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// Clock Tower_SC Elevator 0_Altar_Examine the skull
$Event(13501141, Default, function() {
    if (!EventFlag(53502000)) {
        WaitFor(CharacterType(10000, TargetType.Alive) && ActionButtonInArea(3500102, 3501104));
        ForceAnimationPlayback(10000, 101140, false, false, false);
        AwardItemLot(3502000);
        SetEventFlag(13401852, ON);
        SetEventFlag(3400, OFF);
        SetEventFlag(3401, OFF);
        SetEventFlag(3402, ON);
        SetEventFlag(3403, OFF);
    }
L0:
    DeactivateObject(3501104, Disabled);
});

// Clock Tower_SC elevator 0_Altar_Examine the skull_SFX
$Event(13501142, Default, function() {
    if (!EventFlag(53502000)) {
        EndIf(!CharacterType(10000, TargetType.Alive));
        CreateObjectfollowingSFX(3501104, 200, 900201);
        WaitFor(EventFlag(53502000));
    }
L0:
    DeleteObjectfollowingSFX(3501104, true);
});

// Clock Tower_SC Elevator 1_1F⇔3F_Initialization
$Event(13501110, Default, function() {
    EndIf(EventFlag(13504110));
    GotoIf(L0, EventFlag(13501118));
    SetEventFlag(13501116, ON);
    SetEventFlag(13501117, ON);
    ReproduceObjectAnimation(3501105, 0);
    SetObjactState(3501106, 100, Disabled);
    SetObjactState(3501107, 100, Disabled);
    Goto(L2);
L0:
    if (!EventFlag(13501116)) {
        SetEventFlag(13501117, OFF);
        ReproduceObjectAnimation(3501105, 4);
        SetObjactState(3501106, 100, Enabled);
        SetObjactState(3501107, 100, Disabled);
        EndEvent();
    }
L1:
    SetEventFlag(13501117, ON);
    ReproduceObjectAnimation(3501105, 0);
    SetObjactState(3501106, 100, Disabled);
    SetObjactState(3501107, 100, Enabled);
});

// Clock Tower_SC Elevator 1_1F⇔3F_Host status management
$Event(13501111, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13501118) && EventFlag(13504110));
    if (!EventFlag(13501116)) {
        SetEventFlag(13501117, OFF);
    } else {
        SetEventFlag(13501117, ON);
    }
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13501118) && !EventFlag(13504110));
    RestartEvent();
});

// Clock Tower_SC Elevator 1_1F⇔3F_Go up
$Event(13501112, Default, function() {
    if (EventFlag(13504110) && EventFlag(13501116)) {
        SetObjactState(3501106, 100, Disabled);
        SetObjactState(3501107, 100, Disabled);
        ReproduceObjectAnimation(3501105, 6);
    } else {
L0:
        WaitFor(
            EventFlag(13501118)
                && !EventFlag(13504110)
                && !EventFlag(13501116)
                && (InArea(10000, 3502107)
                    || ObjActEventFlag(13504111)
                    || (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 13501117) && EventFlag(13501117))));
        SetEventFlag(13504110, ON);
        SetEventFlag(13501116, ON);
        SetObjactState(3501106, 100, Disabled);
        SetObjactState(3501107, 100, Disabled);
        ForceAnimationPlayback(3501105, 5, false, true, false);
        ForceAnimationPlayback(3501105, 6, false, true, false);
    }
L1:
    WaitFor(!AllPlayersInArea(3502106));
    SetEventFlag(13504110, OFF);
    ForceAnimationPlayback(3501105, 7, false, true, false);
    SetObjactState(3501106, 100, Disabled);
    SetObjactState(3501107, 100, Enabled);
    RestartEvent();
});

// Clock Tower_SC Elevator 1_1F⇔3F_Down
$Event(13501113, Default, function() {
    if (EventFlag(13504110) && !EventFlag(13501116)) {
        SetObjactState(3501106, 100, Disabled);
        SetObjactState(3501107, 100, Disabled);
        ReproduceObjectAnimation(3501105, 2);
    } else {
L0:
        WaitFor(
            EventFlag(13501118)
                && !EventFlag(13504110)
                && EventFlag(13501116)
                && (InArea(10000, 3502106)
                    || ObjActEventFlag(13504112)
                    || (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 13501117) && !EventFlag(13501117))));
        SetEventFlag(13504110, ON);
        SetEventFlag(13501116, OFF);
        SetObjactState(3501106, 100, Disabled);
        SetObjactState(3501107, 100, Disabled);
        ForceAnimationPlayback(3501105, 1, false, true, false);
        ForceAnimationPlayback(3501105, 2, false, true, false);
    }
L1:
    WaitFor(!AllPlayersInArea(3502107));
    SetEventFlag(13504110, OFF);
    ForceAnimationPlayback(3501105, 3, false, true, false);
    SetObjactState(3501106, 100, Enabled);
    SetObjactState(3501107, 100, Disabled);
    RestartEvent();
});

// Clock Tower_SC Elevator 1_1F⇔3F_Call lever cannot be operated
$Event(13501114, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(13501118) && ActionButtonInArea(7100, 3501106))
            || (!EventFlag(13501118) && ActionButtonInArea(7100, 3501107))
            || (EventFlag(13504110) && ActionButtonInArea(7100, 3501106))
            || (EventFlag(13504110) && ActionButtonInArea(7100, 3501107))
            || (EventFlag(13501116) && ActionButtonInArea(7100, 3501106))
            || (!EventFlag(13501116) && ActionButtonInArea(7100, 3501107)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// Clock Tower_SC Elevator 1_1F⇔3F_First activation
$Event(13501115, Default, function() {
    EndIf(EventFlag(13501118));
    WaitFor(InArea(10000, 3502105));
    SetObjactState(3501106, 100, Disabled);
    SetObjactState(3501107, 100, Enabled);
    SetEventFlag(13501118, ON);
});

// Clock Tower_SC Elevator 2_3F⇔5F_Initialization
$Event(13501120, Default, function() {
    EndIf(EventFlag(13504120));
    GotoIf(L0, EventFlag(13501128));
    SetEventFlag(13501126, ON);
    SetEventFlag(13501127, ON);
    ReproduceObjectAnimation(3501110, 0);
    SetObjactState(3501111, 100, Disabled);
    SetObjactState(3501112, 100, Disabled);
    Goto(L2);
L0:
    if (!EventFlag(13501126)) {
        SetEventFlag(13501127, OFF);
        ReproduceObjectAnimation(3501110, 4);
        SetObjactState(3501111, 100, Enabled);
        SetObjactState(3501112, 100, Disabled);
        EndEvent();
    }
L1:
    SetEventFlag(13501127, ON);
    ReproduceObjectAnimation(3501110, 0);
    SetObjactState(3501111, 100, Disabled);
    SetObjactState(3501112, 100, Enabled);
});

// Clock Tower_SC Elevator 2_3F⇔5F_Host status management
$Event(13501121, Default, function() {
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13501128) && EventFlag(13504120));
    if (!EventFlag(13501126)) {
        SetEventFlag(13501127, OFF);
    } else {
        SetEventFlag(13501127, ON);
    }
    WaitFor(CharacterType(10000, TargetType.Alive) && EventFlag(13501128) && !EventFlag(13504120));
    RestartEvent();
});

// Clock Tower_SC Elevator 2_3F⇔5F_Go up
$Event(13501122, Default, function() {
    if (EventFlag(13504120) && EventFlag(13501126)) {
        SetObjactState(3501111, 100, Disabled);
        SetObjactState(3501112, 100, Disabled);
        ReproduceObjectAnimation(3501110, 6);
    } else {
L0:
        WaitFor(
            EventFlag(13501128)
                && !EventFlag(13504120)
                && !EventFlag(13501126)
                && (InArea(10000, 3502112)
                    || ObjActEventFlag(13504121)
                    || (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 13501127) && EventFlag(13501127))));
        SetEventFlag(13504120, ON);
        SetEventFlag(13501126, ON);
        SetObjactState(3501111, 100, Disabled);
        SetObjactState(3501112, 100, Disabled);
        ForceAnimationPlayback(3501110, 5, false, true, false);
        ForceAnimationPlayback(3501110, 6, false, true, false);
    }
L1:
    WaitFor(!AllPlayersInArea(3502111));
    SetEventFlag(13504120, OFF);
    ForceAnimationPlayback(3501110, 7, false, true, false);
    SetObjactState(3501111, 100, Disabled);
    SetObjactState(3501112, 100, Enabled);
    RestartEvent();
});

// Clock Tower_SC Elevator 2_3F⇔5F_Down
$Event(13501123, Default, function() {
    if (EventFlag(13504120) && !EventFlag(13501126)) {
        SetObjactState(3501111, 100, Disabled);
        SetObjactState(3501112, 100, Disabled);
        ReproduceObjectAnimation(3501110, 2);
    } else {
L0:
        WaitFor(
            EventFlag(13501128)
                && !EventFlag(13504120)
                && EventFlag(13501126)
                && (InArea(10000, 3502111)
                    || ObjActEventFlag(13504122)
                    || (EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 13501127) && !EventFlag(13501127))));
        SetEventFlag(13504120, ON);
        SetEventFlag(13501126, OFF);
        SetObjactState(3501111, 100, Disabled);
        SetObjactState(3501112, 100, Disabled);
        ForceAnimationPlayback(3501110, 1, false, true, false);
        ForceAnimationPlayback(3501110, 2, false, true, false);
    }
L1:
    WaitFor(!AllPlayersInArea(3502112));
    SetEventFlag(13504120, OFF);
    ForceAnimationPlayback(3501110, 3, false, true, false);
    SetObjactState(3501111, 100, Enabled);
    SetObjactState(3501112, 100, Disabled);
    RestartEvent();
});

// Clock Tower_SC Elevator 2_3F⇔5F_Call lever cannot be operated
$Event(13501124, Default, function() {
    SetNetworkSyncState(Disabled);
    WaitFor(
        (!EventFlag(13501128) && ActionButtonInArea(7100, 3501111))
            || (!EventFlag(13501128) && ActionButtonInArea(7100, 3501112))
            || (EventFlag(13504120) && ActionButtonInArea(7100, 3501111))
            || (EventFlag(13504120) && ActionButtonInArea(7100, 3501112))
            || (EventFlag(13501126) && ActionButtonInArea(7100, 3501111))
            || (!EventFlag(13501126) && ActionButtonInArea(7100, 3501112)));
    DisplayGenericDialog(10010172, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// Clock Tower_SC Elevator 2_3F⇔5F_First activation
$Event(13501125, Default, function() {
    EndIf(EventFlag(13501128));
    WaitFor(InArea(10000, 3502110) || EventFlag(13500100));
    SetObjactState(3501111, 100, Disabled);
    SetObjactState(3501112, 100, Enabled);
    SetEventFlag(13501128, ON);
});

// Clock tower_door opening process_XX
$Event(13501200, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, X8_4);
        SetObjactState(X0_4, X12_4, Disabled);
        SetObjactState(X0_4, X20_4, Disabled);
        NotifySoundDampeningOfDoorEvent(X0_4, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4) || ObjActEventFlag(X16_4));
    WaitFixedTimeSeconds(1);
    SetObjactState(X0_4, X12_4, Disabled);
    SetObjactState(X0_4, X20_4, Disabled);
});

// Clock Tower_One door open
$Event(13501250, Default, function() {
    if (ThisEvent()) {
        ReproduceObjectAnimation(3501160, 1);
        SetObjactState(3501160, 3500062, Disabled);
        SetObjactState(3501160, 3500061, Disabled);
        NotifySoundDampeningOfDoorEvent(3501160, DoorState.DoorOpening);
        EndEvent();
    }
L0:
    obj = ObjActEventFlag(13504269);
    flag = EventFlag(13500100);
    WaitFor(obj || flag);
    GotoIf(L1, obj.Passed);
    GotoIf(L2, flag.Passed);
L1:
    WaitFixedTimeSeconds(1);
    SetObjactState(3501160, 3500062, Disabled);
    SetObjactState(3501160, 3500061, Disabled);
    EndEvent();
L2:
    ForceAnimationPlayback(3501160, 1, false, false, false);
    SetObjactState(3501160, 3500062, Disabled);
    SetObjactState(3501160, 3500061, Disabled);
    NotifySoundDampeningOfDoorEvent(3501160, DoorState.DoorOpening);
    EndEvent();
});

// Clock Tower_Treasure Chest_XX
$Event(13501400, Default, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        ReproduceObjectAnimation(X0_4, 0);
        SetObjactState(X0_4, X8_4, Disabled);
        SetObjectTreasureState(X0_4, Enabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(X4_4));
    WaitFixedTimeFrames(10);
    SetObjectTreasureState(X0_4, Enabled);
});

// Clock Tower_Bullet owner creation
$Event(13504799, Restart, function() {
    CreateBulletOwner(3500799);
});

// Pillar rising gimmick
$Event(13500100, Default, function() {
    if (ThisEvent()) {
        SetObjactState(3501210, 3500110, Disabled);
        ReproduceObjectAnimation(3501210, 3);
        ReproduceObjectAnimation(3501211, 2);
        ReproduceObjectAnimation(3501212, 2);
        ReproduceObjectAnimation(3501220, 2);
        ReproduceObjectAnimation(3501221, 2);
        ReproduceObjectAnimation(3501231, 2);
        ReproduceObjectAnimation(3501232, 2);
        ReproduceObjectAnimation(3501233, 2);
        ReproduceObjectAnimation(3501234, 2);
        ReproduceObjectAnimation(3501235, 2);
        ActivateHitres(3504200, Disabled);
        ActivateHitres(3504201, Disabled);
        ActivateHitres(3504202, Disabled);
        ActivateHitres(3504203, Disabled);
        ActivateHitres(3504204, Disabled);
        ActivateHitres(3504210, Disabled);
        ActivateHitres(3504211, Disabled);
        ActivateHitres(3504212, Disabled);
        ActivateHitres(3504213, Disabled);
        ActivateHitres(3504214, Disabled);
        ActivateHit(3504210, Disabled);
        ActivateHit(3504211, Disabled);
        ActivateHit(3504212, Disabled);
        ActivateHit(3504213, Disabled);
        ActivateHit(3504214, Disabled);
        EndEvent();
    }
L0:
    ActivateHitres(3504205, Disabled);
    ActivateHitres(3504206, Disabled);
    ActivateHitres(3504207, Disabled);
    ActivateHitres(3504208, Disabled);
    ActivateHitres(3504209, Disabled);
    ActivateHitres(3504215, Disabled);
    ActivateHitres(3504216, Disabled);
    ActivateHitres(3504217, Disabled);
    ActivateHitres(3504218, Disabled);
    ActivateHitres(3504219, Disabled);
    ActivateHit(3504215, Disabled);
    ActivateHit(3504216, Disabled);
    ActivateHit(3504217, Disabled);
    ActivateHit(3504218, Disabled);
    ActivateHit(3504219, Disabled);
    WaitFor(ObjActEventFlag(13504280));
    SetEventFlag(13505500, ON);
    ForceAnimationPlayback(3501210, 2, false, false, false);
    ForceAnimationPlayback(3501211, 1, false, false, false);
    ForceAnimationPlayback(3501212, 1, false, false, false);
    ForceAnimationPlayback(3501220, 1, false, false, false);
    ForceAnimationPlayback(3501221, 1, false, false, false);
    ForceAnimationPlayback(3501231, 1, false, false, false);
    ForceAnimationPlayback(3501232, 1, false, false, false);
    ForceAnimationPlayback(3501233, 1, false, false, false);
    ForceAnimationPlayback(3501234, 1, false, false, false);
    ForceAnimationPlayback(3501235, 1, false, true, false);
    ActivateHitres(3504200, Disabled);
    ActivateHitres(3504201, Disabled);
    ActivateHitres(3504202, Disabled);
    ActivateHitres(3504203, Disabled);
    ActivateHitres(3504204, Disabled);
    ActivateHitres(3504210, Disabled);
    ActivateHitres(3504211, Disabled);
    ActivateHitres(3504212, Disabled);
    ActivateHitres(3504213, Disabled);
    ActivateHitres(3504214, Disabled);
    ActivateHit(3504210, Disabled);
    ActivateHit(3504211, Disabled);
    ActivateHit(3504212, Disabled);
    ActivateHit(3504213, Disabled);
    ActivateHit(3504214, Disabled);
    ActivateHitres(3504205, Enabled);
    ActivateHitres(3504206, Enabled);
    ActivateHitres(3504207, Enabled);
    ActivateHitres(3504208, Enabled);
    ActivateHitres(3504209, Enabled);
    ActivateHit(3504215, Enabled);
    ActivateHit(3504216, Enabled);
    ActivateHit(3504217, Enabled);
    ActivateHit(3504218, Enabled);
    ActivateHit(3504219, Enabled);
    SetEventFlag(13505500, OFF);
    EndEvent();
});

// Clock Tower_Bell rings when entering
$Event(13500105, Default, function() {
    SetMapSoundState(3503202, Disabled);
    EndIf(ThisEvent());
    WaitFor(CharacterType(10000, TargetType.Alive) && PlayerStandingOnHit(3504020));
    PlaySE(10000, SoundType.aEnvironmentalSound, 350000010);
});

// Clock Tower_Bell rings when entering_Female hunter
$Event(13500106, Default, function() {
    SetMapSoundState(3503203, Disabled);
    EndIf(ThisEvent());
    WaitFor(CharacterType(10000, TargetType.Alive) && PlayerStandingOnHit(3504815));
    PlaySE(10000, SoundType.aEnvironmentalSound, 350000011);
});

// Switch to celestial sphere after clearing the fishing village
$Event(13500110, Restart, function() {
    if (!ThisEvent()) {
        DeactivateObject(3501751, Disabled);
        WaitFor(EventFlag(9469));
        DeactivateObject(3501751, Enabled);
    }
L0:
    ActivateMapPart(3501750, Disabled);
    EndEvent();
});

// Clock face light shaft deleted
$Event(13500111, Restart, function() {
    SetNetworkSyncState(Disabled);
    if (ThisEvent()) {
        DeleteMapSFX(3503120, false);
        EndEvent();
    }
L0:
    WaitFor(EntityInRadiusOfEntity(10000, 3502120, 7));
    DeleteMapSFX(3503120, true);
});

// Dying corpse in the cathedral
$Event(13500120, Restart, function() {
    if (EventFlag(53500840)) {
        ReproduceObjectAnimation(3501280, 2);
        EndEvent();
    }
L0:
    ForceAnimationPlayback(3501280, 0, true, false, false);
    WaitFor(EventFlag(53500840));
    ForceAnimationPlayback(3501280, 1, false, true, false);
    EndEvent();
});

// Patient moved in front of the main door
$Event(13500130, Restart, function() {
    SetNetworkSyncState(Disabled);
    if (EventFlag(13500101)) {
        IssueShortWarpRequest(3500552, TargetEntityType.Area, 3502420, -1);
        ForceAnimationPlayback(3500552, 9008, true, false, false);
        EndEvent();
    }
L0:
    ForceAnimationPlayback(3500552, 9008, true, false, false);
    WaitFor(EventFlag(13500100));
    ForceAnimationPlayback(3500552, 2004, false, false, false);
    ChangeCharacterPatrolBehavior(3500552, 3503320);
    RequestCharacterAIReplan(3500552);
    WaitFor(InArea(3500552, 3502420));
    ForceAnimationPlayback(3500552, 9008, true, false, false);
});

// Gatling fires regularly
$Event(13500140, Restart, function() {
    WaitFor(CharacterAIState(3500764, AIStateType.Combat));
    ForceAnimationPlayback(3500764, 3010, true, false, false);
    WaitFor(
        CharacterAIState(3500764, AIStateType.Normal)
            || CharacterAIState(3500764, AIStateType.Recognition)
            || CharacterAIState(3500764, AIStateType.Alert));
    ForceAnimationPlayback(3500764, 0, true, false, false);
    RestartEvent();
});

// Cathedral NPC activation
$Event(13500150, Restart, function() {
    ForceAnimationPlayback(3500932, 103020, true, false, false);
    SetSpEffect(3500932, 8015, false);
    SetCharacterAIState(3500932, Disabled);
    SetCharacterAIState(3500931, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(
        (chr && InArea(10000, 3502308))
            || (EntityInRadiusOfEntity(10000, 3500932, 5) || HasDamageType(3500932, -1, DamageType.Unspecified))
            || (chr && InArea(10000, 3502328))
            || (EntityInRadiusOfEntity(10000, 3500931, 2) || HasDamageType(3500931, -1, DamageType.Unspecified)));
    ForceAnimationPlayback(3500932, 103023, false, false, false);
    SetCharacterAIState(3500932, Enabled);
    WaitFor(ElapsedFrames(40));
    SetCharacterAIState(3500931, Enabled);
});

// Patient A dies from falling
$Event(13500400, Restart, function(X0_4, X4_4, X8_4) {
    if (ThisEventSlot()) {
        IssueShortWarpRequest(X0_4, TargetEntityType.Area, X4_4, -1);
        ForceCharacterDeath(X0_4, false);
        EndEvent();
    }
L0:
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)) && InArea(10000, X8_4));
L1:
    ChangeCharacterEnableState(X0_4, Enabled);
});

// Replace enemy on stairs_XX
$Event(13500410, Restart, function(X0_4, X4_4) {
    if (!EventFlag(13500101)) {
        SetCharacterBackreadState(X4_4, true);
        EndEvent();
    }
L0:
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
});

// Replace the enemy on the stairs_Lover NPCXX
$Event(13500418, Restart, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(13500101)) {
        SetCharacterAIState(X4_4, Disabled);
        SetCharacterGravity(X4_4, Enabled);
        SetCharacterHPBarDisplay(X4_4, Disabled);
        SetCharacterImmortality(X4_4, Enabled);
        CreateReferredDamagePair(X0_4, X4_4);
        WaitFor(EventFlag(13500100) && !CharacterDead(X0_4));
    }
L0:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterAIState(X4_4, Enabled);
    SetCharacterGravity(X4_4, Disabled);
    SetCharacterHPBarDisplay(X4_4, Enabled);
    SetCharacterImmortality(X4_4, Disabled);
    WarpCharacterAndSetFloor(X4_4, TargetEntityType.Area, X8_4, -1, 0);
    RequestCharacterAIReplan(X4_4);
    EndEvent();
});

// Shift to special standby when starting stairs_XX
$Event(13500420, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(13500101));
    EndIf(ThisEventSlot());
    WaitFor(ObjActEventFlag(13504280));
    WaitFixedTimeFrames(X8_4);
    ForceAnimationPlayback(X0_4, X4_4, false, false, false);
});

// Cancel special standby for starting stairs_XX
$Event(13500430, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(EventFlag(X0_4));
    dmg = HasDamageType(X4_4, -1, DamageType.Unspecified);
    WaitFor(
        (dmg
            || CharacterAIState(X4_4, AIStateType.Recognition)
            || CharacterAIState(X4_4, AIStateType.Alert)
            || CharacterAIState(X4_4, AIStateType.Combat))
            && EventFlag(X0_4));
    EndIf(dmg.Passed);
    ForceAnimationPlayback(X4_4, X8_4, false, false, false);
});

// Treasure enemy reappearance control_XX
$Event(13500450, Restart, function(X0_4, X4_4) {
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

// Event NPC special standby_XX
$Event(13500460, Restart, function(X0_4, X4_4, X8_4) {
    if (!EventFlag(X8_4)) {
        ForceAnimationPlayback(X0_4, X4_4, true, false, false);
        WaitFor(HasDamageType(X0_4, -1, DamageType.Unspecified));
        ForceCharacterDeath(X0_4, true);
        EndEvent();
    }
L0:
    SetDistanceLimitForConversationStateProcessing(X0_4, 1);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
});

// Clock Tower_Plate_XX
$Event(13500500, Default, function(X0_4, X4_4, X8_4) {
    SetNetworkSyncState(Disabled);
    WaitFor(ActionButtonInArea(X4_4, X0_4));
    DisplayGenericDialog(X8_4, PromptType.OKCANCEL, NumberofOptions.OneButton, -1, 3);
    RestartEvent();
});

// Patient transfusion table pops out
$Event(13505050, Restart, function(X0_4) {
    SetSpEffect(X0_4, 5410, false);
    SetCharacterAIId(X0_4, 402040);
    RequestCharacterAIReplan(X0_4);
    WaitFor(
        (ObjectDestroyed(3501700)
            || ObjectDestroyed(3501701)
            || ObjectDestroyed(3501702)
            || ObjectDestroyed(3501703)
            || ObjectDestroyed(3501704)
            || ObjectDestroyed(3501705))
            || (CharacterAIState(X0_4, AIStateType.Recognition)
                || CharacterAIState(X0_4, AIStateType.Alert)
                || CharacterAIState(X0_4, AIStateType.Combat)));
    ClearSpEffect(X0_4, 5410);
    SetCharacterEventTarget(X0_4, 10000);
    SetCharacterAIId(X0_4, 402005);
    RequestCharacterAIReplan(X0_4);
});

// Be cautious after discovery
$Event(13505060, Restart, function() {
    WaitFor(CharacterTargetedBy(3500750, 10000) || CharacterTargetedBy(3500760, 10000));
    SetCharacterAIId(3500750, 270352);
    SetCharacterAIId(3500760, 262912);
});

// Patient A_PC found and head light emitted_XX
$Event(13505100, Restart, function(X0_4) {
    WaitFor(
        CharacterAIState(X0_4, AIStateType.Combat)
            || CharacterAIState(X0_4, AIStateType.Recognition)
            || CharacterAIState(X0_4, AIStateType.Alert));
    SetSpEffect(X0_4, 8014, false);
L0:
    WaitFor(CharacterAIState(X0_4, AIStateType.Normal) || CharacterDead(X0_4) || !CharacterBackreadStatus(X0_4));
    ClearSpEffect(X0_4, 8014);
    RestartEvent();
});

// Temporary invincibility_xx
$Event(13505110, Restart, function(X0_4, X4_4) {
    if (!ThisEventSlot()) {
        SetCharacterInvincibility(X0_4, Enabled);
        SetCharacterAIState(X0_4, Disabled);
        SetCharacterHPBarDisplay(X0_4, Disabled);
        SetCharacterAnimationState(X0_4, Disabled);
        WaitFor(
            (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, X4_4));
    }
L0:
    SetCharacterInvincibility(X0_4, Disabled);
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterHPBarDisplay(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Enabled);
});

// Switch route after gimmick activation_xx
$Event(13505200, Restart, function(X0_4, X4_4) {
    WaitFor(EventFlag(13500100));
    ChangeCharacterPatrolBehavior(X0_4, X4_4);
    RequestCharacterAIReplan(X0_4);
});

// Gimmick character control while moving_XX
$Event(13505300, Default, function(X0_4) {
    EndIf(EventFlag(13500101));
    WaitFor(EventFlag(13505500) && InArea(X0_4, 3502390));
    SetCharacterDefaultBackreadState(X0_4, Enabled);
    SetNetworkUpdateRate(X0_4, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetCharacterMaphits(X0_4, false);
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(!EventFlag(13505500));
    SetCharacterAIState(X0_4, Enabled);
    SetCharacterDefaultBackreadState(X0_4, Disabled);
    SetNetworkUpdateRate(X0_4, false, CharacterUpdateFrequency.AlwaysUpdate);
    RequestCharacterAIReplan(X0_4);
    EndEvent();
});

// Falling throw_XX
$Event(13505400, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (!(!ThisEventSlot() && !CharacterDead(X0_4))) {
        SetCharacterGravity(X0_4, Enabled);
        SetCharacterMaphits(X0_4, false);
        EndEvent();
    }
L0:
    SetCharacterMaphits(X0_4, true);
    SetCharacterGravity(X0_4, Disabled);
    ForceAnimationPlayback(X0_4, 9000, true, false, false);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, X4_4))
            || (EntityInRadiusOfEntity(10000, X0_4, X8_4) || HasDamageType(X0_4, -1, DamageType.Unspecified)));
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, X12_4))
            || (EntityInRadiusOfEntity(10000, X0_4, X8_4) || HasDamageType(X0_4, -1, DamageType.Unspecified)));
    ForceAnimationPlayback(X0_4, 9060, false, true, false);
    SetCharacterGravity(X0_4, Enabled);
    WaitFixedTimeFrames(15);
    SetCharacterMaphits(X0_4, false);
});

// For gatling wheelchair control
$Event(13505410, Restart, function() {
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 3502342));
    SetCharacterTeamType(3500764, TeamType.Enemy2);
    WaitFixedTimeSeconds(1);
    WaitFor(
        !((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 3502342)));
    SetCharacterTeamType(3500764, TeamType.Enemy1);
    RestartEvent();
});

// Start anime playback_XX
$Event(13505450, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (ThisEventSlot()) {
        SetCharacterAIState(X0_4, Enabled);
        EndEvent();
    }
L0:
    SetCharacterAIState(X0_4, Disabled);
    chrArea = (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)) && InArea(10000, X4_4);
    areaDmg = EntityInRadiusOfEntity(10000, X0_4, X8_4) || HasDamageType(X0_4, -1, DamageType.Unspecified);
    WaitFor(chrArea || areaDmg);
    if (!areaDmg.Passed) {
        ForceAnimationPlayback(X0_4, X12_4, false, false, false);
    }
    SetCharacterAIState(X0_4, Enabled);
    RequestCharacterAIReplan(X0_4);
});

// Special standby release_XX
$Event(13505470, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    if (!ThisEventSlot()) {
        ForceAnimationPlayback(X0_4, X4_4, false, false, false);
        SetCharacterAIId(X0_4, 402040);
        dmg = HasDamageType(X0_4, -1, DamageType.Unspecified);
        WaitFor(
            dmg
                || CharacterAIState(X0_4, AIStateType.Recognition)
                || CharacterAIState(X0_4, AIStateType.Alert)
                || CharacterAIState(X0_4, AIStateType.Combat));
        if (!dmg.Passed) {
            ForceAnimationPlayback(X0_4, X8_4, false, false, false);
        }
    }
L0:
    SetCharacterAIId(X0_4, X12_4);
    RequestCharacterAIReplan(X0_4);
});

// Logic ON_XX
$Event(13505510, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, X4_4))
            || (EntityInRadiusOfEntity(10000, X0_4, X8_4) || HasDamageType(X0_4, -1, DamageType.Unspecified)));
    WaitFixedTimeSeconds(X12_4);
    SetCharacterAIState(X0_4, Enabled);
});

// Logic ON2 consecutive_XX
$Event(13505570, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, X4_4))
            || (EntityInRadiusOfEntity(10000, X0_4, X8_4) || HasDamageType(X0_4, -1, DamageType.Unspecified)));
    WaitFixedTimeSeconds(X12_4);
    SetCharacterAIState(X0_4, Enabled);
    WaitFor(InArea(X0_4, X16_4) && CharacterAIState(X0_4, AIStateType.Normal));
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, X20_4))
            || (EntityInRadiusOfEntity(10000, X0_4, X8_4) || HasDamageType(X0_4, -1, DamageType.Unspecified)));
    ChangeCharacterPatrolBehavior(X0_4, X24_4);
    SetCharacterAIState(X0_4, Enabled);
});

// Logic ON_After startup_XX
$Event(13505580, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(ThisEventSlot());
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(EventFlag(13500100));
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, X4_4))
            || (EntityInRadiusOfEntity(10000, X0_4, X8_4) || HasDamageType(X0_4, -1, DamageType.Unspecified)));
    ForceAnimationPlayback(X0_4, 0, false, false, false);
    SetCharacterAIState(X0_4, Enabled);
});

// Logic ON_XX after special wait
$Event(13505590, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(ThisEventSlot());
    ForceAnimationPlayback(X0_4, X12_4, false, false, false);
    SetCharacterAIState(X0_4, Disabled);
    chr = CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(
        (chr && InArea(10000, X4_4))
            || (EntityInRadiusOfEntity(10000, X0_4, X8_4) || HasDamageType(X0_4, -1, DamageType.Unspecified))
            || (chr && InArea(10000, X28_4)));
    WaitFixedTimeSeconds(X20_4);
    ForceAnimationPlayback(X0_4, X16_4, false, false, false);
    WaitFixedTimeSeconds(X24_4);
    SetCharacterAIState(X0_4, Enabled);
});

// Only the head starts moving_XX
$Event(13505610, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    EndIf(ThisEventSlot());
    ForceAnimationPlayback(X0_4, X12_4, false, false, false);
    SetCharacterAIState(X0_4, Disabled);
    WaitFor(
        ((CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, X4_4))
            || (EntityInRadiusOfEntity(10000, X0_4, X8_4) || HasDamageType(X0_4, -1, DamageType.Unspecified)));
    WaitFor(EventFlag(53500820));
    WaitFor(ElapsedSeconds(X20_4));
    ForceAnimationPlayback(X0_4, X16_4, false, false, false);
    WaitFor(ElapsedSeconds(X24_4));
    SetCharacterAIState(X0_4, Enabled);
});

// Logic ON_Invincibility_XX after special standby
$Event(13505630, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    EndIf(ThisEventSlot());
    ChangeCharacterEnableState(X0_4, Disabled);
    EndIf(EventFlag(13500101));
    WaitFor(
        (CharacterType(10000, TargetType.Alive) || CharacterType(10000, TargetType.WhitePhantom)) && InArea(10000, X4_4));
    WaitFixedTimeSeconds(X8_4);
    EndIf(EventFlag(13500100));
    ChangeCharacterEnableState(X0_4, Enabled);
    SetCharacterInvincibility(X0_4, Enabled);
    WaitFixedTimeSeconds(X12_4);
    SetCharacterInvincibility(X0_4, Disabled);
});

// Patient A special standby_conversation character_XX
$Event(13505640, Restart, function(X0_4, X4_4) {
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    SetSpEffect(X0_4, 5300, false);
});

// Patient A Autism alone_XX
$Event(13505650, Restart, function(X0_4) {
    SetSpEffect(X0_4, 5410, false);
    WaitFor(
        CharacterAIState(0, AIStateType.Recognition)
            || CharacterAIState(0, AIStateType.Alert)
            || CharacterAIState(0, AIStateType.Combat));
    ClearSpEffect(X0_4, 5410);
});

// Poison hand throwing surprise_XX
$Event(13505700, Restart, function(X0_4, X4_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Recognition) || CharacterAIState(X0_4, AIStateType.Combat));
L0:
    ForceAnimationPlayback(X0_4, X4_4, false, true, false);
    SetCharacterAIId(X0_4, 402011);
    RequestCharacterAIReplan(X0_4);
});

// Forced death at the beginning_XX
$Event(13505740, Restart, function(X0_4) {
    ForceCharacterDeath(X0_4, false);
});

// Enemy patrol begins_XX
$Event(13505750, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
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

// Gimmick appearance enemy_XX
$Event(13505780, Restart, function(X0_4) {
    EndIf(EventFlag(13500100));
    ChangeCharacterEnableState(X0_4, Disabled);
    WaitFor(EventFlag(13500100));
    ChangeCharacterEnableState(X0_4, Enabled);
});

// Gimmick appearance OBJ_XX
$Event(13505797, Restart, function(X0_4) {
    EndIf(EventFlag(13500100));
    DeactivateObject(X0_4, Disabled);
    SetObjectTreasureState(X0_4, Disabled);
    WaitFor(EventFlag(13500100));
    DeactivateObject(X0_4, Enabled);
    SetObjectTreasureState(X0_4, Enabled);
});

// Clock Tower_Trap_XX
$Event(13505800, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    RequestObjectRestoration(X8_4);
    ForceAnimationPlayback(X4_4, 2, false, false, false);
L0:
    WaitFor(InArea(10000, X0_4));
    ForceAnimationPlayback(X4_4, 1, false, true, false);
    WaitFixedTimeFrames(25);
    RequestObjectDestruction(X8_4, 1);
    if (!EventFlag(6603)) {
        ShootBullet(3500799, X12_4, 200, 6350, 0, 0, 0);
    } else {
        ShootBullet(3500799, X12_4, 200, 6352, 0, 0, 0);
    }
L1:
    SetCharacterEventTarget(X16_4, 10000);
    RequestCharacterAIReplan(X16_4);
});

// Clock Tower_Trap_Double_XX
$Event(13505810, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    RequestObjectRestoration(X8_4);
    ForceAnimationPlayback(X4_4, 2, false, false, false);
L0:
    WaitFor(InArea(10000, X0_4));
    ForceAnimationPlayback(X4_4, 1, false, true, false);
    WaitFixedTimeFrames(25);
    ShootBullet(3500799, X12_4, 200, 6350, 0, 0, 0);
    WaitFixedTimeFrames(20);
    ShootBullet(3500799, X16_4, 200, 6350, 0, 0, 0);
    SetCharacterEventTarget(X20_4, 10000);
    RequestCharacterAIReplan(X20_4);
});

// Patient in the sunflower field moves_XX
$Event(13505820, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    ForceAnimationPlayback(X0_4, X4_4, true, false, false);
    WaitFor(InArea(10000, 3502322) || InArea(10000, 3502323) || InArea(10000, 3502324));
    WaitFixedTimeFrames(X12_4);
    ForceAnimationPlayback(X0_4, X8_4, false, false, false);
    SetCharacterEventTarget(X0_4, 10000);
    RequestCharacterAIReplan(X0_4);
    WaitFixedTimeFrames(X12_4);
    WaitFor(!InArea(10000, 3502327));
    WaitFixedTimeFrames(20);
    ClearCharactersAITarget(X0_4);
    RequestCharacterAIReplan(X0_4);
    ChangeCharacterPatrolBehavior(X0_4, X16_4);
    WaitFixedTimeFrames(120);
    WaitFor(InArea(X0_4, X20_4));
    WaitFixedTimeFrames(20);
    RestartEvent();
});

// Clock Tower_Conversation NPC general death judgment_XX
$Event(13500900, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(AnyBatchEventFlags(X4_4, X12_4));
    WaitFor(CharacterDead(X0_4));
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X16_4, ON);
    SaveRequest(0);
});

// Clock Tower_Conversation NPC general attack count determination_XX
$Event(13500910, Default, function(X0_4, X4_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    WaitFixedTimeFrames(1);
    SetEventFlag(X4_4, ON);
});

// Clock Tower_Conversation NPC general hostility judgment_XX
$Event(13500920, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(X4_4, OFF);
    WaitFor((EventFlag(X4_4) || HPRatio(X0_4) <= 0.9) && HPRatio(X0_4) != 0);
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    BatchSetEventFlags(X8_4, X12_4, OFF);
    SetEventFlag(X16_4, ON);
    SaveRequest(0);
});

// Church killer_initialization
$Event(13500940, Default, function(X0_4) {
    if (!AnyBatchEventFlags(1730, 1749)) {
        SetEventFlag(1735, ON);
    }
L0:
    GotoIf(L1, EventFlag(1730));
    GotoIf(L6, EventFlag(1735));
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
L1:
    SetCharacterBackreadState(X0_4, false);
    SetCharacterAnimationState(X0_4, Disabled);
    SetCharacterGravity(3500938, Disabled);
    ForceCharacterTreasure(3500938);
    ForceAnimationPlayback(X0_4, 103162, true, false, true);
    EndEvent();
L6:
    ForceAnimationPlayback(X0_4, 103160, true, false, true);
    SetCharacterGravity(3500938, Disabled);
    EndIf(EventFlag(73500412));
    SetCharacterInvincibility(X0_4, Enabled);
    EndEvent();
});

// Church killer_Conversation through the door 2
$Event(13500942, Default, function(X0_4, X4_4, X8_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(AnyBatchEventFlags(1730, 1734));
    SetEventFlag(X8_4, OFF);
    WaitFor(InArea(X0_4, X4_4));
    SetEventFlag(X8_4, ON);
    WaitFor(!InArea(X0_4, X4_4));
    SetEventFlag(X8_4, OFF);
    RestartEvent();
});

// Church killer_Open the door 2
$Event(13500941, Default, function() {
    if (EventFlag(73500412)) {
        ReproduceObjectAnimation(3501300, 2);
        SetObjactState(3501300, 3500010, Disabled);
        EndEvent();
    }
L0:
    WaitFor(ObjActEventFlag(13504245));
    SetCharacterInvincibility(3500901, Disabled);
    SetObjactState(3501300, 3500010, Disabled);
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFixedTimeSeconds(2);
    SetEventFlag(73500412, ON);
});

// Church killer_Animation switching during conversation
$Event(13500943, Default, function(X0_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(AnyBatchEventFlags(1730, 1734));
    SetEventFlag(73500411, OFF);
    if (!EventFlag(13601400)) {
        ForceAnimationPlayback(X0_4, 103164, true, false, true);
    } else {
L0:
        ForceAnimationPlayback(X0_4, 103160, true, false, true);
    }
L1:
    WaitFor(EventFlag(73500411));
    EndIf(HPRatio(X0_4) == 0);
    ForceAnimationPlayback(X0_4, 103161, true, false, true);
    WaitFor(!EventFlag(73500411));
    EndIf(HPRatio(X0_4) == 0);
    RestartEvent();
});

// Church killer_death animation playback
$Event(13500944, Default, function(X0_4) {
    EndIf(AnyBatchEventFlags(1730, 1734));
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(HasDamageType(X0_4, -1, DamageType.Unspecified));
    ForceCharacterDeath(X0_4, true);
    ForceAnimationPlayback(X0_4, 103162, false, false, true);
});

// Clock Tower Hunter_Initialization
$Event(13500945, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
    if (CharacterType(10000, TargetType.Alive)) {
        if (!AnyBatchEventFlags(1650, 1669)) {
            BatchSetEventFlags(1650, 1669, OFF);
            SetEventFlag(1651, ON);
        }
L0:
        if (EventFlag(1660) && AnyBatchEventFlags(1722, 1723) && EventFlag(73500602)) {
            BatchSetEventFlags(1650, 1669, OFF);
            SetEventFlag(1651, ON);
        }
L8:
        NoOp();
    }
L9:
    DeactivateObject(X4_4, Disabled);
    DeactivateObject(X12_4, Disabled);
    DeactivateObject(X16_4, Disabled);
    DeactivateObject(X20_4, Disabled);
    GotoIf(L0, EventFlag(1660));
    GotoIf(L1, EventFlag(1650));
    GotoIf(L2, EventFlag(1651));
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
L0:
    SetCharacterTeamType(X0_4, TeamType.Ally);
    SetCharacterGravity(X0_4, Disabled);
    SetCharacterMaphits(X0_4, true);
    ForceAnimationPlayback(X0_4, 7000, false, false, false);
    SetObjectInvulnerability(X8_4, Enabled);
    EndEvent();
L1:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndIf(EventFlag(X24_4));
    CreateObjectfollowingSFX(X4_4, 200, 900201);
    SetObjectInvulnerability(X8_4, Enabled);
    DeactivateObject(X12_4, Enabled);
    SetObjectInvulnerability(X12_4, Enabled);
    EndEvent();
L2:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    DeactivateObject(X20_4, Enabled);
    SetObjectInvulnerability(X20_4, Enabled);
    EndIf(EventFlag(X24_4));
    SetObjectInvulnerability(X8_4, Enabled);
    DeactivateObject(X16_4, Enabled);
    SetObjectInvulnerability(X16_4, Enabled);
    EndEvent();
});

// Clock Tower Hunter_Instant Death
$Event(13500946, Default, function(X0_4, X4_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(1660) && HasDamageType(X0_4, -1, DamageType.Unspecified));
    ForceCharacterDeath(X0_4, true);
    WaitFor(EventFlag(1650));
    CreateObjectfollowingSFX(X4_4, 200, 900201);
});

// Clock Tower Hunter_Obtain bogus items
$Event(13500948, Default, function(X0_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(13501801));
    WaitFor(AnyBatchEventFlags(1650, 1651) && ActionButtonInArea(3500910, X0_4));
    SetEventFlag(13500947, ON);
});

// Clock Tower Hunter_Conversation Acting
$Event(13500949, Default, function(X0_4, X4_4) {
    SetEventFlag(X4_4, OFF);
    WaitFor(EventFlag(X4_4));
    EndIf(HPRatio(X0_4) == 0);
    ForceAnimationPlayback(X0_4, 7003, true, false, true);
    WaitFor(!EventFlag(X4_4));
    EndIf(HPRatio(X0_4) == 0);
    ForceAnimationPlayback(X0_4, 7000, true, false, true);
    RestartEvent();
});

// Secret Seeker_Initialization
$Event(13500950, Default, function(X0_4) {
    chr = CharacterType(10000, TargetType.Alive);
    if (or1) {
        if (!AnyBatchEventFlags(1710, 1729)) {
            BatchSetEventFlags(1710, 1729, OFF);
            SetEventFlag(1720, ON);
        }
L0:
        if (AnyBatchEventFlags(1720, 1721) && EventFlag(73400403) && EventFlag(13500100)) {
            BatchSetEventFlags(1710, 1729, OFF);
            SetEventFlag(1722, ON);
        }
L1:
        if (EventFlag(1722) && EventFlag(13501800) && EventFlag(73500602)) {
            BatchSetEventFlags(1710, 1729, OFF);
            SetEventFlag(1723, ON);
        }
L2:
        if (AnyBatchEventFlags(1720, 1722) && EventFlag(73400403) && EventFlag(13501800)) {
            BatchSetEventFlags(1710, 1729, OFF);
            SetEventFlag(1723, ON);
        }
L8:
        NoOp();
    }
L9:
    GotoIf(L0, EventFlag(1722));
    GotoIf(L1, EventFlag(1727));
    GotoIf(L2, EventFlag(1712));
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    EndEvent();
L0:
    SetCharacterTeamType(X0_4, TeamType.Ally);
    ForceAnimationPlayback(X0_4, 103150, false, false, false);
    EndEvent();
L1:
    SetCharacterTeamType(X0_4, TeamType.HostileNPC);
    EndEvent();
L2:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    ForceCharacterTreasure(X0_4);
    EndEvent();
});

// Secret seeker_conversation animation
$Event(13500951, Default, function(X0_4, X4_4, X8_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(X4_4, OFF);
    WaitFor(EventFlag(X8_4) && EventFlag(X4_4) && CharacterHasSpEffect(X0_4, 151));
    ForceAnimationPlayback(X0_4, 103155, false, false, false);
    WaitFor(EventFlag(X8_4) && !EventFlag(X4_4) && CharacterHasSpEffect(X0_4, 152));
    ForceAnimationPlayback(X0_4, 103150, false, false, false);
    RestartEvent();
});

// Secret seeker_Real-time transition
$Event(13500952, Default, function(X0_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(AnyBatchEventFlags(1720, 1722) && EventFlag(13501800) && EventFlag(73400403));
    BatchSetEventFlags(1710, 1729, OFF);
    SetEventFlag(1723, ON);
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
});

// Secret seeker_obtain item upon death_clock tower_XX
$Event(13500953, Default, function(X0_4, X4_4, X8_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(X0_4)) {
        if (EventFlag(X4_4)) {
            EndEvent();
        }
L1:
        SetEventFlag(X4_4, ON);
    }
L0:
    WaitFor(EventFlag(X4_4));
    AwardItemLot(X8_4);
    SaveRequest(0);
});

// Clock Tower Female Doctor_Initialization
$Event(13500960, Default, function(X0_4, X4_4) {
    if (CharacterType(10000, TargetType.Alive)) {
        if (!AnyBatchEventFlags(1750, 1769)) {
            BatchSetEventFlags(1750, 1769, OFF);
            SetEventFlag(1760, ON);
        }
L1:
        if (EventFlag(73500301) && EventFlag(1760)) {
            if (EventFlag(73500330)) {
                if (EventFlag(73500331)) {
                    BatchSetEventFlags(1750, 1769, OFF);
                    SetEventFlag(1761, ON);
                }
L3:
                SetEventFlag(73500331, ON);
            }
L2:
            SetEventFlag(73500330, ON);
        }
L1:
        if (EventFlag(73500309) && EventFlag(1761)) {
            if (EventFlag(73500335)) {
                if (EventFlag(73500336)) {
                    BatchSetEventFlags(1750, 1769, OFF);
                    SetEventFlag(1762, ON);
                }
L3:
                SetEventFlag(73500336, ON);
            }
L2:
            SetEventFlag(73500335, ON);
        }
L4:
        SetEventFlag(73500305, OFF);
    }
L9:
    if (!EventFlag(1760)) {
        GotoIf(L1, EventFlag(1761));
        GotoIf(L2, EventFlag(1762));
        GotoIf(L3, EventFlag(1750));
        GotoIf(L4, EventFlag(1751));
        GotoIf(L5, EventFlag(1752));
        ChangeCharacterEnableState(X0_4, Disabled);
        ChangeCharacterEnableState(X4_4, Disabled);
        SetCharacterBackreadState(X0_4, true);
        SetCharacterBackreadState(X4_4, true);
        EndEvent();
L1:
        ForceAnimationPlayback(X0_4, 7002, true, false, true);
    }
L0:
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X4_4, true);
    EndEvent();
L2:
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Enabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, false);
    EndEvent();
L3:
    ChangeCharacterEnableState(X0_4, Enabled);
    ForceAnimationPlayback(X0_4, 2250, true, false, true);
    ChangeCharacterEnableState(X4_4, Disabled);
    SetCharacterBackreadState(X0_4, false);
    SetCharacterBackreadState(X4_4, true);
    ForceCharacterTreasure(X0_4);
    EndEvent();
L4:
    ChangeCharacterEnableState(X0_4, Disabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterInvincibility(X4_4, Enabled);
    EndEvent();
L5:
    ChangeCharacterEnableState(X0_4, Disabled);
    ChangeCharacterEnableState(X4_4, Enabled);
    SetCharacterBackreadState(X0_4, true);
    SetCharacterBackreadState(X4_4, false);
    ForceAnimationPlayback(X4_4, 7011, true, false, true);
    EndEvent();
});

// Clock Tower Female Doctor_Dead
$Event(13500963, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(AnyBatchEventFlags(X4_4, X12_4));
    WaitFor(CharacterDead(X0_4));
    BatchSetEventFlags(X4_4, X8_4, OFF);
    SetEventFlag(X16_4, ON);
    SaveRequest(0);
});

// Clock Tower Female Doctor_Completely Dead
$Event(13500965, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(EventFlag(1752));
    WaitFor(EventFlag(73500318));
    BatchSetEventFlags(1750, 1769, OFF);
    SetEventFlag(1752, ON);
    SetCharacterInvincibility(3500911, Enabled);
    ForceAnimationPlayback(3500911, 7002, false, false, true);
    WaitFixedTimeFrames(178);
    ForceAnimationPlayback(3500911, 7011, true, false, true);
    SaveRequest(0);
});

// Female Doctor in the Clock Tower_Displays a chair with only the head and blood stains
$Event(13500966, Default, function() {
    EndIf(ThisEvent());
    DeactivateObject(3500912, Disabled);
    DeactivateObject(3500913, Disabled);
    WaitFor(EventFlag(1762));
    DeactivateObject(3500912, Enabled);
    DeactivateObject(3500913, Enabled);
});

// Female Doctor of the Clock Tower_Laughing anime playback
$Event(13500967, Default, function(X0_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(!EventFlag(73500325));
    EndIf(HPRatio(X0_4) == 0);
    ForceAnimationPlayback(X0_4, 0, true, false, true);
    WaitFor(EventFlag(73500325));
    EndIf(HPRatio(X0_4) == 0);
    ForceAnimationPlayback(X0_4, 7000, true, false, true);
    RestartEvent();
});

// Clock Tower Female Doctor_Sucking Anime
$Event(13500968, Default, function(X0_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(73500326, OFF);
    WaitFor(EventFlag(73500326));
    EndIf(HPRatio(X0_4) == 0);
    ForceAnimationPlayback(X0_4, 7001, true, false, false);
    WaitFor(!EventFlag(73500326));
    EndIf(HPRatio(X0_4) == 0);
    ForceAnimationPlayback(X0_4, 0, true, false, true);
    SetEventFlag(73500326, OFF);
});

// Lover NPC_base point settings
$Event(13500977, Default, function() {
    if (!EventFlag(13500101)) {
        SetEventPoint(3500935, 3502907, 3);
        WaitFor(EventFlag(13500100));
        SetEventPoint(3500935, 3502909, 3);
        EndEvent();
    }
L0:
    SetEventPoint(3500933, 3502909, 3);
});

// Church Assassin_Turns into treasure when conversation ends upon death
$Event(13500978, Default, function(X0_4, X4_4, X8_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    if (EventFlag(X0_4)) {
        if (EventFlag(X4_4)) {
            EndEvent();
        }
L1:
        SetEventFlag(X4_4, ON);
    }
L0:
    WaitFor(EventFlag(X4_4) && CharacterDead(3500901));
    ForceCharacterTreasure(X8_4);
    SaveRequest(0);
});

// Clock Tower Patient_Automatic Conversation Loop_XX
$Event(13500980, Restart, function(X0_4, X4_4, X8_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(X0_4, OFF);
    WaitFor(EventFlag(X4_4));
    WaitFixedTimeSeconds(X8_4);
    SetEventFlag(X4_4, OFF);
    RestartEvent();
});

// Clock Tower Patient_Conversation Animation_XX
$Event(13500990, Default, function(X0_4, X4_4, X8_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(!EventFlag(X8_4));
    WaitFor(!EventFlag(X4_4));
    EndIf(HPRatio(X0_4) == 0);
    ForceAnimationPlayback(X0_4, 7013, true, false, true);
    WaitFor(EventFlag(X4_4));
    EndIf(!EventFlag(X8_4));
    EndIf(HPRatio(X0_4) == 0);
    ForceAnimationPlayback(X0_4, 9002, true, false, true);
    RestartEvent();
});

// Clock Tower Patient_Resurrection from death anime_XX
$Event(13500994, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(!EventFlag(X16_4));
    WaitFor(HasDamageType(X0_4, 10000, DamageType.Unspecified));
    SetEventFlag(X12_4, ON);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(X0_4, X28_4, false, false, true);
    WaitFixedTimeFrames(74);
    ForceAnimationPlayback(X0_4, 7011, true, false, true);
    if (!EventFlag(X8_4)) {
        IssueShortWarpRequest(X4_4, TargetEntityType.Character, X0_4, 90);
        WaitFixedTimeFrames(1);
        ForceCharacterTreasure(X4_4);
        WaitFor(EventFlag(X8_4));
        WaitFixedTimeSeconds(X20_4);
    } else {
L0:
        WaitFixedTimeSeconds(X24_4);
    }
L1:
    ForceAnimationPlayback(X0_4, 7012, false, false, true);
    WaitFixedTimeFrames(109);
    ForceAnimationPlayback(X0_4, 7013, true, false, true);
    SetEventFlag(X12_4, OFF);
    RestartEvent();
});

// Female doctor in the clock tower_Automatic conversation control only for the head
$Event(13500998, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    SetEventFlag(73500338, OFF);
    WaitFor(InArea(10000, 3502911));
    SetEventFlag(73500338, ON);
    WaitFor(!InArea(10000, 3502911));
    SetEventFlag(73500338, OFF);
    RestartEvent();
});

// Female Doctor of the Clock Tower_Enlightenment obtained when obtaining Karel
$Event(13500999, Default, function() {
    EndIf(!CharacterType(10000, TargetType.Alive));
    EndIf(ThisEvent());
    WaitFor(EventFlag(73500317));
    InitializeEvent(0, 9350, 2);
});

// Clock Tower_NPC Death Reenactment_XX
$Event(13501900, Default, function(X0_4) {
    if (ThisEventSlot()) {
        SetCharacterBackreadState(X0_4, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(X0_4));
    WaitFixedTimeSeconds(0);
});

// Clock Tower_Replacement NPC also died_XX
$Event(13501915, Default, function(X0_4, X4_4) {
    if (EventFlag(X4_4) || ThisEvent()) {
        SetCharacterBackreadState(X0_4, true);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(X0_4));
    SetEventFlag(13501904, ON);
});

// Clock Tower_NPC item acquisition_XX
$Event(13501920, Default, function(X0_4, X4_4) {
    EndIf(ThisEventSlot());
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(X0_4));
    AwardItemLot(X4_4);
});

// Clock Tower_NPC item acquisition_as many times as you like_XX
$Event(13501940, Default, function(X0_4, X4_4) {
    EndIf(!CharacterType(10000, TargetType.Alive));
    WaitFor(EventFlag(X0_4));
    SetEventFlag(X0_4, OFF);
    AwardItemLot(X4_4);
    EndEvent();
});

// Clock Tower_NPC Killer_Wheelchairs die after getting the key
$Event(13501960, Restart, function() {
    if (!ThisEvent()) {
        WaitFor(PlayerHasItem(ItemType.Goods, 4015));
    }
L0:
    ForceCharacterDeath(3500750, false);
    ForceCharacterDeath(3500760, false);
});

// Clock Tower_NPC Killer_Omen starts
$Event(13505900, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(1730));
    EndIf(EventFlag(X8_4));
    EndIf(EventFlag(X4_4));
    WaitFor(
        PlayerHasItem(ItemType.Goods, 4015)
            && !EventFlag(1730)
            && !EventFlag(X4_4)
            && !EventFlag(X8_4)
            && !EventFlag(X20_4)
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, X12_4) || InArea(10000, X16_4)));
    SetEventFlag(X0_4, ON);
});

// Clock Tower_NPC Killer_Omen continued
$Event(13505901, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(EventFlag(1730));
    EndIf(EventFlag(X8_4));
    EndIf(EventFlag(X4_4));
    WaitFor(
        PlayerHasItem(ItemType.Goods, 4015)
            && !EventFlag(1730)
            && !EventFlag(X4_4)
            && !EventFlag(X8_4)
            && EventFlag(X0_4)
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, X12_4) || InArea(10000, X16_4)));
    PlaySE(10000, SoundType.sSFX, 10306);
    WaitRandomTimeSeconds(2, 4);
    RestartEvent();
});

// Clock Tower_NPC Killer_Appearance
$Event(13505902, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
    RequestCharacterAICommand(X0_4, 30, 0);
    RequestCharacterAIReplan(X0_4);
    SetCharacterInvincibility(X0_4, Enabled);
    SetCharacterAnimationState(X0_4, Disabled);
    SetSpEffect(X0_4, 5560, false);
    EndIf(EventFlag(1730));
    EndIf(EventFlag(X8_4));
    EndIf(EventFlag(X4_4));
    area = InArea(10000, X12_4);
    area2 = InArea(10000, X16_4);
    WaitFor(
        PlayerHasItem(ItemType.Goods, 4015)
            && !EventFlag(1730)
            && EventFlag(X20_4)
            && !EventFlag(X8_4)
            && CharacterType(10000, TargetType.Alive)
            && (area || area2));
    if (!area2.Passed) {
        WarpCharacterAndSetFloor(X0_4, TargetEntityType.Area, X28_4, -1, 3504000);
    } else {
        WarpCharacterAndSetFloor(X0_4, TargetEntityType.Area, 3502897, -1, 3504000);
    }
    RequestCharacterAICommand(X0_4, -1, 0);
    RequestCharacterAIReplan(X0_4);
    SetCharacterInvincibility(X0_4, Disabled);
    SetCharacterAnimationState(X0_4, Enabled);
    ClearSpEffect(X0_4, 5560);
    SetSpEffect(X0_4, 8060, false);
    PlaySE(10000, SoundType.sSFX, 777777777);
    ForceAnimationPlayback(X0_4, 101203, false, false, false);
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

// Clock Tower_NPC Killer_Forced Return
$Event(13505903, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    EndIf(EventFlag(1730));
    EndIf(EventFlag(X8_4));
    WaitFor(
        EventFlag(X4_4)
            && HPRatio(X0_4) > 0
            && CharacterType(10000, TargetType.Alive)
            && (InArea(10000, X12_4) || InArea(10000, X16_4) || InArea(10000, 3502898)));
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

// Clock Tower_NPC Killer_Repulsion
$Event(13505904, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    SetCharacterBackreadState(X16_4, true);
    if (EventFlag(1730)) {
        ForceCharacterTreasure(X16_4);
        EndEvent();
    }
L0:
    EndIf(EventFlag(X8_4));
    flagChr = EventFlag(X4_4) && CharacterDead(X0_4);
    cond &= EventFlag(1730);
    WaitFor(flagChr || cond);
    if (!cond.Passed) {
        ClearSpEffect(X0_4, 8060);
        PlaySE(10000, SoundType.sSFX, 122);
        SetEventFlag(X8_4, ON);
        cond &= CharacterType(10000, TargetType.Alive);
        EndIf(!cond);
        AwardItemsIncludingClients(X12_4);
        EndEvent();
    }
L1:
    ForceCharacterTreasure(X16_4);
});

// ★Clock Tower_New NPC Summon_Summonability Judgment_Federation: Yamamura
$Event(13504400, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    if (!EventFlag(X0_4)) {
        SetEventFlag(X0_4, OFF);
        DeleteMapSFX(X4_4, true);
        WaitFor(
            PlayerHasItem(ItemType.Goods, 4312)
                && !EventFlag(X8_4)
                && !EventFlag(X12_4)
                && !EventFlag(X16_4)
                && NumberOfClientsOfType(ClientType.Coop) < 2
                && CharacterHasSpEffect(10000, 6142)
                && EventFlag(13501900)
                && EventFlag(13500100)
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
                && CharacterHasSpEffect(10000, 6142)
                && EventFlag(13501900)
                && EventFlag(13500100)
                && !EventFlag(X20_4)));
    SetEventFlag(X0_4, OFF);
    DeleteMapSFX(X4_4, true);
    RestartEvent();
});

// ★Clock Tower_New NPC Summon_Participation_XX
$Event(13504410, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4, X28_4) {
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

// ★Clock Tower_New NPC Summon_Aim for the Boss Room_XX
$Event(13504450, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4) {
    EndIf(ThisEventSlot());
    EndIf(HasMultiplayerState(MultiplayerState.Client));
    SetEventPoint(X0_4, X4_4, 1);
    WaitFor(EventFlag(X8_4) && !EventFlag(X12_4) && EventFlag(X16_4));
    RequestCharacterAICommand(X0_4, 990, 0);
    RequestCharacterAIReplan(X0_4);
});

// ★Clock Tower_New NPC Summon_Enter Boss Room_XX
$Event(13504460, Default, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4, X24_4) {
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

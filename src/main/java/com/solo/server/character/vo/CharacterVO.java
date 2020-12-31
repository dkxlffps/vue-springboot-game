package com.solo.server.character.vo;

import lombok.Getter;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

import java.util.Date;

@Getter
@Setter
@Alias("CharacterVO")
public class CharacterVO {
    private String user_id;
    private String ch_id;
    private String ch_name;
    private String ch_class;
    private int ch_level;
    private int ch_cur_exp;
    private Date created_date;
    private Date last_logout_date;
    private String play_time;
    private String user_status;
    private CharacterStatusVO status;
}

@Getter
@Setter
@Alias("CharacterStatusVO")
class CharacterStatusVO {
    private int hp;
    private int mp;
    private int critical;
    private int phdamage;
    private int abdamage;
    private int phdef;
    private int abdef;
    private int hitrate;
    private int evasionrate;
    private int status_str;
    private int status_int;
    private int status_dex;
    private int status_luck;
    private int status_point;
    private int skill_point;
    private ElementDefVO element_def;
    private ElementAtkVO element_atk;
}

@Getter
@Setter
@Alias("ElementDefVO")
class ElementDefVO {
    private int element_def_water;
    private int element_def_earth;
    private int element_def_wind;
    private int element_def_fire;
}

@Getter
@Setter
@Alias("ElementAtkVO")
class ElementAtkVO {
    private int element_atk_water;
    private int element_atk_earth;
    private int element_atk_wind;
    private int element_atk_fire;
}

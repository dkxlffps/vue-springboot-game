package com.solo.server.Item.vo;

import lombok.Getter;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

@Getter
@Setter
@Alias("ItemVO")
public class ItemVO {
    private String ITEM_ID;
    private String ITEM_CATEGORY;
    private String ITEM_TYPE;
    private String ITEM_NAME;
    private String ITEM_CLASS_RANK;
    private String ITEM_DESC;
    private int BUY_PRICE;
    private int SELL_PRICE;
    private int EQUIP_LIMIT_LEVEL;
    private String AWAKE_POSIBLE_YN;
    private String AWAKE_ITEM_ID;
    private String ITEM_OPTION;
    private String BONUS_OPTION;
    private String SET_OPTION;
    private String SET_ITEM_SEQ;
    private int MAX_UPGRADE_COUNT;
    private int MAX_NESTING_NUM;
}

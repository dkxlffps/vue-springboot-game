package com.solo.server.common.vo;

import lombok.Getter;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

@Getter
@Setter
@Alias("CommonCodeVO")
public class CommonCodeVO {
    private String common_nm;
    private String common_value;
    private String common_category;
    private String common_category_item;
}

package com.solo.server.account.vo;

import lombok.Getter;
import lombok.Setter;
import org.apache.ibatis.type.Alias;

import java.util.Date;

@Getter
@Setter
@Alias("AccountVO")
public class AccountVO {

    private String account_id;
    private String account_pw;
    private String name;
    private Date hiredate;
    private String id;
}

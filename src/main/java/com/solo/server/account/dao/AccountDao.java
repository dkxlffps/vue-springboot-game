package com.solo.server.account.dao;

import com.solo.server.account.vo.AccountVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface AccountDao {

    public void insertAccount(AccountVO vo);
    public AccountVO selectAccount(AccountVO vo);

}

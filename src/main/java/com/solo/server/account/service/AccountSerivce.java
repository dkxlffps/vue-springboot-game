package com.solo.server.account.service;

import com.solo.server.account.vo.AccountVO;

public interface AccountSerivce {
    public void insertAccount(AccountVO vo);
    public AccountVO selectAccount(AccountVO vo);
}

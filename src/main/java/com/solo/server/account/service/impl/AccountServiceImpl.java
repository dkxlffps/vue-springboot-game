package com.solo.server.account.service.impl;

import com.solo.server.account.dao.AccountDao;
import com.solo.server.account.service.AccountSerivce;
import com.solo.server.account.vo.AccountVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountServiceImpl implements AccountSerivce {

    @Autowired
    private AccountDao dao;

    @Override
    public void insertAccount(AccountVO vo) {
        dao.insertAccount(vo);
    }

    @Override
    public AccountVO selectAccount(AccountVO vo) {
        return dao.selectAccount(vo);
    }
}

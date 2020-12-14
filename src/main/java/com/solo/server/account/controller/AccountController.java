package com.solo.server.account.controller;

import com.solo.server.account.service.AccountSerivce;
import com.solo.server.account.vo.AccountVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/account")
public class AccountController {

    @Autowired
    private AccountSerivce service;

    @RequestMapping(value = "/signUp")
    public void signUp(@RequestBody AccountVO vo) {
        service.insertAccount(vo);
    }

    @RequestMapping(value = "/login")
    public AccountVO login(@RequestBody AccountVO vo) {
        return service.selectAccount(vo);
    }
}

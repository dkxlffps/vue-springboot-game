package com.solo.server.common.service.impl;

import com.solo.server.common.dao.CommonDao;
import com.solo.server.common.service.CommonService;
import com.solo.server.common.vo.CommonCodeVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class CommonServiceImpl implements CommonService {

    @Autowired
    private CommonDao dao;

    @Override
    public List<CommonCodeVO> GetCommonCode(Map<String, String> param) {
        return dao.GetCommonCode(param);
    }
}

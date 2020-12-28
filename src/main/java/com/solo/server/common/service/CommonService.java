package com.solo.server.common.service;

import com.solo.server.common.vo.CommonCodeVO;

import java.util.List;
import java.util.Map;

public interface CommonService {
    public List<CommonCodeVO> GetCommonCode(Map<String,String> param);
}

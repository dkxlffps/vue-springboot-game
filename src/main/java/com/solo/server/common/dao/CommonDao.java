package com.solo.server.common.dao;

import com.solo.server.common.vo.CommonCodeVO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface CommonDao {

    public List<CommonCodeVO> GetCommonCode(Map<String,String> param);
}

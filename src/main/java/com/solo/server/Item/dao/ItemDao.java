package com.solo.server.Item.dao;

import com.solo.server.Item.vo.ItemVO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ItemDao {

    public void CreateItem(ItemVO item);
    public String GetSetItemSeq();
}

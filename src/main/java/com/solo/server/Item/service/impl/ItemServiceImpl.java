package com.solo.server.Item.service.impl;

import com.solo.server.Item.dao.ItemDao;
import com.solo.server.Item.service.ItemService;
import com.solo.server.Item.vo.ItemVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemDao dao;


    @Override
    public void CreateItem(ItemVO item) {
        dao.CreateItem(item);
    }

    @Override
    public void CreateSetItem(List<ItemVO> itemList) {
        String set_item_seq = dao.GetSetItemSeq();
        for(ItemVO item : itemList) {
            item.setSET_ITEM_SEQ(set_item_seq);
            dao.CreateItem(item);
        }
    }


}

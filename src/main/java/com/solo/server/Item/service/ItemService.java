package com.solo.server.Item.service;

import com.solo.server.Item.vo.ItemVO;

import java.util.List;

public interface ItemService {
    public void CreateItem(ItemVO item);
    public void CreateSetItem(List<ItemVO> itemList);
}

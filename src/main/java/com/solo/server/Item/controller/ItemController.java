package com.solo.server.Item.controller;

import com.solo.server.Item.service.ItemService;
import com.solo.server.Item.vo.ItemVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/item")
public class ItemController {

    @Autowired
    private ItemService service;

    @PostMapping(value = "/createItem")
    public void CreateItem(@RequestBody ItemVO item) {
        service.CreateItem(item);
    }

    @PostMapping(value = "/createSetItem")
    public void CreateSetItem(@RequestBody List<ItemVO> itemList) {
        service.CreateSetItem(itemList);
    }
}

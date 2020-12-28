package com.solo.server.common.controller;

import com.solo.server.common.service.CommonService;
import com.solo.server.common.vo.CommonCodeVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(value = "/api/common")
public class CommonController {

    @Autowired
    private CommonService service;

    @GetMapping(value = "/code")
    public List<CommonCodeVO> GetCommonCode(@RequestParam("category") String category,
                                            @RequestParam("type") String type) {
        Map<String,String> param = new HashMap<>();
        param.put("category", category);
        param.put("type",type);
        return service.GetCommonCode(param);
    }
}

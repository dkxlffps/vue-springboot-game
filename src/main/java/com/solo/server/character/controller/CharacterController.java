package com.solo.server.character.controller;

import com.solo.server.character.service.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/character")
public class CharacterController {

    @Autowired
    private CharacterService service;
}

package com.solo.server.character.service.impl;

import com.solo.server.character.dao.CharacterDao;
import com.solo.server.character.service.CharacterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CharacterServiceImpl implements CharacterService {

    @Autowired
    private CharacterDao dao;

}

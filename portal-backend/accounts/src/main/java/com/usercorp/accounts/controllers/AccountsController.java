package com.usercorp.accounts.controllers;

import io.swagger.annotations.ApiOperation;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/accounts")
public class AccountsController {

    @GetMapping("/")
    @ApiOperation(value = "Get users")
    public ResponseEntity<List<String>> getUsers() {
        List<String> users = new ArrayList<>();
        users.add("test1");
        users.add("test2");

        return ResponseEntity.ok().body(users);
    }
}

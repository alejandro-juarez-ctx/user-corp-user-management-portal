package com.usercorp.accounts.controllers;

import com.usercorp.accounts.entities.User;
import com.usercorp.accounts.models.UserCreate;
import com.usercorp.accounts.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/accounts")
public class AccountsController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/")
    public @ResponseBody String createUser(@RequestBody UserCreate newUser) {
        User user = new User();
        user.setFirstName(newUser.getFirstName());
        user.setLastName(newUser.getLastName());
        user.setEmail(newUser.getEmail());

        userRepository.save(user);

        return "Saved";
    }
}

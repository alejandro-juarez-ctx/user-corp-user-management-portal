package com.usercorp.accounts.controllers;

import com.usercorp.accounts.entities.User;
import com.usercorp.accounts.models.RequestUser;
import com.usercorp.accounts.services.AccountsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/accounts")
public class AccountsController {

    @Autowired
    private AccountsService accountsService;

    @GetMapping("/")
    public @ResponseBody ResponseEntity<Iterable<User>> getAll() {
        Iterable<User> users = accountsService.getAllUsers();

        return ResponseEntity.ok().body(users);
    }

    @GetMapping("/{id}")
    public @ResponseBody ResponseEntity<User> getById(@PathVariable int id) {
        Optional<User> result = accountsService.getUserById(id);

        if (result.isEmpty()) return ResponseEntity.notFound().build();

        User user = result.get();
        return ResponseEntity.ok().body(user);
    }

    @PostMapping("/")
    public @ResponseBody ResponseEntity<Object> create(@RequestBody RequestUser user) {
        accountsService.createUser(user);
        return ResponseEntity.ok().body(null);
    }

    @PutMapping("/")
    public @ResponseBody ResponseEntity<Object> update(@RequestBody User updatedUser) {
        return accountsService.update(updatedUser)
            ? ResponseEntity.ok().build()
            : ResponseEntity.badRequest().build();
    }

    @DeleteMapping("/{id}")
    public @ResponseBody ResponseEntity<Object> delete(@PathVariable int id) {
        return accountsService.delete(id)
                ? ResponseEntity.ok().build()
                : ResponseEntity.badRequest().build();
    }
}

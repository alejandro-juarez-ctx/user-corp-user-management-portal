package com.usercorp.accounts.controllers;

import com.usercorp.accounts.entities.User;
import com.usercorp.accounts.models.RequestUser;
import com.usercorp.accounts.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/accounts")
public class AccountsController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/")
    public @ResponseBody Iterable<User> getAll() {
        return userRepository.findAll();
    }

    @GetMapping("/{id}")
    public @ResponseBody User getById(@PathVariable int id) {
        Optional<User> result = userRepository.findById(id);

        if (result.isEmpty()) return null;

        return result.get();
    }

    @PostMapping("/")
    public @ResponseBody String create(@RequestBody RequestUser newUser) {
        User user = new User();
        user.setFirstName(newUser.getFirstName());
        user.setLastName(newUser.getLastName());
        user.setEmail(newUser.getEmail());

        userRepository.save(user);

        return "Saved.";
    }

    @PutMapping("/")
    public @ResponseBody String update(@RequestBody User updatedUser) {
        Optional<User> result = userRepository.findById(updatedUser.getId());

        if (result.isEmpty()) return "No user found with provided id.";

        User user = result.get();
        user.setEmail(updatedUser.getEmail());
        user.setFirstName(updatedUser.getFirstName());
        user.setLastName(updatedUser.getLastName());

        userRepository.save(user);

        return "User updated.";
    }

    @DeleteMapping("/{id}")
    public @ResponseBody String delete(@PathVariable int id) {
        Optional<User> result = userRepository.findById(id);

        if (result.isEmpty()) return "No user found with provided id.";

        userRepository.delete(result.get());

        return "User deleted.";
    }
}

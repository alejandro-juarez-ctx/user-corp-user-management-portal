package com.usercorp.accounts.services;

import com.usercorp.accounts.entities.User;
import com.usercorp.accounts.models.RequestUser;
import com.usercorp.accounts.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountsService {

    @Autowired
    UserRepository userRepository;

    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> getUserById(int id) {
        return userRepository.findById(id);
    }

    public void createUser(RequestUser newUser) {
        User user = new User();
        user.setFirstName(newUser.getFirstName());
        user.setLastName(newUser.getLastName());
        user.setEmail(newUser.getEmail());

        userRepository.save(user);
    }

    public boolean update(User updatedUser) {
        Optional<User> result = getUserById(updatedUser.getId());

        if (!result.isPresent()) return false;

        User user = result.get();

        user.setFirstName(updatedUser.getFirstName());
        user.setLastName(updatedUser.getLastName());
        user.setEmail(updatedUser.getEmail());

        userRepository.save(user);
        return true;
    }

    public boolean delete(int id) {
        Optional<User> result = getUserById(id);

        if (!result.isPresent()) return false;

        userRepository.delete(result.get());
        return true;
    }
}

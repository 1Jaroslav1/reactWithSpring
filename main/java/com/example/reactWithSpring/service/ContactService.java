package com.example.reactWithSpring.service;

import com.example.reactWithSpring.model.Contact;
import com.example.reactWithSpring.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ContactService {
    @Autowired
    private ContactRepository contactRepository;


    public List<Contact> getAll(){
        return this.contactRepository.findAll();
    }

    public void save(Contact contact){
        this.contactRepository.save(contact);
    }

    public Contact getById(Long id){
        return this.contactRepository.findById(id).get();
    }

    public Long delete(Long id){
        this.contactRepository.deleteById(id);
        return id;
    }
}

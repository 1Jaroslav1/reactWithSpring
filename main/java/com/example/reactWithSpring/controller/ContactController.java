package com.example.reactWithSpring.controller;

import com.example.reactWithSpring.model.Contact;
import com.example.reactWithSpring.service.ContactService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/contacts")
@CrossOrigin(origins = "http://localhost:3001")
public class ContactController {
    @Autowired
    private ContactService contactService;

    @GetMapping(path="/all")
    public ResponseEntity getAllContacts(){
        try{
            return ResponseEntity.ok(contactService.getAll());
        } catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping
    public ResponseEntity getOneContact(@RequestParam Long id){
        try{
            return ResponseEntity.ok(contactService.getById(id));
        } catch (Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping
    public ResponseEntity addContact(@RequestBody Contact contact){
        try{
            contactService.save(contact);
            return ResponseEntity.ok("UserSaved");
        } catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @DeleteMapping(path="/{id}")
    public ResponseEntity deleteContact(@PathVariable Long id){
        try{
            return ResponseEntity.ok(contactService.delete(id));
        } catch(Exception e){
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}

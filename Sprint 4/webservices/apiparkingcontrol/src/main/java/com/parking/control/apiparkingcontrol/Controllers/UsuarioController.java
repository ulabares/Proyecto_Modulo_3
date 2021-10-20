package com.parking.control.apiparkingcontrol.Controllers;

import java.util.ArrayList;
import java.util.Optional;

import com.parking.control.apiparkingcontrol.Models.UsuarioModel;
import com.parking.control.apiparkingcontrol.Services.UsuarioServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "*", methods = {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE})
@RequestMapping("/usuario")
public class UsuarioController {
    @Autowired
    UsuarioServices usuarioServices;

    @GetMapping()
    public ArrayList<UsuarioModel> obtenerUsuario(){
        return usuarioServices.obtenerUsuarios();
    }
    
    @PostMapping()
    public UsuarioModel guardarUsuario(@RequestBody UsuarioModel usuario){
        return this.usuarioServices.guardarUsuario(usuario);
    }

    @GetMapping(path = "/{id}")
   public Optional<UsuarioModel> obtenerUsuarioPorId(@PathVariable("id") Long id){
       return this.usuarioServices.obtenerPorId(id);
   }

   @GetMapping("/query")
   public ArrayList<UsuarioModel> obtenerUsuarioPorDocumento(@RequestParam("documento") Integer documento){
       return this.usuarioServices.obtenerPorDocumento(documento);
    
   }

   @DeleteMapping(path = "/{id}")
   public String eliminarPorId(@PathVariable("id") Long id){
       boolean ok = this.usuarioServices.eliminarUsuario(id);
       if (ok){
           return "Se eliminó el usuario con id: "+id;
       }else{
           return "No se pudo eliminar el usuario con id: "+id;
       }

   }  
}


package com.parking.control.apiparkingcontrol.Controllers;
import java.util.ArrayList;
import java.util.Optional;

import com.parking.control.apiparkingcontrol.Models.ParqueoModel;
import com.parking.control.apiparkingcontrol.Services.ParqueoServices;


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
@RequestMapping("/parqueo")
public class ParqueoController {
    @Autowired
    ParqueoServices parqueoServices;

    @GetMapping()
    public ArrayList<ParqueoModel> obtenerPArqueo(){
        return parqueoServices.obtenerParqueo();
    }
    
    @PostMapping()
    public ParqueoModel guardarParqueo(@RequestBody ParqueoModel parqueo){
        return this.parqueoServices.guardarParqueo(parqueo);
    }

    @GetMapping(path = "/{id}")
   public Optional<ParqueoModel> obtenerParqueoPorId(@PathVariable("id") Long id){
       return this.parqueoServices.obtenerPorId(id);
   }

   @GetMapping("/query")
   public ArrayList<ParqueoModel> obtenerParqueoPorPlaca(@RequestParam("placa") String placa){
       return this.parqueoServices.obtenerPorPlaca(placa);
    
   }

   @DeleteMapping(path = "/{id}")
   public String eliminarPorId(@PathVariable("id") Long id){
       boolean ok = this.parqueoServices.eliminarParqueo(id);
       if (ok){
           return "Se eliminó el usuario con id: "+id;
       }else{
           return "No se pudo eliminar el usuario con id: "+id;
       }

   }

    
}

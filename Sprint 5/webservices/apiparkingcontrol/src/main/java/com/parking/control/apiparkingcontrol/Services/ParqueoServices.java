package com.parking.control.apiparkingcontrol.Services;

import java.util.ArrayList;
import java.util.Optional;

import com.parking.control.apiparkingcontrol.Models.ParqueoModel;
import com.parking.control.apiparkingcontrol.Repositories.ParqueoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParqueoServices{
    @Autowired
    ParqueoRepository parqueoRepository;

    public ArrayList<ParqueoModel> obtenerParqueo(){
        return (ArrayList<ParqueoModel>) parqueoRepository.findAll();
    }

    public ParqueoModel guardarParqueo( ParqueoModel parqueo){
        return parqueoRepository.save(parqueo);
    }

    public Optional<ParqueoModel> obtenerPorId(Long id){
        return parqueoRepository.findById(id);
    }

    public ArrayList<ParqueoModel> obtenerPorPlaca(String placa){
        return parqueoRepository.findByPlaca(placa);
    }

    public boolean eliminarParqueo(Long id){
        try{
            parqueoRepository.deleteById(id);
            return true;
        }catch(Exception err){
            return false;
        }
    }


}
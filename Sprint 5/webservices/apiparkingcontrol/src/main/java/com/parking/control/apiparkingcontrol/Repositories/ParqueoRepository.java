package com.parking.control.apiparkingcontrol.Repositories;
import java.util.ArrayList;

import com.parking.control.apiparkingcontrol.Models.ParqueoModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ParqueoRepository extends CrudRepository <ParqueoModel , Long>  {
    public abstract ArrayList<ParqueoModel> findByPlaca(String placa);
    
}
package com.parking.control.apiparkingcontrol.Repositories;
import com.parking.control.apiparkingcontrol.Models.UsuarioModel;
import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UsuarioRepository extends CrudRepository <UsuarioModel , Long>  {
    public abstract ArrayList<UsuarioModel> findByDocumento(Integer documento);
    
}

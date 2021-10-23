 //Listado de parqueo
$(function(){
    $("#cargar").click(function(){
        console.log("prueba");

        $.get("http://127.0.0.1:8080/parqueo", function(data){
            console.log(data);
            $("#cuerpo").html("");
            for (let i = 0 ; i<data.length;i++){
                let tr=`<tr>
                    <td>`+data[i].id+`</td>
                    <td>`+data[i].fechaIngreso+`</td>
                    <td>`+data[i].horaIngreso+`</td>
                    <td>`+data[i].placa+`</td>
                    <td>`+data[i].tipoVehiculo+`</td>
                    <td>`+data[i].marca+`</td>
                    <td>`+data[i].tipoServicio+`</td>
                    <td>`+data[i].fechaSalida+`</td>
                    <td>`+data[i].horaSalida+`</td>
                    <td>`+data[i].valor+`</td>
                    <td>`+data[i].observacion+`</td>
                    <td><input type="submit" id="eliminar" value="Eliminar" class="btn btn-danger" onclick="eliminarUsuario(${data[i].id})"></td>
                    <td><input type="submit" id="actualizar" value="Actualizar" class="btn btn-success" onclick="actualizarUsuario(${data[i].id})"></td>    
                    </tr>`;
                $("#cuerpo").append(tr)
            }
        })
    })
})
//Guardar parqueo
$(function(){
  $("#guardar").on("click",function(e){
      e.preventDefault();
      let fechaIngreso=$("#fechaIngreso").val();
      let horaIngreso=$("#horaIngreso").val();
      let placa=$("#txtplaca").val();
      let tipoVehiculo = $("#txttipovehiculo").val();
      let marca = $("#txtmarca").val();
      let tipoServicio = $("#txttipoServicio").val();
      let fechaSalida = $("#fechaSalida").val();
      let horaSalida = $("#horaSalida").val();
      let valor = $("#txtprecio").val();
      let observacion = $("#txtdescripcion").val();
      
      //console.log(fechaIngreso,horaIngreso,placa, tipoVehiculo,marca,tipoServiciorca,fechaSalida,horaSalida,valor,observacion);

      fetch("http://127.0.0.1:8080/parqueo" , {
          method:"POST",
          mode:"cors",
          cache:"no-cache",
          headers:{"Content-type":"application/json"},
          body:JSON.stringify({fechaIngreso,horaIngreso,placa, tipoVehiculo,marca,tipoServicio,fechaSalida,horaSalida,valor,observacion})

      }).then(response => response.json().then(()=>alert("Guardado")))
      $("#fechaIngreso").val("");
      $("#horaIngreso").val("");
      $("#txtplaca").val("");
      $("#txttipovehiculo").val("");
      $("#txtmarca").val("");
      $("#txttipoServicio").val("");
      $("#fechaSalida").val("");
      $("#horaSalida").val("");
      $("#txtprecio").val("");
      $("#txtdescripcion").val("");

  });
});
//buscar por placa
$(function(){
    $("#buscarplaca").click(function(){
        let documento = document.getElementById("buscar_placa").value;
        let url="http://127.0.0.1:8080/parqueo/query?placa=";

        $.get(url+documento, function(data){

            $("#cuerpo").html("");
            for (let i = 0 ; i<data.length;i++){
                let tr=`<tr>
                    <td>`+data[i].id+`</td>
                    <td>`+data[i].fechaIngreso+`</td>
                    <td>`+data[i].horaIngreso+`</td>
                    <td>`+data[i].placa+`</td>
                    <td>`+data[i].tipoVehiculo+`</td>
                    <td>`+data[i].marca+`</td>
                    <td>`+data[i].tipoServicio+`</td>
                    <td>`+data[i].fechaSalida+`</td>
                    <td>`+data[i].horaSalida+`</td>
                    <td>`+data[i].valor+`</td>
                    <td>`+data[i].observacion+`</td>
                    <td><input type="submit" id="eliminar" value="Eliminar" class="btn btn-danger" onclick="eliminarUsuario(${data[i].id})"></td>
                    <td><input type="submit" id="actualizar" value="Actualizar" class="btn btn-success" onclick="actualizarUsuario(${data[i].id})"></td>
                        </tr>`;
                $("#cuerpo").append(tr)
            }

        })
        $("#buscar_placa").val("");
        $("#buscar_id").val("");

        })
})
//buscar por id
$(function(){
    $("#buscaridd").click(function(){
        let id = document.getElementById("buscar_id").value;
      
        let url="http://127.0.0.1:8080/parqueo/";

        $.get(url+id, function(data){
            
            $("#cuerpo").html("");
                let tr=`<tr>
                    <td>`+data.id+`</td>
                    <td>`+data.fechaIngreso+`</td>
                    <td>`+data.horaIngreso+`</td>
                    <td>`+data.placa+`</td>
                    <td>`+data.tipoVehiculo+`</td>
                    <td>`+data.marca+`</td>
                    <td>`+data.tipoServicio+`</td>
                    <td>`+data.fechaSalida+`</td>
                    <td>`+data.horaSalida+`</td>
                    <td>`+data.valor+`</td>
                    <td>`+data.observacion+`</td>
                    <td><input type="submit" id="eliminar" value="Eliminar" class="btn btn-danger" onclick="eliminarUsuario(${data.id})"></td>
                    <td><input type="submit" id="actualizar" value="Actualizar" class="btn btn-success" onclick="actualizarUsuario(${data.id})"></td>
                        </tr>`;
                $("#cuerpo").append(tr)
        })
        $("#buscar_placa").val("");
        $("#buscar_id").val("");
        })
})
//eliminar usuario
const eliminarUsuario= (id) =>{
    if(confirm("¿seguro que desea eliminar?")){
        console.log(id);
        $.ajax({
            url:"http://127.0.0.1:8080/parqueo/"+id,
            type:"DELETE",
            success:(res) =>{
                console.log("Eliminado")
            }

        })
    }
}




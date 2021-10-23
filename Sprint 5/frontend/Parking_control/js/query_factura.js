
//buscar por placa
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






 //Listado de usuarios
$(function(){
    $("#cargar").click(function(){
        console.log("prueba");

        $.get("http://127.0.0.1:8080/usuario", function(data){
            console.log(data);
            $("#cuerpo").html("");
            for (let i = 0 ; i<data.length;i++){
                let tr=`<tr>
                    <td>`+data[i].id+`</td>
                    <td>`+data[i].documento+`</td>
                    <td>`+data[i].nombrecompleto+`</td>
                    <td>`+data[i].correo+`</td>
                    <td>`+data[i].rol+`</td>
                    <td>`+data[i].estado+`</td>
                    <td><input type="submit" id="eliminar" value="Eliminar" onclick="eliminarUsuario(${data[i].id})"></td>
                    <td><input type="submit" id="actualizar" value="Actualizar" onclick="actualizarUsuario(${data[i].id})"></td>    
                    </tr>`;
                $("#cuerpo").append(tr)
            }
        })
    })
})
//Guardar Usuario
$(function(){
  $("#guardar").on("click",function(e){
      e.preventDefault();
      let documento=$("#txtdocumento").val();
      let nombrecompleto=$("#txtnombre").val();
      let correo=$("#txtcorreo").val();
      let clave = $("#txtpassword").val();
      let rol = $("#txtrol").val();
      let estado = $("#txtestado").val();
      
      console.log(documento,nombrecompleto,correo, clave,rol,estado);

      fetch("http://127.0.0.1:8080/usuario" , {
          method:"POST",
          mode:"cors",
          cache:"no-cache",
          headers:{"Content-type":"application/json"},
          body:JSON.stringify({documento,nombrecompleto,correo, clave,rol,estado})

      }).then(response => response.json().then(()=>alert("Guardado")))

  });
});
//buscar por documeto
$(function(){
    $("#buscardocumento").click(function(){
        let documento = document.getElementById("buscar_documento").value;
        let url="http://127.0.0.1:8080/usuario/query?documento=";

        $.get(url+documento, function(data){

            $("#cuerpo").html("");
            for (let i = 0 ; i<data.length;i++){
                let tr=`<tr>
                    <td>`+data[i].id+`</td>
                    <td>`+data[i].documento+`</td>
                    <td>`+data[i].nombrecompleto+`</td>
                    <td>`+data[i].correo+`</td>
                    <td>`+data[i].rol+`</td>
                    <td>`+data[i].estado+`</td>
                    <td><input type="submit" id="eliminar" value="Eliminar" onclick="eliminarUsuario(${data[i].id})"></td>
                    <td><input type="submit" id="actualizar" value="Actualizar" onclick="actualizarUsuario(${data[i].id})"></td>
                        </tr>`;
                $("#cuerpo").append(tr)
            }

        })

        })
})
//buscar por id
$(function(){
    $("#buscarid").click(function(){
        let id = document.getElementById("buscar_id").value;
      
        let url="http://127.0.0.1:8080/usuario/";

        $.get(url+id, function(data){
            
            $("#cuerpo").html("");
                let tr=`<tr>
                    <td>`+data.id+`</td>
                    <td>`+data.documento+`</td>
                    <td>`+data.nombrecompleto+`</td>
                    <td>`+data.correo+`</td>
                    <td>`+data.rol+`</td>
                    <td>`+data.estado+`</td>
                    <td><input type="submit" id="eliminar" value="Eliminar" onclick="eliminarUsuario(${data.id})"></td>
                    <td><input type="submit" id="actualizar" value="Actualizar" onclick="actualizarUsuario(${data.id})"></td>
                        </tr>`;
                $("#cuerpo").append(tr)
        })
        })
})
//eliminar usuario
const eliminarUsuario= (id) =>{
    if(confirm("¿seguro que desea eliminar?")){
        console.log(id);
        $.ajax({
            url:"http://127.0.0.1:8080/usuario/"+id,
            type:"DELETE",
            success:(res) =>{
                console.log("Eliminado")
            }

        })
    }
}




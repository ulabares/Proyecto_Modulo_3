$(document).ready(() =>{
    //Listado de usuarios
   const list = () =>{
   $.ajax({
       url:"http://localhost:8080/usuario",
       type:"GET",
       dataType:"json",
       success:function(res){
           let data="";
           res.forEach(element => {
               data+=`
                    <tr usuarioId = ${element.id} >
                        <td>${element.id}</td>
                        <td>${element.documento}</td>
                        <td>${element.nombrecompleto}</td>
                        <td>${element.correo}</td>
                        <td>${element.rol}</td>
                        <td>${element.estado}</td>
                        <td>
                        <button id="eliminar" class="btn btn-danger">Eliminar</button>
                        </td>
                        <td>
                        <button id="actualizar" class="btn btn-primary ">Editar</button>
                        </td>
                    </tr>
               `
           });
           $("tbody").html(data);
    }
    })
}
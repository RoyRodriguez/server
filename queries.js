var conexion = require('./connection');

function MetodosDB() {
	this.seleccionar = function(respuesta){
		conexion.obtener(function(er,cn){
			cn.query('select * from inventario', function(error, resultado){
				cn.release();
				if (error) {
					respuesta.send({estado: 'Error'});
				}else {
					respuesta.send(resultado);
				}
			})
		})
	}
	this.seleccionarId = function(id, respuesta){
		conexion.obtener(function(er, cn){
			cn.query('select * from inventario where id = ?',id, function(error, resultado){
				cn.release();
				if (er) {
					respuesta.send({ estado: 'Error' });
				}else{
					respuesta.send( resultado );
				}
			})
		})
	}

	this.insertar = function(datos,respuesta){
		conexion.obtener(function(er,cn){
			cn.query('insert into inventario set ?', datos, function(error,resultado){
				cn.release();
				if (error) {
					respuesta.send({ estado: 'Error' });
				}else{
					respuesta.send({ estado: 'OK' });
				}
			})
		})
	}

	this.actualizar = function(datos, respuesta){
		conexion.obtener(function(er,cn){
			cn.query('update inventario set ? where id = ?',[datos,datos.id],function(error, resultado){
				cn.release();
				if (error) {
					respuesta.send({ estado: 'Error' });
				}else{
					respuesta.send({ estado: 'OK' });
				}

			})
		})
	}

	this.borrar = function(id, respuesta){
		conexion.obtener(function(er,cn){
			cn.query('delete from inventario where id = ?',id,function(error, resultado){
				cn.release();
				if (error) {
					respuesta.send({ estado: 'Error' });
				}else{
					respuesta.send({ estado: 'OK' });
				}

			})
		})
	}
}

module.exports = new MetodosDB();


































































































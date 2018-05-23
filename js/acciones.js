// JavaScript Document

$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){
		$('#izquierda').on("swipeleft", function(){
			navigator.notification.alert("Deslizó hacia la izquierda",function(){"aplicacion 7", "Ok"});
		});//Cerrar deslizar izquierda
		$('#derecha').on("swiperight", function(){
			navigator.notification.confirm("¿Qué quieres hacer?",function(op){
				switch(op)
				{
					case 1:
					navigator.notification.beep(1);
					break;
					
					case 2:
					navigator.notification.vibrate(3000);
					break;
				}
			},"aplicacion 7","Beepear,Vibrar,Cancelar");
		});//Cerrar desliozar derecha
		//app1
		$('#disp table td').eq(3).text(device.model);
			$('#disp table td').eq(5).text(device.cordova);
			$('#disp table td').eq(7).text(device.platform);
			$('#disp table td').eq(9).text(device.version);
			$('#disp table td').eq(11).text(device.uuid);
		document.addEventListener("pause",function(){
			escribehistoria ('la app se pausó');
		},false);//pause
		document.addEventListener("resume",function(){
			escribehistoria ('la app se reinició');
		}.false);//resume
		document.addEventListener("online",function(){
			escribehistoria ('la app se conecto a la red');
		},false);//se conecto
		document.addEventListener("offline",function(){
			escribehistoria ('la app se desconecto de la red');
		},false);//se desconecto
		//Cierreapp1
		//App5
		
		$('#sonar') .tap(function(){
			navigator.notification.beep(2);
		});//Cierre del beep
		$('#vibrar').tap(function(){
			navigator.notification.vibrate(2000);
		});//Cierre de vibrar
		//CierreApp5
		
	},false);//Cerrar deviceready
});//Cerrar document

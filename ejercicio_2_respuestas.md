2.1) ¿Cómo implementarías las acciones del frontend utilizando redux? (por
ejemplo autenticación, solicitud de clientes activos para el usuario y
solicitud de casos por cliente)
2.2) Si quisiéramos agregar una ruta nueva a la app, ¿cómo reestructurarías
el index.js?

2.1) 
En este desafío estoy implementando redux tooltik. Cree tres archivos para manejar lo que es la autenticación, los clientes y los casos.
Autenticación:
En este caso si el usuario este logueado, se le mostrara el home, pero si no esta logueado y quiere acceder al home, se le redirigirá al login. Para eso hay que guardar el token en el localStorage para que el usuario una vez que cierre su navegador y después lo vuelva abrir pueda seguir ingresando al home. 
Además, se le agrego un cierre de sesión, donde al cerrar sesión se limpia todo el storage, redireccionándolo, al login. 

Clientes/Bots:
En este caso, a través del token, obtendremos un array de objetos con dichos clientes. Que luego se mostrara y usara en toda la aplicación.

Casos:
En este último caso, a través del id del cliente y de las fechas seleccionadas, obtendremos un array de objetos con los casos, que luego se mostrara en la tabla.

Todo esto mencionado antes esta hecho con Redux tooltik.

2.2) 
Para agregar una nueva ruta, primero hay que ponerlo dentro del privateRoute, para que solo se pueda acceder cuando uno allá iniciado sesión y luego crear dicho componente.

<h1 align="center">redit-app challenge</h1>
<p>Para el desarrollo del challenge utilicé: </p>
<ul>
  <li>
    <strong>Use Context</strong>
    <p>Para poder tener el estado, y funciones con su logica de forma global y poder ejecutarlas sin tener que pasar por propiedades, ademas la logica de ellas se centra toda ahí.</p>
  </li>
  <li>
    <strong> Use Reducer</strong>
    <p>Para que maneje y actualice el estado global son sus dispatchs, de esta forma, nosotros definimos las actions que va a ejecutar el reducer y solo de esa forma se va a cambiar el estado, y el mismo estado del reducer es que nosotros vamos a exponer como estado global.
Tambien como estamos utilizando Typescript, podemos agregar tipado a las actions y definir como se va a llamar cada action y en caso de recibir un dato para agregar o cambiar el estado, especificamos el tipo del mismo tambien para no mandar algo incorrecto o inesperado.</p>
  </li>
  <li>
    <strong>Paste JSON as code (extension)</strong>
    <p>Para poder tener el tipado de la respuesta de la api, saber que tipo de dato estoy manejando y sus metodos. Tambien gracias a esto pude hacer mi propia interfaz de cada post de una forma mas rapida</p>
  </li>
  <li>
    <strong>Stack Navigator</strong>
    <p>Use la navegacion de tipo Stack, donde una screen es la lista de los posts y en la otra pantalla navegamos a la url del post que queremos ver en particular</p>
  </li>
  <li>
    <strong>Web View component</strong>
    <p>
    Componente externo utilizado en la segunda pantalla del stack para poder mostrar desde la web lo que contenga el post
    </p>
  </li>
</ul>

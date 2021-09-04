export const relativeDate = (time: number) => {
  //la hora llega en milisegundos
  const seconds = time / 1000; //obtengo los segundos
  const secondsPast = Date.now() / 1000 - seconds;
  const minutes = secondsPast / 60;

  if (secondsPast < 60) {
    return `${secondsPast} seconds ago`;
  } else if (secondsPast < 3600) {
    return `${Math.floor(secondsPast / 60)} minutes ago`;
  } else if (secondsPast < 86400) {
    return `${Math.floor(secondsPast / 3600)} hours ago`;
  } else if (secondsPast < 604800) {
    return `${Math.floor(secondsPast / 86400)} days ago`;
  } else if (minutes < 43800) {
    //paso de segundos a minutos porque es un numero muy grande en seg.
    //43800 son los minutos en un mes, si es menor es q estamos en semanas
    return `${Math.floor(secondsPast / 604800)} weeks ago`;
  } else if (minutes < 525600) {
    //en un año hay 525600 minutos, si hay menos es pq estamos dentro del año
    // y sacamos los meses
    return `${Math.floor(minutes / 43800)} months ago`;
  } else {
    return `${Math.floor(minutes / 525600)} years ago`;
  }
};

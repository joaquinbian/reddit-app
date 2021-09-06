export const relativeDate = (time: number) => {
  //la hora llega en milisegundos
  const seconds = time / 1000; //obtengo los segundos
  const secondsPast = Date.now() / 1000 - seconds;
  const minutes = secondsPast / 60;

  let result;

  if (secondsPast < 60) {
    result = Math.floor(secondsPast);
    return result === 1 ? `${result} second ago` : `${result} seconds ago`;
  } else if (secondsPast < 3600) {
    result = Math.floor(secondsPast / 60);
    return result === 1 ? `${result} minute ago` : `${result} minutes ago`;
  } else if (secondsPast < 86400) {
    result = Math.floor(secondsPast / 3600);
    return result === 1 ? `${result} hour ago` : `${result} hours ago`;
  } else if (secondsPast < 604800) {
    result = Math.floor(secondsPast / 86400);
    return result === 1 ? `${result} day ago` : `${result} days ago`;
  } else if (minutes < 43800) {
    //paso de segundos a minutos porque es un numero muy grande en seg.
    //43800 son los minutos en un mes, si es menor es q estamos en semanas
    result = Math.floor(secondsPast / 604800);
    return result === 1 ? `${result} week ago` : `${result} weeks ago`;
  } else if (minutes < 525600) {
    //en un año hay 525600 minutos, si hay menos es pq estamos dentro del año
    // y sacamos los meses
    result = Math.floor(minutes / 43800);
    return result === 1 ? `${result} month ago` : `${result} months ago`;
  } else {
    result = Math.floor(minutes / 525600);
    return result === 1 ? `${result} year ago` : `${result} years ago`;
  }
};

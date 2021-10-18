//Concatenate Arrays//

function concat(arrayFirst, arraySecond) {
  let arrayResult = []; 
  if (arrayFirst != undefined && arraySecond != undefined) {
    return arrayResult = arrayFirst.concat(arraySecond); 
  } else if (arrayFirst === undefined && arraySecond != undefined) {
    return arrayResult = [arraySecond];
  } else if (arrayFirst != undefined && arraySecond === undefined) {
    return arrayResult = [arrayFirst]; 
  }
}

//got stuck for hours, until I explore MDN's resources on concat//
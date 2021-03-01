/******************
 * YOUR CODE HERE *
 ******************/

getFirstItemFrom = (num) => {
  return num[0]
}

getLastItemFrom = (num) => {
  return num[num.length - 1];
}

getIndex3 = (str) => {
  return str[3] || str[str.length -1];
} 

isLongList = (arr) => {
  if (arr.length >= 10) {
    return true;
  } else {
    return false;
  }
}

firstItemIsNumber = (arr) => {
  if (arr.includes()) {
    return true;
  } else {
    return false;
  }
}

secondCharOfThirdString = (arr) => {
  
}

 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}

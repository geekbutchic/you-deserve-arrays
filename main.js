/******************
 * YOUR CODE HERE *
 ******************/

getFirstItemFrom = (arr) => {
  return arr[0]
}

getLastItemFrom = (arr) => {
  return arr[arr.length - 1];
}

getIndex3 = (arr) => {
  return arr[3] || arr[arr.length -1];
} 

isLongList = (arr) => {
  if (arr.length >= 10) {
    return true;
  } else {
    return false;
  }
}

firstItemIsNumber = (arr) => {
  const firstItem = arr[0];
  return typeof firstItem === 'number';
}

secondCharOfThirdString = (arr) => {
  // const thirdItem = arr[2];
  // return thirdItem[1];
  return arr[2][1]
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

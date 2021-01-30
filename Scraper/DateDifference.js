module.exports = function checkDateDifference(date) {
  // -------------------------------------------------------//
  //  IF this is >= 1.0 the news is more than 24 hours old  //
  // -------------------------------------------------------//

  const today = new Date();
  const convertedDate = new Date(date);

  if (convertedDate == 'Invalid Date') {
    console.log(`ERROR: invalid date -> ${date}`);
    //Error value
    return NaN;
  }

  const difference = (today - convertedDate) / (1000 * 60 * 60 * 24);

  //Rounding
  const rounded = Math.round((difference + Number.EPSILON) * 100) / 100;
  return rounded;
};

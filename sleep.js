const getSleepHours = day => {
  switch (day) {
    case "monday":
      return 5;
    case "tuesday":
      return 6;
      case "wednesday":
      return 7;
      case "thursday":
      return 7;
      case "friday":
      return 6;
    case "saturday":
      return 5;
    case "sunday":
      return 12;
  }
};

const getActualSleepHours = () => getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");

let getIdealSleepHours = (hours) => {
  return hours * 7;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(9);
  if(actualSleepHours ==  idealSleepHours){
    return "Good sleep";
  }else if(actualSleepHours > idealSleepHours){
    return "Too much sleep";
  }else if(actualSleepHours < idealSleepHours){
    return "Too little sleep";
  }
}

console.log(calculateSleepDebt());


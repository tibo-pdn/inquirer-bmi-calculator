export const calculateBMI = (weight, height) => {
    const heightInMeters = height / 100;
    const bmi = weight / heightInMeters ** 2;
    return bmi.toFixed(2);
};
export const getBMICategory = (bmi) => {
    if (+bmi < 18.5) {
        return "underweight";
    }
    else if (+bmi < 25) {
        return "normal weight";
    }
    else if (+bmi < 30) {
        return "overweight";
    }
    else if (+bmi < 35) {
        return "obesity";
    }
    else {
        return "morbid obesity";
    }
};

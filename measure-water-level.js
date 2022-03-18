const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected3 = 11; // 12 - 1 = 11

const riverLevels4 = [1, 5];
const expected4 = 4;

const riverLevels5 = [5, 1];
const expected5 = -1;

const riverLevels6 = [9, 7, 7, 7];
const expected6 = -1;

const riverLevels7 = [42];
const expected7 = -1;

//have if statement that compares wL[i]-wL[j] and compare that to wl[i+1]-wL[j+1]
//return the greatest difference between i and j

function measureWaterLevels(waterLevels) {
    // variable to hold water level 
    let low = waterLevels[0]
    let diff = 0
    for(let i = 0; i < waterLevels.length; i++){
        if(diff < waterLevels[i] - low){
            diff = waterLevels[i] - low
        }
        if(waterLevels[i] < waterLevels[i -1]){
            low = waterLevels[i]
        }
    }
    return diff === 0? -1: diff
}

console.log(measureWaterLevels(riverLevels1))
console.log(measureWaterLevels(riverLevels2))
console.log(measureWaterLevels(riverLevels3))
console.log(measureWaterLevels(riverLevels4))
console.log(measureWaterLevels(riverLevels5))
console.log(measureWaterLevels(riverLevels6))
// code your solution here
function superbowlWin(arr){

    const obj = arr.find(ele =>  ele.result === 'W');

    if (obj == null){
        return obj;
    }

    return obj.year;
}
function findPairs(nums,target){
    let result =[]
    let seen = new set();
    let usedPairs= new set();
}

for (let num of nums){
    let complement=target-num;
    if (seen.has(complement)){
        let pair=[Math.min(num,complement), Math.max(numb,complement)];
let pairStr=pair.toString();
    }
}

if (!usedPairs.has(pairStr)){
    result.push(pair);
    usedPairs.add(pairStr);
}
{
seen.add (num);
}
return result;

console.log(findPairs([2,7,11,15,3,6,2,7],9));

let data =[
    {principal:2500, time:1.8},
    {principal:1000, time:5},
    {principal:3000, time:1},
    {principal:2000, time:3}

console.log(data)

function interestCalculator(array){
    for( let i=0; i<data.length;i++){

    if (data[i].principal >=2500 && data[i].time> 1 && data[i].time<3){
        return `rate =3`
    }else if (data[i].principal>= 2500 && data[i].time>=3){
        return `rate=4`
    }else if(data[i].principal<2500 || data[i].time <= 1){
        return `rate=2`
    }else(
          `rate=1`
    )

} 
    let interest = (principal*time*rate)/100
        let interestData = []
    interestData.push({principal:2500, time:1.8, rate:3, interest: interest.value});
    interestData.push({principal:1000, time:5, rate:1 , interest:interest.value });
    interestData.push({principal:3000, time:1, rate:2, interest: interest.value});
    interestData.push({principal:2000, time:3, rate:1, interest:interest.value});
        
    console.log(interestData)
    return interestData
}

interestCalculator(array)

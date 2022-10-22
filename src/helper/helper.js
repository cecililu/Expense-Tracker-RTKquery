import _ from "lodash";

export function getSum(transaction,type){
    let sum=_(transaction)
            .groupBy('type')
            .map((obj,keys)=>{
                 if(!type) return _.sumBy(obj,'amount')
                 return {
                  "type":keys,
                  "color":obj[0].color,
                  "total":_.sumBy (obj,'amount')
            }

            })
            .value()
  return(sum)
}

export function getLabels(transaction ){
   let amountSum=getSum(transaction,'type');
   let total=_.sum(getSum(transaction))
   let percent=_(amountSum)
       .map(obj=>_.assign(obj,{percent:(100*obj.total)/total}))
       .value()
    return percent
}

export function chart(transaction){
  let bg=_.map(transaction,a=>a.color)
  bg=_.uniq(bg)
  console.log(bg)
  let dataValue=getSum(transaction)
  console.log(dataValue)
  const config={
    data:{
      datasets:[{
  
            data: dataValue,
            backgroundColor:bg,
            hoverOffset:4,
            borderRadius:3
            
          }]
      },
      options:{
         cutout:115,
         
      } 
  }
  return config
}


export function getTotal(transaction){
   return _.sum(getSum(transaction))
}
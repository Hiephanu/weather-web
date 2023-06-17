export function selectedIcon(temp){
    if(temp>25){
      return  ['fas', 'sun']
    }
    else if(temp<=25 && temp >=15){
      return ['fas', 'sun-cloud']
    }
    else if(temp<15){
      return ['fas', 'raindrops']
    }
    else {
      return ['fas', 'snowflake']
    }
}
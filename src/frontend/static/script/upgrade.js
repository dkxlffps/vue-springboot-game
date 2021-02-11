export function setDefaultUpgradeOptions(rank , limit_level ,availableOptions , max_upgrade_count) {
  
}

function excuteCalculation(start_value ,growth_rate, limit) {
  let result = [];
  let current_value = start_value;
  for(var upgrade_count = 0; upgrade_count <limit; upgrade_count++) {
    if(upgrade_count >= 0) { // 1 ~ 3
      current_value += (start_value * growth_rate);
    }else if(upgrade_count > 3) { // 4 ~ 6
      current_value += (start_value * (growth_rate + .3));
    }else if(upgrade_count > 6) { // 7 ~ 9
      current_value += (start_value * (growth_rate + 1));
    }else if (upgrade_count > 9) { // 10 ~ 12
      current_value += (start_value * (growth_rate + 2.3));
    }else if (upgrade_count > 12) { // 13 ~ 15
      current_value += (start_value * (growth_rate + 7));
    }

    var form = {
      value: Math.round(current_value),
      count: upgrade_count + 1,
    };

    result.push(form);
  }

  return result;
}
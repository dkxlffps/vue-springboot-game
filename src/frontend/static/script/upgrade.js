export function setDefaultUpgradeOptions(rank , limit_level ,availableOptions , max_upgrade_count) {
  let growth_rate;
  switch(rank) {
    case 'NORMAL':
      growth_rate = .8;
      break;
    case 'MAGIC':
      growth_rate = 1;
      break;
    case 'RARE':
      growth_rate = 1.3;
      break;
    case 'UNIQUE':
      growth_rate = 1.7;
      break;
    case 'REGEND':
      growth_rate = 2.1;
      break;
    case 'RELICS':
      growth_rate = 2.8;
      break;
  }

  let start_value;
  if(limit_level > 0) {
    start_value = .5;
  }else if(limit_level > 5) {
    start_value = .7;
  }else if(limit_level > 10) {
    start_value = .95;
  }else if(limit_level > 15) {
    start_value = 1.15;
  }else if (limit_level > 20) {
    start_value = 1.35;
  }else if (limit_level > 25) {
    start_value = 1.55;
  }else if (limit_level > 30) {
    start_value = 1.8;
  }else if (limit_level > 35) {
    start_value = 2.05;
  }else if (limit_level > 40) {
    start_value = 2.3;
  }else if (limit_level > 45) {
    start_value = 2.6;
  }else if (limit_level > 50) {
    start_value = 3;
  }else if (limit_level > 55) {
    start_value = 3.5;
  }
  
  let result = [];
  return availableOptions.forEach(option => {
    result.push({
      key: option.key,
      text: option.title,
      data: excuteCalculation(start_value , growth_rate , max_upgrade_count)
    })
  });
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
      success_percent: upgradeSuccessPercentCalculation(upgrade_count + 1);
    };

    result.push(form);
  }

  return result;
}

function upgradeSuccessPercentCalculation(upgrade_count) {
  let result_upgrade_success_percent;
  switch(upgrade_count) {
    case 1:
    case 2:
    case 3:
      result_upgrade_success_percent = 100;
      break;
    case 4:
    case 5:
      result_upgrade_success_percent = 75;
      break;
    case 6:
      result_upgrade_success_percent = 65;
      break;
    case 7:
    case 8:
      result_upgrade_success_percent = 50; 
      break;
    case 9:
      result_upgrade_success_percent = 30;
      break;
    case 10:
      result_upgrade_success_percent = 20;
      break;
    case 11:
      result_upgrade_success_percent = 12.5;
      break;
    case 12:
      result_upgrade_success_percent = 9;
      break;
    case 13:
      result_upgrade_success_percent = 6;
      break;
    case 14:
      result_upgrade_success_percent = 4;
      break;
    case 15:
      result_upgrade_success_percent = 3;
      break;
  }
  return result_upgrade_success_percent;
}
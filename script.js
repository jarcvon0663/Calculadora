function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function formatInputValue(input) {
  var value = input.value.replace(/\./g, '');
  input.value = formatNumber(value);
}

function calculateCost() {
  var salaryInput = document.getElementById('salary');
  var bonusesInput = document.getElementById('bonuses');
  var salary = parseFloat(salaryInput.value.replace(/\./g, ''));
  var bonuses = parseFloat(bonusesInput.value.replace(/\./g, ''));
  var integral = document.getElementById('integral').checked;
  var connectivityBonus = document.getElementById('connectivity-bonus').checked;
  var suraPolicy = document.getElementById('sura-policy').checked;
  var sanitas = document.getElementById('sanitas').checked;
  var lifeInsurance = document.getElementById('life-insurance').checked;
  var result = document.getElementById('result');

  var smmlv = 1160000; // Valor del salario mínimo mensual legal vigente
  var transportAllowance = 140606; // Auxilio de transporte

  if (integral && salary <= 15079999) {
    result.innerHTML = 'El salario debe ser superior a $15.079.999 para el régimen integral.';
    return;
  }

  // Limitar el valor de "bonuses" al 40% del salario ingresado
  var maxBonuses = salary * 0.4;
  
  if (bonuses > maxBonuses) {
    result.innerHTML = 'Las bonificaciones no pueden superar el 40% del salario prestacional, es decir: ' + formatNumber(maxBonuses);
    return;
  }
  
  if (integral) {
    var cost = Math.ceil(salary * 1.27135 + bonuses); // Cálculo del costo según régimen integral
  } else if (salary < 2 * smmlv) {
    var cost = Math.ceil(salary * 1.40308 + transportAllowance + 45000 + bonuses); // Cálculo del costo según escenario 1
  } else if (salary + bonuses < 10 * smmlv) {
    var cost = Math.ceil(salary * 1.40308 + bonuses); // Cálculo del costo según escenario 2
  } else {
    var cost = Math.ceil(salary * 1.53808 + bonuses); // Cálculo del costo según escenario 3
  }

  if (connectivityBonus) {
    cost += 60000;
  }
  if (suraPolicy) {
    cost += 356256;
  }
  if (sanitas) {
    cost += 270000;
  }
  if (lifeInsurance) {
    cost += 20000;
  }

  formatInputValue(salaryInput);
  formatInputValue(bonusesInput);
  result.innerHTML = 'El costo total del empleado es: $' + formatNumber(cost);

  var formattedCost = formatNumber(cost).replace(/\./g, "");
  document.getElementById("amount").value = formattedCost;
}

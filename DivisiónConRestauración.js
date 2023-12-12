function sum(num1, num2) {
    const maxLength = Math.max(num1.length, num2.length);
  
    if (num1.length !== num2.length) {
      if (num1.length < num2.length) {
        while (num1.length < num2.length) {
          num1 = "0" + num1;
        }
      } else if (num1.length > num2.length) {
        while (num1.length > num2.length) {
          num2 = "0" + num2;
        }
      }
    }
  
    let sum = "";
    let carry = 0;
  
    for (let i = maxLength - 1; i >= 0; i--) {
      const bit1 = parseInt(num1[i]);
      const bit2 = parseInt(num2[i]);
  
      const total = bit1 + bit2 + carry;
  
      const resultBit = total % 2;
      carry = total >= 2 ? 1 : 0;
  
      sum = resultBit.toString() + sum;
    }
  
    return sum;
  }
  
  function subtract(num1, num2) {
    const maxLength = Math.max(num1.length, num2.length);
  
    if (num1.length !== num2.length) {
      if (num1.length < num2.length) {
        while (num1.length < num2.length) {
          num1 = "0" + num1;
        }
      } else if (num1.length > num2.length) {
        while (num1.length > num2.length) {
          num2 = "0" + num2;
        }
      }
    }
  
    let result = "";
    let borrow = 0;
  
    for (let i = maxLength - 1; i >= 0; i--) {
      const bit1 = parseInt(num1[i]);
      const bit2 = parseInt(num2[i]);
  
      let total = bit1 - bit2 - borrow;
  
      if (total < 0) {
        total += 2;
        borrow = 1;
      } else {
        borrow = 0;
      }
  
      result = total.toString() + result;
    }
  
    return result;
  }

function divisionConRestauracion(dividendo, divisor) {
    let R = "";
    let D = dividendo.slice(0, divisor.length);
    let C = "";
    let cont = divisor.length;
  
    while (cont <= dividendo.length) {
      R = subtract(D, divisor);
  
      if (R[0] == "0") {
        R = R.substring(1);
        C += "1";
      } else {
        R = sum(R, divisor);
        R = R.substring(1);
        C += "0";
      }
  
      cont++;
      D = R + dividendo[cont - 1];
    }
  
    return { cociente: C, residuo: R };
  }

  // Ejemplo de uso
const dividendo = "1011100"; // Por ejemplo, 92 en binario
const divisor = "101"; // Por ejemplo, 5 en binario
// const dividendo = "1000";
// const divisor = "10";

const { cociente, residuo } = divisionConRestauracion(dividendo, divisor);

console.log("Cociente:", cociente); // Imprime el cociente
console.log("Residuo:", residuo); // Imprime el residuo
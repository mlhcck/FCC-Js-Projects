function checkCashRegister(price, cash, cid) {
    const currencyUnits = {
      "ONE HUNDRED": 10000,
      "TWENTY": 2000,
      "TEN": 1000,
      "FIVE": 500,
      "ONE": 100,
      "QUARTER": 25,
      "DIME": 10,
      "NICKEL": 5,
      "PENNY": 1
    };
  
    let change = (cash * 100 - price * 100); //para ustu hesabi
    let cidTotal = 0;
    
    for (let elem of cid) {  //Butun paraları noktasiz sekilde duzenledik
      cidTotal += elem[1] * 100;
    }
  
    if (change > cidTotal) { //Para ustu makinedeki paradan fazla ise
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (change === cidTotal) { //Kapali zamana denk gelindi ise
      return { status: "CLOSED", change: cid };
    } else { //Para verilebiliyorsa
      let result = [];
      let reversedCid = cid.reverse(); //Kucukten buyuge siralamayi ters cevirdik
  
      for (let elem of reversedCid) {      //Kasada ki paralari her birini kullanan dongu
        let moneyHolder = [elem[0], 0];    //Verilecek paraları ve toplamını tutan degisken
        elem[1] = elem[1] * 100;
  
        while (change >= currencyUnits[elem[0]] && elem[1] > 0) {   // para verilebiliyorsa ve para kasada varsa calisan dongu
          change -= currencyUnits[elem[0]];                         // para ustunden verilen parayi cikarma
          elem[1] -= currencyUnits[elem[0]];                        // Kasadan para cikarma
          moneyHolder[1] += currencyUnits[elem[0]] / 100;           // Verilen parayi toplama ve normal degerine indirme
        }
  
        if (moneyHolder[1] > 0) {      // PAra verilmisse sonuc degerine gonderme
          result.push(moneyHolder);
        }
      }
  
      if (change > 0) {       // Kasada ki paralar para ustunu veremiyorsa
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      }
  
      return { status: "OPEN", change: result };
    }
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
  
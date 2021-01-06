//ELEMENT SELECTORS


var button = document.getElementById("buttonAct")
var netPayAn = document.getElementById("netPayAn");
var taxAn = document.getElementById("taxAn");
var niAn = document.getElementById("niAn");
var netPayMo = document.getElementById("netPayMo");
var taxMo = document.getElementById("taxMo");
var niMo = document.getElementById("niMo");
var netPayWe = document.getElementById("netPayWe");
var taxWe = document.getElementById("taxWe");
var niWe = document.getElementById("niWe");
let anSee = document.getElementById("netPayAnnual");
let moSee = document.getElementById("netPayMonthly");
let weSee = document.getElementById("netPayWeekly");
let reset = document.getElementById('reset');
reset.style.display = 'none';

let eventHandler = () => {
  var annualSalaryHere = document.getElementById("grossPayid").value; //YOU MUST STATE THIS INSIDE OF THE EVENT HANDLER - STATING IT OUTISDE WILL NOT ALLOW THE .value TO BE READ!!!
  var payBasis = document.getElementById("paymentBasis").value; //basis of calculation return data
 //TAX CALCULATOR
  const basicRate = () => {
    const taxLow = 0;
    if(annualSalaryHere<=12500) {
      return annualSalaryHere*taxLow;
    }
  };

  const midRate = () => {
    const taxMid = 0.2;
    const midSal = annualSalaryHere-12500;
    if(annualSalaryHere>12500 && annualSalaryHere<=50000) {
      return midSal*taxMid;
    } else if(annualSalaryHere>50000) {
      return 37500*taxMid;
    } else {
      return 0;
    }  
  };

  const highRate = () => {
    const taxHigh = 0.4;
    const highSal = annualSalaryHere-50000;
    if(annualSalaryHere>50000 && annualSalaryHere<=150000) {
      return highSal*taxHigh;
    } else if(annualSalaryHere>150000) {
      return 100000*taxHigh;
    } else {
      return 0;
    } 
  };

  const highestRate = () => {
    const taxHighest = 0.45;
    const highestSal = annualSalaryHere-150000;
    if(annualSalaryHere>150000) {
      return highestSal*taxHighest;
    } else {
      return 0;
    }   
  };

  const taxAccumulator = Math.floor(midRate() + highRate() + highestRate());

 //NI CALCULATOR

  const basicNIRate = () => {
    const NILow = 0;
    if(annualSalaryHere<9504) {
      return annualSalaryHere*NILow;
    }
  };

  const midNIRate = () => {
    const NIMid = 0.12;
    const midNISal = annualSalaryHere-9504;
    if(annualSalaryHere>=9504 && annualSalaryHere<=50004) {
      return midNISal*NIMid;
    } else if(annualSalaryHere>50004) {
      return 40500*NIMid;
    } else {
      return 0;
    }  
  };

  const highNIRate = () => {
    const NIHigh = 0.02;
    const highNISal = annualSalaryHere-50004;
    if(annualSalaryHere>50004) {
      return highNISal*NIHigh;
    } else {
      return 0;
    } 
  };

  const NIAccumulator = Math.floor(midNIRate() + highNIRate());

  if(payBasis==="Annual") {
    netPayAn.innerHTML="£"+ (annualSalaryHere-(taxAccumulator+NIAccumulator));
    taxAn.innerHTML="£"+taxAccumulator;
    niAn.innerHTML="£"+NIAccumulator;
    anSee.style.display = "block";
  } 
  
  if(payBasis==="Monthly") {
    netPayMo.innerHTML="£"+ Math.floor(((annualSalaryHere-(taxAccumulator+NIAccumulator))/12));
    taxMo.innerHTML="£"+ Math.floor((taxAccumulator/12));
    niMo.innerHTML="£"+ Math.floor((NIAccumulator/12));
    moSee.style.display = "block";
  } 
  
  if(payBasis==="Weekly") {
    netPayWe.innerHTML="£"+ Math.floor(((annualSalaryHere-(taxAccumulator+NIAccumulator))/52));
    taxWe.innerHTML="£"+ Math.floor((taxAccumulator/52));
    niWe.innerHTML="£"+ Math.floor((NIAccumulator/52));
    weSee.style.display = "block";
  } 
  reset.style.display = '';
}

buttonAct.addEventListener('click', eventHandler);


/*TEMPORARY COMMENT OUT

//TAX CALCULATOR
const basicRate = () => {
  var annualSalaryHere = document.getElementById("grossPayid").value;
  const taxLow = 0;
  if(annualSalaryHere<=12500) {
      return annualSalaryHere*taxLow;
  }
};



const midRate = () => {
  var annualSalaryHere = document.getElementById("grossPayid").value;
  const taxMid = 0.2;
  const midSal = annualSalaryHere-12500;
  if(annualSalaryHere>12500 && annualSalaryHere<=50000) {
    return midSal*taxMid;
  } else if(annualSalaryHere>50000) {
    return 37500*taxMid;
  } else {
    return 0;
  }  
};

const highRate = () => {
  var annualSalaryHere = document.getElementById("grossPayid").value;
  const taxHigh = 0.4;
  const highSal = annualSalaryHere-50000;
  if(annualSalaryHere>50000 && annualSalaryHere<=150000) {
    return highSal*taxHigh;
  } else if(annualSalaryHere>150000) {
    return 100000*taxHigh;
  } else {
    return 0;
  } 
};

const highestRate = () => {
  var annualSalaryHere = document.getElementById("grossPayid").value;
  const taxHighest = 0.45;
  const highestSal = annualSalaryHere-150000;
  if(annualSalaryHere>150000) {
    return highestSal*taxHighest;
  } else {
    return 0;
  }   
};

const taxAccumulator = midRate() + highRate() + highestRate();

//NI CALCULATOR

const basicNIRate = () => {
  var annualSalaryHere = document.getElementById("grossPayid").value;
  const NILow = 0;
  if(annualSalaryHere<9504) {
      return annualSalaryHere*NILow;
  }
};

const midNIRate = () => {
  var annualSalaryHere = document.getElementById("grossPayid").value;
  const NIMid = 0.12;
  const midNISal = annualSalaryHere-9504;
  if(annualSalaryHere>=9504 && annualSalaryHere<=50004) {
    return midNISal*NIMid;
  } else if(annualSalaryHere>50004) {
    return 40500*NIMid;
  } else {
    return 0;
  }  
};

const highNIRate = () => {
  var annualSalaryHere = document.getElementById("grossPayid").value;
  const NIHigh = 0.02;
  const highNISal = annualSalaryHere-50004;
  if(annualSalaryHere>50004) {
    return highNISal*NIHigh;
  } else {
    return 0;
  } 
};

const NIAccumulator = midNIRate() + highNIRate();

console.log(NIAccumulator);

*/





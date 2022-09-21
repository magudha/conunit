var select = document.getElementById("inputType");
var options = [
  "Meter", "Kilometer", "Feet", "Inches", "Celcius",
  "Fahrenheit", "Metres per second", "Kilometres per hour",
  "Miles per hour"
];

for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

var select = document.getElementById("resultType");

for (var i = 0; i < options.length; i++) {
  var opt = options[i];
  var el = document.createElement("option");
  el.textContent = opt;
  el.value = opt;
  select.appendChild(el);
}

function calculateResult() {
  let Input = document.getElementById("input").value;
  let inputType = document.getElementById("inputType").value;
  let resultType = document.getElementById("resultType").value;

    if (inputType === "Meter" && resultType === "Kilometer"){ document.getElementById("result").value = Input * 0.001;

	}else if(inputType === "Meter" && resultType === "Feet"){ document.getElementById("result").value = Input * 3.28084;

	}else if(inputType === "Meter" && resultType === "Inches"){document.getElementById("result").value = Input*39.3701;

	}else if(inputType === "Meter" && resultType === "Meter"){ document.getElementById("result").value = Input*1;
	}

	if(inputType === "Kilometer" && resultType === "Meter"){ document.getElementById("result").value = Input*1000;

	}else if(inputType === "Kilometer" && resultType === "Inches"){ document.getElementById("result").value = Input*39270.07874;

	}else if(inputType === "Kilometer" && resultType === "Feet"){ document.getElementById("result").value = Input*3280.839895;

	}else if(inputType === "Kilometer" && resultType === "Kilometer"){ document.getElementById("result").value = Input*1;
	}

	if(inputType === "Inches" && resultType === "Kilometer"){ document.getElementById("result").value = Input*2.54*10^-5;
		
	}else if(inputType === "Inches" && resultType === "Meter"){ document.getElementById("result").value = Input*0.0254;
		
	}else if(inputType === "Inches" && resultType === "Feet"){ document.getElementById("result").value = Input/12;

	}else if(inputType === "inches" && resultType==="inches"){ document.getElementById("result").value = Input*1;
	
	}

	if(inputType === "Feet" && resultType === "Kilometer"){ document.getElementById("result").value = Input*0.000305;

	}else if(inputType === "Feet" && resultType === "Meter"){ document.getElementById("result").value = Input*0.3048;

	}else if(inputType === "Feet" && resultType === "Inches"){ document.getElementById("result").value = Input*12;
	
	}else if(inputType === "Feet" && resultType === "Feet"){ document.getElementById("result").value = Input*1;
	
	}
	
	if(inputType === "Celcius" && resultType === "Fahrenheit"){ document.getElementById("result").value = (Input*1.8) +32;
		
	}else if(inputType === "Celcius" && resultType === "Celcius"){ document.getElementById("result").value = Input*1;

	}
	
	if(inputType === "Fahrenheit" && resultType==="Celcius"){ document.getElementById("result").value = (Input - 32)*5/9;

	}else if(inputType === "Fahrenheit" && resultType==="Fahrenheit"){ document.getElementById("result").value = Input*1;

	}
	
	if(inputType === "Metres per second" && resultType === "Kilometres per hour"){ document.getElementById("result").value = Input * 3.6;

	}else if(inputType === "Metres per second" && resultType === "Miles per hour"){ document.getElementById("result").value = Input*2.237;

	}else if(inputType === "Metres per second" && resultType === "Metres Per second"){ document.getElementById("result").value = Input*1;

	}
	
	if(inputType === "Kilometres per hour" && resultType === "Miles per hour"){ document.getElementById("result").value = Input*0.621371;

	}else if(inputType === "Kilometres per hour" && resultType === "Metres per second"){ document.getElementById("result").value = Input*5/18;

	}else if(inputType === "Kilometres per hour" && resultType === "Kilometres per hour"){ document.getElementById("result").value = Input*1;

	}
	
	if(inputType === "Miles per hour" && resultType === "Kilometres per hour"){ document.getElementById("result").value = Input*1.609;

	}else if(inputType === "Miles per hour" && resultType === "Metres per second"){ document.getElementById("result").value = Input*0.44704;

	}else if(inputType === "Miles per hour" && resultType==="Miles per hour"){ document.getElementById("result").value = Input*1;

	}
	
	




}

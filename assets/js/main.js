
      
        var additionElement = document.getElementById('addition');
        var subtractionElement = document.getElementById('subtraction');
        var multiplicationElement = document.getElementById('multiplication');
        var divisionElement = document.getElementById('division');

        additionElement.onclick = function() {
            var firstNumberValue = Number(document.getElementById('firstNumber').value);
            var lastNumberValue = Number(document.getElementById('lastNumber').value);
            var totalNumber = firstNumberValue+lastNumberValue ;
            document.getElementById('totalNumber').value = totalNumber;
        };
        subtractionElement.onclick = function() {
            var firstNumberValue = Number(document.getElementById('firstNumber').value);
            var lastNumberValue = Number(document.getElementById('lastNumber').value);
            var totalNumber = firstNumberValue-lastNumberValue ;
            document.getElementById('totalNumber').value = totalNumber;
        };
        multiplicationElement.onclick = function() {
            var firstNumberValue = Number(document.getElementById('firstNumber').value);
            var lastNumberValue = Number(document.getElementById('lastNumber').value);
            var totalNumber = firstNumberValue*lastNumberValue ;
            document.getElementById('totalNumber').value = totalNumber;
        };
        divisionElement.onclick = function() {
            var firstNumberValue = Number(document.getElementById('firstNumber').value);
            var lastNumberValue = Number(document.getElementById('lastNumber').value);
            var totalNumber = firstNumberValue/lastNumberValue ;
            document.getElementById('totalNumber').value = totalNumber;
        };
        

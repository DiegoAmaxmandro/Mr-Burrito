// This is the function to calculale the total of the order taking into account the wrong inputs e the discount code as well.
function calculateTotal(){
    
    
    var total = 0
    var food = document.order.food.value;
    var quantity = document.order.quantity.value;
    var discount = document.order.discount.value;
    
    if(document.getElementsByClassName("food")[0].value == "Unselected"){
        alert("Please select a food size");
    }else if(document.getElementsByClassName("food")[0].value == "Large"){
        total = total + 7.00;
    }else if(document.getElementsByClassName("food")[0].value == "Extralarge"){
        total = total + 9.00;
    }else if(document.getElementsByClassName("food")[0].value == "Supersize"){
        total = total + 17.50;
    }

    if(quantity <= 0){
        alert("Amount of food must to be 1 or more!");  
        return;
    }else if(isNaN(quantity) == true){
        alert("Amount of food must be a number");
        return;
    }else if(quantity > 0){
        total = (total * quantity);
        if(discount == 'MexTexGood'){
            alert('Congrats!!! You got 10% off');
            total = total - (10/100 * total);
        
        }

       
    }
    
    var finalTotal = document.getElementById('total');
    finalTotal.value = total;
    
}   

// This functios is for the super size alert.

function superS(size){
    
   if(size == 'Supersize'){
       alert("Hey be careful! This it's huge!!!")
   }
}
    




// this function is for validade the amount input as numeric.

function isNumeric(elem, helperMsg){
	var numericExpression = /^[0-9]+$/;
	if(elem.value.match(numericExpression)){
        alert('Thank you!!!')
        return true;
		
	}else{
		alert(helperMsg);
		elem.focus();
		return false;
	}
}


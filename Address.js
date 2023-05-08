function onFormSubmit(e) {
  let form = FormApp.getActiveForm();
  let formResponses = form.getResponses();
  let latestResponse = formResponses[formResponses.length - 1];
  let itemResponses = latestResponse.getItemResponses();
  
  for (let i = 0; i < itemResponses.length; i++) {
    let response = itemResponses[i];
    let question = response.getItem();
    let responseValue = response.getResponse();
    
    if (question.getTitle() === "Provincia") { // Replace "Question 1" with the actual title of your multiple choice question
      if (responseValue === "San Jose") { // Replace "Option A" with the value of the option you want to trigger a specific list
        showCertainOptions(form, "Canton", ["San Jose", "Escazu", "Desamparados", "Puriscal", "Tarrazu", "Aserri", "Mora", "Goicochea", "Santa Ana", "Alajuelita", "Vazquez de Coronado", "Acosta", "Tibas", "Moravia", "Montes de Oca", "Turrubares", "Dota", "Curridabat", "Perez Zeledon", "Leon Cortes"]); // Replace "Question 2" and the list of options with your desired question and options
      } else if (responseValue === "Heredia") { // Replace "Option B" with the value of the option you want to trigger a different list
        showCertainOptions(form, "Canton", ["Heredia", "Barva", "Santo Domingo", "Santa Barbara", "San Rafael", "San Isidro", "Belen", "Flores", "San Pablo", "Sarapiqui"]); // Replace "Question 2" and the list of options with your desired question and options
      } else if (responseValue === "Alajuela") { // Replace "Option B" with the value of the option you want to trigger a different list
        showCertainOptions(form, "Canton", ["Alajuela", "San Ramon", "San Mateo", "Atenas", "Naranjo", "Palmares", "Poas", "Orotina", "San Carlos", "Alfaro Ruiz", "Valverde Vega", "Upala", "Los Chiles", "Guatuso", "Rio Cuarto"]); // Replace "Question 2" and the list of options with your desired question and options
      } else if (responseValue === "Puntarenas") { // Replace "Option B" with the value of the option you want to trigger a different list
        showCertainOptions(form, "Canton", ["Puntarenas", "Esparza", "Buenos Aires", "Montes de Oro", "Osa", "Aguirre", "Golfito", "Coto Brus", "Parrita", "Corredores", "Garabito", "Monte Verde"]); // Replace "Question 2" and the list of options with your desired question and options
      } else if (responseValue === "Limon") { // Replace "Option B" with the value of the option you want to trigger a different list
        showCertainOptions(form, "Canton", ["Option X", "Option Y", "Option Z"]); // Replace "Question 2" and the list of options with your desired question and options
      } else if (responseValue === "Guanacaste") { // Replace "Option B" with the value of the option you want to trigger a different list
        showCertainOptions(form, "Canton", ["Option X", "Option Y", "Option Z"]); // Replace "Question 2" and the list of options with your desired question and options
      }
       else if (responseValue === "Cartago") { // Replace "Option B" with the value of the option you want to trigger a different list
        showCertainOptions(form, "Canton", ["Option X", "Option Y", "Option Z"]); // Replace "Question 2" and the list of options with your desired question and options
      }
    }
  }
}

function showCertainOptions(form, questionTitle, options) {
  let items = form.getItems();
  
  for (var i = 0; i < items.length; i++) {
    let item = items[i];
    
    if (item.getTitle() === questionTitle) {
      if (item.getType() === FormApp.ItemType.MULT);
       var itemAsMultipleChoice = item.asMultipleChoiceItem();
        itemAsMultipleChoice.setChoiceValues(options);
    }
  }
}
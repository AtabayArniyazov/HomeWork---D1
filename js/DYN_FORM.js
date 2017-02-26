"use strict";

// функцию, которая будет получать массив и имя формы и динамически (методами DOM) создавать поля в форме
function dynForm(array, nameOfForm) {

	var myForm = document.forms[nameOfForm];
	var field = "<table>";

	for (var i = 0; i < array.length; i++) {
		
		switch(array[i].type) {

			case "text":
				field += "<tr><td><label>" + array[i].label + "</label></td>";

				if (array[i].width) {
					field += "<td><input type='" + array[i].type + "' style='width:" + array[i].width + "px'</td></tr>";
				} else {
					field += "<td><input type='" + array[i].type + "'</td></tr>";
				}

				break;

			case "url":
				field += "<tr><td><label>" + array[i].label + "</label></td>";

				if (array[i].width) {
					field += "<td><input type='" + array[i].type + "' style='width:" + array[i].width + "px'</td></tr>";
				} else {
					field += "<td><input type='" + array[i].type + "'</td></tr>";
				}

				break;

			case "date":
				field += "<tr><td><label>" + array[i].label + "</label></td>";

				if (array[i].width) {
					field += "<td><input type='" + array[i].type + "' style='width:" + array[i].width + "px'</td></tr>";
				} else {
					field += "<td><input type='" + array[i].type + "'</td></tr>";
				}

				break;

			case "number":
				field += "<tr><td><label>" + array[i].label + "</label></td>";

				if (array[i].width) {
					field += "<td><input type='" + array[i].type + "' style='width:" + array[i].width + "px'</td></tr>";
				} else {
					field += "<td><input type='" + array[i].type + "'</td></tr>";
				}

				break;

			case "email":
				field += "<tr><td><label>" + array[i].label + "</label></td>";

				if (array[i].width) {
					field += "<td><input type='" + array[i].type + "' style='width:" + array[i].width + "px'</td></tr>";
				} else {
					field += "<td><input type='" + array[i].type + "'</td></tr>";
				}

				break;

			case "select":
				field += "<tr><td><label>" + array[i].label + "</label></td>";
				field += "<td><select>"

				var keys = Object.keys(array[i].option);

				keys.forEach(function(val, ind, arr) {
					var temporary;

					if (ind === (arr.length - 1)) {
						temporary = "<option selected>" + arr[ind] + "</option>";
					} else {
						temporary = "<option>" + arr[ind] + "</option>";
					}

					field += temporary;
				});
				
				field += "</select></td></tr>";
				break;

			case "radio":
				field += "<tr><td><label>" + array[i].label + "</label></td>";
				field += "<td>";

				var keys = Object.keys(array[i].radioLabel);

				keys.forEach(function(val, ind, arr) {
					var temporary = "<input type='" + array[i].type + "'>" + arr[ind];
					field += temporary;
				});
				field += "</td></tr>";
				break;

			case "checkbox":
				field += "<tr><td><label>" + array[i].label + "</label></td>";
				field += "<td><input type='" + array[i].type + "' checked></td></tr>";
				break;

			case "textarea":
				field += "<tr><td colspan='2'><label>" + array[i].label + "</label><br>";

				if (array[i].width) {
					if (array[i].height) {
						field += "<textarea style='width:" + array[i].width + "px; height:" + array[i].height + "px'>" + "</textarea></td></tr>";
					} else {
						field += "<textarea style='width:" + array[i].width + "px'>" + "</textarea></td></tr>";
					}
					
				} else {
					field += "<textarea>" + "</textarea></td></tr>";
				}

				break;

			case "submit":
				field += "<tr><td><input type='" + array[i].type + "' value='" + array[i].label + "'></td></tr>";
				break;

			default:
				field += "<br><label>" + array[i] + "</label><br><br>";
		}
	}

	field += "</table>";
	myForm.innerHTML = field;
}

// функцию, для того что бы добавлять тип поля, названия поля и подписи к поле
function infAboutFields(type, label, widthOfField, heightOfField) {
	return {
		type: type,
		label: label,
		width: widthOfField,
		height: heightOfField
	};
}

var arrayInfoFields = [];
arrayInfoFields.push("Для внесения вашего сайта в каталог, заполните форму:");
arrayInfoFields.push(infAboutFields("text", "Разработчики:", 450));
arrayInfoFields.push(infAboutFields("text", "Название сайта:", 450));
arrayInfoFields.push(infAboutFields("url", "URL сайта:"));
arrayInfoFields.push(infAboutFields("date", "Дата запуска сайта:"));
arrayInfoFields.push(infAboutFields("number", "Посетителей в сутки:"));
arrayInfoFields.push(infAboutFields("email", "E-mail для связи:"));
arrayInfoFields.push({type: "select", label: "Рубрика каталога:", option: {"здоровье": true, "домашний уют": true, "бытовая техника": true}});
arrayInfoFields.push({type: "radio", label: "Размещение:", radioLabel: {"бесплатное": true, "платное": true, "VIP": true}});
arrayInfoFields.push(infAboutFields("checkbox", "Разрешить отзывы:"));
arrayInfoFields.push(infAboutFields("textarea", "Описание сайта:", 600, 150));
arrayInfoFields.push(infAboutFields("submit", "Опубликовать"));


dynForm(arrayInfoFields, "formForSite");
















// // -------------------------------------------------------------------------------------------------------------------------------------------------------------
// !!!!!!!!!!!!!!!! НЕ СОВСЕМ ПРАВИЛЬНО!
// "use strict";

// // функцию, которая будет получать массив и имя формы и динамически (методами DOM) создавать поля в форме
// function dynForm(array, nameOfForm) {

// 	var myForm = document.forms[nameOfForm];
// 	myForm.innerHTML = "<h4>" + array[0] + "</h4>";

// 	for (var i = 1; i < array.length; i++) {
// 		var field = "";
// 		if (array[i].nameOfField) {
// 			field += array[i].nameOfField;
// 		}

// 		if (array[i].textarea) {
// 			field += "<br><textarea style='width: 979px; height: 150px;'></textarea><br>";
// 		}

// 		if (array[i].inputType) {
// 			field += "<input type='" + array[i].inputType + "'>";

// //на каждое отдельное поле задаем стили 
// 			if (array[i].nameOfField === "Разработчики:") {
// 				field = field.slice(0, -1);
// 				field += "style='margin-left: 140px; width: 453px;'>"
// 			}

// 			if (array[i].nameOfField === "Название сайта:") {
// 				field = field.slice(0, -1);
// 				field += "style='margin-left: 129px; width: 453px;'>"
// 			}

// 			if (array[i].nameOfField === "URL сайта:") {
// 				field = field.slice(0, -1);
// 				field += "style='margin-left: 160px;'>"
// 			}

// 			if (array[i].nameOfField === "Дата запуска сайта:") {
// 				field = field.slice(0, -1);
// 				field += "style='margin-left: 105px;'>"
// 			}

// 			if (array[i].nameOfField === "Посетителей в сутки:") {
// 				field = field.slice(0, -1);
// 				field += "style='margin-left: 92px; width: 141px;'>"
// 			}

// 			if (array[i].nameOfField === "E-mail для связи:") {
// 				field = field.slice(0, -1);
// 				field += "style='margin-left: 122px; width: 141px;'>"
// 			}

// 			if (array[i].nameOfField === "Разрешить отзывы:") {
// 				field = field.slice(0, -1);
// 				field += "checked style='margin-left: 108px;'>"
// 			}
// 			//на каждое отдельное поле задали стили
			
// 			if (array[i].name) {
// 				field = field.slice(0, -1);
// 				field += "name='" + array[i].name + "'>"
// 			}

// 			if (array[i].inputValue) {
// 				field = field.slice(0, -1);
// 				field += "value='" + array[i].inputValue + "'>";
// 			}

// 			if (array[i].value) {

// 				var fieldCopy = field.slice(array[i].nameOfField.length);
// 				var keys = Object.keys(array[i].value);

// 				//задаем стили
// 				if (array[i].nameOfField === "Размещение:") {
// 					field = field.slice(0, -1);
// 					field += "style='margin-left: 152px;'>"
// 				}

// 				//работаем с радиокнопками 
// 				keys.forEach(function(val, ind, arr) {
// 					field += arr[ind] + fieldCopy;
// 				});

// 				field = field.slice(0, -fieldCopy.length);
// 			}
// 		}

// 		//работаем с селектом 
// 		if (array[i].select) {
// 			field += "<select name='" + array[i].name + "'>";
			
// 			if (array[i].nameOfField === "Рубрика каталога:") {
// 				field = field.slice(0, -1);
// 				field += "style='margin-left: 115px; width: 145px;'>"
// 			}

// 			if (array[i].option) {
// 				var keys = Object.keys(array[i].option);
				
// 				keys.forEach(function(val, ind, arr) {
// 					if (val === "бытовая техника") {
// 						field += "<option selected>" + val + "</option>";
// 					} else {
// 						field += "<option>" + val + "</option>";
// 					}
// 				});

// 				field += "</select>";
// 			} else {
// 				field += "</select>";
// 			}

// 		} 

// 		// и в конце изменяем ДОМ
// 		myForm.innerHTML += field + "<br>";
// 	}
// }

// // функцию, для того что бы добавлять тип поля, названия поля и подписи к поле
// function infAboutFields(nameOfField, type, name) {
// 	return {
// 		nameOfField: nameOfField,
// 		inputType: type,
// 		name: name
// 	};
// }

// var arrayInfoFields = [];
// arrayInfoFields.push("Для внесения вашего сайта в каталог, заполните форму:");
// arrayInfoFields.push(infAboutFields("Разработчики:", "text", "developers"));
// arrayInfoFields.push(infAboutFields("Название сайта:", "text", "nameOfSite"));
// arrayInfoFields.push(infAboutFields("URL сайта:", "url", "url"));
// arrayInfoFields.push(infAboutFields("Дата запуска сайта:", "date", "date"));
// arrayInfoFields.push(infAboutFields("Посетителей в сутки:", "number", "number"));
// arrayInfoFields.push(infAboutFields("E-mail для связи:", "email", "email"));
// arrayInfoFields.push({nameOfField: "Рубрика каталога:", select: "select", name: "catalog", option: {"здоровье": true, "домашний уют": true, "бытовая техника": true}});
// arrayInfoFields.push({nameOfField: "Размещение:", inputType: "radio", name: "radio", value: {"бесплатное": true, "платное": true, "VIP": true}});
// arrayInfoFields.push(infAboutFields("Разрешить отзывы:", "checkbox", "checkbox"));
// arrayInfoFields.push({nameOfField: "Описание сайта:", textarea: "textarea"});
// arrayInfoFields.push({inputType: "submit", inputValue: "Опубликовать"});


// dynForm(arrayInfoFields, "formForSite");
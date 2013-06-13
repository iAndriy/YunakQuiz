
function AbstractFact (obj,additionalParameters) {


	this.CreateQuestion = function (i){
		var question = '<p class="test-question" id="' + obj[0].items[i].id + '">' + obj[0].items[i].name + '</p>';
		return question;
	},
	this.OpenQuestion = function (){
		return '<div id="question_container_' + obj[0].items[i].id + '">';
	},
	this.CloseQuestion = function (){
		return '</div>';
	},

	this.CreateAnswer = function (i){
		
		var answers = '';
		for (var j = 0; j < obj[0].items[i].items.length; j++){
		answers += '<div class="radio"><input id="' + obj[0].items[i].items[j].id + '" type="' + obj[0].items[i].type + '" name="quest_group' + obj[0].items[i].id +'"/>' + '<span>' + obj[0].items[i].items[j].name + '</span></div>';
	}
		return answers;
	},

	// this.CreateSubmit = function (){
	// 	var submit = '<input id="submit_test" type="Submit" value="Submit" class="btn"/>';
	// 	return submit;
	// },



	// this.CreateAutoSaveStatus = function (fartherElemId){
	// 	var autoSaveStatus = '<p id="autoSaveStatusOf_' + fartherElemId + '">Saving...</p>';
	// 	return autoSaveStatus;
	// },

	this.CreateButton = function (id, val) {

		var button = '<button class="btn" id="btn_' + id + '">' + val + '</button>';
		return button;
	},

	this.CreateForm = function (){
		var form = '' ;
		for ( i  = 0; i < obj[0].items.length; i++) {
			form += this.CreateQuestion(i);
			form += this.CreateAnswer (i);

		}
		if (additionalParameters.textArea) {
			// form += this.CreateAutoSaveStatus(additionalParameters.textAreaID);
			
		}
		if (additionalParameters.btn) form += this.CreateButton (additionalParameters.btnID, additionalParameters.btnValue);
		// form += this.CreateSubmit();
		return form;
	}


}






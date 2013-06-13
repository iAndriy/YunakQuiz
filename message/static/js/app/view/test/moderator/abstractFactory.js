
function AbstractFactory (obj,additionalParameters) {

	this.CreateHeader = function ( ){
		var name = '<h4>' + obj.name + '</h4>';
		var description = '<p>' + obj.description + '</p>';
		var header = name + description;
		return header;
	},
	this.CreateQuestion = function (i){
		var question = '<p id="question_' + obj.quest[i].id + ' "class="question_container test-question">' + obj.quest[i].name + '</p>';
		return question;
	},
	this.OpenQuestion = function (){
		return '<div id="question_container_' + obj.quest[i].id + '" class="question_container">';
	},
	this.CloseQuestion = function (){
		return '</div>';
	},
	this.CreateAnswer = function (i){
		var answers = '';
		for (var j = 0; j < obj.quest[i].ans.length; j++){
		answers += '<div class="checkbox"><input id="answer_' + obj.quest[i].ans[j].id + '" type="' + obj.quest[i].type_answer + '" name="quest_group' + obj.quest[i].id +'"/>' + '<span>' + obj.quest[i].ans[j].name + '</span></div>';
	}
		return answers;
	},
	this.CreateSubmit = function (){
		var submit = '<input id="submit_test" type="Submit" value="Submit" />';
		return submit;
	},

	this.CreateTextArea = function (id, val){
		var textarea = '<div><textarea id="' + id + '">'+ val + '</textarea></div>';
		return textarea;
	},

	this.CreateAutoSaveStatus = function (fartherElemId){
		var autoSaveStatus = '<p id="autoSaveStatusOf_' + fartherElemId + '"></p>';
		return autoSaveStatus;
	},

	this.CreateButton = function (id, val) {

		var button = '<button class="btn" id="btn_' + id + '">' + val + '</button>';
		return button;
	},

	this.CreateForm = function (){
		var form = '' ;
		form += this.CreateHeader ();
		for ( i  = 0; i < obj.quest.length; i++) {
			form += this.CreateQuestion(i);
			form += this.CreateAnswer (i);

		}
		if (additionalParameters.textArea) {
			form += this.CreateTextArea (additionalParameters.textAreaID,additionalParameters.textAreaVal);
			form += this.CreateAutoSaveStatus(additionalParameters.textAreaID);
			form += this.CreateButton(additionalParameters.textAreaID, 'Send ' + additionalParameters.textAreaVal);
		}
		if (additionalParameters.btn) form += this.CreateButton (additionalParameters.btnID, additionalParameters.btnValue);
		return form;
	}
}




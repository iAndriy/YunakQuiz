
function createView (i) {

    $.getJSON("data/tests.json",   function(tests){
        console.log(tests);
        $("#content").append('<ul><li><a href="#" >' + tests[0].name +'</a></li>' + 
        '<li><a href="#" >' + tests[1].name +'</a></li>' + 
        '<li><a href="#" >' + tests[2].name +'</a></li>' + '</ul>' + 

        '<form method="post" action="#" name="testModeratorForm">' + 
        '<div id="test' + tests[i].id + '"><h1>' +tests[i].name + '</h1></div>' + 
        '<p> isApprove : ' + tests[i].isApproved + '</p>' +
        '<p>' + tests[i].description + '</p>' + 
        '<p>' + tests[i].items[0].question + '</p>' + 
        '<input type="' + tests[i].items[0].type + '"/>' + 
        '<span id="answ'+tests[i].items[0].answers[0].id + '">' + tests[i].items[0].answers[0].name + '</span>' + 
        '<input type="' + tests[i].items[0].type + '"/>' + 
        '<span id="answ'+tests[i].items[0].answers[1].id + '">' + tests[i].items[0].answers[1].name + '</span>' + 
        '<input type="' + tests[i].items[0].type + '"/>' + 
        '<span id="answ'+tests[i].items[0].answers[2].id + '">' + tests[i].items[0].answers[2].name + '</span>' +

        '<p>' + tests[i].items[1].question + '</p>' + 
        '<input type="' + tests[i].items[1].type + '"/>' + 
        '<span id="answ'+tests[i].items[1].answers[0].id + '">' + tests[i].items[1].answers[0].name + '</span>' + 
        '<input type="' + tests[i].items[1].type + '"/>' + 
        '<span id="answ'+tests[i].items[1].answers[1].id + '">' + tests[i].items[1].answers[1].name + '</span>' + 
        '<input type="' + tests[i].items[1].type + '"/>' + 
        '<span id="answ'+tests[i].items[1].answers[2].id + '">' + tests[i].items[1].answers[2].name + '</span>' +
        '<textarea></textarea>' + 
        '<input  type="submit" id="approve" name="approve" value="Approve"/>' + 
        '<input  type="submit" id="sendReview" name="review" value="Send Review"/>' +
        '</form>' );

        });
}
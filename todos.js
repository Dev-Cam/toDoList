// Check off specific todos by clicking
$("ul").on("click", "li", function(){ // this looks for any clicks that happen inside the ul on an li.
    $(this).toggleClass("completed") // this code now runs on any new lis we add
});

// Click on x to delete todo
$("ul").on("click", "span", function(event){ // this only relates to clicking on the x
    $(this).parent().fadeOut(500,function(){ // once x is clicked we start the fadeOut for the rest of the li that encases the span
        $(this).remove(); // this (this) is different to the one above. the on above relates to the x that is clicked and this line relates to the faded out li
    }); // they keyword this relates to the x that has been clicked and the .parent relates to the rest of the li that is paired with it 
    event.stopPropagation(); // this stops any more click events firing and just focuses on the span
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
       var todoText = $(this).val()
       $(this).val("");
       //create a new li and add to ul
       $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
}); 

$("#bong").click(function(){
    $("input[type='text'").fadetoggle();
});
function change_content(s){
    $.get(s, function(data) {
            $("#content").html(data);
        });
}

$("#resume-click").click(change_content("Resume/index.html"));
    // function() {
        
    // });

function change_content(s){
    $.get(s, function(data) {
            $("#content").html(data);
        });
}

$("#resume-click").click(
    function() {
        change_content("Resume/index.html");
    });

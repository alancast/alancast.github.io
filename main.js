function change_content(s){
    $.get(s, function (data) {
            $("#content").html(data);
            console.log("hello");
        });
}

$("#resume-click").click(function (e) {
        change_content("Resume/index.html");
        console.log("clicked on resume");
    });

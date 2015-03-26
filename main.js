function change_content(s, e) {
    $.get(s, function(data) {
        $("#content").html(data);
    });
    $(".active").removeClass("active");
    $(e.target).addClass("active");
}

$("#resume-click").click(function(e) {
    change_content("Resume/resume.html", e);
});

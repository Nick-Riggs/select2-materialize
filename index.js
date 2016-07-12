$(document).ready(function() {
    $("select").on("select2:open", function() {
        var $parent = $(this).parent();

        $parent.children("label").addClass("active").addClass("focus");
        $parent.find(".select2-selection").addClass("focus");
    });

    $("select").on("select2:close", function() {
        if ($(this).children(":selected").length) {
            return;
        }

        var $parent = $(this).parent();

        $parent.children("label").removeClass("active").removeClass("focus");
        $parent.find(".select2-selection").removeClass("focus");
    });
});

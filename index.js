$(document).ready(function() {
    $(document).on("select2:open", "select", function() {
        var $parent = $(this).parent();

        $parent.children("label").addClass("active").addClass("focus");
        $parent.find(".select2-selection").addClass("focus");
    });

    $(document).on("select2:close", "select", function() {
        if ($(this).children(":selected").length) {
            return;
        }

        var $parent = $(this).parent();

        $parent.children("label").removeClass("active").removeClass("focus");
        $parent.find(".select2-selection").removeClass("focus");
    });
});

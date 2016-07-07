$(document).ready(function() {
    $(document).on("focus", "input.select2-search__field", function () {
        $(this).parents(".select2").parent().find("label").addClass("active");
    });
});

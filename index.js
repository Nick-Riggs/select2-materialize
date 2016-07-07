$(document).ready(function() {
    $(document).on("focus", "input.select2-search__field", function () {
        $(this).parent(".select2").children("label").addClass("active");
    });
});

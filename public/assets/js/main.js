(function ($) {

    $(document).ready(function () {
        $(".artist_select").change(function () {
            var warning = $(this).parent().find(".warning");
            if ($(this).val() > 3) {
                warning.show();
            } else {
                warning.hide();
            }
        });

        $('#fisheye').change(function () {
            if ($(this).prop('checked')) {
                $('#highlight').bootstrapToggle('off')
                renderGraph(undefined, true, false, false);
            }
            else {
                renderGraph(undefined, false, false, false);
            }
        });

        $('#highlight').change(function () {
            if ($(this).prop('checked')) {
                $('#fisheye').bootstrapToggle('off')
                renderGraph(undefined, false, true, false);
            } else {
                renderGraph(undefined, false, false, false);
            }
        })
    });

})(jQuery);
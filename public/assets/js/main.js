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

    });

})(jQuery);
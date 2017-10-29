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
            let href = location.href;
            href = href.split('/')[3];

            let trackGraph = false;
            let tagGraph = false;

            if(href == "cimkek") {
                tagGraph = true
            } else if (href == "szamok") {
                trackGraph = true;
            }

            if ($(this).prop('checked')) {
                $('#highlight').bootstrapToggle('off');
                addEffect(true, false, trackGraph, tagGraph);
            }
            else {
                addEffect(false, false, trackGraph, tagGraph);
            }
        });

        $('#highlight').change(function () {
            if ($(this).prop('checked')) {
                $('#fisheye').bootstrapToggle('off');
                addEffect(false, true);
            } else {
                addEffect(false, false);
            }
        })
    });

})(jQuery);
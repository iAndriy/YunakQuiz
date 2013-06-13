$(function() {
    $( "#selectable" ).selectable({
        stop: function() {
            var items = '';
            var result = $("#select-result").empty();
            $(".ui-selected", this).each(function() {
                var index = $("#selectable li").index(this);
                items += (" #" + (index + 1));
            });
            alert('You have selected: ' + items);
            $('input[name="horario"]').val(items);
        }
    });
});

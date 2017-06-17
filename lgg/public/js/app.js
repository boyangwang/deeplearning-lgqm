$('.menu .item').tab();

$('.generate-button').click(function(e) {
    $.ajax('/lgg/getGeneratedText', {
        success: function(data) {
            console.log(data);
            $('.generated-text').text(data.text);
        }
    });
});

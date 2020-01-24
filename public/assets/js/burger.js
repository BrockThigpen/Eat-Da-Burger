$(function () {

    $('.eaten').on('click', function (event) {
        let id = $(this).data('id');
        let nowEaten = $(this).data('nowEaten');
        let eatenState = {
            eaten: nowEaten
        };
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: eatenState
        }).then(
            function () {
                location.reload();
            }
        );
    });

    $('create').on('submit', function (event) {
        event.preventDefault();
        let newBurger = {
            name: $('#bg').val().trim(),
            eaten: $('[name=eaten]:checked').val().trim()
        };
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(function () {
            location.reload();
        });
    });

})
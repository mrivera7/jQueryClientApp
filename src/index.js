import $ from 'jquery';

$( document ).ready(() => {
    $('#root').prepend(
        $('<h1 />').text('ready!')
    );
});
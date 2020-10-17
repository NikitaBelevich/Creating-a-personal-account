'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.datepicker');
    const instances = M.Datepicker.init(elems, {
        format: 'dd-mm-yyyy',
        yearRange: [1950, 2020],
        container: document.body,
    });
});
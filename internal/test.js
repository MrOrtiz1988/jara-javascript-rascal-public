/**
 * SUPER SECRET TESTING FILE
 * -------------------------
 * 
 * This is not the file you are looking for.
 * You should be writing code in assignment.js
 * 
 * Please do not look at or modify this file.
 * 
 * We won't be mad if you do, just disappointed... 😞
 */




















/**
 * Hey... I see you scrolling. 
 * 
 * Stop now, before you do something you might regret later 😳
 */





















$(document).ready(() => {
    // Reset alert classes
    $('.alert')
        .removeClass('alert-danger')
        .removeClass('alert-warning')
        .removeClass('alert-success');

    try {
        start();
    }
    catch (err) {
        console.error(err);

        $('.alert').addClass('alert-danger').text('🚫 Check the console for errors!');
        return;
    }

    // Check values
    let isComplete = (
        // 4 products in the table
        $('tr').length === 4 &&

        // Reviews are correct
        $('tr:eq(0) td:eq(4)').text() === '1.8' &&
        $('tr:eq(1) td:eq(4)').text() === '5' &&
        $('tr:eq(2) td:eq(4)').text() === '4.6' &&
        $('tr:eq(3) td:eq(4)').text() === '4.2' &&

        // Discounts are correct
        $('tr:eq(0) td:eq(5)').text() === '$8.75' &&
        $('tr:eq(1) td:eq(5)').text() === '$0.00' &&
        $('tr:eq(2) td:eq(5)').text() === '$8.25' &&
        $('tr:eq(3) td:eq(5)').text() === '$1.80'
    );

    if (!isComplete) {
        $('.alert').addClass('alert-warning').text('🤔 Hmmm.... something is not quite right.');
    }
    else {
        $('.alert').addClass('alert-success').text('🎉 You did it!')
    }
});
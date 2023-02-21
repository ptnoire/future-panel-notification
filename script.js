const click = document.querySelector('.theConsole');
const h1 = document.querySelector('.h1');
const h2 = document.querySelector('.h2');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function(e) {
    click.classList.add('hidden');
    click.classList.remove('console');
    h1.classList.remove('flicker1');
    h2.classList.remove('flicker2');
    h1.classList.add('warning');
    h2.classList.add('warning');
    click.classList.add('cWarning');
    h1.textContent = 'YOU THOUGHT WE WOULDN\'T EXPECT THIS TYPE BEHAVIOR / / / :(';
    h2.textContent = 'It looks like a fatal error has occured. We are sorry for this inconvience. A log has been sent to our database for further review. If you keep experiencing this type of error, please refer to your user manual for a detailed explaination.'
    btn.classList.add('hidden');
    reset();
})

const reset = function() {
    setTimeout(() => {
        click.classList.remove('hidden');
        click.classList.add('console');
        h1.classList.add('flicker1');
        h2.classList.add('flicker2');
    }, 2000);
}

reset();

// Rough JS this time, I was in a hurry to finish before midnight for github square. forgive me, I have a newborn as well.
let btn = document.querySelector('#btnCalcula');

function calcular() {
    //let entrada = document.getElementById('entrada');
    let res = document.getElementById('resultado');

    let a = Number(document.getElementById('valor-a').value);
    let b = Number(document.getElementById('valor-b').value);
    let c = Number(document.getElementById('valor-c').value);

    if (a == 0.0) {

        alert('O valor de A não pode ser nulo');
    }
    else {

        let delta = b * b - 4 * a * c;
        let xv = -b / 2 * a;
        let yv = -delta / (4 * a);

        res.innerHTML = `<p>delta = ${delta}</p>`;
        res.innerHTML += `<p>xv = ${xv}</p>`;
        res.innerHTML += `<p>yv = ${yv}</p>`;

        if (delta > 0) {
            res.innerHTML += '<h3>O problema possui duas soluções distintas</h3>';
            let x1 = (-b - Math.sqrt(delta)) / 2 * a;
            let x2 = (-b + Math.sqrt(delta)) / 2 * a;
            res.innerHTML += `<p>x1 = ${x1}</p>`;
            res.innerHTML += `<p>x2 = ${x2}</p>`;
        }
        else if (delta < 0) {
            res.innerHTML += '<h3>A função possuí raízes complexas<h3>';
            let imaginaria = Math.sqrt(-delta) / 2 * a;
            if (xv != 0) {
                res.innerHTML += `<p>x1 = ${xv} + ${imaginaria}i</p>`;
                res.innerHTML += `<p>x2 = ${xv} - ${imaginaria}i</p>`;
            }
            else {
                res.innerHTML += `<p>x1 = + ${imaginaria}i</p>`;
                res.innerHTML += `<p>x2 = - ${imaginaria}i</p>`;
            }
        }
        else {
            res.innerHTML += '<h3>O problema possui uma raíz dupla</h3>';
            res.innerHTML += `<p> x1 = x2 = ${xv}</p>`
        }
    }

}

btn.addEventListener('click', calcular);
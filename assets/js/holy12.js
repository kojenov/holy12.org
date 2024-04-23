const url = 'https://script.google.com/macros/s/AKfycbwOviFN5v3vFe_dS7crVwD6DJHhM0EFI758x1G-xU9KaS7qZE3ltGpCHFdriGHQBTi_/exec?authuser=0&folder=';

function holy12archive(folder) {
  fetch(url + folder)
    .then(response => response.json())
    .then(files => {
      nlist = document.getElementById('nlist');
      for (const nl of files) {
        var a = document.createElement('a');
        var p = document.createElement('p');
        a.appendChild(document.createTextNode(nl.title));
        a.href = `${bucket}/${folder}/${nl.file}`;
        p.appendChild(a);
        nlist.appendChild(p);
      }
    })
}

function holy12latest(folder) {
  return fetch(url + folder)
    .then(response => response.json())
    .then(files => (
        `${bucket}/${folder}/${files[0].file}`
    ));
}


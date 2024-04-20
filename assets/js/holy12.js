
const bucket = 'https://holy12-pub.storage.googleapis.com'

function holy12archive(folder) {
  fetch(`${bucket}/${folder}/toc.json`)
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
  return fetch(`${bucket}/${folder}/toc.json`)
    .then(response => response.json())
    .then(files => (
        `${bucket}/${folder}/${files[0].file}`
    ));
}


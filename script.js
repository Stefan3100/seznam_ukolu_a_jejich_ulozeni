document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#submit').disabled = true;

    const stored = localStorage.getItem('tasks');
    if (stored) {
        stored.split('||').forEach(task => {
            if (task === '') return;
            const li = document.createElement('li');
            li.innerHTML = task;
            document.querySelector('#tasks').append(li);
        });
    }

    document.querySelector('#task').onkeyup = () => {
        const val = document.querySelector('#task').value;
        if (val.length > 0 && val[0] !== ' ')
            document.querySelector('#submit').disabled = false;
        else
            document.querySelector('#submit').disabled = true;
    };

    document.querySelector('form').onsubmit = () => {
        const value = document.querySelector('#task').value;

        const li = document.createElement('li');
        li.innerHTML = value;
        document.querySelector('#tasks').append(li);

        let tasks = localStorage.getItem('tasks');
        tasks = tasks ? tasks + '||' + value : value;
        localStorage.setItem('tasks', tasks);

        document.querySelector('#task').value = '';
        document.querySelector('#submit').disabled = true;

        return false;
    };
    

    });
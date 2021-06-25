let data = [];

console.log(data);

function rendertodo (){

    document.querySelector('.to-do').innerHTML = '';

data.forEach(task => {
    let li = document.createElement('li');

    li.innerHTML = `
    <input type="checkbox" id="task-${task.id}">
    <label for="task-${task.id}">
    ${task.title}</label>

    <button type="button">x</button>
    `;

    li.addEventListener('change', e => {
        if (e.target.checked) {
            li.classList.add('complete')
        } else {
            li.classList.remove('complete')
        }
    });

    li.querySelector('button').addEventListener('click', e =>{
        let button = e.target;
        let li = button.parentNode;
        let input = li.querySelector('input');
        let id =input.id;
        let idArray = id.split('-');
        let todoId=idArray[1];//transformando em array e tirando o -
        let title = li.querySelector('label').innerText;


        if(confirm(`Deseja Realmente excluir essa tarefa ${title}`)){
            
        data = data.filter(task => task.id !== parseInt(todoId))

        rendertodo();
        };

    });

    document.querySelector('.to-do').append(li);
});

}

document.querySelector('#new-task').addEventListener('keyup', e =>{
    if(e.key === 'Enter'){

            data.push({
                    id: data.length +1,
                    title: e.target.value
            });
            
            e.target.value= '';

            rendertodo();
    }

    });

rendertodo();
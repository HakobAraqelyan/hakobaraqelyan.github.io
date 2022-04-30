const root = document.querySelector("#root");

function TodoForm(add) {
    const container = document.createElement('form');

    container.innerHTML = `
        <input type="text" />
        <button>Add</button>
    `;
    
    container.addEventListener('submit', (e) => {
        e.preventDefault();

        const valu = container.querySelector('input').value;

        add(valu);

    });
    
    return container;
}

function ListIten(todo, onChange) {
    const container = document.createElement('div');
    
    container.innerHTML = `
    <label>
    <input type="checkbox" ${todo.completed ? 'checked' : ''}/>
    ${todo.label}
    </label>
    `;
    
    const input = container.querySelector('input');

    input.addEventListener('change', (e) => {
        onChange(e.target.checked);
    });

    return container;
}

function List(todos, onChange) {
    const container = document.createElement('div');

    todos.map(todo => {
        return ListIten(todo, (change) => {
            todo.completed = change; 
            onChange();
        });
    }).forEach(el => {
        container.appendChild(el);
    });

    return container;
}

function TodoFooter(todos, onChange) {
    const container = document.createElement('div');

    const complited = todos.filter(todo => todo.completed === true).length;
    
    container.innerHTML = `
        <span>${complited} / ${todos.length} Completed</span>
        <button>Clear Completed</button>
    `;

    const btn = container.querySelector('button');
    btn.addEventListener('click', () => {
        onChange(todos.filter(todo => todo.completed === false))
    })

    return container;
}

function App() {

    let todos = [
        {label: "Learn JS", completed: true},
        {label: "Learn Node", completed: false},
        {label: "Learn HTML", completed: false},
        {label: "Learn CSS", completed: false},
    ]

    const container = document.createElement('div');
    
    function render() {
        container.innerHTML = '';

        container.appendChild(TodoForm((newText) => {
            todos.push({
                label: newText,
                completed: false,
            })
            render();       
        }));
            container.appendChild(List(todos, () => {
                render();
            }));
            container.appendChild(TodoFooter(todos, newTodos => {
                todos = newTodos;
                render();
            }));
    }render();
    
    return container;
}


root.appendChild(App());






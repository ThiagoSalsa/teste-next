import { log } from 'console'
import styles from '../styles/Todo.module.css'

export async function getStaticProps(){

    // const data =  await fetch('https://jsonplaceholder.typicode.com/todos')
    const data =  await fetch('https://api.adviceslip.com/advice')
    console.log(data);
    const todos = await data.json()

    return {
        props: {todos},
    }

}

export default function Todos({ todos }) {
    return(
        <>
            <h1>Tarefas para fazer:</h1>
            <ul className={styles.todolist}>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>
        </>
    )
}
import {useState} from 'react'

const UseStateToDoList = () => {
    let arr = []    // empty arr
    let strr = ''  // empty string

    const [list, setList] = useState(arr)
    const [item, setItem] = useState(strr)

    const getValue = (event) => {
        return setItem(event.target.value) // catch data from input
    }

    const addToDo = () => {
        list.push(item)     // push item
        setList([...list]) // spread operator
    }

    const RemoveItem = (index, ele) => {
        list.splice(index, 1) // delete 1 item
        alert(`Are you sure! you want to delete ${index}-${ele}`)
        setList([...list]) // spread operator
    }

    return (
        <div className='container'>


        <table>
            <tbody>
                {  // Ternary operator 
                    list.length > 0 ? (
                        list.map((elem, index)=> {
                            return (
                                <tr>
                                    <td className='text-center'>{elem}</td>
                                    <td><button onClick={()=>{RemoveItem(index, elem)}}>Remove</button></td>
                                </tr>
                            )
                        })
                    ) : (null)
                }
            </tbody>
        </table>

            <h1>{list.length}</h1>
            <input onChange={getValue} type="text" placeholder='Enter Item..' />
            <button onClick={addToDo}>Add</button>
        </div>
    );
};

export default UseStateToDoList;
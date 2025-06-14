import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '../../service/api';
function Card() {

    const [todos, setTodos] = useState([]);
    const [completed, setCompleted] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getTodos()
    },[])
    async function getTodos() {
        const { data } = await supabase.from('todos').select('*');
        if (data) {
            setTodos(data)
            console.log(data)

        } else {
            console.log('data is not fetched try agian ')
        }
        setLoading(false)
    }
    async function markUsDone(id) {
        const { data, error } = await supabase.from('todos').update({ status: true }).eq('id', id).select('*')
        if (error) {
            console.log('update not succesfull')
        } else {
            setCompleted(data)
            console.log(completed)
            console.log('Update susses full')
            getTodos();
        }

    }

    return (
        <>
            {loading ?
                (
                    <div className="text-center">
                        <div role="status">
                            <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                )
                :
                todos.map((obj, index) => {

                    return (
                        <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-4">
                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-6 h-6 bg-purple-100 rounded-lg flex items-center justify-center">
                                            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">{obj.title}</h3>
                                    </div>

                                    {obj.status ? '' : <button
                                        onClick={() => markUsDone(obj.id)}
                                        className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-full hover:bg-purple-700 transition-colors">
                                        Mark Done
                                    </button>}
                                </div>

                                <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                                    {obj.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className={`${obj.status ? 'bg-green-50 text-green-700 border-green-200' : 'bg-amber-50 text-amber-700 border-amber-200'} px-3 py-1.5  text-sm font-medium rounded-full border `}>
                                        {`${obj.status ? 'Completed' : 'In Progress'}`}
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">{new Date(obj.created_at).toLocaleTimeString()}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Card

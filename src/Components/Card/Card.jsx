import React from 'react'
import { useState, useEffect } from 'react'
import { supabase } from '../../service/api';
function Card() {

    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        getTodos();
    }, [])
    async function getTodos() {
        const { data } = await supabase.from('todos').select('*');
        if (data) {
            setTodos(data)
            console.log(data)
        } else {
            console.log('data is not fetched try agian ')
        }
    }


    return (
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

                            <button className="px-4 py-2 bg-purple-600 text-white text-sm font-medium rounded-full hover:bg-purple-700 transition-colors">
                                Mark Done
                            </button>
                        </div>

                        <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                            {obj.description}
                        </p>

                        <div className="flex items-center justify-between">
                            <span className="px-3 py-1.5 bg-amber-50 text-amber-700 text-sm font-medium rounded-full border border-amber-200">
                                {`${obj.status ? 'Completed' : 'In Progress'}`}
                            </span>
                            <span className="text-xs text-gray-400 font-medium">{new Date(obj.created_at).toLocaleTimeString()}</span>
                        </div>
                    </div>
                </div>
            )
        })
    )
}

export default Card

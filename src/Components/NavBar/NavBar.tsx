
import { LogOut, Bell } from 'lucide-react';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import { supabase } from '../../service/api';

function NavBar() {

    const [greetings, setGreetings] = useState('');
    const [error , setError] =useState()
    const navigate = useNavigate();
    useEffect(() => {
        let now = new Date()
        let currentHour = now.getHours();


        if (currentHour < 11) {
            setGreetings('Good Morning')
        } else if (currentHour < 18) {
            setGreetings('Good Afternoon')
        }
        else if(currentHour<20){
            setGreetings('Good Night')
        }
        else{
            setGreetings('Poyi Kidan Urag')
        }
    }, [])

  async  function logOut (){
        let{error} = await supabase.auth.signOut();
        navigate('login')
    }

    return (
        <div className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#4b0082] rounded-xl flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-sm"></div>
                        </div>
                        <h1 className="text-xl font-bold text-[#4b0082]">Task Manager</h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="p-2 hover:bg-gray-50 rounded-xl transition-colors relative">
                            <Bell className="w-5 h-5 text-gray-600" />
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                        </button>

                        <div className="w-px h-6 bg-gray-200"></div>

                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 bg-[#4b0082] rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-medium">AJ</span>
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-sm font-medium text-gray-900">Abhijith</p>
                                <p className="text-xs text-gray-500">{greetings}</p>
                            </div>
                        </div>

                        <button
                        onClick={ logOut}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-full transition-colors text-sm font-medium">
                            <LogOut className="w-4 h-4" />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default NavBar

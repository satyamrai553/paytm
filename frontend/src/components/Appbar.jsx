import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';





export const Appbar = ({name}) => {

    const navigate = useNavigate();

    return <div className="shadow h-14 flex justify-between">
        <div className="flex flex-col justify-center h-full ml-4">
            PayTM App
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center h-full mr-4">
                {name}
            </div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <button onClick={()=>{
                    localStorage.clear();
                    navigate('/signin');
                }}> <LogOut /></button>
            </div>
        </div>
    </div>
}
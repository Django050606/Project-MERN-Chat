import  { useState } from 'react';
import toast from "react-hot-toast";

const useSignup = () => {
    const [loading,setLoading]=useState(false);

    const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender });
        if (!success) return;
    
        setLoading(true);
        try {
            const res = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, password, confirmPassword, gender }),
            });
    
            const data = await res.json();
            if (data.error){
                throw new Error(data.error)
            }


            
            console.log(data);
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    
    return { loading, signup };
}
//     const signup= async({fullName,username,password,confirmPassword, gender})=>{
//         const success = handleInputErrors({fullName,username,password,confirmPassword, gender})
//         if (!success) return;
        
//         setLoading(true);
//         try {
//             const res=await fetch("/api/auth/signup",{
//                 method:"POST",
//                 headers:{"Content-Type":"application/json"},
//                 body: JSON.stringify({fullName,username,password,confirmPassword, gender}),
//             });

//             const data=await res.json();
//             console.log(data)

//         } catch (error) {
//             toast.error(error.message)
//         }finally{
//             setLoading(false);
//         }
//     }

//     return {loading,signup};
// }

export default useSignup

function handleInputErrors({fullName,username,password,confirmPassword, gender}){
    if(!fullName || !username || !password || !confirmPassword || !gender){
        toast.error('Please fill all the fields! Dont be shy ;)')
        return false;
    }

    if (password !==confirmPassword){
        toast.error('Zioma, passwords dont match ;(')
        return false;
    }

    if(password.lenght<6){
        toast.error('as I have 6 fingers, password must be 6 characters')
        return false;
    }

    return true
}
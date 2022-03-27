import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser, selectUserPlan } from '../../redux/user/userSlice';
import ProfileImg from "../../assets/image/profile_img.jpg";
import { auth } from '../../firebase';
import Plans from '../Plans';

const Profile = () => {
  const user = useSelector(selectUser);
  const userPlan = useSelector(selectUserPlan);

  const renewalDate = () => {
    const today = new Date();
    return `${today.getDate()}/${today.getMonth() + 2}/${today.getFullYear()}`;
  }
  return (
    <div className="h-100vh text-white">
        <div className="flex flex-col w-1/2 mx-auto pt-t8 max-w-3xl">
          <h1 className="font-normal text-5xl mb-5 pb-3 border-b border-solid border-borderColor">Edit Profile</h1>  
          <div className="flex">
            <img src={ProfileImg} alt="Profile" className="h-24 object-contain" />  
            <div className="text-white ml-6 flex-1">
              <h2 className="bg-gray-400 p-4 text-base pl-5">{ user.email }</h2>
              <div className="profile_screen_plan">
                <h3 className="font-normal text-2xl mt-3 pb-2 border-b border-solid border-borderColor">Plans (Current Plan: {userPlan})</h3>
                <p className="mt-1 mb-2">Renewal Date: {renewalDate()}</p>
                <Plans />
                <button onClick={() => auth.signOut()} className="px-4 py-4 text-xs text-white w-full mt-t5 bg-red-600 font-bold border-none cursor-pointer">Sign Out</button>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Profile
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import db from '../firebase';
import { selectUser, setUserPlan } from '../redux/user/userSlice';

const Plans = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [plans, setPlans] = useState([]);
    const [userIdPlans, setUserIdPlans] = useState({"tUserId": null, "tPlanId": null});

    useEffect(() => {
        db.collection('Plans')
            .where('active', '==', true)
            .get()
            .then(q => {
                const plans = {};
                q.forEach(doc => plans[doc.id] = doc.data());
                setPlans(plans);
            });
    }, []);

    useEffect(() => {
        Object.keys(plans).forEach(doc => {
            db.collection('Subscribies')
                .where('planId', '==', doc)
                .get()
                .then(userId => {
                    const userPlans = {};
                    userId.forEach(u => userPlans[u.id] = u.data());
                    Object.entries(userPlans).forEach(f => { 
                        if (f[1]?.userId !== undefined && f[1]?.userId === user.uid) {
                            setUserIdPlans({
                                tUserId: f[1].userId,
                                tPlanId: f[1].planId
                            });
                        }
                    })
                    
                });
            })
    }, [plans])
        
    const planChange = (userId, planId) => {
        db.collection('Subscribies')
            .where('userId', '==', userId)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => doc.ref.update({planId}));
            });

        setUserIdPlans({
            tUserId: userId,
            tPlanId: planId
        });
    }

    useEffect(() => {
        Object.entries(plans).map(([planId, planData]) => {
            if (userIdPlans.tUserId === user.uid && userIdPlans.tPlanId === planId) dispatch(setUserPlan(planData.PlanName));
        });
    }, [userIdPlans])

    return (
        <>
            {                
                Object.entries(plans).map(([planId, planData]) => {
                    const isUserPlanSelected = userIdPlans.tUserId === user.uid && userIdPlans.tPlanId === planId;
                    return (
                      <div key={planId} className={`flex justify-between p-5 opacity-80 hover:opacity-100 ${isUserPlanSelected && 'border-1 border-gray-500 border-solid rounded max-xs:p-2'}`}>
                        <div className="max-xs:text-xs max-xs:p-2">
                          <h5>Netflix {planData.PlanName}</h5>
                          <h6>{planData.Description}</h6>
                        </div>
                        <button 
                            onClick={() => planChange(userIdPlans.tUserId, planId)}
                            disabled={ isUserPlanSelected ? true : false }
                            className={`${isUserPlanSelected ? 'bg-gray-500' : 'bg-red-600'} border-none cursor-pointer text-white font-bold py-2 px-4 text-sm max-xs:text-xs max-xs:py-1 max-xs:px-2`}
                        >
                            {isUserPlanSelected ? 'Selected Package' : 'Subscribe'}
                        </button>
                      </div>
                    );
                })
            }
        </>
    )
}

export default Plans
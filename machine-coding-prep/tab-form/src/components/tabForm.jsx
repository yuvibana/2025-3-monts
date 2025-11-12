import React, { act, useState } from 'react'
import Profile from './profile'
import Interset from './interest'
import Settings from './settings'



export default function TabForm() {

    const [formData, setData] = useState(
        {
            name: 'bp',
            age: 25,
            email: 'bp@gmail.com',
            interest: ['coding', 'music'],
            theme: 'dark'
        }
    );

    const tabs = [
        {
            name: 'Profile',
            component: Profile,
            validate: () => {
                const err = {};
                if (!formData.name || formData.name.length < 2) {
                    err.name = "Name is required";
                }
                if (!formData.age || formData.age < 18) {
                    err.age = "Age is required";
                }
                if (!formData.email || formData.email.length < 2) {
                    err.email = "Email is required";
                }
                setErrors(err);
                return err.name || err.age || err.email ? false : true
            }
        },
        {
            name: 'Interset',
            component: Interset,
            validate: () => {
                const err = {};
                if (formData.interest.length < 1) {
                    err.interest = "Please select atleast one interest";
                }
                setErrors(err);
                return err.interest ? false : true
            }
        },
        {
            name: 'Profile',
            component: Settings,
            validate: () => {
                return true
            }
        },
    ]


    const [errors, setErrors] = useState({})


    const [activeTab, setActiveTab] = useState(0)

    const ActiveTabComponent = tabs[activeTab].component;

    const handleNextClick = () => {
        if (tabs[activeTab].validate()) {
            setActiveTab((prev) => prev + 1);
        }
    }

    const handlePrevClick = () => {
        // if (tabs[activeTab].validate()) {
        setActiveTab((prev) => prev - 1);
        // }
    }
    const handlesubmitClick = () => {
        // make api call
        console.log(formData);

    }

    return (
        <div style={{ width: '100%' }}>

            <div className='heading_conatiner flex'>
                {tabs.map((tab, index) => <div
                    key={index}
                    className={`heading ${activeTab === index ? 'active' : ''}`}
                    onClick={() => {
                        if (index > activeTab) {
                            tabs[activeTab].validate() && setActiveTab(index)
                        } else {
                            setActiveTab(index)
                        }
                    }
                    }
                >{tab.name}</div>)}
            </div>
            <div className='tab_body'>
                <ActiveTabComponent data={formData} setData={setData} errors={errors} />
                <div className='buttons'>
                    {activeTab > 0 && <button onClick={handlePrevClick}> Prev</button>}
                    {activeTab < tabs.length - 1 && <button onClickCapture={handleNextClick}> Next</button>}
                    {activeTab === tabs.length - 1 && <button onClickCapture={handlesubmitClick}> submit</button>}

                </div>
            </div>
        </div >
    )
}

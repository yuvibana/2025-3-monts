'use client'

import React, { useState } from 'react'
import LoginPage from './Login';
import Register from './Register';

export default function LoginRegisterConatainer() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div>
            {
                isLogin ?
                    <LoginPage /> :
                    <Register />
            }
            <p>don't have an account <span
                className='text-orange-600 cursor-pointer'
                onClick={() => setIsLogin(prev => !prev)}
            >{isLogin ? 'create new' : 'login'}</span> account</p>
        </div>
    )
}

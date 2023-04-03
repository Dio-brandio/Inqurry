import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
const Login = () => {
    const router  =  useRouter()
    const handleLogin=()=>{
        const email = $('#email').val().toString()
        const password = $('#password').val().toString()
        if (email==='admin' && password==='123') {
            console.log(email,password);
            Cookies.set('authemail', email);
            router.push('/Admin')
        }
    }
    return (
        <div>
            <main className="main-content mt-0 ps">
                <section>
                    <div className="page-header min-vh-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 d-flex flex-column mx-lg-0 mx-auto">
                                    <div className="card card-plain">
                                        <div className="card-header pb-0 text-start">
                                            <h4 className="font-weight-bolder">Sign In</h4>
                                            <p className="mb-0">Enter your email and password to sign in</p>
                                        </div>
                                        <div className="card-body">
                                            <form >
                                                <div className="mb-3">
                                                    <input type="text" name='email' className="form-control form-control-lg" placeholder="Email" aria-label="Email" id='email'/>
                                                </div>
                                                <div className="mb-3">
                                                    <input type="password" name='password' className="form-control form-control-lg" placeholder="Password" aria-label="Password" id='password'/>
                                                </div>

                                                <div className="text-center">
                                                    <button type="button" onClick={handleLogin} className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Sign in</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="card-footer text-center pt-0 px-lg-2 px-1">
                                            <p className="mb-4 text-sm mx-auto">
                                                Don't have an account?
                                                <Link href="/signup" className="text-primary text-gradient font-weight-bold">Sign up</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Login

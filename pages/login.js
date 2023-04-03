import Link from 'next/link'
import React from 'react'
const Login = () => {
    return (
        <div>
            <main class="main-content mt-0 ps">
                <section>
                    <div class="page-header min-vh-100">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 d-flex flex-column mx-lg-0 mx-auto">
                                    <div class="card card-plain">
                                        <div class="card-header pb-0 text-start">
                                            <h4 class="font-weight-bolder">Sign In</h4>
                                            <p class="mb-0">Enter your email and password to sign in</p>
                                        </div>
                                        <div class="card-body">
                                            <form role="form">
                                                <div class="mb-3">
                                                    <input type="email" name='email' class="form-control form-control-lg" placeholder="Email" aria-label="Email" />
                                                </div>
                                                <div class="mb-3">
                                                    <input type="password" name='password' class="form-control form-control-lg" placeholder="Password" aria-label="Password" />
                                                </div>

                                                <div class="text-center">
                                                    <button type="button" class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Sign in</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="card-footer text-center pt-0 px-lg-2 px-1">
                                            <p class="mb-4 text-sm mx-auto">
                                                Don't have an account?
                                                <Link href="/signup" class="text-primary text-gradient font-weight-bold">Sign up</Link>
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

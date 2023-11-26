import React from 'react';
import "./Form.css";

const Form = () => {
    return (
        <>
            <div class="registration-form">
                <form>
                    <div class="form-icon">
                        <span><i class="bi bi-person-circle"></i></span>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control item" id="username" placeholder="Username" />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control item" id="password" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control item" id="email" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control item" id="phone-number" placeholder="Phone Number" />
                    </div>
                    <div class="form-group">
                        <input type="date" class="form-control item" id="birth-date" placeholder="Birth Date" />
                    </div>
                    <div class="form-group">
                        <button type="button" class="btn btn-block create-account">Crear Cuenta</button>
                    </div>
                    <div className='text-center'>
                    <a href='/login' className='text-white'>Volver al Login</a>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Form;
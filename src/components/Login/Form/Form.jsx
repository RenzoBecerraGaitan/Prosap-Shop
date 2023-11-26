import React from 'react';
import "./Form.css";

const Form = ({Users}) => {
    return (
        <>
            <div className='background-login pt-5 pb-5'>
                <div class="wrapper fadeInDown">
                    <div id="formContent">
                        <div class="fadeIn first">
                            <img src={Users} id="icon" alt="User Icon" />
                        </div>
                        <form>
                            <input type="text" id="email" class="fadeIn second" name="email" placeholder="Ingrese su correo" />
                            <input type="password" id="password" class="fadeIn third" name="password" placeholder="Ingrese la contraseña" />
                            <input type="submit" class="fadeIn fourth" value="Ingresar" />
                        </form>
                        <div id="formFooter">
                        <h6><b>Aun no se ha registrado?</b></h6>
                            <a class="underlineHover" href="/register"> Cree una cuenta ahora y gratis</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form;

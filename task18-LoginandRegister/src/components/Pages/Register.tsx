const [confirmPassword, setConfirmPassword] = useState('')
    const [errorEmailMessage, setErrorEmailMessage] = useState('')
    const [errorPasswordMessage, setErrorPasswordMessage] = useState('')
    const [errorIncorrectPasswordMessage, setErrorIncorrectPasswordMessage] = useState('')


const RegisterPage = () =>{

return (
    <>
     <div>
        <form>
            <label htmlFor="Username">USERNAME</label>
                <input type="username"  placeholder="Name"/>
            <label htmlFor="email">EMAIL</label>
                <input type="email" placeholder="email"/>
            <label htmlFor="password">PASSWORD</label>
                <input type="password" placeholder="password"/>
            <label htmlFor="password">CONFIRM PASSWORD</label>
                <input type="password" placeholder="password"/>
  



        </form>


     </div>
    
    
    
    
    </>

)
}

export default RegisterPage
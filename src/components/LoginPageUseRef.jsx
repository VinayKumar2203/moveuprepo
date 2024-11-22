import { useEffect, useState } from "react";
import { useRef } from "react";

const LoginPageUserRef = () => {
    const [valueOFEye, setValueOFEye] = useState(false)

    let emailRef = useRef()
    let passwordRef = useRef()
    let imgEye = useRef();


    function handleEYEBtn() {
        setValueOFEye(!valueOFEye);

        console.log(valueOFEye);
        console.log(imgEye.current.src);
        if (valueOFEye == false) {
            imgEye.current.src = "https://th.bing.com/th?id=OIP.8RKF5ZIjGvC4ea90cf5fFQHaHk&w=247&h=252&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
            passwordRef.current.type = 'text'
        } else {
            imgEye.current.src = 'https://th.bing.com/th?id=OIP.T5ZNaEf3PoLgYjRdPC7JkAAAAA&w=226&h=226&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2'
            passwordRef.current.type = 'password'
        }
    }

    let getData = {};
    function handleSubmitForm(e) {
        e.preventDefault();
        getData['email'] = emailRef.current.value;
        getData['password'] = passwordRef.current.value;
        if (emailRef.current.value && passwordRef.current.value) {
            console.log(getData)
        } else {
            alert('please enter both email & password')
        }
    }

    function handleCheckBtn(e) {
        console.log(e.target.checked)
        if (!e.target.checked) {
            emailRef.current.value = "";
            passwordRef.current.value = "";
        }

    }


    useEffect(() => {
        emailRef.current.focus();
    }, [])
    return (
        <div className="loginFormDetailsCont">
            {/* ------------------------------------------------------- */}
            <div className=" right login-container">
                <div className="login-card">
                    <img className="leftImage" src="https://s3-alpha-sig.figma.com/img/7601/35c4/d45b29375af616f50c15c80df0e9d5d1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ptfnoFq6zdSj23x8ac0ALH7hs0gnDYErIzYmXUZ75wt3A1N4S5dNqhaniNPPSfWm-LWXlfwg0DEYnCd7RdM5585O-JW344puqVK4~zRxOGp7ojXVcmFR--0yiuOibwEsAtV88ZOH8W1-KAETAjp9uNYVS0Ja66a6yGMO9zNdHP2McUr5u8qIx6snGv74v8Z4m7JaAGy88gwyRhlcc-vi5fVZ5Akq0OWe5MAQdSnVWF~iM727ZTOyMd1DwO7IXGZ0NwDLTGQVDrmszCTVvZJ5anWyH3ZzKaZbfghgEs-jenG1SF2wHPcx4v8ddMwE9ARXcHZpnyMASe5Nxzn8tdhWsw__" alt="sidebarImage" />
                </div>
            </div>

            <div className=" right login-container">
                <div className=" mainLoginpAGE login-card">
                    <h1 className="brand">
                        <span className="icon"><img className="imgLogo" src="https://s3-alpha-sig.figma.com/img/ae76/4789/d89baad98ce45e7cd2f31a2d3707171e?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XH82yEr9ZQdOsD~4BkwfrFidHLjz~styfL-zGamBPHU3rClmulcWzpM09Nrdq0D7RDSwhDDz7WxoREWHtpoUKQ4B9SZMiZqKyDDoQzkG0ILsUdHpxGLKrDdXFGlbXcZKQtsAW2Ub8wyQvTKR26u2ybnkJ8hGdSs1jzARqxxkczazSJOzDZMDoj~uxNnVC6q4lUeNHgp5VgH-2FQ~2HDS7OtjaqRZ92mgE4eUBz5Xxv5ntlAxPJqtS25WKL7mrxFu2E7zgYHiqJxqR1mjMM6Dzb4hvvXcF9O1vZ~CHl872xcEe-WE0B--6I-Q~xh6Xcxy2pfYzOkCqauyNqP~QBBTdA__" alt="" /></span> Move-Up
                    </h1>
                    <form onSubmit={handleSubmitForm} className="login-form">
                        <label htmlFor="email" className="lableDetailsOfForm">Login</label>
                        <input
                            ref={emailRef}
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            className="input-field emailInput"
                        />
                        <label htmlFor="password" className="lableDetailsOfForm">Password</label>
                        <div className="password-container">
                            <input
                                ref={passwordRef}
                                type="password"
                                id="password"
                                placeholder="Enter password"
                                className="input-field"
                            />
                            <button onClick={handleEYEBtn} type="button" className="show-password-btn">
                                <img ref={imgEye} className="passWordImage" src="https://s3-alpha-sig.figma.com/img/56bf/6d8a/66c7e69ff4595f7f8dc3c1ec5825fe9d?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XkI8OCWKiWmMKd~d7yuXA2tenRqoKzXWIRbpQtQ4EMRhiHNaMIYb4BjdQQRJBGFOpsfmeRL0cGTGL6QClvV4lGEl3pOiW8S2UkVZ8kUewH0LrP29fIp0LqwOMZKreX5WdaQ2cQdC2l2cNh7pNoFgvJje0l57La5fperNrSdkAq1CjT3uHx30b0XnGJwk0UQ0irPgJEYSLik1cGqxA1sMv0pPFVa02qevrPFbX7HnPHAB6EkYqRguhMrlcFOH7sRZkELXi7bBe0Tcc~k3vBde8elUWBNLS3acUDg252-xG1zvhjwSKDCkyXjKBl7f~KQyVHsps3c6NNKFoM~r86kL0w__" alt="" />
                            </button>
                        </div>
                        <div className="options">
                            <label>
                                <input onClick={handleCheckBtn} type="checkbox" /> Remember me
                            </label>
                            <a href="/" className="forgot-password">
                                Forgot password?
                            </a>
                        </div>
                        <button type="submit" className="sign-in-btn">
                            Sign in
                        </button>
                        <br /><br />
                        <button type="button" className="google-btn">
                            <img className="googleICon" src="https://s3-alpha-sig.figma.com/img/2f8f/449b/2a59233c5968ccd19e7b7a82da381262?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PdRl1VJXJBtV0JqlKyqRwhGPfowOAUzSSnqdSxL7bdVrYI1OcC-V-1X3wGbKLmlFVX8pHbLZyVbsGjvvit8wlXxzrKz7qpcSpgEJeNVrl6l~en~OSY~JP3NfShTIsKgbisnfSTbgMluCAZgAsrd8tY4b7WarN1yF0n5b8YxBbN5ZEWhsHWYw9gmKnXRV3ehSUB~ltTvCIy34WHsE35WNBhTh4qL9wd9NYSs5IiQC5WTtQKFPkhJdowFEFsWd8f~7SphFoYf93JhOq3Iq1HgtHgtG8TArcSU90mIOIrwaUJeqRhmPQWSS99Cod6pAUOXhF5fvMX1Iul63de1JiiW4wQ__" alt="Google icon" />   Or sign in with Google
                        </button>
                    </form>
                    <br />
                    <div className="signup">
                        <span>Don't have an account?</span> <a href="/">Sign up now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPageUserRef;

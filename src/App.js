import logo from './logo.svg';
import './App.css';
import '../scss/_main.scss';
import Button from './components/buttons';
import Input1 from './components/input';

function App() {
  return (
    <section classNameName="signin-form-section">
            <div className="container-fluid">
                <div className="signin-form-container d-flex">
                    <div className="col-50 flex-1 form-container">
                        <div className="form-header d-flex flex-align-center">
                            <div className="site-logo">
                                <img className="img-responsive" src='./assets/images/icon.png' alt="Student HQ">
                           
                            <h1 className="logo-text primary-text">Student<span className="text-bold">HQ</span></h1>
                        
                       <div className="form-info">
                           <h2 className="form-info-heading text-bold primary-text">
                                Join our community today!
                           </h2>
                           <p className="form-info-desc">Try our platform for free. Get guidance from renowned experts in the field, talk to seniors, share with peers and so much more.</p>
                       </div>
                       <div className="signin-form-wrapper">
                            <form className="signin-form">
                                <div className="form-input-container">
                                    <Input1/>
                                    <Input2/>
                                    <Input3/>
                                </div>

                               <Button/>
                            </form>
                            <div className="form-extra d-flex flex-col flex-align-center width-md-90">
                                <p className="mt-30">or</p>
                                <a className="mt-15" href="#" title="Sign up with google">
                                    <div className="d-flex">
                                        <img src='./assets/images/google-logo.png' alt="google signin">
                                        <p className="text-bold ml-10">Sign up with Google</span>
                                    </div> 
                                </a>
                                <p className="display-1 mt-40 text-bold text-center">Already have an account? <a className="ml-20 line line-h" href="#" title="login">Login</a></p> 
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-50 side-image-container flex-1 flex-align-center flex-justify-center">
                        <img src='./assets/images/logo-full.png' alt="logo full" className="side-img img-responsive">
                    </div>
                </div>
            </div>
        </section>
    }
  );
}

export default App;

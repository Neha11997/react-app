import Button from '../components/button';
import { Input } from '../components/input';
import { Form } from '../layouts/form';
import { Header } from '../layouts/header';

export const LoginScence = () => {
    return (
        <section classNameName="signin-form-section">
            <div className="container-fluid">
                <div className="signin-form-container d-flex">
                    <div className="col-50 flex-1 form-container">
                        <div className="form-header d-flex flex-align-center">
                            <Header />
                        </div>

                        <div className="form-info">
                            <h2 className="form-info-heading text-bold primary-text">
                                Join our community today!
                           </h2>
                            <p className="form-info-desc">Try our platform for free. Get guidance from renowned experts in the field, talk to seniors, share with peers and so much more.</p>
                        </div>
                        <div className="signin-form-wrapper">
                            <Form class="signin-form">
                                <div className="form-input-container">
                                    <Input type="text" name="name" placeholder="Username" attributes={{required: 'required'}} />
                                    <Input type="email" name="email" placeholder="Email" attributes={{required: 'required', pattern:"/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"}} />
                                    <Input type="placeholder" name="password" placeholder="Placeholder" attributes={{required: 'required', minlength:8}} />
                                </div>

                                <Button />
                            </Form>
                            <div className="form-extra d-flex flex-col flex-align-center width-md-90">
                                <p className="mt-30">or</p>
                                <a className="mt-15" href="#" title="Sign up with google">
                                    <div className="d-flex">
                                        <img src='./assets/images/google-logo.png' alt="google signin" />
                                        <p className="text-bold ml-10">Sign up with Google</p>
                                    </div>
                                </a>
                                <p className="display-1 mt-40 text-bold text-center">Already have an account? <a className="ml-20 line line-h" href="#" title="login">Login</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-50 side-image-container flex-1 flex-align-center flex-justify-center">
                        <img src='./assets/images/logo-full.png' alt="logo full" className="side-img img-responsive" />
                    </div>
                </div>
            </div>
        </section>
    );
}

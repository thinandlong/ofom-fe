import Header from './components/Header';
import LoginForm from './components/LoginForm';

const LoginPage = () => {
  return (
    <div className="flex-center screen-full bg-gray100 min-w-1200">
      <div className="bg-white flex-col-items-center w-1045 h-600 rounded-8">
        <Header />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;

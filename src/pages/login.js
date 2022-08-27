import '../App.css';
import Side from './components/Side';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));
  const onError = (errors, e) => console.log(errors, e);

  return (
    <div id="loginPage" className="bg-yellow">
      <div className="container loginPage vhContainer">
        <Side />
        <div>
          <form
            className="formControls"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <h2 className="formControls_txt">最實用的線上代辦事項服務</h2>
            <label className="formControls_label" htmlFor="email">
              Email
            </label>
            <input
              className="formControls_input"
              type="text"
              placeholder="Email"
              {...register('email', {
                required: { value: true, message: '此欄位必填寫' },
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: '不符合 Email 規則',
                },
              })}
            />
            <span>{errors.email?.message}</span>
            <label className="formControls_label" htmlFor="pwd">
              密碼
            </label>
            <input
              className="formControls_input"
              type="password"
              placeholder="請輸入密碼"
              {...register('password', {
                required: { value: true, message: '此欄位必填寫' },
                minLength: { value: 8, message: '密碼至少為 8 碼' },
              })}
            />
            <span>{errors.password?.message}</span>
            <input
              className="formControls_btnSubmit"
              type="submit"
              value="登入"
            />
            <a className="formControls_btnLink" href="#signUpPage">
              註冊帳號
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

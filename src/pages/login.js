import '../App.css';
import Side from './components/Side';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../components/AuthContext';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

function Login() {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const _url = 'https://todoo.5xcamp.us/users/sign_in';
    let myHeaders = new Headers();
    let JWTToken = '';
    myHeaders.append('Content-Type', 'application/json');
    fetch(_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: data,
      }),
    })
      .then((res) => {
        if (res.status === 401) {
          throw new Error('登入失敗，請重新檢驗！');
        }
        JWTToken = res.headers.get('authorization');
        return res.json();
      })
      .then((res) => {
        setToken({ JWTToken: JWTToken, name: res.nickname }); //
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
        return MySwal.fire({
          title: err.message,
        });
      });
  };
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
            <Link to="/signup" className={'formControls_btnLink'}>
              註冊帳號
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

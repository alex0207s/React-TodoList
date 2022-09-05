import '../App.css';
import Side from './components/Side';
import { useForm } from 'react-hook-form';
import { useAuth } from '../components/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function SignUp() {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const _url = 'https://todoo.5xcamp.us/users';

    let myHeaders = new Headers();
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
        console.log(res);
        if (res.status === 422) {
          throw new Error('註冊失敗\nEmail 已被註冊或密碼不足六碼！');
        }
        setToken(res.headers.get('authorization'));
        return res.json();
      })
      .then((res) => {
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
    <div id="signUpPage" className="bg-yellow">
      <div className="container signUpPage vhContainer">
        <Side />
        <div>
          <form
            className="formControls"
            onSubmit={handleSubmit(onSubmit, onError)}
          >
            <h2 className="formControls_txt">註冊帳號</h2>
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
            <label className="formControls_label" htmlFor="name">
              您的暱稱
            </label>
            <input
              className="formControls_input"
              type="text"
              placeholder="請輸入您的暱稱"
              {...register('nickname', {
                required: { value: true, message: '此欄位必填寫' },
                maxLength: { value: 100, message: '暱稱最多為 100 個字元' },
              })}
            />
            <span>{errors.name?.message}</span>
            <label className="formControls_label" htmlFor="pwd">
              密碼
            </label>
            <input
              className="formControls_input"
              type="password"
              placeholder="請輸入密碼"
              {...register('password', {
                required: { value: true, message: '此欄位必填寫' },
              })}
            />
            <span>{errors.password?.message}</span>
            <label className="formControls_label" htmlFor="pwd">
              再次輸入密碼
            </label>
            <input
              className="formControls_input"
              type="password"
              placeholder="請再次輸入密碼"
              {...register('passwordConfirm', {
                required: { value: true, message: '此欄位必填寫' },
                validate: (val) => {
                  if (watch('password') !== val) {
                    MySwal.fire({
                      title: '密碼不一致，請重新輸入!',
                    });
                    return '密碼不一致請，重新輸入!';
                  }
                },
              })}
            />
            <span>{errors.password?.message}</span>
            <input
              className="formControls_btnSubmit"
              type="submit"
              value="註冊帳號"
            />
            <Link to="/login" className={'formControls_btnLink'}>
              登入
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

import '../App.css';
import Side from './components/Side';
import Form from './components/Form';
import FormControlsInput from './components/FormControlsInput';

function Login() {
  return (
    <div id="loginPage" className="bg-yellow">
      <div className="container loginPage vhContainer">
        <Side />
        <Form
          title="最實用的線上代辦事項服務"
          bnt_value="登入"
          anchor_value="註冊帳號"
        >
          <FormControlsInput
            category="email"
            label_content="Email"
            input_type="text"
            input_placeholder="請輸入 email"
            required="required"
          />
          <span>此欄位不可留空</span>
          <FormControlsInput
            category="pwd"
            label_content="密碼"
            input_type="password"
            input_placeholder="請輸入密碼"
            required="required"
          />
        </Form>
      </div>
    </div>
  );
}

export default Login;

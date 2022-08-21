import '../App.css';
import Side from './components/Side';
import Form from './components/Form';
import FormControlsInput from './components/FormControlsInput';

function SignUp() {
  return (
    <div id="signUpPage" className="bg-yellow">
      <div className="container signUpPage vhContainer">
        <Side />
        <Form
          title="最實用的線上代辦事項服務"
          bnt_value="註冊帳號"
          anchor_value="登入"
        >
          <FormControlsInput
            category="email"
            label_content="Email"
            input_type="text"
            input_placeholder="請輸入 email"
            required="required"
          />
          <FormControlsInput
            category="name"
            label_content="您的暱稱"
            input_type="text"
            input_placeholder="請輸入您的暱稱"
          />
          <FormControlsInput
            category="pwd"
            label_content="密碼"
            input_type="password"
            input_placeholder="請輸入密碼"
            required="required"
          />
          <FormControlsInput
            category="pwd"
            label_content="再次輸入密碼"
            input_type="password"
            input_placeholder="請再次輸入密碼"
            required="required"
          />
        </Form>
      </div>
    </div>
  );
}

export default SignUp;

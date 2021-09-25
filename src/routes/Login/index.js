import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

import { Button, Container, Input } from 'components';

import Friendster from 'assets/friendster.png';

import './style.scss';

const CREDENTIALS = {
  email: 'princessmeca@yahoo.com',
  password: 'pokemonbarbie',
};

function Message() {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  function onSubmit(formData) {
    const { email, password } = formData;

    if (email !== CREDENTIALS.email || password !== CREDENTIALS.password) {
      setError('password', {
        type: 'manual',
        message: 'Incorrect username or password',
      });
      return;
    }

    history.push('/profile');
  }

  useEffect(() => {
    document.title = 'Friendster | Login';
  }, []);

  return (
    <div>
      <div className="Login_header">
        <img src={Friendster} alt="Friendster Logo" />
      </div>
      <Container className="Login_container">
        <form className="Login_card" onSubmit={handleSubmit(onSubmit)}>
          <div className="Login_card_head">
            <h2>Log In</h2>
          </div>
          <div className="Login_card_body">
            <p className="Login_label">Email:</p>
            <Input className="Login_input" name="email" register={register} />
            <p className="Login_label">Password:</p>
            <Input
              className="Login_input"
              error={errors.password?.message}
              name="password"
              register={register}
              type="password"
            />
            <div />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Message;

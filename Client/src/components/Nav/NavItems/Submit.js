import { SubmissionError } from 'redux-form';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

function submit(values) {
  return sleep(1000).then(() => {
    // simulate server latency
    if (values.password.length <= 6) {
      throw new SubmissionError({
        password: 'Wrong password',
        _error: 'Login failed!'
      });
    }
  });
}

export default submit;

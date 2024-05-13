const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 5000,
});

const main = async () => {
  console.log('Hello World!');

  try {
    const { data } = await instance.get('http://localhost:3333/');

    console.log({ data });
  } catch (err: any) {
    console.error('[TIMEOUT]', err.code, err.config.timeout);
  }
};

main();

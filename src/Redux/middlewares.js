const baseurl = `https://reqres.in/api`;
export const Fetching_Api = 'Fetching_Api';
const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

async function invokeAPI({ endpoint, config, headerContent, contentType }) {
  const headers = DEFAULT_HEADERS;
  const updatedConfig = {
    ...config,
    headers: { ...headers, ...headerContent },
  };

  // console.log("config---->?", updatedConfig);
  const url = `${baseurl}${endpoint}`;

  console.log("endpoints----->", endpoint)
  const response = await fetch(url, updatedConfig);

  
  

  contentType = response.headers['content-type'];

  let result;
  if (typeof contentType ===  'undefined' || contentType === 'application/json') {
    result = await response.json();

    // console.log('Result ---->', result.token);
    // console.log(result);
    return { data: result };
  } else if (contentType === 'application/pdf') {
    result = await response.blob();
    // console.log('Result ---->', result);
    return { data: result };
  }
}

export const middleWareDispatch = (store) => (next) => async (action) => {
  if (typeof action[Fetching_Api] === 'undefined') {
    return next(action);
  }
  // const { silent = false } = action[Fetching_Api];
  try {
    const {
      url,
      body,
      method = 'POST',
      json,
      contentType,
    } = action[Fetching_Api];
    console.log('body = ', body);
    const { auth } = store.getState();
    // console.log('check=======>', store.getState().token.id);

    const headerContent = {
      ...(auth.token ? { Authorization: `Bearer ${token.token}` } : {}),
      ...DEFAULT_HEADERS,
    };
    const payload = {
      endpoint: url,
      headerContent,
      config: {
        method,
        body: JSON.stringify(body),
      },
      json,
      contentType,
    };
    const { data } = await invokeAPI(payload);

    return data;
  } catch (error) {
    console.log(error);
  }
};

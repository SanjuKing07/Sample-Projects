export const getOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  };
  
  export const postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
      },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
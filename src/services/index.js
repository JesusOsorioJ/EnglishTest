// const API_URL = process.env.REACT_APP_API_BASE_URL;
const API_URL = "http://localhost:8080/api"

export async function getAllTitles() {
  try {
    const response = await fetch(`${API_URL}/title`);
    const data = await response.json();
    console.log(response);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getSingleBySubtittle(id) {
    try {
      const response = await fetch(`${API_URL}/title/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }

  export async function getTestBySubtittle(id) {
    try {
      const response = await fetch(`${API_URL}/title/searchtest/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
  
  export async function createUpdateTest(body) {
    const payload = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    try {
      console.log(body)
      const response = await fetch(`${API_URL}/title/createupdate`, payload);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
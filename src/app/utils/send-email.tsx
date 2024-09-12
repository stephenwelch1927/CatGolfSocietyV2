import { FormData } from '../components/ContactForm';
export default  async function sendEmail(data: FormData) {
  // TODO: send email
  const apiEndpoint = 'http://localhost:3000/api/email/';

   fetch(apiEndpoint, {
    method: 'POST',
    mode: "cors",
    headers: {
      'Access-Control-Request-Method' : 'POST',
      'Access-Control-Allow-Origin': 'localhost:3000/api/email'
    },
    body: JSON.stringify(data),
  })
  
    .then((res) => res.json())
    .then((response) => {
      if(response.message){
        alert(response.message);
    }else {
      alert(response.error);
    }
    })
    .catch((err) => {
        alert(`Error: ${err}`);
    });
  console.log(data);
}
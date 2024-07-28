/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
// const data = `{  "token" : ${},     "senderID" : ${'Onestore.ng'},     "recipients" :${'09073077717'},     "message" : ${'Testing'} }`;

export const sendSMS = async (data: any) => {
  const config = `{ 
  "token" : ${import.meta.env.VITE_KUDI_SMS_API_KEY},
  "senderID" : "Onestore.ng", 
  "recipients": "${data.recipients}", 
  "message" : "${data.message}" 
   }`;
  console.log(data);
  console.log(config);

  const response: any = await axios.post(import.meta.env.VITE_KUDI_SMS_GATEWAY, config, {
    headers: {},
  });
  console.log(response.data);

  if (!response) {
    return { message: "unable to send SMS", data: JSON.stringify(response.data) };
  }
  return JSON.stringify(response.data);
};

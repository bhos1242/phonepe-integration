// utils/phonepe.js
import CryptoJS from "crypto-js";

export const generateXVerifyHeader = (payload, saltKey, saltIndex) => {
  const base64Payload = Buffer.from(JSON.stringify(payload)).toString("base64");
  const hash = CryptoJS.SHA256(
    base64Payload + "/pg/v1/pay" + saltKey
  ).toString();
  return `${hash}###${saltIndex}`;
};

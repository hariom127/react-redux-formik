import  config from "../config/index";
import cryptLib from "@skavinvarnan/cryptlib";

export default (method, path, formData = undefined) => {
  var currentTimeStamp = Math.floor(Date.now() / 1000); // In seconds
  const accessToken = cryptLib.encryptPlainTextWithRandomIV(currentTimeStamp, config.apiAccessKey);
  const authToken = localStorage.getItem("token");
  const login_user_id = localStorage.getItem("user");

  const token = localStorage.getItem("device_token");
  const apiUrl = config.API_BASE_URL + config.basename +path ;
  var timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return fetch(apiUrl, {
    method: method,
    body: formData,
    headers: {
      "X-Access-Token": accessToken ? accessToken : "",
      Authorization: authToken ? "Bearer " + authToken : "",
      device_token: token ? token : "",
      device_type: "web",
      timezone: timeZone,
      language: "en",
    // login_user_id: login_user_id._id ? login_user_id._id : "",
    },
    responseType: "arraybuffer",
  })
    .then((apiRes) => {
      // on login session expire error
      if ([401, 408].includes(apiRes.status)) {
        localStorage.removeItem("user_id");
        localStorage.removeItem("auth_token");
        localStorage.removeItem("userData");

        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.reload(true);
      }

      return apiRes;
    })
    .catch((err) => {
      console.log(err.toString());
    });
};

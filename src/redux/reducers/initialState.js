const initialState = {
  token: null,
  user: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country_code: "",
    profile: "",
    store_location: "",
    latitude: "",
    longitude: "",
    device_token: "",
    device_type: "",
  },
  authenticate: false,
  authenticating: false,
  loading: false,
  error: null,
  message: "",
};
export default initialState;

export default {
  changeCityName(state, cityName) {
    state.city = cityName;
    localStorage.city = cityName;
  }
};

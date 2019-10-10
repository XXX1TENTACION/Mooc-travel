let defaultCity = "北京";
if (localStorage.city) {
  defaultCity = localStorage.city;
}
export default {
  city: defaultCity
};

//* crypto-js
import CryptoJS from "crypto-js";
window._cryptojs = CryptoJS;

//* lodash
import lodash from "lodash";
window._lodash = lodash;

//* dayjs
import dayjs from "dayjs";
import dayjs_utc from "dayjs/plugin/utc";
import dayjs_timezone from "dayjs/plugin/timezone";
window._dayjs = dayjs;
window._dayjs.plugins = {};
window._dayjs.plugins.utc = dayjs_utc;
window._dayjs.plugins.timezone = dayjs_timezone;

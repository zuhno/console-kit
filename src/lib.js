// INFO: crypto-js
import CryptoJS from "crypto-js";
window._cryptojs = CryptoJS;

// INFO: bcryptjs
import bcryptjs from "bcryptjs";
window._bcryptjs = bcryptjs;

// INFO: lodash
import lodash from "lodash";
window._lodash = lodash;

// INFO: dayjs
import dayjs from "dayjs";
import dayjs_utc from "dayjs/plugin/utc";
import dayjs_timezone from "dayjs/plugin/timezone";
window._dayjs = dayjs;
window._dayjs.plugins = {};
window._dayjs.plugins.utc = dayjs_utc;
window._dayjs.plugins.timezone = dayjs_timezone;

// INFO: date-fns
import * as date_fns from "date-fns";
import * as date_fns_fp from "date-fns/fp";
import * as date_fns_tz from "@date-fns/tz";
import * as date_fns_locale from "date-fns/locale";
window._date_fns = { ...date_fns };
window._date_fns.plugins = {};
window._date_fns.plugins.fp = date_fns_fp;
window._date_fns.plugins.tz = date_fns_tz;
window._date_fns.plugins.locale = date_fns_locale;

/* eslint-disable */
import { DateTime } from './luxon.js';

const currentDate = document.querySelector('#date');
export const setDateTime = () => {
  // generate date and time
  const newDateTime = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  currentDate.innerHTML = newDateTime;
};

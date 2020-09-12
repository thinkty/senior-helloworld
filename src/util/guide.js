/**
 * Module with helper functions related to guides
 */

import axios from 'axios';
import { searchUrl } from './config.json';

/**
 * Function to request and get the guide from the server
 *
 * @param {number} guideNum Guide number
 */
export function getGuide(guideNum) {
  return axios.get(searchUrl, { data: { guideNum } });
}

/**
 * Function to send the query to the server and return the results
 *
 * @param {string} query Query created by the user
 */
export function searchGuides(query) {
  return axios.post(searchUrl, { query });
}

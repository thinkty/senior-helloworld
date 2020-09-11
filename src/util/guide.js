/**
 * Module with helper functions related to guides
 */

import axios from 'axios';

const serverUrl = 'http://localhost:8080/api/search';

/**
 * Function to request and get the guide from the server
 *
 * @param {number} guideNum Guide number
 */
export function getGuide(guideNum) {}

/**
 * Function to send the query to the server and return the results
 *
 * @param {string} query Query created by the user
 */
export function searchGuides(query) {
  return axios({
    method: 'GET',
    url: serverUrl,
    data: { query },
  });
}

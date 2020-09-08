/**
 * Module with helper functions related to guides
 */

import Axios from 'axios';

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
export async function searchGuides(query) {
  await Axios.get('http://www.example.com');
}

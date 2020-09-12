/**
 * Module with helper functions related to feedbacks
 */

import axios from 'axios';
import { feedbackUrl } from './config.json';

/**
 * Function to send feedback to the target url
 *
 * @param {string} feedback
 */
export function send(feedback) {
  return axios.post(feedbackUrl, { feedback });
}

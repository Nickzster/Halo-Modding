// import * as toxicity from '@tensorflow-models/toxicity';
import config from '../../../config/config.json';
import fetch from 'node-fetch';
import { generateError } from '../../../util/generateError';
import { Error } from '../../../types/Error';
import debug from '../../../util/debug';

// Load the model. Users optionally pass in a threshold and an array of
// labels to include.
const checkForToxicity = async (strings: Array<string>): Promise<Boolean> => {
  try {
    for (let i = 0; i < strings.length; i++) {
      await fetch(
        `https://commentanalyzer.googleapis.com/v1alpha1/comments:analyze?key=${config.toxicity}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            comment: {
              text: strings[i]
            },
            languages: ['en'],
            requestedAttributes: {
              TOXICITY: {},
              SEVERE_TOXICITY: {},
              IDENTITY_ATTACK: {},
              INSULT: {},
              THREAT: {},
              SEXUALLY_EXPLICIT: {},
              FLIRTATION: {}
            }
          })
        }
      )
        .then(res => res.json())
        .then(result => {
          let scores = result.attributeScores;
          for (let key in scores) {
            if (scores[key].summaryScore.value > 0.75)
              throw 'Toxicity Detected!';
          }
        });
    }
    debug('No Toxicity Detected!');
    return false;
  } catch (err) {
    return true;
  }
};

export { checkForToxicity };

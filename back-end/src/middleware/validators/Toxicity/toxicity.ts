// import * as toxicity from '@tensorflow-models/toxicity';

// The minimum prediction confidence.
const threshold = 0.9;
const labels = [];

// Load the model. Users optionally pass in a threshold and an array of
// labels to include.
const checkForToxicity = async (strings: Array<string>): Promise<Boolean> => {
  try {
    throw 'TSFLOW Is not working!';
    // let model = await toxicity.load(threshold, labels);
    // let predictions = await model.classify(strings);
    // console.log(predictions);
    return false;
  } catch (err) {
    console.log('TOXICITY ERR:', err, '\n#########');
    return false;
  }
};

export { checkForToxicity };

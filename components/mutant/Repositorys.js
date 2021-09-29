const { Datastore } = require('@google-cloud/datastore');
const _u = require('uuid/v1');
const config = require('../../config');

const datastore = new Datastore({
  projectId: config.projectId,
  keyFilename: config.keyFilename,
});

exports.insertHuman = async (dna, isMutant) => datastore.save({
  key: datastore.key('Human'),
  data: {
    uid: await _u(),
    dna,
    isMutant,
  },
});

exports.get = async () => {
  const query = datastore.createQuery(['Human']);
  const data = (await datastore.runQuery(query))[0];
  return data;
};

exports.stats = async () => {
  const query = datastore.createQuery('Human');
  const humans = (await datastore.runQuery(query))[0];
  const data = {
    count_mutant_dna: 0,
    count_human_dna: 0,
    ratio: 0,
  };

  for (const human of humans) {
    if (human.isMutant) {
      data.count_mutant_dna++;
    } else {
      data.count_human_dna++;
    }
  }
  data.ratio = parseFloat((data.count_mutant_dna / data.count_human_dna).toFixed(2));

  return data;
};

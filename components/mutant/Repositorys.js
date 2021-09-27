const config = require('./../../config')
const {Datastore} = require('@google-cloud/datastore');

const datastore = new Datastore({
    projectId: config.projectId,
    keyFilename: config.keyFilename
  })

exports.insertHuman = async (dna, isMutant) => {
    return await datastore.save({
        key: datastore.key('Human'),
        data: {
            dna: dna,
            isMutant: isMutant
        }
    })
}

exports.stats = async () => {    
    const query = await datastore.createQuery('Human');
    const humans = (await datastore.runQuery(query))[0]
    let data = {
        count_mutant_dna: 0,
        count_human_dna: 0,
        ratio: 0
    };

    for (const human of humans) {
        (human.isMutant) ? data.count_mutant_dna++ : data.count_human_dna++;
    }
    data.ratio = parseFloat((data.count_mutant_dna / data.count_human_dna).toFixed(2));

    return data;
}

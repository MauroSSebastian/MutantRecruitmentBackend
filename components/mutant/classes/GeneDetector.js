class GeneDetector {

    constructor(iterators){        
        this.iterators = iterators;        
        this.MUTANT_GENE_SEQUENCE = 4;
        this.AMOUNT_MUTANT_GENE = 2;
        this.mutantGenes = 0;
    }

    isMutant(dna){
        for (const iterator of this.iterators) {     
            iterator.setElements(dna);
            while(iterator.hasNext()){
                const nitrogenBase = iterator.next();
                if(nitrogenBase){  
                    if(iterator.getInitialComparer() == nitrogenBase){
                        iterator.incrementCounter();
                    } else {
                        iterator.setInitialComparer(nitrogenBase);
                        iterator.restartCounter();
                    }
                    if(iterator.getCounter() >= this.MUTANT_GENE_SEQUENCE){
                        iterator.restartCounter();
                        iterator.setInitialComparer(nitrogenBase);
                        this.mutantGenes++;
                    }
                }
                if(this.mutantGenes >= this.AMOUNT_MUTANT_GENE){
                    return true;
                }
                iterator.displace();
            }
        }
        return false;
    }  
}

module.exports = GeneDetector;
function computeNotes(){
    var notes = [10, 13, 13, 12, 15, 12, 11, 16, 14];

    //count array values
    var nbNotes = notes.length;
    console.log(nbNotes);
    
    //sum array values
    var sum = 0;
    for(i = 0; i < nbNotes; i++){
        sum += notes[i];
    }
    console.log(sum)

    //divide values sum by the number of values
    var result = sum/nbNotes;
    console.log(result);
}
computeNotes();
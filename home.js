const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

document.write(result);

const result2 = words.forEach(function(word){
    return word;
});

document.write(" " + result2);

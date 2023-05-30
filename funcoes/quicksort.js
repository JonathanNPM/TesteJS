module.exports = quicksort;

function quicksort(arr, esq, dir) {

    let i, j, pivo, aux;
    i = esq;
    j = dir - 1;
    pivo = arr[(esq + dir) >> 1];
	
    while(i <= j) {
        while(arr[i] < pivo) {
            i++;
        }
        while(arr[j] > pivo) {
            j--;
        }
        if(i <= j) {
            aux = arr[i];
            arr[i] = arr[j];
            arr[j] = aux;
            i++;
            j--;
        }
    }
	
    if(esq < j) {
        quicksort(arr, esq, j + 1);
    }
    if(i < dir) {
        quicksort(arr, i, dir);
    }

    return arr;
}
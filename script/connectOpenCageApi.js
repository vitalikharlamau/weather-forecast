export function connectOpenCageApi() {
    const openCageApiKey = '718f25bccc3c43078fa407f23ca26cdb';
    const location = 'Salihorsk';

    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${location}&key=${openCageApiKey}&language=en&pretty=1&no_annotations=1`)
        .then((response) => {
            if(response.ok) {
                return response.json();
            }
        })
        .then((data) => {
            console.log(data);
        });
}
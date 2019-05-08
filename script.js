window.onload = function () {
    /*use display mtaches from javascript lessons  */
    const allColours = [];

    fetch("./data.JSON")
        .then(res => res.json())
        .then(colors => allColours.push(...colors));


    function findMatches(wordToMatch, allColours) {
        return allColours.filter(index => {
            // here we need to figure out if the city or state matches what was searched
            const regex = new RegExp(wordToMatch, 'gi');
            return index.color.match(regex)
        });
    }



    function displayMatches() {
        const matchArray = findMatches(this.value, allColours);
        const html = matchArray.slice(0, 15).map(match => {
            const regex = new RegExp(this.value, 'gi');
            const name = match.color.replace(regex, `<span class="hl">${this.value}</span>`);
            const styles = match.hex;



            return `
            <div class = "flex">
      <li>
        <span class="name" style= "color:${styles}">${name}: ${styles},</span>



      </li>
      <span class="box" style= "background-color:${styles}"> </span>
      </div>
    `;
        }).join('');
        suggestions.innerHTML = html;

    }

    // function clear(){
    //     if (searchInput == ''){
    //         console.log('clear');
    //     suggestions.innerHTML = 'blur';
    // }
    // }

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);

    searchInput.addEventListener('blur', function (e) {
        console.log('clear');
        if (searchInput.value == '') {
            suggestions.innerHTML = '';
        }

    });


    /* do an on blur function */

}
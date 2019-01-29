window.onload = function() {
    /*use display mtaches from javascript lessons  */

    //
    const cities = [];

    fetch("./data.JSON")
        .then(res => res.json())
        .then(colors => cities.push(...colors));



    function findMatches(wordToMatch, cities) {
        return cities.filter(place => {
            // here we need to figure out if the city or state matches what was searched
            const regex = new RegExp(wordToMatch, 'gi');
            return place.color.match(regex)
        });
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function displayMatches() {
        const matchArray = findMatches(this.value, cities);
        const html = matchArray.map(place => {
            const regex = new RegExp(this.value, 'gi');
            const cityName = place.color.replace(regex, `<span class="hl">${this.value}</span>`);
            const styles = place.hex;

            console.log(styles);

            return `
      <li>
        <span class="name" style= "color:${styles}">${cityName}: ${styles},</span>

      </li>
    `;
        }).join('');
        suggestions.innerHTML = html;
    }

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);

}

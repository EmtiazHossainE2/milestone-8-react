import React, { useEffect, useState } from 'react';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data.slice(0, 50)))
    }, [])
    return (
        <div>
            <div className="container">
                <div className='info'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequatur soluta corrupti praesentium iusto possimus quaerat doloribus veniam deleniti dicta voluptate et ipsa ducimus ea aut fugit nulla pariatur voluptatem amet perspiciatis. Quos qui rerum iusedita aliquam obcaecati sed ratione corporis non, recusandae nesciunt minus, quasi autem earum! Incidunt blanditiis autem maiores, iure et totam asperiores eaque neque repudiandae consequatur iste quia distinctio perspiciatis voluptate error aut repellat ad corporis dignissimos earum exercitationem. Eum cumque aperiam, repellat, qui sed incidunt vitae sint laudantium nobis soluta ullam officiis ea voluptates voluptatem ipsum culpa? Inventore odit similique harum soluta, quidem illum quisquam quas veritatis. Culpa, esse quasi sit molestiae similique illum? Quo illo exercitationem a quas nisi quis ullam dolores! Aspernatur, deleniti odio voluptatem officia aliquam maiores. Cumque assumenda magni dolore natus repellat placeat laboriosam dicta maiores molestiae esse sapiente quisquam nihil beatae, vel asperiores voluptas ipsam quia modi. Obcaecati facere eligendi voluptates unde recusandae quae dolor sed eius nulla eveniet. Quos itaque harum impedit aliquid, eligendi dolor ducimus rem voluptas ipsa repudiandae? Architecto consectetur maiores doloribus ipsa itaque dignissimos numquam, necessitatibus velit accusamus dolor laudantium voluptates minima sint! Aspernatur commodi iure eius, qui dignissimos ea iusto numquam ut, consectetur repellat, corrupti consequuntur eligendi neque laboriosam molestiae sit! Culpa veniam laborum natus quas rem omnis dolorum harum pariatur ipsam earum? Nihil alias minima doloremque blanditiis vero obcaecati modi expedita, voluptate soluta nisi est mollitia ab.</p>

                    <button>Explore More</button>
                </div>
                <h2>Travel  {countries.length} Country All Over The World</h2>

                <div className='countries'>
                    {
                        countries.map(country =>
                            <Country Name={country.name.common} Population={country.population} Flag={country.flags.png}></Country>)
                    }
                </div>
            </div>
        </div>
    );
};
const Country = (props) => {
    return (
        <div className='country'>
            <h3>Name : {props.Name}</h3>
            <p>Total Population : {props.Population}</p>
            <img src={props.Flag} alt="" />
        </div>
    )
}

export default Countries;
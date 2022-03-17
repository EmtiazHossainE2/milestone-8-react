import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data.slice(0, 100)))
    }, [])
    return (
        <div>
            <div className="container">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut distinctio pariatur, voluptas numquam doloribus, unde quos reiciendis illum odit, voluptatibus minus alias quod perspiciatis fuga. Voluptates repudiandae sunt optio fuga dolorum ipsam, esse explicabo minima deserunt reprehenderit possimus quisquam temporibus consequuntur, repellendus, modi ipsum doloribus asperiores culpa assumenda consequatur atque ab voluptate. Dolorum corrupti, repudiandae optio cumque ad quae dolores iste veniam. Dicta molestiae repellendus obcaecati commodi ea, animi excepturi aspernatur praesentium omnis distinctio, nam rerum, inventore dolore in facilis doloremque! Autem consectetur, expedita numquam esse enim delectus molestiae recusandae dolores inventore quae tempora, et sed ad necessitatibus, doloribus eos amet porro quis accusantium cumque. Optio nihil consequuntur ducimus corrupti exercitationem sapiente possimus tempore nostrum excepturi eos, repellendus illo sint voluptatum, fuga necessitatibus ipsum? Modi ipsa velit quas consequatur tempora id quibusdam cupiditate doloribus odio, minus perspiciatis sequi ipsam hic animi minima enim quis in numquam fugit quaerat. Amet, neque, quis expedita optio dolor saepe ipsa eligendi nostrum assumenda quisquam doloribus voluptate ipsum repellendus sequi labore sapiente, non architecto pariatur doloremque molestiae reiciendis omnis commodi. Ullamtetur, exercitationem nihil doloremque beatae perferendis veritatis! Dicta voluptates nam veniam ad quisquam! Voluptatibus quaerat necessitatibus ducimus quis ipsam aperiam tenetur, ullam in facilis asperiores impedit autem debitis labore itaque provident harum distinctio fugiat, deserunt doloribus mollitia saepe dignissimos est. Dolor praesentium impedit voluptatum mollitia. Laudantium beatae impedit quisquam dicta nisi debitis molestias, hic minus ab illum ad quis consequuntur sint nihil recusandae perspiciatis
                    <button>Explore More</button>
                </p>

                <h2>Travel  {countries.length} Country WithOut Money</h2>
                <div className='countries'>
                    {
                        countries.map(country => <Country
                            country={country}>

                        </Country>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Countries;
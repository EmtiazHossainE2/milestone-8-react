import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut distinctio pariatur, voluptas numquam doloribus, unde quos reiciendis illum odit, voluptatibus minus alias quod perspiciatis fuga. Voluptates repudiandae sunt optio fuga dolorum ipsam, esse explicabo minima deserunt reprehenderit possimus quisquam temporibus consequuntur, repellendus, modi ipsum doloribus asperiores culpa assumenda consequatur atque ab voluptate. Dolorum corrupti, repudiandae optio cumque ad quae dolores iste veniam. Dicta molestiae repellendus obcaecati commodi ea, animi excepturi aspernatur praesentium omnis distinctio, nam rerum, inventore dolore in facilis doloremque! Autem consectetur, expedita numquam esse enim delectus molestiae recusandae dolores inventore quae tempora, et sed ad necessitatibus, doloribus eos amet porro quis accusantium cumque. Optio nihil consequuntur ducimus corrupti exercitationem sapiente possimus tempore nostrum excepturi eos, repellendus illo sint voluptatum, fuga necessitatibus ipsum? Modi ipsa velit quas consequatur tempora id quibusdam cupiditate doloribus odio, minus perspiciatis sequi ipsam hic animi minima enim quis in numquam fugit quaerat. Amet, neque, quis expedita optio dolor saepe ipsa eligendi nostrum assumenda quisquam doloribus voluptate ipsum repellendus sequi labore sapiente, non architecto pariatur doloremque molestiae reiciendis omnis commodi. Ullam at nisi ad quaerat alias praesentium cumque doloremque! Asperiores facere harum, obcaecati tempora corrupti dolorum exercitationem cumque earum excepturi nostrum ipsa labore animi quis deserunt eveniet? Aperiam exercitationem incidunt laboriosam laudantium repudiandae ex placeat autem! Alias error facilis, rem delectus eaque ad similique assumenda fugit ducimus autem eveniet possimus odit iusto amet quae a dolorum odio iure excepturi maxime nisi. Accusantium aspernatur iure laborum hic quia nobis suscipit soluta animi vel nisi ad velit eius at, aliquid voluptate praesentium ullam consequuntur. Fuga velit iure vel mollitia ex provident nemo delectus facilis magnam voluptatum maxime molestias ea cumque asperiores rerum, quas quaerat nesciunt alias veritatis qui porro? Adipisci porro, officiis facere accusantium sint atque dolores quasi iure veritatis perspiciatis totam eaque aperiam fuga sit aut hic vel quod commodi doloribus deleniti ullam. Qui sed fugit asperiores commodi ab porro aliquam minima dignissimos debitis, quibusdam nostrum possimus quae ipsum soluta cupiditate voluptas repellat praesentium molestiae distinctio quasi architecto error, quam atque! Quas molestiae soluta consequuntur, ducimus quidem, laudantium sit perferendis fuga, odio exercitationem nisi pariatur libero fugit! Corporis repellendus dolor optio impedit animi? Harum, eum dolorem molestiae aspernatur libero in unde ad illo vitae distinctio debitis facere nam quia optio? Aperiam explicabo perspiciatis dolorem ut, laudantium doloribus eaque amet in sunt. Fugit quaerat nemo, adipisci suscipit odit voluptatum assumenda veniam! Similique quos doloremque in iste voluptatum rem enim sit! Impedit vitae accusamus provident voluptatum, sint quisquam ad facilis quibusdam illo tempore cumque incidunt magnam eum, explicabo culpa consectetur, exercitationem nihil doloremque beatae perferendis veritatis! Dicta voluptates nam veniam ad quisquam! Voluptatibus quaerat necessitatibus ducimus quis ipsam aperiam tenetur, ullam in facilis asperiores impedit autem debitis labore itaque provident harum distinctio fugiat, deserunt doloribus mollitia saepe dignissimos est. Dolor praesentium impedit voluptatum mollitia. Laudantium beatae impedit quisquam dicta nisi debitis molestias, hic minus ab illum ad quis consequuntur sint nihil recusandae perspiciatis quod fuga velit incidunt. Voluptatum dicta nam vero repellendus, mollitia voluptates atque vel quidem enim.</p>
                <h2>Travel  {countries.length} Country All Over The World</h2>
                <div className='countries'>
                    {
                        countries.map(country => <Country
                            Name={country.name.common}
                            Population={country.population}
                            Flag={country.flags.png}>

                        </Country>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Countries;
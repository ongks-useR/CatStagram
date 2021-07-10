import { useParams } from 'react-router';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Profile() {

    const { id } = useParams()
    const [profiles, setProfiles] = useState([]);

    const cat_by_breed = () => {

        axios
            .get(`https://api.thecatapi.com/v1/images/search?breed_id=${id}&limit=5`)
            .then((re) => {
                // handle success >> update 'reply' in useState
                setProfiles(re.data)
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    useEffect(cat_by_breed, [id])

    return (
        <div>
            <h2>{id} Profile</h2>
            {
                profiles.map(
                    row => (
                        <div key={row.id}>
                            <img src={row.url} alt={'cat breed is ' + id} style={{ width: "40%", margin: "15px" }} />
                        </div>
                    )
                )
            }
        </div>
    )
}

export default Profile;
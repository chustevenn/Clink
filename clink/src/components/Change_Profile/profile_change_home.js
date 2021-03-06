import React from 'react';
import {Link} from 'react-router-dom';

function ChangeProfilePage() {
    sessionStorage.setItem("lastValidPage", "/change_profile");

    return (
        <div className="App">
            <h2>Choose a section of your profile to change:</h2>

            <Link to='/change_profile/sports'>
                <button className="link-button2">Start from the beginning</button>
            </Link>

            <table id="profile-link-table">
                <tbody>
                <tr className='table-row'>
                    <td className='table-column'>
                        <Link to='/change_profile/sports'>
                            <button className='link-button3'>Sports</button>
                        </Link>
                    </td>
                    <td className='table-column'>
                        <Link to='/change_profile/movies'>
                            <button className='link-button3'>TV/Movies</button>
                        </Link>
                    </td>
                </tr>
                <tr className='table-row'>
                    <td className='table-column'>
                        <Link to='/change_profile/outdoor_activities'>
                            <button className='link-button3'>Outdoor Activities</button>
                        </Link>
                    </td>
                    <td className='table-column'>
                        <Link to='/change_profile/indoor_activities'>
                            <button className='link-button3'>Indoor Activities</button>
                        </Link>
                    </td>
                </tr>
                <tr className='table-row'>
                    <td className='table-column'>
                        <Link to='/change_profile/cuisines'>
                            <button className='link-button3'>Types of Food</button>
                        </Link>
                    </td>
                    <td className='table-column'>
                        <Link to='/change_profile/arts_and_media'>
                            <button className='link-button3'>Arts, Theater, and Media</button>
                        </Link>
                    </td>
                </tr>
                <tr className='table-row'>
                    <td className='table-column'>
                        <Link to='/change_profile/personality'>
                            <button className='link-button3'>Personality</button>
                        </Link>
                    </td>
                    <td className='table-column'>
                        <Link to='/change_profile/personal_info'>
                            <button className='link-button3'>Personal Information</button>
                        </Link>
                    </td>
                </tr>
                </tbody>
            </table>

            <p></p>
            <Link to='/'>
                <button className="link-button2">Back to Home</button>
            </Link>
        </div>
    );
}

export default ChangeProfilePage;
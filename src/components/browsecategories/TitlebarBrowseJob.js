import React from 'react';

const TitlebarBrowseJob = () => {
    return (
        <div
            id="titlebar"
            className="photo-bg"
            >
            <div className="container">
                <div className="ten columns">
                    <h2>Усі категорії</h2>
                </div>

                <div className="six columns">
                    <a href="AddJob" className="button">Розмістити вакансію</a>
                </div>

            </div>
        </div>
    )
}
export default TitlebarBrowseJob;
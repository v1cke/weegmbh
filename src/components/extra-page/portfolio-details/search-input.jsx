import React from 'react';

const SearchInput = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div className="sidebar__widget mb-40">
            <div className="sidebar-title mb-25">
                <h4>Angebot anfordern?</h4>
            </div>
            <div className="widget-form">
                <form onSubmit={handleSubmit} action="#">
                    <div className="single-input-field mb-30">
                        <input type="text" placeholder="Name eintragen" />
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="single-input-field mb-30">
                        <input type="text" placeholder="Email eintragen" />
                        <i className="fas fa-envelope"></i>
                    </div>
                    <div className="single-input-field textarea mb-30">
                        <textarea name="message" id="message3" placeholder="Ihre Nachricht"></textarea>
                        <i className="fas fa-edit"></i>
                    </div>
                    <button className="fill-btn clip-btn" type="submit">Anfrage absenden</button>
                </form>
            </div>
        </div>
    );
};

export default SearchInput;
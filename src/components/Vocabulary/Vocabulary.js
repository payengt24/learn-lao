import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
class Vocabulary extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Nav />
                <h2>Vocabulary</h2>

                <div class="mdc-card">
                    <div class="mdc-card__media mdc-card__media--square">
                        <div class="mdc-card__media-content">Title</div>
                    </div>
                    <div class="mdc-card__actions">
                        <div class="mdc-card__action-buttons">
                            <i class="material-icons">favorite</i>
                            <i class="material-icons">favorite_border</i>
                            <button class="mdc-button mdc-card__action mdc-card__action--button">Favorite</button>
                        </div>
                        <div class="mdc-card__action-icons">
                            {/* <i class="material-icons mdc-card__action mdc-card__action--icon" tabindex="0" role="button" title="Share">share</i> */}
                        </div>
                    </div>
                </div>

            </div>
        );

    }
};

export default Vocabulary;
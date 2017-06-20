import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import picture from '../../styles/images/job-list-logo-01.png';

import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import * as consts from '../../constants/const';

class Widgets extends React.Component {
    render() {
        return (
            <div className="five columns">
                <div className="widget">
                    <h4>Сортувати по </h4>
                    <SelectInput
                        options={consts.SORTING}
                        className='chosen-select-no-single'
                        data-placeholder="Choose Category"
                    />

                </div>
                <div className="widget">
                    <TextInput
                     type="text"
                     placeholder="Місто"
                    />
                   
                    <button className="button">Пошук</button>
                </div>
                <div className="widget">
                    <h4>Тип роботи</h4>

                    <ul className="checkboxes">
                        <li>
                            <input id="check-1" type="checkbox" name="check" value="check-1" checked />
                            <label for="check-1">будь-який</label>
                        </li>
                        <li>
                            <input id="check-2" type="checkbox" name="check" value="check-2" />
                            <label for="check-2">Повна занятість <span></span></label>
                        </li>
                        <li>
                            <input id="check-3" type="checkbox" name="check" value="check-3" />
                            <label for="check-3">Часткова занятість <span></span></label>
                        </li>
                        <li>
                            <input id="check-4" type="checkbox" name="check" value="check-4" />
                            <label for="check-4">Інтернатура <span></span></label>
                        </li>
                        <li>
                            <input id="check-5" type="checkbox" name="check" value="check-5" />
                            <label for="check-5">Фріланс <span></span></label>
                        </li>
                    </ul>

                </div>
                <div className="widget">
                    <h4>Погодинна оплата</h4>

                    <ul className="checkboxes">
                        <li>
                            <input id="check-6" type="checkbox" name="check" value="check-6" checked />
                            <label for="check-6">Будь-яка</label>
                        </li>
                        <li>
                            <input id="check-7" type="checkbox" name="check" value="check-7" />
                            <label for="check-7">0грн - 25грн <span></span></label>
                        </li>
                        <li>
                            <input id="check-8" type="checkbox" name="check" value="check-8" />
                            <label for="check-8">25грн - 50грн <span></span></label>
                        </li>
                        <li>
                            <input id="check-9" type="checkbox" name="check" value="check-9" />
                            <label for="check-9">50грн - 100грн <span></span></label>
                        </li>
                        <li>
                            <input id="check-10" type="checkbox" name="check" value="check-10" />
                            <label for="check-10">100грн - 200грн <span></span></label>
                        </li>

                    </ul>

                </div>
            </div>
        )
    }
}
export default Widgets;
import moment from 'moment';

export const parseDate = (v) => {
    return moment(v, 'DD-MM-YYYY');
}

export const formatDate = (m) => {
    return m.format('ddd, MMM Do YYYY'); 
    // "Sunday, February 14th 2010, 3:25:50 pm"
}
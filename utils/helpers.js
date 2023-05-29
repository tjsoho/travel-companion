module.exports = {
  // replace - with space in category
  format_category: (category) => {
    return category.replace(/-/g, ' ');
  },
  select_location: (location) => {

    let options = '';

    if (location === 'Sydney') {
      options += '<option selected>Sydney</option>';
    } else {
      options += '<option>Sydney</option>';
    }

    if (location === 'Brisbane') {
      options += '<option selected>Brisbane</option>';
    } else {
      options += '<option>Brisbane</option>';
    }

    if (location === 'Melbourne') {
      options += '<option selected>Melbourne</option>';
    } else {
      options += '<option>Melbourne</option>';
    }

    return options;
  },
  select_category: (category) => {

    var options = [
      '<option value="all">All</option>',
      '<option value="Site-Seeing"' + (category === 'Site-Seeing' ? ' selected' : '') + '>Site Seeing</option>',
      '<option value="Escape-the-City"' + (category === 'Escape-the-City' ? ' selected' : '') + '>Escape the City</option>',
      '<option value="Physical-Activity"' + (category === 'Physical-Activity' ? ' selected' : '') + '>Physical Activity</option>',
      '<option value="Food-and-Drink"' + (category === 'Food-and-Drink' ? ' selected' : '') + '>Food and Drink</option>',
      '<option value="Sport-and-Culture"' + (category === 'Sport-and-Culture' ? ' selected' : '') + '>Sport and Culture</option>'
    ];
    
    var selectHTML =  options.join('');
    return selectHTML;
  }


};


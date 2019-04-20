const randomCountry = function() {
  const countries = [
    'AFG', 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BES', 'BIH', 'BWA', 'BVT', 'BRA', 'IOT', 'BRN', 'BGR', 'BFA', 'BDI', 'CPV', 'KHM', 'CMR', 'CAN', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COD', 'COG', 'COK', 'CRI', 'CIV', 'HRV', 'CUB', 'CUW', 'CYP', 'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'SWZ', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'GUF', 'PYF', 'ATF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLP', 'GUM', 'GTM', 'GGY', 'GIN', 'GNB', 'GUY', 'HTI', 'HMD', 'VAT', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'IMN', 'ISR', 'ITA', 'JAM', 'JPN', 'JEY', 'JOR', 'KAZ', 'KEN', 'KIR', 'PRK', 'KOR', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MAC', 'MKD', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'REU', 'ROU', 'RUS', 'RWA', 'BLM', 'SHN', 'KNA', 'LCA', 'MAF', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SXM', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SGS', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR', 'SJM', 'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA', 'TLS', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'UGA', 'UKR', 'ARE', 'GBR', 'UMI', 'USA', 'URY', 'UZB', 'VUT', 'VEN', 'VNM', 'VGB', 'VIR', 'WLF', 'ESH', 'YEM', 'ZMB', 'ZWE',
  ]

  return countries[Math.floor(Math.random()*countries.length)]
}

const countryName = function(code) {
  const countries = {
    'AFG': "Afghanistan", 'ALA': "Aland Islands", 'ALB': "Albania", 'DZA': "Algeria", 'ASM': "American Samoa", 'AND': "Andorra", 'AGO': "Angola", 'AIA': "Anguilla", 'ATA': "Antarctica", 'ATG': "Antigua and Barbuda", 'ARG': "Argentina", 'ARM': "Armenia", 'ABW': "Aruba", 'AUS': "Australia", 'AUT': "Austria", 'AZE': "Azerbaijan", 'BHS': "Bahamas", 'BHR': "Bahrain", 'BGD': "Bangladesh", 'BRB': "Barbados", 'BLR': "Belarus", 'BEL': "Belgium", 'BLZ': "Belize", 'BEN': "Benin", 'BMU': "Bermuda", 'BTN': "Bhutan", 'BOL': "Bolivia (Plurinational State of)", 'BES': "Bonaire, Sint Eustatius and Saba", 'BIH': "Bosnia and Herzegovina", 'BWA': "Botswana", 'BVT': "Bouvet Island", 'BRA': "Brazil", 'IOT': "British Indian Ocean Territory", 'BRN': "Brunei Darussalam", 'BGR': "Bulgaria", 'BFA': "Burkina Faso", 'BDI': "Burundi", 'CPV': "Cabo Verde", 'KHM': "Cambodia", 'CMR': "Cameroon", 'CAN': "Canada", 'CYM': "Cayman Islands", 'CAF': "Central African Republic", 'TCD': "Chad", 'CHL': "Chile", 'CHN': "China", 'CXR': "Christmas Island", 'CCK': "Cocos (Keeling) Islands", 'COL': "Colombia", 'COM': "Comoros", 'COD': "Congo (the Democratic Republic of the)", 'COG': "Congo", 'COK': "Cook Islands", 'CRI': "Costa Rica", 'CIV': "C&ocirc;te d'Ivoire", 'HRV': "Croatia", 'CUB': "Cuba", 'CUW': "Cura&ccedil;ao", 'CYP': "Cyprus", 'CZE': "Czechia", 'DNK': "Denmark", 'DJI': "Djibouti", 'DMA': "Dominica", 'DOM': "Dominican Republic", 'ECU': "Ecuador", 'EGY': "Egypt", 'SLV': "El Salvador", 'GNQ': "Equatorial Guinea", 'ERI': "Eritrea", 'EST': "Estonia", 'SWZ': "Eswatini", 'ETH': "Ethiopia", 'FLK': "Falkland Islands [Malvinas]", 'FRO': "Faroe Islands", 'FJI': "Fiji", 'FIN': "Finland", 'FRA': "France", 'GUF': "French Guiana", 'PYF': "French Polynesia", 'ATF': "French Southern Territories", 'GAB': "Gabon", 'GMB': "Gambia", 'GEO': "Georgia", 'DEU': "Germany", 'GHA': "Ghana", 'GIB': "Gibraltar", 'GRC': "Greece", 'GRL': "Greenland", 'GRD': "Grenada", 'GLP': "Guadeloupe", 'GUM': "Guam", 'GTM': "Guatemala", 'GGY': "Guernsey", 'GIN': "Guinea", 'GNB': "Guinea-Bissau", 'GUY': "Guyana", 'HTI': "Haiti", 'HMD': "Heard Island and McDonald Islands", 'VAT': "Holy See", 'HND': "Honduras", 'HKG': "Hong Kong", 'HUN': "Hungary", 'ISL': "Iceland", 'IND': "India", 'IDN': "Indonesia", 'IRN': "Iran (Islamic Republic of)", 'IRQ': "Iraq", 'IRL': "Ireland", 'IMN': "Isle of Man", 'ISR': "Israel", 'ITA': "Italy", 'JAM': "Jamaica", 'JPN': "Japan", 'JEY': "Jersey", 'JOR': "Jordan", 'KAZ': "Kazakhstan", 'KEN': "Kenya", 'KIR': "Kiribati", 'PRK': "Korea (the Democratic People's Republic of)", 'KOR': "Korea (the Republic of)", 'KWT': "Kuwait", 'KGZ': "Kyrgyzstan", 'LAO': "Lao People's Democratic Republic", 'LVA': "Latvia", 'LBN': "Lebanon", 'LSO': "Lesotho", 'LBR': "Liberia", 'LBY': "Libya", 'LIE': "Liechtenstein", 'LTU': "Lithuania", 'LUX': "Luxembourg", 'MAC': "Macao", 'MKD': "Macedonia (the former Yugoslav Republic of)", 'MDG': "Madagascar", 'MWI': "Malawi", 'MYS': "Malaysia", 'MDV': "Maldives", 'MLI': "Mali", 'MLT': "Malta", 'MHL': "Marshall Islands", 'MTQ': "Martinique", 'MRT': "Mauritania", 'MUS': "Mauritius", 'MYT': "Mayotte", 'MEX': "Mexico", 'FSM': "Micronesia (Federated States of)", 'MDA': "Moldova (the Republic of)", 'MCO': "Monaco", 'MNG': "Mongolia", 'MNE': "Montenegro", 'MSR': "Montserrat", 'MAR': "Morocco", 'MOZ': "Mozambique", 'MMR': "Myanmar", 'NAM': "Namibia", 'NRU': "Nauru", 'NPL': "Nepal", 'NLD': "Netherlands", 'NCL': "New Caledonia", 'NZL': "New Zealand", 'NIC': "Nicaragua", 'NER': "Niger", 'NGA': "Nigeria", 'NIU': "Niue", 'NFK': "Norfolk Island", 'MNP': "Northern Mariana Islands", 'NOR': "Norway", 'OMN': "Oman", 'PAK': "Pakistan", 'PLW': "Palau", 'PSE': "Palestine, State of", 'PAN': "Panama", 'PNG': "Papua New Guinea", 'PRY': "Paraguay", 'PER': "Peru", 'PHL': "Philippines", 'PCN': "Pitcairn", 'POL': "Poland", 'PRT': "Portugal", 'PRI': "Puerto Rico", 'QAT': "Qatar", 'REU': "R&eacute;union", 'ROU': "Romania", 'RUS': "Russian Federation", 'RWA': "Rwanda", 'BLM': "Saint Barth&eacute;lemy", 'SHN': "Saint Helena, Ascension and Tristan da Cunha", 'KNA': "Saint Kitts and Nevis", 'LCA': "Saint Lucia", 'MAF': "Saint Martin (French part)", 'SPM': "Saint Pierre and Miquelon", 'VCT': "Saint Vincent and the Grenadines", 'WSM': "Samoa", 'SMR': "San Marino", 'STP': "Sao Tome and Principe", 'SAU': "Saudi Arabia", 'SEN': "Senegal", 'SRB': "Serbia", 'SYC': "Seychelles", 'SLE': "Sierra Leone", 'SGP': "Singapore", 'SXM': "Sint Maarten (Dutch part)", 'SVK': "Slovakia", 'SVN': "Slovenia", 'SLB': "Solomon Islands", 'SOM': "Somalia", 'ZAF': "South Africa", 'SGS': "South Georgia and the South Sandwich Islands", 'SSD': "South Sudan", 'ESP': "Spain", 'LKA': "Sri Lanka", 'SDN': "Sudan", 'SUR': "Suriname", 'SJM': "Svalbard and Jan Mayen", 'SWE': "Sweden", 'CHE': "Switzerland", 'SYR': "Syrian Arab Republic", 'TWN': "Taiwan (Province of China)", 'TJK': "Tajikistan", 'TZA': "Tanzania, United Republic of", 'THA': "Thailand", 'TLS': "Timor-Leste", 'TGO': "Togo", 'TKL': "Tokelau", 'TON': "Tonga", 'TTO': "Trinidad and Tobago", 'TUN': "Tunisia", 'TUR': "Turkey", 'TKM': "Turkmenistan", 'TCA': "Turks and Caicos Islands", 'TUV': "Tuvalu", 'UGA': "Uganda", 'UKR': "Ukraine", 'ARE': "United Arab Emirates", 'GBR': "United Kingdom of Great Britain and Northern Ireland", 'UMI': "United States Minor Outlying Islands", 'USA': "United States of America", 'URY': "Uruguay", 'UZB': "Uzbekistan", 'VUT': "Vanuatu", 'VEN': "Venezuela (Bolivarian Republic of)", 'VNM': "Viet Nam", 'VGB': "Virgin Islands (British)", 'VIR': "Virgin Islands (U.S.)", 'WLF': "Wallis and Futuna", 'ESH': "Western Sahara", 'YEM': "Yemen", 'ZMB': "Zambia", 'ZWE': "Zimbabwe",
  }
  return countries[code]
}

const showCountry = function() {
  var update = {};
  update[current] = defaultFill;
  current = randomCountry()
  update[current] = showFill;

  document.getElementById('current').innerHTML = countryName(current)

  map.updateChoropleth(update);
}

const defaultFill = '#BCDDB4';
const showFill = '#ee2222';

var map = new Datamap({
  element: document.getElementById('container'),
  projection: 'mercator',
  fills: {
    defaultFill: defaultFill,
  },
});

var current = randomCountry();

showCountry()
window.setInterval(showCountry, 10000);

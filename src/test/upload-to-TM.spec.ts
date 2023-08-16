var request = require('request');
var fs = require('fs');
var options = {
  'method': 'POST',
  'url': 'https://test-management.browserstack.com/api/v1/import/results/xml/junit',
  'headers': {
    'API-TOKEN': '<insert token>'
  },
  formData: {
    'project_name': 'Test',
    'file_path': {
      'value': fs.createReadStream(__dirname + "/results.xml"),
      'options': {
        'filename': 'results.xml',
        'contentType': null
      }
    },
    'test_run_name': 'First Test Run',
    'user_email': '<email associated with BS Test Management account>'
  }
};

request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

const ghpages = require('gh-pages');

ghpages.publish('build', {
    branch: 'master',
    repo: 'https://github.com/hackatool/hackatool.github.io.git',
    message: 'Update Webapp'
  }, onFinished);


  function onFinished(data) {
    if (typeof data == 'undefined') {
        console.log('Finished without errors');
        return;
    }
      console.log('gh-pages error: \n\n', data);
  }
